javascript
/* ============================================================
   GAERISH LOGISTICS PVT. LTD.
   GGL MAIN BUSINESS PORTAL
   FINAL APP.JS
   HTML-SYNCHRONIZED VERSION
   ============================================================ */


/* ============================================================
   RESOURCE DATABASE
   ============================================================ */

const resources = {

    /* =========================
       01 ERP
    ========================= */

    ERP: {
        title: "ERP",
        description: "Enterprise Resource Planning Systems",

        resources: [
            {
                name: "GGL ERP - Logisys",
                description: "Logistics ERP platform",
                url: "#"
            },
            {
                name: "GGL ERP - Sentinel",
                description: "ERP and business management platform",
                url: "#"
            }
        ]
    },


    /* =========================
       02 G-SHEETS
    ========================= */

    "G-SHEETS": {
        title: "G-SHEETS",
        description: "Operational Google Sheets",

        resources: [
            {
                name: "Sea Export",
                description: "Sea export operational sheets",
                url: "#"
            },
            {
                name: "Air Export",
                description: "Air export operational sheets",
                url: "#"
            },
            {
                name: "Sea Import",
                description: "Sea import operational sheets",
                url: "#"
            },
            {
                name: "Air Import",
                description: "Air import operational sheets",
                url: "#"
            },
            {
                name: "NAP",
                description: "NAP operational sheets",
                url: "#"
            },
            {
                name: "Defence",
                description: "Defence operational sheets",
                url: "#"
            }
        ]
    },


    /* =========================
       03 QMS
    ========================= */

    QMS: {
        title: "QMS",
        description: "Quality Management System",

        resources: [
            {
                name: "GGL QMS",
                description: "Gaerish Quality Management System",
                url: "#"
            }
        ]
    },


    /* =========================
       04 LINERS
    ========================= */

    LINERS: {
        title: "LINERS",
        description: "Shipping Line Portals",

        resources: [
            {
                name: "Maersk",
                description: "Maersk",
                url: "#"
            },
            {
                name: "MSC",
                description: "Mediterranean Shipping Company",
                url: "#"
            },
            {
                name: "CMA CGM",
                description: "CMA CGM",
                url: "#"
            },
            {
                name: "Hapag-Lloyd",
                description: "Hapag-Lloyd",
                url: "#"
            },
            {
                name: "ONE",
                description: "Ocean Network Express",
                url: "#"
            },
            {
                name: "COSCO",
                description: "COSCO Shipping",
                url: "#"
            },
            {
                name: "Evergreen",
                description: "Evergreen Marine",
                url: "#"
            },
            {
                name: "ZIM",
                description: "ZIM Integrated Shipping Services",
                url: "#"
            }
        ]
    },


    /* =========================
       05 DOCUMENTS
    ========================= */

    DOCUMENTS: {
        title: "DOCUMENTS",
        description: "Corporate and Operational Documents",

        resources: [
            {
                name: "Google Drive",
                description: "GGL shared document repository",
                url: "#"
            },
            {
                name: "Policies",
                description: "Company policies",
                url: "#"
            },
            {
                name: "SOPs",
                description: "Standard Operating Procedures",
                url: "#"
            },
            {
                name: "Work Instructions",
                description: "Operational work instructions",
                url: "#"
            },
            {
                name: "Forms & Formats",
                description: "Approved forms and formats",
                url: "#"
            },
            {
                name: "Manuals",
                description: "Company and operational manuals",
                url: "#"
            }
        ]
    },


    /* =========================
       06 HR
    ========================= */

    HR: {
        title: "HR",
        description: "Human Resources",

        resources: [
            {
                name: "Keka",
                description: "HR and employee management",
                url: "#"
            }
        ]
    },


    /* =========================
       07 IT
    ========================= */

    IT: {
        title: "IT",
        description: "Information Technology",

        resources: [
            {
                name: "IT Support",
                description: "IT support services",
                url: "#"
            },
            {
                name: "IT Applications",
                description: "Business applications",
                url: "#"
            },
            {
                name: "IT Documents",
                description: "IT documentation",
                url: "#"
            }
        ]
    },


    /* =========================
       08 GOVERNMENT
    ========================= */

    GOVERNMENT: {
        title: "GOVERNMENT",
        description: "Government and Regulatory Portals",

        resources: [
            {
                name: "ICEGATE",
                description: "Indian Customs electronic gateway",
                url: "#"
            },
            {
                name: "DGFT",
                description: "Directorate General of Foreign Trade",
                url: "#"
            },
            {
                name: "GST",
                description: "Goods and Services Tax portal",
                url: "#"
            },
            {
                name: "Customs",
                description: "Customs resources",
                url: "#"
            }
        ]
    },


    /* =========================
       09 NETWORKS
    ========================= */

    NETWORKS: {
        title: "NETWORKS",
        description: "Logistics and Business Networks",

        resources: [
            {
                name: "WPA",
                description: "World logistics network",
                url: "#"
            },
            {
                name: "OPEC",
                description: "OPEC network",
                url: "#"
            },
            {
                name: "Other Networks",
                description: "Other business networks",
                url: "#"
            }
        ]
    },


    /* =========================
       10 WEBSITE
    ========================= */

    Website: {
        title: "WEBSITE",
        description: "Gaerish Digital Platforms",

        resources: [
            {
                name: "Gaerish Logistics",
                description: "Corporate website",
                url: "#"
            },
            {
                name: "Gaerish Defence",
                description: "Defence logistics website",
                url: "#"
            },
            {
                name: "Gaerish E-Trade",
                description: "E-Trade platform",
                url: "#"
            }
        ]
    },


    /* =========================
       WCA
       Quick Access
    ========================= */

    WCA: {
        title: "WCA",
        description: "World Cargo Alliance",

        resources: [
            {
                name: "WCA World",
                description: "World Cargo Alliance",
                url: "https://www.wcaworld.com/"
            }
        ]
    },


    /* =========================
       11 GGL KNOWLEDGE
    ========================= */

    "GGL KNOWLEDGE": {
        title: "GGL KNOWLEDGE",
        description: "Logistics Knowledge & Reference",

        resources: [
            {
                name: "Logistics Knowledge",
                description: "Core logistics concepts and references",
                url: "#"
            },
            {
                name: "Incoterms",
                description: "Incoterms and trade references",
                url: "#"
            },
            {
                name: "Shipping Terminology",
                description: "Shipping and freight terminology",
                url: "#"
            },
            {
                name: "Customs & Trade",
                description: "Customs and international trade references",
                url: "#"
            },
            {
                name: "Learning Resources",
                description: "Useful learning and reference material",
                url: "#"
            },
            {
                name: "FAQs & Guides",
                description: "Frequently used guides and references",
                url: "#"
            }
        ]
    },


    /* =========================
       12 SUGGESTION
    ========================= */

    SUGGESTION: {
        title: "SUGGESTION",
        description: "Employee Suggestions",

        resources: [
            {
                name: "Suggestion Box",
                description: "Submit a suggestion or improvement idea",
                url: "#"
            }
        ]
    },


    /* =========================
       13 SALES
    ========================= */

    SALES: {
        title: "SALES",
        description: "Sales Resources",

        resources: [
            {
                name: "Sales Resources",
                description: "Sales tools and resources",
                url: "#"
            }
        ]
    },


    /* =========================
       14 PRICING
    ========================= */

    PRICING: {
        title: "PRICING",
        description: "Pricing Resources",

        resources: [
            {
                name: "Pricing Resources",
                description: "Pricing tools and references",
                url: "#"
            }
        ]
    },


    /* =========================
       15 TOOLS & UTILITIES
    ========================= */

    "TOOLS & UTILITIES": {
        title: "TOOLS & UTILITIES",
        description: "Business Tools and Utilities",

        resources: [
            {
                name: "GGL Tools",
                description: "Useful business tools and utilities",
                url: "#"
            }
        ]
    }
};


/* ============================================================
   RESOURCE ICONS
   ============================================================ */

function getResourceIcon(category, name = "") {

    const value =
        `${category} ${name}`.toUpperCase();


    if (value.includes("ERP")) {
        return "fa-solid fa-server";
    }


    if (
        value.includes("G-SHEET") ||
        value.includes("SHEET")
    ) {
        return "fa-solid fa-table";
    }


    if (value.includes("QMS")) {
        return "fa-solid fa-circle-check";
    }


    if (
        value.includes("LINER") ||
        value.includes("MAERSK") ||
        value.includes("MSC") ||
        value.includes("CMA") ||
        value.includes("HAPAG") ||
        value.includes("ONE") ||
        value.includes("COSCO") ||
        value.includes("EVERGREEN") ||
        value.includes("ZIM")
    ) {
        return "fa-solid fa-ship";
    }


    if (
        value.includes("DOCUMENT") ||
        value.includes("DRIVE") ||
        value.includes("POLIC") ||
        value.includes("SOP") ||
        value.includes("MANUAL") ||
        value.includes("FORM")
    ) {
        return "fa-solid fa-folder-open";
    }


    if (
        value.includes("HR") ||
        value.includes("KEKA")
    ) {
        return "fa-solid fa-users";
    }


    if (value.includes("IT")) {
        return "fa-solid fa-laptop-code";
    }


    if (
        value.includes("GOVERNMENT") ||
        value.includes("ICEGATE") ||
        value.includes("DGFT") ||
        value.includes("GST") ||
        value.includes("CUSTOMS")
    ) {
        return "fa-solid fa-landmark";
    }


    if (
        value.includes("NETWORK") ||
        value.includes("WPA") ||
        value.includes("OPEC")
    ) {
        return "fa-solid fa-network-wired";
    }


    if (
        value.includes("WEBSITE") ||
        value.includes("GAERISH")
    ) {
        return "fa-solid fa-globe";
    }


    if (value.includes("WCA")) {
        return "fa-solid fa-earth-americas";
    }


    if (value.includes("GGL KNOWLEDGE")) {
        return "fa-solid fa-brain";
    }


    if (value.includes("SUGGESTION")) {
        return "fa-solid fa-lightbulb";
    }


    if (value.includes("SALES")) {
        return "fa-solid fa-chart-line";
    }


    if (value.includes("PRICING")) {
        return "fa-solid fa-tags";
    }


    if (
        value.includes("TOOLS") ||
        value.includes("UTILITIES")
    ) {
        return "fa-solid fa-screwdriver-wrench";
    }


    return "fa-solid fa-link";
}


/* ============================================================
   OPEN LINK
   ============================================================ */

function openLink(category, resourceIndex = 0) {

    const categoryData =
        resources[category];

    if (
        !categoryData ||
        !categoryData.resources ||
        !categoryData.resources.length
    ) {
        return;
    }


    const resource =
        categoryData.resources[resourceIndex];

    if (!resource) {
        return;
    }


    if (
        resource.url &&
        resource.url !== "#"
    ) {

        window.open(
            resource.url,
            "_blank",
            "noopener,noreferrer"
        );

        return;
    }


    openPanel(category);
}


/* ============================================================
   OPEN RESOURCE PANEL
   IMPORTANT:
   HTML uses:
   #modal
   #modalTitle
   #modalSubtitle
   #modalContent
   ============================================================ */

function openPanel(category) {

    const categoryData =
        resources[category];

    if (!categoryData) {
        return;
    }


    const modal =
        document.getElementById("modal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalSubtitle =
        document.getElementById("modalSubtitle");

    const modalContent =
        document.getElementById("modalContent");


    if (
        !modal ||
        !modalTitle ||
        !modalContent
    ) {
        return;
    }


    modalTitle.textContent =
        categoryData.title;


    modalSubtitle.textContent =
        categoryData.description || "";


    modalContent.innerHTML = "";


    categoryData.resources.forEach(
        (resource, index) => {

            const item =
                document.createElement("button");


            item.type = "button";

            item.className =
                "modal-resource";


            item.setAttribute(
                "data-resource-index",
                index
            );


            const icon =
                document.createElement("i");

            icon.className =
                getResourceIcon(
                    category,
                    resource.name
                );


            const content =
                document.createElement("span");

            content.className =
                "modal-resource-content";


            const name =
                document.createElement("strong");

            name.textContent =
                resource.name;


            const description =
                document.createElement("small");

            description.textContent =
                resource.description || "";


            content.appendChild(name);
            content.appendChild(description);


            const arrow =
                document.createElement("i");

            arrow.className =
                "fa-solid fa-arrow-up-right-from-square";


            item.appendChild(icon);
            item.appendChild(content);
            item.appendChild(arrow);


            item.addEventListener(
                "click",
                () => {

                    if (
                        resource.url &&
                        resource.url !== "#"
                    ) {

                        window.open(
                            resource.url,
                            "_blank",
                            "noopener,noreferrer"
                        );

                    } else {

                        /*
                         * Placeholder resources currently
                         * have no URL.
                         *
                         * The modal remains open rather
                         * than opening an invalid page.
                         */

                        console.info(
                            `Resource "${resource.name}" does not have a URL yet.`
                        );
                    }
                }
            );


            modalContent.appendChild(item);
        }
    );


    modal.classList.add("show");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}


/* ============================================================
   CLOSE MODAL
   ============================================================ */

function closeModal() {

    const modal =
        document.getElementById("modal");

    if (!modal) {
        return;
    }


    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


/* ============================================================
   CLOSE MODAL WHEN CLICKING BACKDROP
   ============================================================ */

function closeModalOutside(event) {

    const modal =
        document.getElementById("modal");

    if (!modal) {
        return;
    }


    if (event.target === modal) {
        closeModal();
    }
}


/* ============================================================
   LIVE SEARCH
   HTML INPUT:
   #searchInput
   ============================================================ */

function searchPortal() {

    const input =
        document.getElementById("searchInput");

    const resultsContainer =
        document.getElementById("searchResults");


    if (
        !input ||
        !resultsContainer
    ) {
        return;
    }


    const query =
        input.value.trim().toLowerCase();


    resultsContainer.innerHTML = "";


    if (!query) {

        resultsContainer.classList.remove(
            "show"
        );

        resultsContainer.dataset.hasMatches =
            "false";

        return;
    }


    const matches = [];


    Object.entries(resources).forEach(
        ([category, categoryData]) => {

            categoryData.resources.forEach(
                (resource, index) => {

                    const searchableText = [
                        categoryData.title,
                        categoryData.description,
                        resource.name,
                        resource.description
                    ]
                        .join(" ")
                        .toLowerCase();


                    if (
                        searchableText.includes(
                            query
                        )
                    ) {

                        matches.push({
                            category,
                            index,
                            categoryData,
                            resource
                        });
                    }
                }
            );
        }
    );


    /* =========================
       NO INTERNAL RESULT
    ========================= */

    if (!matches.length) {

        resultsContainer.innerHTML = `
            <div class="search-empty">

                <i class="fa-solid fa-magnifying-glass"></i>

                <div>

                    <strong>
                        No GGL resource found
                    </strong>

                    <span>
                        Press Enter to search Google
                    </span>

                </div>

            </div>
        `;


        resultsContainer.classList.add(
            "show"
        );

        resultsContainer.dataset.hasMatches =
            "false";

        return;
    }


    /* =========================
       INTERNAL RESULTS
    ========================= */

    matches
        .slice(0, 8)
        .forEach(match => {

            const result =
                document.createElement("button");


            result.type = "button";

            result.className =
                "search-result";


            const icon =
                document.createElement("i");

            icon.className =
                getResourceIcon(
                    match.category,
                    match.resource.name
                );


            const content =
                document.createElement("span");

            content.className =
                "search-result-content";


            const name =
                document.createElement("strong");

            name.innerHTML =
                highlightText(
                    match.resource.name,
                    query
                );


            const meta =
                document.createElement("small");

            meta.innerHTML =
                highlightText(
                    match.categoryData.title,
                    query
                );


            content.appendChild(name);
            content.appendChild(meta);


            result.appendChild(icon);
            result.appendChild(content);


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

                        openPanel(
                            match.category
                        );
                    }


                    input.value = "";


                    resultsContainer.classList.remove(
                        "show"
                    );
                }
            );


            resultsContainer.appendChild(
                result
            );
        });


    resultsContainer.classList.add(
        "show"
    );

    resultsContainer.dataset.hasMatches =
        "true";
}


/* ============================================================
   SEARCH ENTER
   ============================================================ */

function handleSearchKey(event) {

    if (event.key !== "Enter") {
        return;
    }


    event.preventDefault();


    const input =
        document.getElementById("searchInput");

    const resultsContainer =
        document.getElementById("searchResults");


    if (!input) {
        return;
    }


    const query =
        input.value.trim();


    if (!query) {
        return;
    }


    const hasMatches =
        resultsContainer &&
        resultsContainer.dataset.hasMatches ===
            "true";


    /* =========================
       INTERNAL GGL RESULT
    ========================= */

    if (hasMatches) {

        const firstResult =
            resultsContainer.querySelector(
                ".search-result"
            );


        if (firstResult) {

            firstResult.click();

            return;
        }
    }


    /* =========================
       GOOGLE FALLBACK
    ========================= */

    const googleUrl =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);


    window.open(
        googleUrl,
        "_blank",
        "noopener,noreferrer"
    );


    input.value = "";


    if (resultsContainer) {

        resultsContainer.classList.remove(
            "show"
        );
    }
}


/* ============================================================
   HIGHLIGHT SEARCH TEXT
   ============================================================ */

function highlightText(text, query) {

    if (!query) {
        return escapeHtml(text);
    }


    const escapedText =
        escapeHtml(text);


    const escapedQuery =
        escapeRegExp(query);


    return escapedText.replace(
        new RegExp(
            `(${escapedQuery})`,
            "gi"
        ),
        "<mark>$1</mark>"
    );
}


/* ============================================================
   HTML ESCAPE
   ============================================================ */

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ============================================================
   REGEX ESCAPE
   ============================================================ */

function escapeRegExp(value) {

    return String(value).replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );
}


/* ============================================================
   CURRENT DATE
   HTML:
   #currentDate
   ============================================================ */

function setDate() {

    const dateElement =
        document.getElementById(
            "currentDate"
        );


    if (!dateElement) {
        return;
    }


    const now =
        new Date();


    dateElement.textContent =
        now.toLocaleDateString(
            "en-IN",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );
}


/* ============================================================
   THEME
   HTML:
   onclick="toggleTheme()"
   ============================================================ */

function setTheme(theme) {

    const body =
        document.body;

    const themeButton =
        document.getElementById(
            "themeToggle"
        );


    if (!body) {
        return;
    }


    if (theme === "dark") {

        body.classList.add("dark");

    } else {

        body.classList.remove("dark");
    }


    localStorage.setItem(
        "ggl-theme",
        theme
    );


    if (themeButton) {

        const icon =
            themeButton.querySelector(
                "i"
            );


        if (icon) {

            icon.className =
                theme === "dark"
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";
        }


        themeButton.setAttribute(
            "aria-label",
            theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    }
}


function toggleTheme() {

    const isDark =
        document.body.classList.contains(
            "dark"
        );


    setTheme(
        isDark
            ? "light"
            : "dark"
    );
}


function loadTheme() {

    const savedTheme =
        localStorage.getItem(
            "ggl-theme"
        );


    if (
        savedTheme === "dark" ||
        savedTheme === "light"
    ) {

        setTheme(savedTheme);

        return;
    }


    const prefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    setTheme(
        prefersDark
            ? "dark"
            : "light"
    );
}


function initializePortal() {
    try {
        loadTheme();
    } catch (error) {
        console.error("Theme initialization error:", error);
    }

    try {
        setDate();
    } catch (error) {
        console.error("Date initialization error:", error);
    }

    try {
        setupEventListeners();
    } catch (error) {
        console.error("Event setup error:", error);
    }

    window.setTimeout(() => {
        hideWelcomeScreen();
    }, 500);
}

/* ============================================================
   GLOBAL KEYBOARD SHORTCUTS
   ============================================================ */

function handleKeyboardShortcuts(event) {

    const activeElement =
        document.activeElement;


    const isTyping =
        activeElement &&
        (
            activeElement.tagName ===
                "INPUT" ||
            activeElement.tagName ===
                "TEXTAREA" ||
            activeElement.isContentEditable
        );


    /* =========================
       "/" = SEARCH
    ========================= */

    if (
        event.key === "/" &&
        !isTyping &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
    ) {

        event.preventDefault();


        const search =
            document.getElementById(
                "searchInput"
            );


        if (search) {
            search.focus();
        }


        return;
    }


    /* =========================
       CTRL + K / CMD + K
    ========================= */

    if (
        event.key.toLowerCase() === "k" &&
        (event.ctrlKey ||
            event.metaKey)
    ) {

        event.preventDefault();


        const search =
            document.getElementById(
                "searchInput"
            );


        if (search) {

            search.focus();
            search.select();
        }


        return;
    }


    /* =========================
       ESCAPE
    ========================= */

    if (event.key === "Escape") {

        closeModal();


        const searchResults =
            document.getElementById(
                "searchResults"
            );


        if (searchResults) {

            searchResults.classList.remove(
                "show"
            );
        }
    }
}


/* ============================================================
   GLOBAL EVENT SETUP
   ============================================================ */

function setupEventListeners() {

    /*
     * The HTML already uses inline onclick,
     * oninput and onkeydown handlers.
     *
     * Therefore we DO NOT attach duplicate
     * listeners to those elements.
     *
     * This prevents double-opening panels
     * and double-toggling the theme.
     */

    document.addEventListener(
        "keydown",
        handleKeyboardShortcuts
    );


    /* =========================
       CLOSE SEARCH WHEN CLICKING
       OUTSIDE SEARCH AREA
    ========================= */

    document.addEventListener(
        "click",
        event => {

            const searchWrap =
                document.querySelector(
                    ".search-wrap"
                );


            const results =
                document.getElementById(
                    "searchResults"
                );


            if (
                results &&
                searchWrap &&
                !searchWrap.contains(
                    event.target
                )
            ) {

                results.classList.remove(
                    "show"
                );
            }
        }
    );
}


/* ============================================================
   STARTUP
   ============================================================ */

function initializePortal() {

    /*
     * IMPORTANT:
     * Everything here is deliberately wrapped
     * so one missing optional element cannot
     * stop the loading screen from disappearing.
     */

    try {
        loadTheme();
    } catch (error) {
        console.error(
            "Theme initialization error:",
            error
        );
    }


    try {
        setDate();
    } catch (error) {
        console.error(
            "Date initialization error:",
            error
        );
    }


    try {
        setupEventListeners();
    } catch (error) {
        console.error(
            "Event setup error:",
            error
        );
    }


    /*
     * Remove loading screen after the page
     * has rendered.
     *
     * No clock.
     * No external dependency.
     */

    window.setTimeout(
        () => {

            try {
                hideWelcomeScreen();
            } catch (error) {

                console.error(
                    "Welcome screen error:",
                    error
                );

                /*
                 * Emergency fallback:
                 * ensure the loading overlay
                 * cannot remain permanently.
                 */

                const welcome =
                    document.getElementById(
                        "welcomeScreen"
                    );

                if (welcome) {
                    welcome.style.display =
                        "none";
                }
            }

        },
        700
    );
}


/* ============================================================
   DOM READY
   ============================================================ */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializePortal
    );

} else {

    initializePortal();
}

