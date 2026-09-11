/* =========================================================
   GGL MAIN PORTAL
   GAERISH LOGISTICS PVT. LTD.
   ========================================================= */


/* =========================================================
   GGL RESOURCE DATABASE
   ========================================================= */

const GGL_LINKS = {

    /* -----------------------------------------------------
       ERP
    ----------------------------------------------------- */

    ERP: [
        {
            name: "GGL ERP",
            description: "Gaerish Logistics ERP system",
            url: "#",
            keywords: "erp system operations shipment logistics"
        }
    ],


    /* -----------------------------------------------------
       G-SHEETS
    ----------------------------------------------------- */

    "G-SHEETS": [
        {
            name: "Sea Export Dashboard",
            description: "Sea export operations dashboard",
            url: "#",
            keywords: "sea export dashboard operations"
        },

        {
            name: "Air Export Dashboard",
            description: "Air export operations dashboard",
            url: "#",
            keywords: "air export dashboard operations"
        },

        {
            name: "Pharma Dashboard",
            description: "Pharma business dashboard",
            url: "#",
            keywords: "pharma dashboard pharma logistics"
        },

        {
            name: "Management Dashboard",
            description: "Management reporting dashboard",
            url: "#",
            keywords: "management dashboard MIS reports"
        }
    ],


    /* -----------------------------------------------------
       QMS
    ----------------------------------------------------- */

    QMS: [
        {
            name: "GGL QMS",
            description: "Gaerish Logistics Quality Management System",
            url: "#",
            keywords: "qms quality management capa ncr audit deviation"
        }
    ],


    /* -----------------------------------------------------
       WCA
    ----------------------------------------------------- */

    WCA: [
        {
            name: "WCA World",
            description: "World Cargo Alliance",
            url: "https://www.wcaworld.com/",
            keywords: "wca world freight network agents"
        }
    ],


    /* -----------------------------------------------------
       LINERS
    ----------------------------------------------------- */

    LINERS: [

        {
            name: "Maersk",
            description: "Maersk shipping line",
            url: "https://www.maersk.com/",
            keywords: "maersk liner shipping container"
        },

        {
            name: "MSC",
            description: "MSC shipping line",
            url: "https://www.msc.com/",
            keywords: "msc liner shipping container"
        },

        {
            name: "CMA CGM",
            description: "CMA CGM shipping line",
            url: "https://www.cma-cgm.com/",
            keywords: "cma cgm liner shipping container"
        },

        {
            name: "Hapag-Lloyd",
            description: "Hapag-Lloyd shipping line",
            url: "https://www.hapag-lloyd.com/",
            keywords: "hapag lloyd liner shipping container"
        },

        {
            name: "ONE",
            description: "Ocean Network Express",
            url: "https://www.one-line.com/",
            keywords: "one ocean network express liner"
        },

        {
            name: "COSCO",
            description: "COSCO Shipping",
            url: "https://www.coscon.com/",
            keywords: "cosco shipping liner container"
        },

        {
            name: "Evergreen",
            description: "Evergreen Marine",
            url: "https://www.evergreen-marine.com/",
            keywords: "evergreen marine liner container"
        },

        {
            name: "ZIM",
            description: "ZIM Integrated Shipping Services",
            url: "https://www.zim.com/",
            keywords: "zim liner shipping container"
        }

    ],


    /* -----------------------------------------------------
       DOCUMENTS
    ----------------------------------------------------- */

    DOCUMENTS: [

        {
            name: "Google Drive",
            description: "GGL company documents",
            url: "#",
            keywords: "google drive documents files folders SOP policies"
        },

        {
            name: "SOP Library",
            description: "Standard Operating Procedures",
            url: "#",
            keywords: "sop procedures quality GDP AEO"
        },

        {
            name: "Company Documents",
            description: "Company forms and documents",
            url: "#",
            keywords: "documents forms templates company"
        }

    ],


    /* -----------------------------------------------------
       HR
    ----------------------------------------------------- */

    HR: [

        {
            name: "Keka",
            description: "Employee HR management system",
            url: "#",
            keywords: "keka hr human resources employee leave payroll"
        }

    ],


    /* -----------------------------------------------------
       IT
    ----------------------------------------------------- */

    IT: [

        {
            name: "IT Support",
            description: "IT systems and support resources",
            url: "#",
            keywords: "IT support computer technology system"
        }

    ],


    /* -----------------------------------------------------
       GOVERNMENT
    ----------------------------------------------------- */

    GOVERNMENT: [

        {
            name: "ICEGATE",
            description: "Indian Customs electronic gateway",
            url: "https://www.icegate.gov.in/",
            keywords: "icegate customs import export"
        },

        {
            name: "DGFT",
            description: "Directorate General of Foreign Trade",
            url: "https://www.dgft.gov.in/",
            keywords: "dgft foreign trade license export import"
        },

        {
            name: "GST",
            description: "Goods and Services Tax portal",
            url: "https://www.gst.gov.in/",
            keywords: "gst tax government"
        }

    ],


    /* -----------------------------------------------------
       NETWORKS
    ----------------------------------------------------- */

    NETWORKS: [

        {
            name: "WPA",
            description: "Worldwide Partners Alliance",
            url: "#",
            keywords: "wpa network freight forwarding agents"
        },

        {
            name: "OPEC",
            description: "Freight forwarding network",
            url: "#",
            keywords: "opec network agents freight"
        }

    ],


    /* -----------------------------------------------------
       WEBSITE
    ----------------------------------------------------- */

    Website: [

        {
            name: "Gaerish Logistics Website",
            description: "Official Gaerish Logistics website",
            url: "#",
            keywords: "gaerish website company"
        },

        {
            name: "Live Tracking",
            description: "Gaerish shipment live tracking",
            url: "https://gaerish.logitrack.live/direct-tracking",
            keywords: "tracking live shipment track container"
        }

    ],


    /* -----------------------------------------------------
       SUGGESTION
    ----------------------------------------------------- */

    SUGGESTION: [

        {
            name: "Suggestion Box",
            description: "Submit ideas and suggestions for improving GGL",
            url: "#",
            keywords: "suggestion ideas improvement feedback innovation"
        }

    ],


    /* -----------------------------------------------------
       SALES
    ----------------------------------------------------- */

    SALES: [

        {
            name: "Sales Resources",
            description: "Sales tools, reports and business resources",
            url: "#",
            keywords: "sales customer business development leads prospects"
        }

    ],


    /* -----------------------------------------------------
       PRICING
    ----------------------------------------------------- */

    PRICING: [

        {
            name: "Pricing Resources",
            description: "Rates, quotations and commercial resources",
            url: "#",
            keywords: "pricing quotation rates commercial tariff costing"
        }

    ],


    /* -----------------------------------------------------
       TOOLS & UTILITIES
    ----------------------------------------------------- */

    "TOOLS & UTILITIES": [

        {
            name: "GGL Tools",
            description: "Useful business calculators and utilities",
            url: "#",
            keywords: "tools utilities calculator converter business"
        }

    ]

};



/* =========================================================
   OPEN FIRST RESOURCE
   ========================================================= */

function openLink(category) {

    const resources = GGL_LINKS[category];

    if (!resources || resources.length === 0) {

        openPanel(category);

        return;
    }


    const resource = resources.find(
        item => item.url && item.url !== "#"
    );


    if (resource) {

        window.open(
            resource.url,
            "_blank",
            "noopener,noreferrer"
        );

    } else {

        openPanel(category);

    }

}



/* =========================================================
   OPEN RESOURCE PANEL
   ========================================================= */

function openPanel(category) {

    const modal = document.getElementById("modal");
    const title = document.getElementById("modalTitle");
    const subtitle = document.getElementById("modalSubtitle");
    const content = document.getElementById("modalContent");

    if (!modal || !content) return;


    const resources = GGL_LINKS[category] || [];


    title.textContent = category;

    subtitle.textContent =
        resources.length +
        (resources.length === 1
            ? " resource available"
            : " resources available");


    content.innerHTML = "";


    if (resources.length === 0) {

        content.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-circle-info"></i>
                <h3>No resources configured</h3>
                <p>This section is ready for resources to be added.</p>
            </div>
        `;

    } else {

        resources.forEach(resource => {

            const item = document.createElement("div");

            item.className = "modal-resource";


            const isConfigured =
                resource.url &&
                resource.url !== "#";


            item.innerHTML = `

                <div class="resource-icon">

                    <i class="${getResourceIcon(category)}"></i>

                </div>


                <div class="resource-info">

                    <h3>
                        ${escapeHtml(resource.name)}
                    </h3>

                    <p>
                        ${escapeHtml(resource.description || "")}
                    </p>

                </div>


                <div class="resource-action">

                    ${
                        isConfigured
                            ? `
                                <button
                                    type="button"
                                    onclick="openResource('${encodeURIComponent(resource.url)}')"
                                >
                                    Open
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </button>
                              `
                            : `
                                <span class="not-configured">
                                    Coming soon
                                </span>
                              `
                    }

                </div>

            `;


            content.appendChild(item);

        });

    }


    modal.classList.add("show");

    document.body.classList.add("modal-open");

}



/* =========================================================
   OPEN RESOURCE FROM MODAL
   ========================================================= */

function openResource(encodedUrl) {

    const url = decodeURIComponent(encodedUrl);

    if (!url || url === "#") return;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}



/* =========================================================
   RESOURCE ICONS
   ========================================================= */

function getResourceIcon(category) {

    const icons = {

        ERP: "fa-solid fa-desktop",

        "G-SHEETS": "fa-solid fa-table",

        QMS: "fa-solid fa-shield-halved",

        WCA: "fa-solid fa-globe",

        LINERS: "fa-solid fa-ship",

        DOCUMENTS: "fa-solid fa-folder-open",

        HR: "fa-solid fa-users",

        IT: "fa-solid fa-computer",

        GOVERNMENT: "fa-solid fa-building-columns",

        NETWORKS: "fa-solid fa-network-wired",

        Website: "fa-solid fa-globe",

        SUGGESTION: "fa-solid fa-lightbulb",

        SALES: "fa-solid fa-chart-line",

        PRICING: "fa-solid fa-tags",

        "TOOLS & UTILITIES":
            "fa-solid fa-screwdriver-wrench"

    };


    return icons[category] ||
           "fa-solid fa-link";

}



/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    const modal = document.getElementById("modal");

    if (!modal) return;


    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

}



/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

function closeModalOutside(event) {

    if (event.target.id === "modal") {

        closeModal();

    }

}



/* =========================================================
   SEARCH PORTAL
   ========================================================= */

function searchPortal() {

    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    if (!input || !results) return;


    const query =
        input.value.trim().toLowerCase();


    results.innerHTML = "";

    results.dataset.hasMatches = "false";


    if (!query) {

        results.classList.remove("show");

        return;

    }


    const matches = [];


    Object.keys(GGL_LINKS).forEach(category => {

        const resources = GGL_LINKS[category] || [];


        resources.forEach(resource => {

            const searchableText = [

                category,

                resource.name,

                resource.description,

                resource.keywords

            ]
                .join(" ")
                .toLowerCase();


            if (searchableText.includes(query)) {

                matches.push({

                    category,
                    resource

                });

            }

        });

    });


    /* -----------------------------------------------------
       ALSO SEARCH CATEGORY NAMES
    ----------------------------------------------------- */

    Object.keys(GGL_LINKS).forEach(category => {

        if (
            category
                .toLowerCase()
                .includes(query)
        ) {

            const alreadyExists =
                matches.some(
                    match =>
                        match.category === category
                );


            if (!alreadyExists) {

                matches.push({

                    category,

                    resource: {

                        name: category,

                        description:
                            "Open " +
                            category +
                            " resources",

                        url: "#"

                    }

                });

            }

        }

    });


    /* -----------------------------------------------------
       NO RESULTS
    ----------------------------------------------------- */

    if (matches.length === 0) {

        results.innerHTML = `

            <div class="search-no-result">

                <i class="fa-brands fa-google"></i>

                <div>

                    <strong>
                        Search Google
                    </strong>

                    <span>
                        Press Enter to search the web
                    </span>

                </div>

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

            </div>

        `;


        results.classList.add("show");

        results.dataset.hasMatches = "false";


        results.querySelector(
            ".search-no-result"
        ).addEventListener(
            "click",
            () => openGoogleSearch(query)
        );


        return;

    }



    /* -----------------------------------------------------
       LIMIT RESULTS
    ----------------------------------------------------- */

    const limitedMatches =
        matches.slice(0, 10);


    results.dataset.hasMatches = "true";


    limitedMatches.forEach(match => {

        const result = document.createElement("div");

        result.className = "search-result";


        const icon =
            getResourceIcon(match.category);


        result.innerHTML = `

            <div class="search-result-icon">

                <i class="${icon}"></i>

            </div>


            <div class="search-result-info">

                <strong>
                    ${highlightText(
                        match.resource.name,
                        query
                    )}
                </strong>

                <span>

                    ${escapeHtml(
                        match.resource.description || ""
                    )}

                    ·

                    ${escapeHtml(
                        match.category
                    )}

                </span>

            </div>


            <i class="fa-solid fa-arrow-right"></i>

        `;


        result.addEventListener(
            "click",
            () => {

                if (
                    match.resource.url &&
                    match.resource.url !== "#"
                ) {

                    window.open(
                        match.resource.url,
                        "_blank",
                        "noopener,noreferrer"
                    );

                } else {

                    openPanel(match.category);

                }


                results.classList.remove("show");

                input.value = match.resource.name;

            }
        );


        results.appendChild(result);

    });


    results.classList.add("show");

}



/* =========================================================
   GOOGLE SEARCH
   ========================================================= */

function openGoogleSearch(query) {

    if (!query) return;


    const googleUrl =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);


    /*
       Anchor-click method is more reliable than
       window.open() in some browsers.
    */

    const link =
        document.createElement("a");


    link.href = googleUrl;

    link.target = "_blank";

    link.rel =
        "noopener noreferrer";


    document.body.appendChild(link);

    link.click();

    link.remove();

}



/* =========================================================
   SEARCH ENTER KEY
   ========================================================= */

function handleSearchKey(event) {

    if (event.key !== "Enter") return;


    const input =
        document.getElementById("searchInput");

    const results =
        document.getElementById("searchResults");


    if (!input) return;


    const query =
        input.value.trim();


    if (!query) return;


    event.preventDefault();


    /*
       If GGL has an exact/local result,
       open the first result.
    */

    if (
        results &&
        results.dataset.hasMatches === "true"
    ) {

        const first =
            results.querySelector(
                ".search-result"
            );


        if (first) {

            first.click();

            return;

        }

    }


    /*
       No GGL result:
       Search Google.
    */

    openGoogleSearch(query);

}



/* =========================================================
   HIGHLIGHT SEARCH TEXT
   ========================================================= */

function highlightText(text, query) {

    if (!text) return "";


    const safeText =
        escapeHtml(text);


    if (!query) return safeText;


    const regex =
        new RegExp(
            "(" +
            escapeRegExp(query) +
            ")",
            "gi"
        );


    return safeText.replace(
        regex,
        "<mark>$1</mark>"
    );

}



/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



/* =========================================================
   ESCAPE REGEX
   ========================================================= */

function escapeRegExp(value) {

    return value.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

}



/* =========================================================
   CURRENT DATE
   ========================================================= */

function setDate() {

    const element =
        document.getElementById("currentDate");


    if (!element) return;


    const now =
        new Date();


    element.textContent =
        now.toLocaleDateString(
            "en-IN",
            {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}



/* =========================================================
   WORLD CLOCK
========================================================= */

function updateWorldClock() {

    const cities = {

        china:
            "Asia/Shanghai",

        usa:
            "America/New_York",

        france:
            "Europe/Paris",

        philippines:
            "Asia/Manila"

    };


    Object.keys(cities).forEach(city => {

        const element =
            document.getElementById(
                `clock-${city}`
            );


        if (!element) return;


        element.textContent =
            new Date().toLocaleTimeString(
                "en-US",
                {
                    timeZone:
                        cities[city],

                    hour:
                        "2-digit",

                    minute:
                        "2-digit",

                    hour12:
                        true
                }
            );

    });

}



/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    localStorage.setItem(
        "ggl-theme",
        isDark
            ? "dark"
            : "light"
    );


    updateThemeIcon();

}



/* =========================================================
   UPDATE THEME ICON
   ========================================================= */

function updateThemeIcon() {

    const button =
        document.querySelector(
            ".icon-btn i"
        );


    if (!button) return;


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    if (isDark) {

        button.className =
            "fa-solid fa-sun";

    } else {

        button.className =
            "fa-solid fa-moon";

    }

}



/* =========================================================
   LOAD SAVED THEME
   ========================================================= */

function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "ggl-theme"
        );


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }


    updateThemeIcon();

}



/* =========================================================
   KEYBOARD SHORTCUTS
   ========================================================= */

function setupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            /*
               "/" = focus search
            */

            if (
                event.key === "/" &&
                document.activeElement.tagName !== "INPUT" &&
                document.activeElement.tagName !== "TEXTAREA"
            ) {

                event.preventDefault();


                const search =
                    document.getElementById(
                        "searchInput"
                    );


                if (search) {

                    search.focus();

                }

            }


            /*
               ESC = close modal
            */

            if (event.key === "Escape") {

                closeModal();

            }

        }
    );

}



/* =========================================================
   SEARCH EVENT SETUP
   ========================================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) return;


    input.addEventListener(
        "input",
        searchPortal
    );


    input.addEventListener(
        "keydown",
        handleSearchKey
    );

}



/* =========================================================
   CLICK OUTSIDE SEARCH RESULTS
   ========================================================= */

function setupSearchOutsideClick() {

    document.addEventListener(
        "click",
        event => {

            const searchContainer =
                document.querySelector(
                    ".search-container"
                );

            const results =
                document.getElementById(
                    "searchResults"
                );


            if (
                !searchContainer ||
                !results
            ) return;


            if (
                !searchContainer.contains(event.target) &&
                !results.contains(event.target)
            ) {

                results.classList.remove(
                    "show"
                );

            }

        }
    );

}



/* =========================================================
   WELCOME SCREEN
   ========================================================= */

function hideWelcomeScreen() {

    const screen =
        document.getElementById(
            "welcomeScreen"
        );


    if (!screen) return;


    setTimeout(
        () => {

            screen.classList.add(
                "hide"
            );


            setTimeout(
                () => {

                    screen.style.display =
                        "none";

                },
                700
            );

        },
        1800
    );

}



/* =========================================================
   START PORTAL
   ========================================================= */

function startPortal() {

    setDate();

    updateWorldClock();

    loadTheme();

    setupSearch();

    setupSearchOutsideClick();

    setupKeyboardShortcuts();

    hideWelcomeScreen();


    /*
       World clock refresh
    */

    setInterval(
        updateWorldClock,
        1000
    );


    /*
       Date refresh
    */

    setInterval(
        setDate,
        60000
    );

}



/* =========================================================
   START WHEN PAGE LOADS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    startPortal
);
