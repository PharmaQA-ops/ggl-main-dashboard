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
                url: "https://gaerish.mylogisys.com/Login"
            },
            {
                name: "GGL ERP - Sentinel",
                url: "https://gaerish.sentinel.com/Login"
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
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=2105414371#gid=2105414371"
            },
            {
                name: "Air Export",
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=486617436#gid=486617436"
            },
            {
                name: "Sea Import",
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=0#gid=0"
            },
            {
                name: "Air Import",
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=1420573940#gid=1420573940"
            },
            {
                name: "NAP",
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=570041459#gid=570041459"
            },
            {
                name: "Defence",
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=1706426280#gid=1706426280"
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
                url: "https://script.google.com/a/~/macros/s/AKfycbwpDLadlpO3ZnFSHk1T0WShLs7V403jIGKhHE5UQHUZQ7W3VbA2lfRy0z7lc-JfovYPgw/exec"
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
                url: "https://www.maersk.com/"
            },
            {
                name: "MSC",
                description: " - Mediterranean Shipping Company",
                url: "https://www.msc.com/en/track-a-shipment?_gl=1*1qury40*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwtp7VBhBjEiwAJfpV-24Bb_LUJTKP3oC6umLAu7Qtf2Fn59nMC5SrdJ1z_OnK2n33G_rdpBoCJQUQAvD_BwE&gclsrc=aw.ds&gbraid=0AAAAABYXqUsrwZNb-XUNGGdceIIKez3Nl"
            },
            {
                name: "CMA CGM",
                url: "https://www.cma-cgm.com/ebusiness/tracking"
            },
            {
                name: "Hapag-Lloyd",
                url: "https://identity.hapag-lloyd.com/hlagwebprod.onmicrosoft.com/b2c_1a_signup_signin/oauth2/v2.0/authorize?client_id=64d7a44b-1c5b-4b52-9ff9-254f7acd8fc0&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.hapag-lloyd.com%2Fsolutions%2Fauth%2F&client-request-id=01a09edb-37d1-70ec-bceb-1bd99ded46d9&response_mode=fragment&client_info=1&clidata=1&nonce=01a09edb-37d1-7baa-a491-576f8f697661&state=eyJpZCI6IjAxYTA5ZWRiLTM3ZDEtNzViNi04ZjgzLWM3MTM0NjA5YTgwZSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&x-client-SKU=msal.js.browser&x-client-VER=4.30.0&response_type=code&code_challenge=l8-6ABvXKfaGBrE9-FNLoAXTmaPqtBX6c_kL_L6x860&code_challenge_method=S256"
            },
            {
                name: "ONE",
                description: " - Ocean Network Express",
                url: "https://www.one-line.com/en"
            },
            {
                name: "COSCO",
                url: "https://elines.coscoshipping.com/ebusiness/"
            },
            {
                name: "HMM",
                url: "https://www.hmm21.com/e-service/general/DashBoard.do"
            },
            {
                name: "ZIM",
                description: "ZIM Integrated Shipping Services",
                url: "https://mylogin.zim.com/mylogin.zim.com/b2c_1a_signup_signin_otp_for_all/oauth2/v2.0/authorize?client_id=4daa8630-5da0-4ed6-95bb-31c3267892b6&scope=https%3A%2F%2FZIMIDMPRD.onmicrosoft.com%2Ftasks%2Fread%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fmy.zim.com%2F&client-request-id=01a09ee0-ee53-7d1f-8be0-7b4a684397fc&response_mode=fragment&client_info=1&clidata=1&nonce=01a09ee0-ee55-7089-bc49-12a1c021ebd3&state=eyJpZCI6IjAxYTA5ZWUwLWVlNTQtNzdmMS1hMjZiLTQzMzBlZTc3ZTA3YiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&claims=%7B%22id_token%22%3A%7B%22signin_state%22%3A%7B%22essential%22%3Afalse%7D%2C%22login_hint%22%3A%7B%22essential%22%3Afalse%7D%7D%7D&x-client-SKU=msal.js.browser&x-client-VER=5.16.0&response_type=code&code_challenge=KzjgD80b4TxFZ-Qh_JTPOdweJfLlnhIRp8o4Y-26N2A&code_challenge_method=S256"
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
                name: "Policies",
                description: " - Company policies",
                url: "https://drive.google.com/drive/folders/1xMXE0VhhqradKT4IjC_STx3jLNyTDLce?usp=drive_link"
            },
            {
                name: "SOPs",
                description: " - Standard Operating Procedures",
                url: "https://drive.google.com/drive/folders/1zrPg07iboGhNlQ2Z4u6igtJsXOW0A3KP?usp=sharing"
            },
            {
                name: "Work Instructions",
                description: " - Operational work instructions",
                url: "https://drive.google.com/drive/folders/1_oZuinBxhplHFokcowPI6QR5I7zNyhYV?usp=sharing"
            },
            {
                name: "Forms & Formats",
                description: " - Approved forms and formats",
                url: "https://drive.google.com/drive/folders/1amV21lMncKGkbADVbjs-t4ZXFgfXsCbJ?usp=sharing"
            },
            {
                name: "Manuals",
                description: " - Company and operational manuals",
                url: "https://drive.google.com/drive/folders/1HjHp42JD0U3SU5tBbKKj26rNDOn5LsDp?usp=sharing"
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
                url: "https://gaerish.keka.com"
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
                url: "https://forms.gle/cpDyKdebZqyA7Su57"
            },
            {
                name: "IT Applications",
                description: "Business applications",
                url: "https://script.google.com/a/~/macros/s/AKfycbzLny-kwJPf-0t0IKZ3p2uScQ2q4m10_hnAOdu2-pzawLHvnl1rMe7jieVbVDsSkNvevA/exec"
            },
            {
                name: "IT Documents",
                description: "IT documentation",
                url: "https://drive.google.com/drive/folders/1_B1v3QK4--no8ko7G8HotVl4EMDZ-vAu?usp=sharing"
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
                description: " - Indian Customs electronic gateway",
                url: "https://foservices.icegate.gov.in/#/login"
            },
            {
                name: "DGFT",
                description: " - Directorate General of Foreign Trade",
                url: "https://www.dgft.gov.in/CP/"
            },
            {
                name: "GST",
                description: " - Goods and Services Tax portal",
                url: "https://www.gst.gov.in/docadvisor/"
            },
            {
                name: "Customs",
                description: " - Customs resources",
                url: "https://www.cbic.gov.in/"
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
                description: " - World logistics network",
                url: "https://ourwpa.com/en/members/dashboard"
            },
           {
                name: "Other Networks",
                description: " - Other business networks",
                url: "https://docs.google.com/spreadsheets/d/19GAkeGgL8TXrXt3-SYJhdPbIl_HyOVs2LbgVEgK2hzc/edit?gid=701763697#gid=701763697"
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
                description: " - Corporate website",
                url: "gaerishlogistic.com"
            },
            {
                name: "Gaerish Defence",
                description: " - Defence logistics website",
                url: "gaerishdefence.com"
            },
            {
                name: "Gaerish E-Trade",
                description: " - E-Trade platform",
                url: "gaerishetrade.com"
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
                description: " - World Cargo Alliance",
                url: "https://www.wcaworld.com/"
            }
        ]
    },


    /* =========================
       11 GGL KNOWLEDGE
    ========================= */

   "GGL KNOWLEDGE": {
    title: "GGL KNOWLEDGE",
    description: "International Logistics Knowledge & Reference",

    resources: [
        {
            name: "FIATA Freight Forwarding",
            description: "International freight forwarding and logistics reference",
            url: "https://fiata.org/about-freight-forwarding/"
        },
        {
            name: "Incoterms",
            description: "International trade terms and Incoterms reference",
            url: "https://iccwbo.org/business-solutions/incoterms-rules/"
        },
        {
            name: "Shipping & Maritime",
            description: "International maritime transport, shipping and regulatory reference",
            url: "https://www.imo.org/"
        },
        {
            name: "Customs & Trade",
            description: "International customs terminology and trade facilitation",
            url: "https://www.wcoomd.org/en/topics/facilitation/instrument-and-tools/tools/glossary-of-international-customs-terms.aspx"
        },
        {
            name: "Global Shipping Reports",
            description: "Global maritime trade, ports, freight rates and shipping analysis",
            url: "https://unctad.org/topic/transport-and-trade-logistics/review-of-maritime-transport"
        },
        {
            name: "SOLAS & MARPOL",
            description: "International maritime safety and environmental regulations",
            url: "https://www.imo.org/en/about/conventions"
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


/* ============================================================
   WELCOME / LOADING SCREEN
   HTML:
   #welcomeScreen
   ============================================================ */

function hideWelcomeScreen() {

    const welcomeScreen =
        document.getElementById("welcomeScreen");

    if (!welcomeScreen) return;

    welcomeScreen.classList.add("hide");
    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.visibility = "hidden";
    welcomeScreen.style.pointerEvents = "none";

    window.setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 700);
}



function showWelcomeScreen() {

    const welcomeScreen =
        document.getElementById(
            "welcomeScreen"
        );


    if (!welcomeScreen) {
        return;
    }


    welcomeScreen.classList.remove(
        "hide"
    );
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

    // Start the loading-screen removal first.
    // This must not depend on any other initialization.
    window.setTimeout(hideWelcomeScreen, 500);

    /*
     * IMPORTANT:
     * Everything else is deliberately wrapped
     * so optional failures cannot block the portal.
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
