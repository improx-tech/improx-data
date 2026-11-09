<?php
/**
 * Archive Template for Categories, Tags, and Custom Post Types
 *
 * @package Improx_Data
 */

get_header();
?>

<main id="primary" class="site-main archive-main">
    <div class="container">
        
        <!-- Archive Header Banner -->
        <header class="archive-header-banner">
            <span class="archive-badge"><?php esc_html_e('ARCHIVE / TOPIC', 'improx-data'); ?></span>
            <h1 class="archive-title"><?php the_archive_title(); ?></h1>
            <?php the_archive_description('<div class="archive-description">', '</div>'); ?>
        </header>

        <!-- Archive 3-Column Card Grid -->
        <div class="archive-grid">
            <?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('archive-card'); ?>>
                        <a href="<?php the_permalink(); ?>" class="archive-thumb-wrap">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('improx-card-grid', array('class' => 'archive-thumb-img')); ?>
                            <?php else : ?>
                                <div class="side-img-placeholder"></div>
                            <?php endif; ?>
                            <span class="archive-card-pill"><?php echo improx_category_badge(get_the_ID()); ?></span>
                        </a>
                        <div class="archive-card-body">
                            <div class="archive-meta-row">
                                <span class="archive-date"><?php echo esc_html(get_the_date('M j, Y')); ?></span>
                                <span class="meta-dot">•</span>
                                <span class="archive-read"><?php echo improx_get_reading_time(get_the_ID()); ?></span>
                            </div>
                            <h3 class="archive-card-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h3>
                            <p class="archive-card-excerpt">
                                <?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?>
                            </p>
                            <div class="archive-card-footer">
                                <span class="archive-author"><?php the_author(); ?></span>
                                <a href="<?php the_permalink(); ?>" class="read-more-link"><?php esc_html_e('Read', 'improx-data'); ?> &rarr;</a>
                            </div>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <div class="no-posts-found">
                    <h3><?php esc_html_e('No articles found in this category yet.', 'improx-data'); ?></h3>
                    <p><?php esc_html_e('Check back soon as new stories are published regularly.', 'improx-data'); ?></p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Pagination -->
        <div class="archive-pagination">
            <?php
            the_posts_pagination(array(
                'mid_size'           => 2,
                'prev_text'          => __('&larr; Previous', 'improx-data'),
                'next_text'          => __('Next &rarr;', 'improx-data'),
                'screen_reader_text' => __('Posts navigation', 'improx-data'),
            ));
            ?>
        </div>

    </div>
</main>

<?php
get_footer();
