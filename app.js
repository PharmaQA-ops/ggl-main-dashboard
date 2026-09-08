/* =========================================================
   GGL MAIN DASHBOARD
   Fast Local Search + Animated UI
   Data source: links.json
   ========================================================= */

let GGL_LINKS = {};
let ALL_LINKS = [];
let currentCategory = null;


/* =========================================================
   CATEGORY CONFIGURATION
   ========================================================= */

const CATEGORY_INFO = {

    "ERP": {
        subtitle: "Enterprise Resource Planning",
        icon: "fa-desktop"
    },

    "G-SHEETS": {
        subtitle: "Google Sheets & Dashboards",
        icon: "fa-table"
    },

    "QMS": {
        subtitle: "Quality Management System",
        icon: "fa-shield-halved"
    },

    "WCA": {
        subtitle: "Worldwide Cargo Alliance",
        icon: "fa-globe"
    },

    "LINERS": {
        subtitle: "Shipping Line Portals",
        icon: "fa-ship"
    },

    "DOCUMENTS": {
        subtitle: "Documents & Records",
        icon: "fa-folder-open"
    },

    "HR": {
        subtitle: "Human Resources",
        icon: "fa-users"
    },

    "IT": {
        subtitle: "Information Technology",
        icon: "fa-computer"
    },

    "GOVERNMENT": {
        subtitle: "Government Portals",
        icon: "fa-landmark"
    },

    "NETWORKS": {
        subtitle: "Business Networks",
        icon: "fa-network-wired"
    }

};


/* =========================================================
   LOAD LINKS.JSON
   ========================================================= */

async function loadLinks() {

    try {

        const response = await fetch(
            "links.json?v=" + Date.now(),
            {
                cache: "no-store"
            }
        );

        if (!response.ok) {
            throw new Error(
                "links.json could not be loaded"
            );
        }

        const data = await response.json();

        GGL_LINKS = {};
        ALL_LINKS = [];


        data.forEach(item => {

            if (!item.active) return;

            const category =
                String(item.category || "").trim();

            if (!category) return;


            if (!GGL_LINKS[category]) {

                GGL_LINKS[category] = {

                    title: category,

                    subtitle:
                        CATEGORY_INFO[category]?.subtitle ||
                        "GGL Portal",

                    icon:
                        CATEGORY_INFO[category]?.icon ||
                        "fa-link",

                    links: []

                };

            }


            const link = {

                category: category,

                name:
                    String(item.name || "").trim(),

                description:
                    String(item.description || "").trim(),

                url:
                    String(item.url || "").trim(),

                keywords:
                    String(item.keywords || "").trim(),

                icon:
                    String(item.icon || "fa-link").trim(),

                order:
                    Number(item.order) || 999

            };


            GGL_LINKS[category].links.push(link);

            ALL_LINKS.push(link);

        });


        /* Sort links */

        Object.keys(GGL_LINKS).forEach(category => {

            GGL_LINKS[category].links.sort(
                (a, b) => a.order - b.order
            );

        });


        ALL_LINKS.sort(
            (a, b) => a.order - b.order
        );


        console.log(
            "GGL Dashboard loaded:",
            ALL_LINKS.length,
            "links"
        );


        /* Render main dashboard */

        renderCategories();


        /* Search is now ready */

        setupSearch();


    }

    catch (error) {

        console.error(
            "GGL Dashboard Error:",
            error
        );

        showLoadingError();

    }

}


/* =========================================================
   RENDER CATEGORY TILES
   ========================================================= */

function renderCategories() {

    const container =
        document.querySelector(
            "#categoryContainer"
        );


    if (!container) {

        console.warn(
            "categoryContainer not found"
        );

        return;

    }


    container.innerHTML = "";


    const categories =
        Object.keys(CATEGORY_INFO);


    categories.forEach(
        (category, index) => {

            if (!GGL_LINKS[category]) return;


            const info =
                CATEGORY_INFO[category];


            const linkCount =
                GGL_LINKS[category].links.length;


            const card =
                document.createElement("div");


            card.className =
                "category-card";


            card.dataset.category =
                category;


            card.style.animationDelay =
                `${index * 60}ms`;


            card.innerHTML = `

                <div class="category-icon">

                    <i class="fas ${info.icon}"></i>

                </div>

                <div class="category-content">

                    <h3>
                        ${escapeHtml(category)}
                    </h3>

                    <p>
                        ${escapeHtml(info.subtitle)}
                    </p>

                    <span class="category-count">
                        ${linkCount}
                        ${linkCount === 1 ? "link" : "links"}
                    </span>

                </div>

                <div class="category-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>

            `;


            card.addEventListener(
                "click",
                () => openCategory(category)
            );


            container.appendChild(card);

        }
    );

}


/* =========================================================
   OPEN CATEGORY
   ========================================================= */

function openCategory(category) {

    currentCategory = category;


    const data =
        GGL_LINKS[category];


    if (!data) return;


    const modal =
        document.querySelector("#categoryModal");


    const title =
        document.querySelector("#modalTitle");


    const subtitle =
        document.querySelector("#modalSubtitle");


    const linksContainer =
        document.querySelector("#modalLinks");


    if (!modal || !linksContainer) {

        console.warn(
            "Modal elements not found"
        );

        return;

    }


    if (title) {
        title.textContent =
            data.title;
    }


    if (subtitle) {
        subtitle.textContent =
            data.subtitle;
    }


    linksContainer.innerHTML = "";


    data.links.forEach(
        (link, index) => {

            const item =
                document.createElement("div");


            item.className =
                "portal-link";


            item.style.animationDelay =
                `${index * 40}ms`;


            item.innerHTML = `

                <div class="portal-link-icon">

                    <i class="fas ${escapeHtml(link.icon)}"></i>

                </div>

                <div class="portal-link-content">

                    <h4>
                        ${escapeHtml(link.name)}
                    </h4>

                    <p>
                        ${escapeHtml(link.description)}
                    </p>

                </div>

                <div class="portal-link-arrow">

                    <i class="fas fa-arrow-up-right-from-square"></i>

                </div>

            `;


            item.addEventListener(
                "click",
                () => openLink(link.url)
            );


            linksContainer.appendChild(item);

        }
    );


    modal.classList.add("active");

    document.body.classList.add(
        "modal-open"
    );


    /* Focus close button if available */

    const closeButton =
        modal.querySelector(".modal-close");

    if (closeButton) {
        setTimeout(
            () => closeButton.focus(),
            100
        );
    }

}


/* =========================================================
   OPEN LINK
   ========================================================= */

function openLink(url) {

    if (!url) {

        console.warn(
            "No URL configured"
        );

        return;

    }


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

    const modal =
        document.querySelector(
            "#categoryModal"
        );


    if (!modal) return;


    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );


    currentCategory = null;

}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

function closeModalOutside(event) {

    const modal =
        document.querySelector(
            "#categoryModal"
        );


    if (
        modal &&
        event.target === modal
    ) {

        closeModal();

    }

}


/* =========================================================
   FAST GLOBAL SEARCH
   Searches EVERY LETTER typed
   ========================================================= */

function setupSearch() {

    const searchInput =
        document.querySelector(
            "#globalSearch"
        );


    if (!searchInput) {

        console.warn(
            "Search input #globalSearch not found"
        );

        return;

    }


    /* Prevent duplicate listeners */

    if (
        searchInput.dataset.searchReady === "true"
    ) {
        return;
    }


    searchInput.dataset.searchReady =
        "true";


    /* Search on EVERY keystroke */

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            performSearch(query);

        }
    );


    /* Enter key */

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                const firstResult =
                    document.querySelector(
                        ".search-result"
                    );

                if (firstResult) {

                    firstResult.click();

                }

            }


            if (
                event.key === "Escape"
            ) {

                this.value = "";

                performSearch("");

                this.blur();

            }

        }
    );

}


/* =========================================================
   PERFORM SEARCH
   ========================================================= */

function performSearch(query) {

    const searchResults =
        document.querySelector(
            "#searchResults"
        );


    const searchSection =
        document.querySelector(
            "#searchSection"
        );


    const categoryContainer =
        document.querySelector(
            "#categoryContainer"
        );


    /* Empty search */

    if (!query) {

        if (searchSection) {

            searchSection.classList.remove(
                "search-active"
            );

        }


        if (categoryContainer) {

            categoryContainer.style.display =
                "";

        }


        if (searchResults) {

            searchResults.innerHTML =
                "";

            searchResults.style.display =
                "none";

        }

        return;

    }


    if (searchSection) {

        searchSection.classList.add(
            "search-active"
        );

    }


    if (categoryContainer) {

        categoryContainer.style.display =
            "none";

    }


    /*
       FAST FILTER

       We search a pre-built ALL_LINKS array,
       so there is no server request for every letter.
    */

    const results =
        ALL_LINKS.filter(link => {

            const searchableText = (

                link.name + " " +

                link.description + " " +

                link.keywords + " " +

                link.category + " " +

                link.url

            ).toLowerCase();


            return searchableText.includes(
                query
            );

        });


    renderSearchResults(
        results,
        query
    );

}


/* =========================================================
   RENDER SEARCH RESULTS
   ========================================================= */

function renderSearchResults(
    results,
    query
) {

    const container =
        document.querySelector(
            "#searchResults"
        );


    if (!container) return;


    container.style.display =
        "block";


    /* No results */

    if (!results.length) {

        container.innerHTML = `

            <div class="no-search-results">

                <div class="no-results-icon">

                    <i class="fas fa-magnifying-glass"></i>

                </div>

                <h3>
                    No results found
                </h3>

                <p>
                    No portal, document or service
                    matches
                    <strong>"${escapeHtml(query)}"</strong>
                </p>

            </div>

        `;

        return;

    }


    /* Result count */

    let html = `

        <div class="search-result-header">

            <span>
                ${results.length}
                ${results.length === 1 ? "result" : "results"}
            </span>

            <span>
                for "${escapeHtml(query)}"
            </span>

        </div>

    `;


    results.forEach(
        (link, index) => {

            const categoryInfo =
                CATEGORY_INFO[link.category] || {};


            html += `

                <div
                    class="search-result"
                    data-index="${index}"
                    tabindex="0"
                >

                    <div class="search-result-icon">

                        <i class="fas ${
                            escapeHtml(
                                link.icon ||
                                categoryInfo.icon ||
                                "fa-link"
                            )
                        }"></i>

                    </div>

                    <div class="search-result-content">

                        <div class="search-result-category">

                            ${escapeHtml(
                                link.category
                            )}

                        </div>

                        <h3>
                            ${highlightMatch(
                                link.name,
                                query
                            )}
                        </h3>

                        <p>
                            ${escapeHtml(
                                link.description
                            )}
                        </p>

                    </div>

                    <div class="search-result-arrow">

                        <i class="fas fa-arrow-right"></i>

                    </div>

                </div>

            `;

        }
    );


    container.innerHTML =
        html;


    /* Add click events */

    const resultElements =
        container.querySelectorAll(
            ".search-result"
        );


    resultElements.forEach(
        (element, index) => {

            element.addEventListener(
                "click",
                () => {

                    const link =
                        results[index];

                    if (link) {
                        openLink(link.url);
                    }

                }
            );


            element.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        element.click();

                    }

                }
            );

        }
    );

}


/* =========================================================
   HIGHLIGHT SEARCH MATCH
   ========================================================= */

function highlightMatch(
    text,
    query
) {

    if (!text) return "";


    const safeText =
        escapeHtml(text);


    const safeQuery =
        escapeRegExp(query);


    if (!safeQuery) {
        return safeText;
    }


    const regex =
        new RegExp(
            `(${safeQuery})`,
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
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   ESCAPE REGEX
   ========================================================= */

function escapeRegExp(value) {

    return String(value)
        .replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

}


/* =========================================================
   SEARCH SHORTCUT
   Press "/" or Ctrl + K
   ========================================================= */

function setupKeyboardShortcuts() {

    document.addEventListener(
        "keydown",
        event => {

            const active =
                document.activeElement;


            const isTyping =
                active &&
                (
                    active.tagName === "INPUT" ||
                    active.tagName === "TEXTAREA" ||
                    active.isContentEditable
                );


            /* Ctrl + K */

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                focusSearch();

                return;

            }


            /* "/" */

            if (
                event.key === "/" &&
                !isTyping
            ) {

                event.preventDefault();

                focusSearch();

                return;

            }


            /* Escape closes modal */

            if (
                event.key === "Escape"
            ) {

                const modal =
                    document.querySelector(
                        "#categoryModal"
                    );


                if (
                    modal &&
                    modal.classList.contains(
                        "active"
                    )
                ) {

                    closeModal();

                }

            }

        }
    );

}


/* =========================================================
   FOCUS SEARCH
   ========================================================= */

function focusSearch() {

    const input =
        document.querySelector(
            "#globalSearch"
        );


    if (!input) return;


    input.focus();


    input.select();

}


/* =========================================================
   DATE
   ========================================================= */

function setDate() {

    const dateElement =
        document.querySelector(
            "#currentDate"
        );


    if (!dateElement) return;


    const now =
        new Date();


    dateElement.textContent =
        now.toLocaleDateString(
            "en-IN",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

}


/* =========================================================
   DARK MODE
   ========================================================= */

function setupDarkMode() {

    const button =
        document.querySelector(
            "#darkModeToggle"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const dark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "ggl-dark-mode",
                dark ? "1" : "0"
            );

        }
    );


    if (
        localStorage.getItem(
            "ggl-dark-mode"
        ) === "1"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


/* =========================================================
   LOADING ERROR
   ========================================================= */

function showLoadingError() {

    const container =
        document.querySelector(
            "#categoryContainer"
        );


    if (!container) return;


    container.innerHTML = `

        <div class="dashboard-error">

            <div class="error-icon">

                <i class="fas fa-triangle-exclamation"></i>

            </div>

            <h3>
                Unable to load dashboard
            </h3>

            <p>
                Please check that
                <strong>links.json</strong>
                exists in the GitHub repository.
            </p>

            <button
                onclick="location.reload()"
            >
                <i class="fas fa-rotate-right"></i>
                Retry
            </button>

        </div>

    `;

}


/* =========================================================
   SMOOTH PAGE ANIMATION
   ========================================================= */

function setupPageAnimation() {

    document.body.classList.add(
        "page-ready"
    );


    /* Animate elements when visible */

    const elements =
        document.querySelectorAll(
            ".category-card, .portal-link"
        );


    elements.forEach(
        (element, index) => {

            element.style.setProperty(
                "--animation-index",
                index
            );

        }
    );

}


/* =========================================================
   MODAL EVENT SETUP
   ========================================================= */

function setupModal() {

    const modal =
        document.querySelector(
            "#categoryModal"
        );


    if (!modal) return;


    modal.addEventListener(
        "click",
        closeModalOutside
    );


    const closeButton =
        modal.querySelector(
            ".modal-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }

}


/* =========================================================
   INITIALIZE DASHBOARD
   ========================================================= */

async function startPortal() {

    console.log(
        "Starting GGL Main Dashboard..."
    );


    setDate();

    setupKeyboardShortcuts();

    setupDarkMode();

    setupModal();

    await loadLinks();

    setupPageAnimation();


    console.log(
        "GGL Main Dashboard ready."
    );

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        startPortal
    );

}
else {

    startPortal();

}
