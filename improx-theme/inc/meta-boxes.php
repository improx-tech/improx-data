<?php
/**
 * Inbuilt Native Meta Boxes for Data & Admin Services
 * Replaces ACF Pro with zero plugin overhead.
 *
 * @package Improx_Data
 */

if (!defined('ABSPATH')) {
    exit;
}

function improx_add_business_meta_boxes() {
    // 1. Service Meta
    add_meta_box(
        'improx_service_config',
        __('Data & Admin Service Configuration', 'improx-data'),
        'improx_render_service_meta_box',
        'services',
        'normal',
        'high'
    );

    // 2. Case Study Meta
    add_meta_box(
        'improx_cs_config',
        __('Case Study ROI & Performance Data', 'improx-data'),
        'improx_render_cs_meta_box',
        'case-studies',
        'normal',
        'high'
    );

    // 3. Testimonial Meta
    add_meta_box(
        'improx_test_config',
        __('Client Executive & Trust Information', 'improx-data'),
        'improx_render_test_meta_box',
        'testimonials',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'improx_add_business_meta_boxes');

/**
 * 1. Render Service Meta Box
 */
function improx_render_service_meta_box($post) {
    wp_nonce_field('improx_save_service_meta', 'improx_service_meta_nonce');

    $service_type = get_post_meta($post->ID, '_improx_service_type', true);
    $short_desc   = get_post_meta($post->ID, '_improx_service_short_desc', true);
    $deliverables = get_post_meta($post->ID, '_improx_service_deliverables', true);
    $sla_badge    = get_post_meta($post->ID, '_improx_service_sla', true);
    $order_num    = get_post_meta($post->ID, '_improx_service_order', true);
    ?>
    <div style="display: flex; flex-direction: column; gap: 14px; padding: 10px 0;">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
            <div>
                <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                    <?php _e('Main Service Category:', 'improx-data'); ?>
                </label>
                <select name="improx_service_type" style="width: 100%; padding: 8px; font-weight: 600;">
                    <option value="data-entry" <?php selected($service_type, 'data-entry'); ?>>1. Data Entry</option>
                    <option value="web-scraping" <?php selected($service_type, 'web-scraping'); ?>>2. Web Scraping</option>
                    <option value="data-processing" <?php selected($service_type, 'data-processing'); ?>>3. Data Processing</option>
                    <option value="data-analytics" <?php selected($service_type, 'data-analytics'); ?>>4. Data Analytics</option>
                    <option value="admin-assistant" <?php selected($service_type, 'admin-assistant'); ?>>5. Administrative Assistant</option>
                    <option value="data-services" <?php selected($service_type, 'data-services'); ?>>6. Data Services</option>
                </select>
            </div>
            <div>
                <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                    <?php _e('Display Order (1-6):', 'improx-data'); ?>
                </label>
                <input type="number" name="improx_service_order" value="<?php echo esc_attr($order_num ? $order_num : '1'); ?>" min="1" max="10" style="width: 100%; padding: 8px;">
            </div>
        </div>

        <div>
            <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                <?php _e('Short Value Proposition (1-2 sentences for card previews):', 'improx-data'); ?>
            </label>
            <input type="text" name="improx_service_short_desc" value="<?php echo esc_attr($short_desc); ?>" style="width: 100%; padding: 8px;" placeholder="e.g. High-throughput document transcription, OCR verification, and structured schema keying with 99.9% accuracy guarantee.">
        </div>

        <div>
            <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                <?php _e('Key Capabilities & Deliverables (One per line):', 'improx-data'); ?>
            </label>
            <textarea name="improx_service_deliverables" rows="4" style="width: 100%; padding: 8px;" placeholder="• Double-blind keying validation&#10;• Legacy paper document digitization&#10;• High-speed OCR error verification&#10;• Daily queue execution & SLA reporting"><?php echo esc_textarea($deliverables); ?></textarea>
            <span style="font-size: 12px; color: #64748b;">These will appear as checked feature points on the service cards.</span>
        </div>

        <div>
            <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                <?php _e('SLA / Quality Guarantee Badge:', 'improx-data'); ?>
            </label>
            <input type="text" name="improx_service_sla" value="<?php echo esc_attr($sla_badge); ?>" style="width: 100%; padding: 8px;" placeholder="e.g. 99.94% Accuracy SLA • 24/48h Turnaround">
        </div>
    </div>
    <?php
}

/**
 * 2. Render Case Study Meta Box
 */
function improx_render_cs_meta_box($post) {
    wp_nonce_field('improx_save_cs_meta', 'improx_cs_meta_nonce');

    $metric_val   = get_post_meta($post->ID, '_improx_cs_metric_val', true);
    $metric_label = get_post_meta($post->ID, '_improx_cs_metric_label', true);
    $client_ind   = get_post_meta($post->ID, '_improx_cs_client_ind', true);
    $tech_stack   = get_post_meta($post->ID, '_improx_cs_tech_stack', true);
    $service_link = get_post_meta($post->ID, '_improx_cs_service_type', true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 16px; padding: 10px 0;">
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 14px;">
            <label style="display: block; font-weight: 800; color: #1e40af; margin-bottom: 4px;">
                <?php _e('Headline Metric (ROI):', 'improx-data'); ?>
            </label>
            <input type="text" name="improx_cs_metric_val" value="<?php echo esc_attr($metric_val); ?>" style="width: 100%; font-size: 20px; font-weight: 800; padding: 6px;" placeholder="e.g. 99.94% or 800K+">

            <label style="display: block; font-weight: 700; color: #1e40af; margin: 12px 0 4px;">
                <?php _e('Metric Label:', 'improx-data'); ?>
            </label>
            <input type="text" name="improx_cs_metric_label" value="<?php echo esc_attr($metric_label); ?>" style="width: 100%; padding: 6px;" placeholder="e.g. Accuracy SLA Achieved">
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
                <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                    <?php _e('Associated Core Service:', 'improx-data'); ?>
                </label>
                <select name="improx_cs_service_type" style="width: 100%; padding: 7px;">
                    <option value="Data Entry" <?php selected($service_link, 'Data Entry'); ?>>Data Entry</option>
                    <option value="Web Scraping" <?php selected($service_link, 'Web Scraping'); ?>>Web Scraping</option>
                    <option value="Data Processing" <?php selected($service_link, 'Data Processing'); ?>>Data Processing</option>
                    <option value="Data Analytics" <?php selected($service_link, 'Data Analytics'); ?>>Data Analytics</option>
                    <option value="Administrative Assistant" <?php selected($service_link, 'Administrative Assistant'); ?>>Administrative Assistant</option>
                    <option value="Data Services" <?php selected($service_link, 'Data Services'); ?>>Data Services</option>
                </select>
            </div>
            <div>
                <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                    <?php _e('Client Industry & Location:', 'improx-data'); ?>
                </label>
                <input type="text" name="improx_cs_client_ind" value="<?php echo esc_attr($client_ind); ?>" style="width: 100%; padding: 7px;" placeholder="e.g. US Mortgage & Banking Lender">
            </div>
            <div>
                <label style="display: block; font-weight: 700; margin-bottom: 4px;">
                    <?php _e('Tech Stack / Tools Deployed:', 'improx-data'); ?>
                </label>
                <input type="text" name="improx_cs_tech_stack" value="<?php echo esc_attr($tech_stack); ?>" style="width: 100%; padding: 7px;" placeholder="e.g. Python, Selenium, Power BI, OCR Dual-Blind Validation">
            </div>
        </div>
    </div>
    <?php
}

/**
 * 3. Render Testimonial Meta Box
 */
function improx_render_test_meta_box($post) {
    wp_nonce_field('improx_save_test_meta', 'improx_test_meta_nonce');

    $name    = get_post_meta($post->ID, '_improx_test_name', true);
    $role    = get_post_meta($post->ID, '_improx_test_role', true);
    $company = get_post_meta($post->ID, '_improx_test_company', true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; padding: 10px 0;">
        <div>
            <label style="display: block; font-weight: 700; margin-bottom: 4px;"><?php _e('Client Executive Name:', 'improx-data'); ?></label>
            <input type="text" name="improx_test_name" value="<?php echo esc_attr($name); ?>" style="width: 100%; padding: 7px;" placeholder="e.g. Michael Turner">
        </div>
        <div>
            <label style="display: block; font-weight: 700; margin-bottom: 4px;"><?php _e('Designation / Role:', 'improx-data'); ?></label>
            <input type="text" name="improx_test_role" value="<?php echo esc_attr($role); ?>" style="width: 100%; padding: 7px;" placeholder="e.g. Director of Operations">
        </div>
        <div>
            <label style="display: block; font-weight: 700; margin-bottom: 4px;"><?php _e('Company / Brand:', 'improx-data'); ?></label>
            <input type="text" name="improx_test_company" value="<?php echo esc_attr($company); ?>" style="width: 100%; padding: 7px;" placeholder="e.g. First Horizon Capital">
        </div>
    </div>
    <?php
}

/**
 * Save Meta Boxes
 */
function improx_save_business_meta_boxes($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    // Service Save
    if (isset($_POST['improx_service_meta_nonce']) && wp_verify_nonce($_POST['improx_service_meta_nonce'], 'improx_save_service_meta')) {
        if (isset($_POST['improx_service_type'])) update_post_meta($post_id, '_improx_service_type', sanitize_text_field($_POST['improx_service_type']));
        if (isset($_POST['improx_service_order'])) update_post_meta($post_id, '_improx_service_order', intval($_POST['improx_service_order']));
        if (isset($_POST['improx_service_short_desc'])) update_post_meta($post_id, '_improx_service_short_desc', sanitize_text_field($_POST['improx_service_short_desc']));
        if (isset($_POST['improx_service_deliverables'])) update_post_meta($post_id, '_improx_service_deliverables', sanitize_textarea_field($_POST['improx_service_deliverables']));
        if (isset($_POST['improx_service_sla'])) update_post_meta($post_id, '_improx_service_sla', sanitize_text_field($_POST['improx_service_sla']));
    }

    // Case Study Save
    if (isset($_POST['improx_cs_meta_nonce']) && wp_verify_nonce($_POST['improx_cs_meta_nonce'], 'improx_save_cs_meta')) {
        if (isset($_POST['improx_cs_metric_val'])) update_post_meta($post_id, '_improx_cs_metric_val', sanitize_text_field($_POST['improx_cs_metric_val']));
        if (isset($_POST['improx_cs_metric_label'])) update_post_meta($post_id, '_improx_cs_metric_label', sanitize_text_field($_POST['improx_cs_metric_label']));
        if (isset($_POST['improx_cs_service_type'])) update_post_meta($post_id, '_improx_cs_service_type', sanitize_text_field($_POST['improx_cs_service_type']));
        if (isset($_POST['improx_cs_client_ind'])) update_post_meta($post_id, '_improx_cs_client_ind', sanitize_text_field($_POST['improx_cs_client_ind']));
        if (isset($_POST['improx_cs_tech_stack'])) update_post_meta($post_id, '_improx_cs_tech_stack', sanitize_text_field($_POST['improx_cs_tech_stack']));
    }

    // Testimonial Save
    if (isset($_POST['improx_test_meta_nonce']) && wp_verify_nonce($_POST['improx_test_meta_nonce'], 'improx_save_test_meta')) {
        if (isset($_POST['improx_test_name'])) update_post_meta($post_id, '_improx_test_name', sanitize_text_field($_POST['improx_test_name']));
        if (isset($_POST['improx_test_role'])) update_post_meta($post_id, '_improx_test_role', sanitize_text_field($_POST['improx_test_role']));
        if (isset($_POST['improx_test_company'])) update_post_meta($post_id, '_improx_test_company', sanitize_text_field($_POST['improx_test_company']));
    }
}
add_action('save_post', 'improx_save_business_meta_boxes');
