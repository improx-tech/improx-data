<?php
/**
 * Header Template for Improx Data
 * Enterprise Data & Admin Operations Theme
 *
 * @package Improx_Data
 */

if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site-wrapper">
    
    <!-- 1. Enterprise Trust Top Bar -->
    <div class="top-bar">
        <div class="container top-bar-inner">
            <div class="top-bar-left">
                <span class="trust-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <?php esc_html_e('DELAWARE INCORPORATED', 'improx-data'); ?>
                </span>
                <span class="top-divider">|</span>
                <span class="top-highlight"><?php esc_html_e('Strict Mutual NDA & Dual-Blind Verification Protocol (99.9% SLA)', 'improx-data'); ?></span>
            </div>
            <div class="top-bar-right">
                <a href="mailto:enquiry@improxgroup.com" class="top-contact-link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    enquiry@improxgroup.com
                </a>
                <span class="top-divider">|</span>
                <span class="top-hours"><?php esc_html_e('24/7 Production Operations', 'improx-data'); ?></span>
            </div>
        </div>
    </div>

    <!-- 2. Main Enterprise Header -->
    <header id="masthead" class="site-header">
        <div class="container header-container">
            <!-- Brand Logo -->
            <div class="site-branding">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link" rel="home">
                    <span class="brand-symbol">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#0284c7"/>
                            <path d="M7 23L16 9L25 23" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="16" cy="18" r="3" fill="#38bdf8"/>
                        </svg>
                    </span>
                    <span class="brand-text">
                        <span class="brand-name">IMPROX</span><span class="brand-tag">DATA</span>
                    </span>
                </a>
            </div>

            <!-- Primary Navigation Menu -->
            <nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e('Primary Menu', 'improx-data'); ?>">
                <?php
                if (has_nav_menu('primary')) :
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                        'container'      => false,
                        'menu_class'     => 'nav-menu',
                        'fallback_cb'    => false,
                    ));
                else :
                ?>
                    <ul class="nav-menu">
                        <li class="current-menu-item"><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'improx-data'); ?></a></li>
                        <li class="menu-item-has-children">
                            <a href="#services-section"><?php esc_html_e('Services', 'improx-data'); ?> &#9662;</a>
                            <ul class="sub-menu">
                                <li><a href="#service-data-entry"><strong>1. Data Entry</strong> &bull; Document Keying & OCR</a></li>
                                <li><a href="#service-web-scraping"><strong>2. Web Scraping</strong> &bull; Automated Harvesting</a></li>
                                <li><a href="#service-data-processing"><strong>3. Data Processing</strong> &bull; Cleansing & Hygiene</a></li>
                                <li><a href="#service-data-analytics"><strong>4. Data Analytics</strong> &bull; Power BI & Reporting</a></li>
                                <li><a href="#service-admin-assistant"><strong>5. Administrative Assistant</strong> &bull; Virtual Back-Office</a></li>
                                <li><a href="#service-data-services"><strong>6. Data Services</strong> &bull; Managed Cloud & Migration</a></li>
                            </ul>
                        </li>
                        <li><a href="#qa-protocol-section"><?php esc_html_e('QA Protocol', 'improx-data'); ?></a></li>
                        <li><a href="#case-studies-section"><?php esc_html_e('Case Studies', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/about-us/')); ?>"><?php esc_html_e('About Us', 'improx-data'); ?></a></li>
                        <li><a href="<?php echo esc_url(home_url('/blogs/')); ?>"><?php esc_html_e('Blog', 'improx-data'); ?></a></li>
                    </ul>
                <?php endif; ?>
            </nav>

            <!-- Header Actions -->
            <div class="header-actions">
                <a href="#request-sample-batch" class="btn btn-primary btn-sample">
                    <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <span><?php esc_html_e('Request Project Evaluation', 'improx-data'); ?></span>
                </a>

                <button class="mobile-menu-toggle" id="mobile-toggle-btn" aria-label="<?php esc_attr_e('Toggle navigation', 'improx-data'); ?>">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobile-drawer">
        <div class="mobile-drawer-header">
            <span class="brand-text"><span class="brand-name">IMPROX</span><span class="brand-tag">DATA</span></span>
            <button class="close-drawer-btn" id="close-drawer-btn" aria-label="Close menu">&times;</button>
        </div>
        <div class="mobile-drawer-body">
            <ul class="mobile-nav-list">
                <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'improx-data'); ?></a></li>
                <li><a href="#services-section"><?php esc_html_e('All 6 Services', 'improx-data'); ?></a></li>
                <li><a href="#qa-protocol-section"><?php esc_html_e('QA Protocol', 'improx-data'); ?></a></li>
                <li><a href="#case-studies-section"><?php esc_html_e('Case Studies', 'improx-data'); ?></a></li>
                <li><a href="<?php echo esc_url(home_url('/about-us/')); ?>"><?php esc_html_e('About Us', 'improx-data'); ?></a></li>
                <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'improx-data'); ?></a></li>
            </ul>
            <div class="mobile-drawer-footer">
                <a href="#request-sample-batch" class="btn btn-primary btn-block"><?php esc_html_e('Request Project Evaluation', 'improx-data'); ?></a>
            </div>
        </div>
    </div>
