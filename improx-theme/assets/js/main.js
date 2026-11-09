/**
 * Improx Data - Interactive Script
 * Pure Vanilla JavaScript (Zero jQuery / Lightweight)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ====================================================
       1. SEARCH OVERLAY TRIGGER
       ==================================================== */
    const searchOpenBtn  = document.getElementById('search-open-btn');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const searchOverlay  = document.getElementById('search-overlay');
    const searchInput    = document.getElementById('search-input-field');

    if (searchOpenBtn && searchOverlay) {
        searchOpenBtn.addEventListener('click', () => {
            searchOverlay.classList.add('is-active');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 150);
            }
        });

        if (searchCloseBtn) {
            searchCloseBtn.addEventListener('click', () => {
                searchOverlay.classList.remove('is-active');
            });
        }

        // Close on Escape Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('is-active')) {
                searchOverlay.classList.remove('is-active');
            }
        });
    }

    /* ====================================================
       2. MOBILE DRAWER NAVIGATION
       ==================================================== */
    const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
    const closeDrawerBtn  = document.getElementById('close-drawer-btn');
    const mobileDrawer    = document.getElementById('mobile-drawer');

    if (mobileToggleBtn && mobileDrawer) {
        mobileToggleBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('is-active');
        });

        if (closeDrawerBtn) {
            closeDrawerBtn.addEventListener('click', () => {
                mobileDrawer.classList.remove('is-active');
            });
        }
    }

    /* ====================================================
       3. COPY ARTICLE LINK TO CLIPBOARD
       ==================================================== */
    const copyBtn = document.getElementById('copy-article-link');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const url = copyBtn.getAttribute('data-url') || window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const originalHtml = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span style="font-size:11px; font-weight:700; color:#16a34a;">Copied!</span>';
                setTimeout(() => {
                    copyBtn.innerHTML = originalHtml;
                }, 2200);
            }).catch(err => {
                console.error('Could not copy link', err);
            });
        });
    }

    /* ====================================================
       4. AUTO TABLE OF CONTENTS GENERATOR (Single Posts)
       ==================================================== */
    const contentArea = document.getElementById('article-entry-content');
    const tocContainer = document.getElementById('improx-auto-toc');
    const tocList = document.getElementById('toc-list');
    const tocToggleBtn = document.getElementById('toc-toggle-btn');

    if (contentArea && tocContainer && tocList) {
        const headings = contentArea.querySelectorAll('h2, h3');
        if (headings.length >= 2) {
            headings.forEach((heading, index) => {
                // Ensure heading has an ID
                let headingId = heading.getAttribute('id');
                if (!headingId) {
                    headingId = 'section-' + index + '-' + heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    heading.setAttribute('id', headingId);
                }

                const li = document.createElement('li');
                if (heading.tagName.toLowerCase() === 'h3') {
                    li.style.marginLeft = '16px';
                    li.style.fontSize = '13px';
                }

                const a = document.createElement('a');
                a.href = '#' + headingId;
                a.textContent = heading.textContent;
                li.appendChild(a);
                tocList.appendChild(li);
            });

            tocContainer.style.display = 'block';

            if (tocToggleBtn) {
                tocToggleBtn.addEventListener('click', () => {
                    if (tocList.style.display === 'none') {
                        tocList.style.display = 'block';
                        tocToggleBtn.textContent = 'Hide';
                    } else {
                        tocList.style.display = 'none';
                        tocToggleBtn.textContent = 'Show';
                    }
                });
            }
        }
    }

    /* ====================================================
       5. SMOOTH SCROLL BACK TO TOP
       ==================================================== */
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
