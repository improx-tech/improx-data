<?php
/**
 * Improx Data functions and definitions
 *
 * @package Improx_Data
 */

if (!defined('ABSPATH')) {
    exit;
}

define('IMPROX_VERSION', '1.0.0');

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function improx_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Custom image sizes for modern tech media layouts
    add_image_size('improx-hero-main', 840, 520, true);
    add_image_size('improx-card-grid', 480, 300, true);
    add_image_size('improx-thumb-sm', 160, 110, true);

    // Register Navigation Menus
    register_nav_menus(array(
        'primary'  => esc_html__('Primary Header Navigation', 'improx-data'),
        'topics'   => esc_html__('Trending Topics Bar', 'improx-data'),
        'footer'   => esc_html__('Footer Quick Links', 'improx-data'),
    ));

    // Switch default core markup to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Custom Logo Support
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 220,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Responsive embeds
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'improx_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function improx_scripts() {
    // Google Fonts: Inter
    wp_enqueue_style('improx-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap', array(), null);

    // Main CSS
    wp_enqueue_style('improx-style', get_template_directory_uri() . '/assets/css/main.css', array(), IMPROX_VERSION);

    // Main JS
    wp_enqueue_script('improx-js', get_template_directory_uri() . '/assets/js/main.js', array(), IMPROX_VERSION, true);

    // Localize Script for AJAX or UI params
    wp_localize_script('improx-js', 'improxData', array(
        'copiedText' => __('Link copied to clipboard!', 'improx-data'),
        'siteUrl'    => esc_url(home_url('/')),
    ));
}
add_action('wp_enqueue_scripts', 'improx_scripts');

/**
 * Register Widget Areas (Sidebars)
 */
function improx_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Editorial Sidebar', 'improx-data'),
        'id'            => 'sidebar-main',
        'description'   => esc_html__('Widgets here appear alongside articles and homepage feed.', 'improx-data'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'improx_widgets_init');

/**
 * Helper: Calculate Reading Time
 */
function improx_get_reading_time($post_id = null) {
    if (!$post_id) {
        $post_id = get_the_ID();
    }
    $manual = get_post_meta($post_id, '_improx_reading_time', true);
    if (!empty($manual)) {
        return esc_html($manual);
    }
    $content = get_post_field('post_content', $post_id);
    $words   = str_word_count(strip_tags($content));
    $min     = max(1, ceil($words / 200));
    return sprintf(_n('%d min read', '%d min read', $min, 'improx-data'), $min);
}

/**
 * Helper: Category / Taxonomy Pill
 */
function improx_category_badge($post_id = null) {
    if (!$post_id) {
        $post_id = get_the_ID();
    }
    $categories = get_the_category($post_id);
    if (!empty($categories)) {
        $cat = $categories[0];
        return '<a href="' . esc_url(get_category_link($cat->term_id)) . '" class="category-pill pill-' . esc_attr($cat->slug) . '">' . esc_html($cat->name) . '</a>';
    }
    // Check if CPT like interviews
    $post_type = get_post_type($post_id);
    if ($post_type === 'interviews') {
        return '<span class="category-pill pill-interview">' . esc_html__('Executive Interview', 'improx-data') . '</span>';
    } elseif ($post_type === 'press-releases') {
        return '<span class="category-pill pill-pr">' . esc_html__('Press Release', 'improx-data') . '</span>';
    } elseif ($post_type === 'whitepapers') {
        return '<span class="category-pill pill-resource">' . esc_html__('Research Report', 'improx-data') . '</span>';
    }
    return '';
}

/**
 * Helper: Humanized Post Date
 */
function improx_posted_ago($post_id = null) {
    if (!$post_id) {
        $post_id = get_the_ID();
    }
    $time_diff = human_time_diff(get_post_time('U', false, $post_id), current_time('timestamp'));
    return sprintf(__('%s ago', 'improx-data'), $time_diff);
}

/**
 * Include Native Custom Post Types & Custom Meta Boxes
 */
require_once get_template_directory() . '/inc/cpt.php';
require_once get_template_directory() . '/inc/meta-boxes.php';
