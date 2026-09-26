/* ==========================================================================
   Indian Penpals' League (IPL) - Main Global Module
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initBackToTop();
    initDynamicYear();
    initLanguageToggle();
    initToastContainer();
});

/**
 * Back to Top Floating Button
 */
function initBackToTop() {
    let btn = document.querySelector('.back-to-top');
    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Back to top of page');
        btn.innerHTML = '<span class="material-symbols-outlined">arrow_upward</span>';
        document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Toast Notification System
 */
function initToastContainer() {
    if (!document.getElementById('toastNotification')) {
        const toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'toast';
        toast.innerHTML = `
            <span class="material-symbols-outlined" id="toastIcon">check_circle</span>
            <div id="toastMessage">Action completed successfully</div>
        `;
        document.body.appendChild(toast);
    }
}

window.showToast = function(message, type = 'success') {
    const toast = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    if (type === 'error') {
        toast.style.borderLeftColor = 'var(--color-error)';
        if (toastIcon) toastIcon.textContent = 'error';
    } else {
        toast.style.borderLeftColor = 'var(--color-gold)';
        if (toastIcon) toastIcon.textContent = 'check_circle';
    }

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
};

/**
 * URL Query Parameter Helper
 */
window.getQueryParam = function(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};

/**
 * Language Selector Toggle
 */
function initLanguageToggle() {
    const savedLang = localStorage.getItem('ipl_language') || 'en';
    if (typeof setSiteLanguage === 'function') {
        setSiteLanguage(savedLang);
    }

    const langBtns = document.querySelectorAll('.lang-btn, #langEN, #langTA');
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = btn.textContent.trim();
            const targetLang = (text === 'தமிழ்' || btn.id === 'langTA') ? 'ta' : 'en';
            if (typeof toggleLanguage === 'function') {
                toggleLanguage(targetLang);
            }
        });
    });
}

/**
 * Set Dynamic Copyright Year
 */
function initDynamicYear() {
    const yearEls = document.querySelectorAll('.current-year');
    const year = new Date().getFullYear();
    yearEls.forEach(el => el.textContent = year);
}
