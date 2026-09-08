/* =========================================
   GGL MAIN PORTAL
   URL CONFIGURATION
========================================= */


const API_URL = "YOUR_APPS_SCRIPT_URL";  let GGL_LINKS = {};  async function loadLinks() {      const response = await fetch(API_URL);      const data = await response.json();      GGL_LINKS = {};      data.forEach(item => {          if (!GGL_LINKS[item.category]) {             GGL_LINKS[item.category] = [];         }          GGL_LINKS[item.category].push({             name: item.name,             description: item.description,             url: item.url         });      });  }

  ERP: {
    title: "ERP",
    subtitle: "Operations & business management",

    links: [

      {
        name: "GGL ERP",
        url: "#",
        icon: "fa-desktop"
      }

    ]
  },


  "G-SHEETS": {

    title: "G-SHEETS",
    subtitle: "Operational sheets & dashboards",

    links: [

      {
        name: "Sea Export",
        url: "#",
        icon: "fa-table"
      },

      {
        name: "Air Export",
        url: "#",
        icon: "fa-plane"
      },

      {
        name: "Pharma",
        url: "#",
        icon: "fa-prescription-bottle-medical"
      },

      {
        name: "Management Dashboard",
        url: "#",
        icon: "fa-chart-line"
      }

    ]
  },


  QMS: {

    title: "QMS",
    subtitle: "Quality Management System",

    links: [

      {
        name: "GGL QMS",
        url: "#",
        icon: "fa-shield-halved"
      }

    ]
  },


  WCA: {

    title: "WCA",
    subtitle: "Global forwarding network",

    links: [

      {
        name: "WCA",
        url: "#",
        icon: "fa-globe"
      }

    ]
  },


  LINERS: {

    title: "LINERS",
    subtitle: "Shipping line portals",

    links: [

      {
        name: "Maersk",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "MSC",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "CMA CGM",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "Hapag-Lloyd",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "ONE",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "COSCO",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "Evergreen",
        url: "#",
        icon: "fa-ship"
      },

      {
        name: "ZIM",
        url: "#",
        icon: "fa-ship"
      }

    ]
  },


  DOCUMENTS: {

    title: "DOCUMENTS",
    subtitle: "Policies, SOPs & company documents",

    links: [

      {
        name: "Google Drive",
        url: "#",
        icon: "fa-folder-open"
      },

      {
        name: "Policies",
        url: "#",
        icon: "fa-file-lines"
      },

      {
        name: "SOPs",
        url: "#",
        icon: "fa-file-lines"
      },

      {
        name: "Work Instructions",
        url: "#",
        icon: "fa-file-lines"
      },

      {
        name: "Forms & Formats",
        url: "#",
        icon: "fa-file-lines"
      },

      {
        name: "Manuals",
        url: "#",
        icon: "fa-book"
      }

    ]
  },


  HR: {

    title: "HR",
    subtitle: "HRMS & employee resources",

    links: [

      {
        name: "Keka HRMS",
        url: "#",
        icon: "fa-users"
      }

    ]
  },


  IT: {

    title: "IT",
    subtitle: "IT systems & support",

    links: [

      {
        name: "IT Support",
        url: "#",
        icon: "fa-headset"
      },

      {
        name: "IT Applications",
        url: "#",
        icon: "fa-computer"
      },

      {
        name: "IT Documents",
        url: "#",
        icon: "fa-file-lines"
      }

    ]
  },


  GOVERNMENT: {

    title: "GOVERNMENT",

    subtitle:
      "Government & regulatory portals",

    links: [

      {
        name: "ICEGATE",
        url: "#",
        icon: "fa-building-columns"
      },

      {
        name: "DGFT",
        url: "#",
        icon: "fa-building-columns"
      },

      {
        name: "GST",
        url: "#",
        icon: "fa-building-columns"
      },

      {
        name: "Customs",
        url: "#",
        icon: "fa-building-columns"
      }

    ]
  },


  NETWORKS: {

    title: "NETWORKS",

    subtitle:
      "Freight forwarding networks",

    links: [

      {
        name: "WPA",
        url: "#",
        icon: "fa-network-wired"
      },

      {
        name: "OPEC",
        url: "#",
        icon: "fa-network-wired"
      },

      {
        name: "Other Networks",
        url: "#",
        icon: "fa-network-wired"
      }

    ]
  }

};


/* =========================================
   OPEN PANEL
========================================= */


function openPanel(category) {

  const data =
    GGL_LINKS[category];

  if (!data) return;


  document.getElementById("modalTitle")
    .innerText = data.title;


  document.getElementById("modalSubtitle")
    .innerText = data.subtitle;


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

  const data =
    GGL_LINKS[category];

  if (!data || !data.links.length) return;


  const url =
    data.links[0].url;


  if (url === "#") {

    openPanel(category);

    return;

  }


  window.open(
    url,
    "_blank"
  );

}


/* =========================================
   CLOSE MODAL
========================================= */


function closeModal() {

  document.getElementById("modal")
    .classList.remove("show");

}


function closeModalOutside(event) {

  if (
    event.target.id === "modal"
  ) {

    closeModal();

  }

}


/* =========================================
   SEARCH
========================================= */


function searchPortal() {

  const input =
    document.getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();


  const results =
    document.getElementById("searchResults");


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

        const searchable =
          (
            category +
            " " +
            data.title +
            " " +
            data.subtitle +
            " " +
            link.name
          ).toLowerCase();


        if (
          searchable.includes(input)
        ) {

          matches.push({

            category:
              category,

            name:
              link.name,

            icon:
              link.icon,

            url:
              link.url

          });

        }

      });

    });


  if (!matches.length) {

    results.innerHTML = `

      <div class="search-result-empty">

        No matching resource found.

      </div>

    `;

    return;

  }


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
   DATE
========================================= */


function setDate() {

  const date =
    new Date();


  document.getElementById(
    "currentDate"
  ).innerText =

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
   KEYBOARD SEARCH
========================================= */


document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "/" &&
      document.activeElement.tagName !== "INPUT"
    ) {

      event.preventDefault();

      document.getElementById(
        "searchInput"
      ).focus();

    }


    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* =========================================
   START
========================================= */


setDate();
