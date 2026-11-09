<?php
/**
 * Main Fallback Template
 *
 * @package Improx_Data
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container">
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
                            <h3 class="archive-card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                            <p class="archive-card-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?></p>
                        </div>
                    </article>
                <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php
get_footer();
