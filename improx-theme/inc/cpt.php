<?php
/**
 * B2B Business Custom Post Types and Taxonomies for Improx Data
 * Built-in native CMS for Data & Admin Services, Case Studies, and Testimonials.
 *
 * @package Improx_Data
 */

if (!defined('ABSPATH')) {
    exit;
}

function improx_register_business_cpts() {

    // 1. SERVICES CPT (Data & Admin Core Offerings)
    $service_labels = array(
        'name'               => _x('Services', 'Post type general name', 'improx-data'),
        'singular_name'      => _x('Service', 'Post type singular name', 'improx-data'),
        'menu_name'          => _x('Services', 'Admin Menu text', 'improx-data'),
        'name_admin_bar'     => _x('Service', 'Add New on Toolbar', 'improx-data'),
        'add_new'            => __('Add New Service', 'improx-data'),
        'add_new_item'       => __('Add New Data & Admin Service', 'improx-data'),
        'new_item'           => __('New Service', 'improx-data'),
        'edit_item'          => __('Edit Service', 'improx-data'),
        'view_item'          => __('View Service', 'improx-data'),
        'all_items'          => __('All Services', 'improx-data'),
        'search_items'       => __('Search Services', 'improx-data'),
        'not_found'          => __('No services found.', 'improx-data'),
        'not_found_in_trash' => __('No services found in Trash.', 'improx-data'),
    );

    register_post_type('services', array(
        'labels'             => $service_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'service', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-database-view',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'       => true,
    ));

    // 2. CASE STUDIES CPT
    $case_study_labels = array(
        'name'               => _x('Case Studies', 'Post type general name', 'improx-data'),
        'singular_name'      => _x('Case Study', 'Post type singular name', 'improx-data'),
        'menu_name'          => _x('Case Studies', 'Admin Menu text', 'improx-data'),
        'name_admin_bar'     => _x('Case Study', 'Add New on Toolbar', 'improx-data'),
        'add_new'            => __('Add New Case Study', 'improx-data'),
        'add_new_item'       => __('Add New Client Case Study', 'improx-data'),
        'new_item'           => __('New Case Study', 'improx-data'),
        'edit_item'          => __('Edit Case Study', 'improx-data'),
        'view_item'          => __('View Case Study', 'improx-data'),
        'all_items'          => __('All Case Studies', 'improx-data'),
        'search_items'       => __('Search Case Studies', 'improx-data'),
    );

    register_post_type('case-studies', array(
        'labels'             => $case_study_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'case-studies', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-chart-area',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'       => true,
    ));

    // 3. TESTIMONIALS CPT
    register_post_type('testimonials', array(
        'labels'             => array(
            'name'          => __('Testimonials', 'improx-data'),
            'singular_name' => __('Testimonial', 'improx-data'),
            'add_new_item'  => __('Add New Testimonial', 'improx-data'),
            'all_items'     => __('All Testimonials', 'improx-data'),
        ),
        'public'             => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'supports'           => array('title', 'editor'),
        'menu_position'      => 7,
        'menu_icon'          => 'dashicons-testimonial',
        'show_in_rest'       => true,
    ));
}
add_action('init', 'improx_register_business_cpts');

/**
 * Register Taxonomy: Service Categories & Industries
 */
function improx_register_business_taxonomies() {
    register_taxonomy('service_cat', array('services'), array(
        'hierarchical'      => true,
        'labels'            => array(
            'name'          => __('Service Categories', 'improx-data'),
            'singular_name' => __('Service Category', 'improx-data'),
        ),
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'service-category'),
        'show_in_rest'      => true,
    ));

    register_taxonomy('industry_vertical', array('case-studies', 'services'), array(
        'hierarchical'      => true,
        'labels'            => array(
            'name'          => __('Industries', 'improx-data'),
            'singular_name' => __('Industry', 'improx-data'),
        ),
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'industry'),
        'show_in_rest'      => true,
    ));
}
add_action('init', 'improx_register_business_taxonomies');
