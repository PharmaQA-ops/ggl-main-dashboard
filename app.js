// ===============================
// GGL MAIN DASHBOARD
// ===============================

let GGL_LINKS = {};

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
        icon: "fa-shield"
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
        icon: "fa-folder"
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


// ===============================
// LOAD LINKS FROM links.json
// ===============================

async function loadLinks() {

    try {

        const response = await fetch("links.json");

        if (!response.ok) {
            throw new Error("Could not load links.json");
        }

        const data = await response.json();

        GGL_LINKS = {};

        data.forEach(item => {

            if (!item.active) return;

            if (!GGL_LINKS[item.category]) {

                GGL_LINKS[item.category] = {

                    title: item.category,

                    subtitle:
                        CATEGORY_INFO[item.category]?.subtitle || "",

                    icon:
                        CATEGORY_INFO[item.category]?.icon || "fa-link",

                    links: []

                };
            }

            GGL_LINKS[item.category].links.push({

                name: item.name,

                description:
                    item.description || "",

                keywords:
                    item.keywords || "",

                url:
                    item.url,

                icon:
                    item.icon || "fa-link",

                order:
                    Number(item.order) || 999

            });

        });


        // Sort links by order

        Object.keys(GGL_LINKS).forEach(category => {

            GGL_LINKS[category].links.sort(
                (a, b) => a.order - b.order
            );

        });


        console.log(
            "GGL links loaded:",
            GGL_LINKS
        );


        // Continue with your existing dashboard rendering

        if (typeof renderCategories === "function") {
            renderCategories();
        }


    } catch (error) {

        console.error(
            "Error loading links.json:",
            error
        );

    }

}


// ===============================
// START DASHBOARD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadLinks();

    }
);
