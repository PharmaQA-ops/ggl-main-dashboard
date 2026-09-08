/* =========================================
   GGL MAIN PORTAL
   GOOGLE SHEETS CONFIGURATION
========================================= */

const API_URL = "https://script.google.com/macros/s/AKfycbxzZChVKexzWjqJETMQkbxSLHD4610E_YSFcXbKRc1_SHN0K9PUVzc67e5IRW3SeNgxvw/exec";

let GGL_LINKS = {};


/* =========================================
   LOAD LINKS FROM GOOGLE SHEETS
========================================= */

async function loadLinks() {

  try {

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Unable to connect to Google Apps Script");
    }

    const data = await response.json();

    GGL_LINKS = {};

    data.forEach(function(item) {

      if (!item.category || !item.name) {
        return;
      }

      if (!GGL_LINKS[item.category]) {

        GGL_LINKS[item.category] = {

          title: item.category,

          subtitle: "",

          links: []

        };

      }

      GGL_LINKS[item.category].links.push({

        name: item.name,

        description: item.description || "",

        url: item.url || "#",

        icon: item.icon || "fa-link"

      });

    });

    console.log("GGL Portal links loaded successfully.");

  } catch (error) {

    console.error("Error loading GGL Portal links:", error);

    showLoadError();

  }

}


/* =========================================
   LOAD ERROR MESSAGE
========================================= */

function showLoadError() {

  const results =
    document.getElementById("searchResults");

  if (results) {

    results.innerHTML = `

      <div class="search-result-empty">

        Unable to load portal links.

        <br><br>

        Please contact IT support.

      </div>

    `;

  }

}


/* =========================================
   OPEN CATEGORY PANEL
========================================= */

function openPanel(category) {

  const data = GGL_LINKS[category];

  if (!data) return;


  document.getElementById("modalTitle")
    .innerText = data.title;


  document.getElementById("modalSubtitle")
    .innerText =
      data.subtitle ||
      "GGL resources";


  let html =
    '<div class="resource-grid">';


  data.links.forEach(function(link) {

    html += `

      <a
        class="resource"
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <i class="fa-solid ${link.icon}"></i>

        <span>
          ${link.name}
        </span>

      </a>

    `;

  });


  html += "</div>";


  document.getElementById("modalContent")
    .innerHTML = html;


  document.getElementById("modal")
    .classList.add("show");

}


/* =========================================
   DIRECT LINK
========================================= */

function openLink(category) {

  const data = GGL_LINKS[category];

  if (!data || !data.links.length) {
    return;
  }


  const url =
    data.links[0].url;


  if (!url || url === "#") {

    openPanel(category);

    return;

  }


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

  const modal =
    document.getElementById("modal");

  if (modal) {

    modal.classList.remove("show");

  }

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

function closeModalOutside(event) {

  if (
    event.target.id === "modal"
  ) {

    closeModal();

  }

}


/* =========================================
   SEARCH PORTAL
========================================= */

function searchPortal() {

  const inputElement =
    document.getElementById("searchInput");

  const results =
    document.getElementById("searchResults");


  if (!inputElement || !results) {
    return;
  }


  const input =
    inputElement.value
      .toLowerCase()
      .trim();


  if (!input) {

    results.innerHTML = "";

    return;

  }


  let matches = [];


  Object.keys(GGL_LINKS)
    .forEach(function(category) {

      const data =
        GGL_LINKS[category];


      data.links.forEach(function(link) {

        const searchable = (

          category +
          " " +
          data.title +
          " " +
          data.subtitle +
          " " +
          link.name +
          " " +
          link.description

        ).toLowerCase();


        if (
          searchable.includes(input)
        ) {

          matches.push({

            category:
              category,

            name:
              link.name,

            description:
              link.description,

            icon:
              link.icon,

            url:
              link.url

          });

        }

      });

    });


  /* =====================================
     NO RESULTS
  ===================================== */

  if (!matches.length) {

    results.innerHTML = `

      <div class="search-result-empty">

        No matching resource found.

      </div>

    `;

    return;

  }


  /* =====================================
     DISPLAY RESULTS
  ===================================== */

  let html = "";


  matches.forEach(function(match) {

    html += `

      <a
        class="resource"
        href="${match.url}"
        target="_blank"
        rel="noopener noreferrer"
      >

        <i class="fa-solid ${match.icon}"></i>

        <div>

          <strong>
            ${match.name}
          </strong>

          <br>

          <small>
            ${match.category}
          </small>

        </div>

      </a>

    `;

  });


  results.innerHTML = `

    <div class="resource-grid">

      ${html}

    </div>

  `;

}


/* =========================================
   SET CURRENT DATE
========================================= */

function setDate() {

  const date =
    new Date();


  const dateElement =
    document.getElementById(
      "currentDate"
    );


  if (!dateElement) {
    return;
  }


  dateElement.innerText =
    date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric"
      }
    );

}


/* =========================================
   DARK MODE
========================================= */

function toggleTheme() {

  document.body
    .classList
    .toggle("dark");

}


/* =========================================
   KEYBOARD SHORTCUTS
========================================= */

document.addEventListener(
  "keydown",
  function(event) {


    /* ==============================
       "/" → SEARCH
    ============================== */

    if (
      event.key === "/" &&
      document.activeElement.tagName !== "INPUT" &&
      document.activeElement.tagName !== "TEXTAREA"
    ) {

      event.preventDefault();


      const searchInput =
        document.getElementById(
          "searchInput"
        );


      if (searchInput) {

        searchInput.focus();

      }

    }


    /* ==============================
       ESC → CLOSE MODAL
    ============================== */

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =========================================
   AUTO REFRESH GOOGLE SHEET DATA
========================================= */

/*
   Reload the Google Sheet data every
   5 minutes.

   This means changes made in Google
   Sheets will automatically reach the
   dashboard without changing GitHub code.
*/

setInterval(
  loadLinks,
  5 * 60 * 1000
);


/* =========================================
   START PORTAL
========================================= */

async function startPortal() {

  setDate();

  await loadLinks();

}


/* =========================================
   START
========================================= */

startPortal();
