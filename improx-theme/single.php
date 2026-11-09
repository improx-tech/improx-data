<?php
/**
 * Single Article / Post Template for Improx Data
 *
 * @package Improx_Data
 */

get_header();
?>

<main id="primary" class="site-main single-post-main">
    <div class="container">
        
        <?php while (have_posts()) : the_post(); 
            $subtitle   = get_post_meta(get_the_ID(), '_improx_subtitle', true);
            $takeaways  = get_post_meta(get_the_ID(), '_improx_key_takeaways', true);
            $sponsored  = get_post_meta(get_the_ID(), '_improx_is_sponsored', true);
            $post_type  = get_post_type();
        ?>
            <!-- Breadcrumbs -->
            <nav class="post-breadcrumbs" aria-label="Breadcrumb">
                <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'improx-data'); ?></a>
                <span class="crumb-separator">&rsaquo;</span>
                <?php
                if ($post_type === 'interviews') {
                    echo '<a href="' . esc_url(home_url('/interviews/')) . '">' . esc_html__('Interviews', 'improx-data') . '</a>';
                } elseif ($post_type === 'press-releases') {
                    echo '<a href="' . esc_url(home_url('/press-releases/')) . '">' . esc_html__('Press Releases', 'improx-data') . '</a>';
                } else {
                    $cats = get_the_category();
                    if (!empty($cats)) {
                        echo '<a href="' . esc_url(get_category_link($cats[0]->term_id)) . '">' . esc_html($cats[0]->name) . '</a>';
                    }
                }
                ?>
                <span class="crumb-separator">&rsaquo;</span>
                <span class="crumb-current"><?php echo wp_trim_words(get_the_title(), 5, '...'); ?></span>
            </nav>

            <article id="post-<?php the_ID(); ?>" <?php post_class('single-article-layout'); ?>>
                
                <!-- Article Header -->
                <header class="entry-header">
                    <div class="entry-meta-top">
                        <?php echo improx_category_badge(get_the_ID()); ?>
                        <?php if ($sponsored === '1') : ?>
                            <span class="sponsored-badge"><?php esc_html_e('Sponsored Content', 'improx-data'); ?></span>
                        <?php endif; ?>
                        <span class="entry-read-time"><?php echo improx_get_reading_time(get_the_ID()); ?></span>
                    </div>

                    <h1 class="entry-title"><?php the_title(); ?></h1>

                    <?php if (!empty($subtitle)) : ?>
                        <p class="entry-subtitle"><?php echo esc_html($subtitle); ?></p>
                    <?php endif; ?>

                    <div class="entry-author-bar">
                        <div class="author-info-left">
                            <div class="author-avatar-wrap">
                                <?php echo get_avatar(get_the_author_meta('ID'), 48); ?>
                            </div>
                            <div class="author-details">
                                <span class="author-name"><?php the_author_posts_link(); ?></span>
                                <div class="post-date-info">
                                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date('F j, Y')); ?></time>
                                    <span class="meta-dot">•</span>
                                    <span><?php echo improx_posted_ago(get_the_ID()); ?></span>
                                </div>
                            </div>
                        </div>

                        <!-- Quick Share Icons -->
                        <div class="quick-share-bar">
                            <span class="share-label"><?php esc_html_e('Share:', 'improx-data'); ?></span>
                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode(get_permalink()); ?>" target="_blank" rel="noopener" class="share-btn share-linkedin" title="Share on LinkedIn">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                            </a>
                            <a href="https://twitter.com/intent/tweet?text=<?php echo urlencode(get_the_title()); ?>&url=<?php echo urlencode(get_permalink()); ?>" target="_blank" rel="noopener" class="share-btn share-twitter" title="Share on X">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            <a href="https://api.whatsapp.com/send?text=<?php echo urlencode(get_the_title() . ' ' . get_permalink()); ?>" target="_blank" rel="noopener" class="share-btn share-whatsapp" title="Share on WhatsApp">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.204 8.204 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24"/></svg>
                            </a>
                            <button type="button" class="share-btn share-copy" id="copy-article-link" data-url="<?php echo esc_url(get_permalink()); ?>" title="Copy link to clipboard">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            </button>
                        </div>
                    </div>
                </header>

                <!-- Featured Image -->
                <?php if (has_post_thumbnail()) : ?>
                    <div class="entry-featured-image-wrap">
                        <?php the_post_thumbnail('improx-hero-main', array('class' => 'entry-featured-image')); ?>
                        <?php if (get_the_post_thumbnail_caption()) : ?>
                            <figcaption class="featured-image-caption"><?php the_post_thumbnail_caption(); ?></figcaption>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>

                <!-- Article Body Columns (Content + Right Sticky Sidebar) -->
                <div class="article-content-grid">
                    
                    <div class="article-main-body">

                        <!-- Inbuilt Key Takeaways Callout Box -->
                        <?php if (!empty($takeaways)) : ?>
                            <div class="key-takeaways-box">
                                <div class="takeaways-header">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                    <h3><?php esc_html_e('Executive Summary & Key Takeaways', 'improx-data'); ?></h3>
                                </div>
                                <div class="takeaways-content">
                                    <?php echo wpautop(esc_html($takeaways)); ?>
                                </div>
                            </div>
                        <?php endif; ?>

                        <!-- Auto-Generated Table of Contents Container -->
                        <div class="auto-toc-container" id="improx-auto-toc" style="display: none;">
                            <div class="toc-title-bar">
                                <span class="toc-title"><?php esc_html_e('Table of Contents', 'improx-data'); ?></span>
                                <button type="button" class="toc-toggle-btn" id="toc-toggle-btn"><?php esc_html_e('Hide', 'improx-data'); ?></button>
                            </div>
                            <ol class="toc-list" id="toc-list"></ol>
                        </div>

                        <!-- Post Content -->
                        <div class="entry-content" id="article-entry-content">
                            <?php
                            the_content();

                            wp_link_pages(array(
                                'before' => '<div class="page-links">' . esc_html__('Pages:', 'improx-data'),
                                'after'  => '</div>',
                            ));
                            ?>
                        </div>

                        <!-- Tags -->
                        <?php
                        $tags = get_the_tags();
                        if (!empty($tags)) : ?>
                            <div class="entry-tags-row">
                                <span class="tags-label"><?php esc_html_e('Related Topics:', 'improx-data'); ?></span>
                                <?php foreach ($tags as $tag) : ?>
                                    <a href="<?php echo esc_url(get_tag_link($tag->term_id)); ?>" class="tag-pill">#<?php echo esc_html($tag->name); ?></a>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>

                        <!-- Author Bio Box -->
                        <div class="author-bio-card">
                            <div class="bio-avatar">
                                <?php echo get_avatar(get_the_author_meta('ID'), 72); ?>
                            </div>
                            <div class="bio-content">
                                <span class="bio-label"><?php esc_html_e('Written by', 'improx-data'); ?></span>
                                <h4 class="bio-name"><?php the_author(); ?></h4>
                                <p class="bio-desc">
                                    <?php 
                                    $desc = get_the_author_meta('description');
                                    echo (!empty($desc)) ? esc_html($desc) : esc_html__('Editor & Contributor at Improx Data covering enterprise artificial intelligence, cloud architectures, and modern data platforms.', 'improx-data');
                                    ?>
                                </p>
                                <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>" class="bio-more-link">
                                    <?php esc_html_e('View all articles by this author', 'improx-data'); ?> &rarr;
                                </a>
                            </div>
                        </div>

                        <!-- Related Articles Grid -->
                        <div class="related-stories-section">
                            <h3 class="related-title"><?php esc_html_e('Related Stories & Insights', 'improx-data'); ?></h3>
                            <div class="related-grid">
                                <?php
                                $orig_cats = wp_get_post_categories(get_the_ID());
                                $related_query = new WP_Query(array(
                                    'category__in'   => $orig_cats,
                                    'post__not_in'   => array(get_the_ID()),
                                    'posts_per_page' => 3,
                                ));

                                if ($related_query->have_posts()) :
                                    while ($related_query->have_posts()) : $related_query->the_post();
                                ?>
                                    <div class="related-card">
                                        <a href="<?php the_permalink(); ?>" class="related-thumb">
                                            <?php if (has_post_thumbnail()) : ?>
                                                <?php the_post_thumbnail('improx-card-grid'); ?>
                                            <?php else : ?>
                                                <div class="side-img-placeholder"></div>
                                            <?php endif; ?>
                                        </a>
                                        <div class="related-body">
                                            <span class="related-date"><?php echo esc_html(get_the_date('M j, Y')); ?></span>
                                            <h5><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                                        </div>
                                    </div>
                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                endif;
                                ?>
                            </div>
                        </div>

                        <!-- Comments -->
                        <?php
                        if (comments_open() || get_comments_number()) :
                            comments_template();
                        endif;
                        ?>

                    </div>

                    <!-- Right Sticky Sidebar for Articles -->
                    <aside class="article-sidebar">
                        
                        <!-- Newsletter Box -->
                        <div class="sidebar-widget newsletter-widget">
                            <h3><?php esc_html_e('Stay Ahead in Data & AI', 'improx-data'); ?></h3>
                            <p><?php esc_html_e('Get the weekly intelligence briefing curated for enterprise tech leaders.', 'improx-data'); ?></p>
                            <form class="sidebar-newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed to Improx Data!');">
                                <input type="email" placeholder="Work email..." required class="newsletter-input" />
                                <button type="submit" class="btn btn-primary btn-block"><?php esc_html_e('Subscribe', 'improx-data'); ?></button>
                            </form>
                        </div>

                        <!-- Trending Articles in Sidebar -->
                        <div class="sidebar-widget popular-widget">
                            <h3 class="widget-header-title"><?php esc_html_e('Trending Reads', 'improx-data'); ?></h3>
                            <div class="popular-list">
                                <?php
                                $sidebar_pop = new WP_Query(array(
                                    'posts_per_page'      => 4,
                                    'post__not_in'        => array(get_the_ID()),
                                    'ignore_sticky_posts' => 1,
                                ));
                                $rank = 1;
                                if ($sidebar_pop->have_posts()) :
                                    while ($sidebar_pop->have_posts()) : $sidebar_pop->the_post();
                                ?>
                                    <div class="popular-item">
                                        <span class="popular-rank"><?php echo $rank++; ?></span>
                                        <div class="popular-info">
                                            <h5><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                                            <span class="popular-meta"><?php echo improx_get_reading_time(get_the_ID()); ?></span>
                                        </div>
                                    </div>
                                <?php
                                    endwhile;
                                    wp_reset_postdata();
                                endif;
                                ?>
                            </div>
                        </div>

                        <!-- Advertise / Submit Wire Card -->
                        <div class="sidebar-widget promo-card-widget">
                            <span class="promo-badge"><?php esc_html_e('PRESS WIRE', 'improx-data'); ?></span>
                            <h4><?php esc_html_e('Share Your Enterprise Tech News', 'improx-data'); ?></h4>
                            <p><?php esc_html_e('Distribute your company press release across our network of enterprise buyers and decision-makers.', 'improx-data'); ?></p>
                            <a href="<?php echo esc_url(home_url('/submit-press-release/')); ?>" class="btn btn-outline btn-block">
                                <?php esc_html_e('Submit Press Release', 'improx-data'); ?> &rarr;
                            </a>
                        </div>

                    </aside>

                </div>

            </article>

        <?php endwhile; ?>

    </div>
</main>

<?php
get_footer();
