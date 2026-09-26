/**
 * =====================================================================
 * INDIAN PENPALS' LEAGUE — Site Configuration File
 * =====================================================================
 * UPDATE THIS FILE to instantly change content across the ENTIRE site.
 * After editing, refresh the browser — all changes apply everywhere.
 * =====================================================================
 */

const IPL_CONFIG = {

    // ── ORGANISATION ──────────────────────────────────────────────
    org: {
        name:       "Indian Penpals' League",
        shortName:  "IPL",
        tagline:    "Love, Friendship & Humanity",
        founded:    "March 12, 1995",
        regNumber:  "F23778",
        cert:       "80G Certified Social Welfare Trust",
        location:   "Chembur, Mumbai, India",
    },

    // ── CONTACT ───────────────────────────────────────────────────
    contact: {
        phone:       "+91 9892035187",
        email:       "iplmumbai12395@gmail.com",
        address:     "B-602, Raj Ekjyot Sukriti, Opp. Fire Brigade, Chembur, Mumbai 400071, India.",
        presidentName: "M. Karun",
        presidentTitle: "Founder-President",
    },

    // ── LOGO ──────────────────────────────────────────────────────
    logo: {
        src:    "images/ipl-logo.png",
        alt:    "Indian Penpals' League Emblem",
        fallback: "images/ipl-logo.png",
    },

    // ── NAVIGATION MENU ───────────────────────────────────────────
    // Add/remove/reorder nav items here. Changes apply to desktop & mobile.
    nav: [
        { label: "Home",                   page: "home" },
        { label: "About",                  page: "about", children: [
            { label: "History",            page: "history" },
            { label: "President's Blog",   page: "presidents-blog" },
        ]},
        { label: "Our Team",               page: "team" },
        { label: "Humanitarian Services",  page: "humanitarian" },
        { label: "News & Events",          page: "news-events", children: [
            { label: "IPL News",           page: "news-events" },
            { label: "Events",             page: "events" },
            { label: "Friendship Meets",   page: "friendship-meets" },
            { label: "Friends Day",        page: "friends-day" },
        ]},
        { label: "Contact",                page: "contact" },
    ],

    // ── KEY STATS ─────────────────────────────────────────────────
    // Change numbers here → counters on the homepage update automatically.
    stats: [
        { value: 30,   suffix: "+", label: "Years of Service" },
        { value: 14,   suffix: "",  label: "Indian States" },
        { value: 500,  suffix: "+", label: "Convention Delegates" },
        { value: 1000, suffix: "+", label: "Active Members" },
    ],

    // ── SOCIAL MEDIA ──────────────────────────────────────────────
    social: {
        facebook:   "",   // e.g. "https://facebook.com/iplmumbai"
        instagram:  "",
        twitter:    "",
        youtube:    "",
    },

};

// ── APPLY CONFIG TO PAGE ──────────────────────────────────────────────────
// This auto-runs and injects config values into the DOM.
document.addEventListener('DOMContentLoaded', function() {
    applyConfig();
});

function applyConfig() {
    const C = IPL_CONFIG;

    // Phone links
    document.querySelectorAll('[data-cfg="phone"]').forEach(el => {
        el.textContent = C.contact.phone;
        if (el.tagName === 'A') el.href = 'tel:' + C.contact.phone.replace(/\s/g,'');
    });

    // Email links
    document.querySelectorAll('[data-cfg="email"]').forEach(el => {
        el.textContent = C.contact.email;
        if (el.tagName === 'A') el.href = 'mailto:' + C.contact.email;
    });

    // Address
    document.querySelectorAll('[data-cfg="address"]').forEach(el => {
        el.innerHTML = C.contact.address;
    });

    // Reg number
    document.querySelectorAll('[data-cfg="reg"]').forEach(el => {
        el.textContent = '#' + C.org.regNumber;
    });

    // Founded date
    document.querySelectorAll('[data-cfg="founded"]').forEach(el => {
        el.textContent = C.org.founded;
    });

    // Certification
    document.querySelectorAll('[data-cfg="cert"]').forEach(el => {
        el.textContent = C.org.cert;
    });

    // Location
    document.querySelectorAll('[data-cfg="location"]').forEach(el => {
        el.textContent = C.org.location;
    });

    // Logo src/alt
    document.querySelectorAll('[data-cfg="logo"]').forEach(el => {
        el.src = C.logo.src;
        el.alt = C.logo.alt;
        el.onerror = function() { this.src = C.logo.fallback; };
    });

    // Copyright year
    const y = new Date().getFullYear();
    document.querySelectorAll('[data-cfg="year"]').forEach(el => el.textContent = y);
}
