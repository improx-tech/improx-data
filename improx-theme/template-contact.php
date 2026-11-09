<?php
/**
 * Template Name: Contact & Advertise
 * Description: Editorial contact, partnerships, and media kit inquiries
 *
 * @package Improx_Data
 */

get_header();
?>

<main id="primary" class="site-main contact-page-main">
    <div class="container container-narrow">
        
        <header class="page-entry-header text-center">
            <span class="category-pill"><?php esc_html_e('GET IN TOUCH', 'improx-data'); ?></span>
            <h1 class="page-title"><?php esc_html_e('Contact Improx Data', 'improx-data'); ?></h1>
            <p class="page-intro-subtitle">
                <?php esc_html_e('Partner with us for editorial features, sponsored whitepapers, podcast sponsorships, or enterprise digital advertising.', 'improx-data'); ?>
            </p>
        </header>

        <div class="contact-cards-grid">
            <div class="contact-info-card">
                <div class="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h4><?php esc_html_e('Editorial Inquiries', 'improx-data'); ?></h4>
                <p><?php esc_html_e('Pitches, op-eds, expert commentary, or correction requests.', 'improx-data'); ?></p>
                <a href="mailto:editor@improxdata.com" class="contact-email-link">editor@improxdata.com</a>
            </div>

            <div class="contact-info-card">
                <div class="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h4><?php esc_html_e('Advertising & Partnerships', 'improx-data'); ?></h4>
                <p><?php esc_html_e('Media kit requests, banner sponsorships, and executive lead-gen.', 'improx-data'); ?></p>
                <a href="mailto:partners@improxdata.com" class="contact-email-link">partners@improxdata.com</a>
            </div>
        </div>

        <div class="submission-form-card" style="margin-top: 30px;">
            <h3><?php esc_html_e('Send a Direct Message', 'improx-data'); ?></h3>
            <form class="improx-styled-form" onsubmit="event.preventDefault(); alert('Message sent! Our partnership team will contact you shortly.');">
                <div class="form-row">
                    <div class="form-group">
                        <label><?php esc_html_e('Your Name *', 'improx-data'); ?></label>
                        <input type="text" required placeholder="John Smith" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label><?php esc_html_e('Corporate Email *', 'improx-data'); ?></label>
                        <input type="email" required placeholder="john@enterprise.com" class="form-control" />
                    </div>
                </div>

                <div class="form-group">
                    <label><?php esc_html_e('Inquiry Type *', 'improx-data'); ?></label>
                    <select class="form-control">
                        <option><?php esc_html_e('Advertising / Sponsorship / Media Kit', 'improx-data'); ?></option>
                        <option><?php esc_html_e('Editorial Pitch / Interview Request', 'improx-data'); ?></option>
                        <option><?php esc_html_e('Whitepaper Syndication', 'improx-data'); ?></option>
                        <option><?php esc_html_e('General Inquiry', 'improx-data'); ?></option>
                    </select>
                </div>

                <div class="form-group">
                    <label><?php esc_html_e('Message *', 'improx-data'); ?></label>
                    <textarea rows="5" required placeholder="Tell us how we can collaborate..." class="form-control"></textarea>
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-lg">
                    <?php esc_html_e('Send Inquiry', 'improx-data'); ?> &rarr;
                </button>
            </form>
        </div>

    </div>
</main>

<?php
get_footer();
