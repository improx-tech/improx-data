<?php
/**
 * Footer Template for Improx Data
 * Enterprise Data & Admin Services
 *
 * @package Improx_Data
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

    <!-- Main Footer -->
    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-widgets-grid">
                
                <!-- Col 1: Brand Info -->
                <div class="footer-col brand-col">
                    <div class="footer-logo">
                        <span class="brand-text">
                            <span class="brand-name">IMPROX</span><span class="brand-tag">DATA</span>
                        </span>
                    </div>
                    <p class="footer-tagline">
                        <?php esc_html_e('Enterprise Data & Administrative Operations. High-precision keying, automated web data harvesting, CRM cleansing, and executive Power BI analytics backed by 99.9% accuracy SLAs.', 'improx-data'); ?>
                    </p>
                    <div class="footer-location-info">
                        <span style="font-size: 12px; color: #cbd5e1; display: block; margin-bottom: 4px;"><strong>Delaware Corporate Entity:</strong> Coastal Highway, Lewes, DE 19958, USA</span>
                        <span style="font-size: 12px; color: #cbd5e1; display: block;"><strong>Email:</strong> <a href="mailto:enquiry@improxgroup.com" style="color: #38bdf8;">enquiry@improxgroup.com</a></span>
                    </div>
                </div>

                <!-- Col 2: The 6 Core Services -->
                <div class="footer-col">
                    <h4 class="footer-col-title"><?php esc_html_e('Core Services', 'improx-data'); ?></h4>
                    <ul class="footer-links-list">
                        <li><a href="#service-data-entry"><?php esc_html_e('1. Data Entry', 'improx-data'); ?></a></li>
                        <li><a href="#service-web-scraping"><?php esc_html_e('2. Web Scraping', 'improx-data'); ?></a></li>
                        <li><a href="#service-data-processing"><?php esc_html_e('3. Data Processing', 'improx-data'); ?></a></li>
                        <li><a href="#service-data-analytics"><?php esc_html_e('4. Data Analytics', 'improx-data'); ?></a></li>
                        <li><a href="#service-admin-assistant"><?php esc_html_e('5. Administrative Assistant', 'improx-data'); ?></a></li>
                        <li><a href="#service-data-services"><?php esc_html_e('6. Data Services', 'improx-data'); ?></a></li>
                    </ul>
                </div>

                <!-- Col 3: Industry Verticals -->
                <div class="footer-col">
                    <h4 class="footer-col-title"><?php esc_html_e('Industries Served', 'improx-data'); ?></h4>
                    <ul class="footer-links-list">
                        <li><a href="<?php echo esc_url(home_url('/industry-banking-fintech/')); ?>"><?php esc_html_e('Banking & Mortgage FinTech', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/industry-healthcare-ehr/')); ?>"><?php esc_html_e('Healthcare & Patient EHR', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/industry-ecommerce-retail/')); ?>"><?php esc_html_e('E-Commerce & Retail Catalogs', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/industry-logistics-freight/')); ?>"><?php esc_html_e('Logistics & Freight Bills', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/industry-legal-compliance/')); ?>"><?php esc_html_e('Legal & Contract Digitization', 'improx-data'); ?></a></li>
                    </ul>
                </div>

                <!-- Col 4: Quality & Compliance -->
                <div class="footer-col">
                    <h4 class="footer-col-title"><?php esc_html_e('Quality & Compliance', 'improx-data'); ?></h4>
                    <ul class="footer-links-list">
                        <li><a href="#qa-protocol-section"><?php esc_html_e('4-Stage Dual-Blind QA', 'improx-data'); ?></a></li>
                        <li><a href="#request-sample-batch"><?php esc_html_e('Project Batch Evaluation', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/case-studies/')); ?>"><?php esc_html_e('Client Case Studies', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/about-us/')); ?>"><?php esc_html_e('About Improx Data', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Get In Touch', 'improx-data'); ?></a></li>
                    </ul>
                </div>

            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom-row">
                <p class="copyright-text">
                    &copy; <?php echo esc_html(date('Y')); ?> <strong>Improx Data and Cloud Consulting Private Limited</strong>. <?php esc_html_e('All rights reserved.', 'improx-data'); ?>
                </p>
                <div class="footer-legal-links" style="display:flex; gap:16px;">
                    <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>" style="color:#94a3b8;"><?php esc_html_e('Privacy Policy', 'improx-data'); ?></a>
                    <a href="<?php echo esc_url(home_url('/terms/')); ?>" style="color:#94a3b8;"><?php esc_html_e('Terms & SLAs', 'improx-data'); ?></a>
                    <a href="#page" class="back-to-top-link" id="back-to-top-btn" style="color:#38bdf8;"><?php esc_html_e('Back to Top &uarr;', 'improx-data'); ?></a>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
