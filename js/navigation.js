/* ==========================================================================
   Indian Penpals' League (IPL) - Navigation Module
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initStickyHeader();
    initMobileNav();
    initMobileAccordion();
    highlightActivePage();
});

/**
 * Sticky Header Scroll Effect
 */
function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

/**
 * Mobile Navigation Drawer Toggle & Overlay
 */
function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const closeBtn = document.querySelector('.mobile-drawer-close');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const overlay = document.querySelector('.drawer-overlay');

    if (!toggleBtn || !drawer || !overlay) return;

    function openDrawer() {
        drawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Close drawer when pressing Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
            closeDrawer();
        }
    });
}

/**
 * Mobile Navigation Accordion for Sub-menus
 */
function initMobileAccordion() {
    const accordionToggles = document.querySelectorAll('.mobile-accordion-toggle');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const subMenu = toggle.nextElementSibling;
            const icon = toggle.querySelector('.accordion-icon');
            const isOpen = subMenu && subMenu.classList.contains('open');

            // Close all open submenus first
            document.querySelectorAll('.mobile-sub-menu.open').forEach(menu => {
                menu.classList.remove('open');
                menu.style.maxHeight = null;
            });
            document.querySelectorAll('.accordion-icon.rotated').forEach(ic => {
                ic.classList.remove('rotated');
            });

            // Open clicked one if it was closed
            if (!isOpen && subMenu) {
                subMenu.classList.add('open');
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
                if (icon) icon.classList.add('rotated');
            }
        });
    });
}

/**
 * Highlight Current Page Link in Navigation
 */
function highlightActivePage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Exact match or homepage match
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else if (
            (currentPath === 'service-detail.html' && href === 'humanitarian-services.html') ||
            (currentPath === 'news-detail.html' && href === 'news-events.html') ||
            (currentPath === 'event-detail.html' && href === 'news-events.html') ||
            (currentPath === 'events.html' && href === 'news-events.html') ||
            (currentPath === 'friendship-meets.html' && href === 'news-events.html') ||
            (currentPath === 'friends-day.html' && href === 'news-events.html') ||
            (currentPath === 'team-member.html' && href === 'team.html') ||
            (currentPath === 'history.html' && href === 'about.html') ||
            (currentPath === 'presidents-blog.html' && href === 'about.html')
        ) {
            // Highlight parent navigation on drill-down pages
            link.classList.add('active');
        }
    });
}
