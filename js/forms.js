/* ==========================================================================
   Indian Penpals' League (IPL) - Forms & Modals Module
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMembershipForm();
    initContactForm();
    initEventRsvpForm();
    initSponsorshipModal();
});

/**
 * Membership Registration Form Handler
 */
function initMembershipForm() {
    const form = document.getElementById('iplMembershipForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Perform validation
        const fullName = form.querySelector('#fullName')?.value.trim();
        const email = form.querySelector('#emailAddr')?.value.trim();
        const mobile = form.querySelector('#mobileNo')?.value.trim();

        if (!fullName || !email || !mobile) {
            showToast('Please fill in all mandatory fields (*)', 'error');
            return;
        }

        // Show Success Feedback
        const successBox = document.getElementById('submissionSuccess');
        if (successBox) {
            successBox.classList.remove('hidden');
            form.style.display = 'none';
            successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        showToast('Membership application submitted successfully! Welcome to IPL.', 'success');
    });
}

/**
 * Contact Inquiry Form Handler
 */
function initContactForm() {
    const form = document.getElementById('contact-inquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#contact-name')?.value.trim();
        const email = form.querySelector('#contact-email')?.value.trim();
        const message = form.querySelector('#contact-message')?.value.trim();

        if (!name || !email || !message) {
            showToast('Please complete all required fields.', 'error');
            return;
        }

        const successAlert = document.getElementById('contactSuccessAlert');
        if (successAlert) {
            successAlert.classList.remove('hidden');
            form.reset();
        }

        showToast('Thank you! Your official inquiry has been dispatched to the Secretariat.', 'success');
    });
}

/**
 * Event RSVP Form Handler
 */
function initEventRsvpForm() {
    const form = document.getElementById('eventRsvpForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('RSVP Confirmed! Delegate badge details have been emailed.', 'success');
        form.reset();
    });
}

/**
 * Service Sponsorship Modal Logic
 */
function initSponsorshipModal() {
    // Global modal trigger handlers
    window.openSupportModal = function(serviceTitle) {
        const modal = document.getElementById('supportModal');
        const titleSpan = document.getElementById('modalServiceTitle');
        if (modal) {
            if (titleSpan && serviceTitle) titleSpan.textContent = serviceTitle;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeSupportModal = function() {
        const modal = document.getElementById('supportModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // Close on backdrop click
    const modal = document.getElementById('supportModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeSupportModal();
        });
    }

    // Modal Form Submission
    const modalForm = document.getElementById('sponsorshipModalForm');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Thank you for pledging your humanitarian support! We will connect shortly.', 'success');
            window.closeSupportModal();
            modalForm.reset();
        });
    }
}
