<?php
/**
 * Template Name: Submit Press Release
 * Description: Editorial & PR wire submission page for Improx Data
 *
 * @package Improx_Data
 */

get_header();
?>

<main id="primary" class="site-main submit-pr-main">
    <div class="container container-narrow">
        
        <header class="page-entry-header text-center">
            <span class="category-pill pill-pr"><?php esc_html_e('MEDIA & WIRE DISTRIBUTION', 'improx-data'); ?></span>
            <h1 class="page-title"><?php esc_html_e('Submit Your Press Release', 'improx-data'); ?></h1>
            <p class="page-intro-subtitle">
                <?php esc_html_e('Reach 25,000+ technology leaders, data architects, and enterprise buyers through Improx Data’s syndication network.', 'improx-data'); ?>
            </p>
        </header>

        <div class="pr-submission-wrapper">
            <!-- PR Guidelines Card -->
            <div class="guidelines-card">
                <h3><?php esc_html_e('Submission Guidelines', 'improx-data'); ?></h3>
                <ul class="guidelines-list">
                    <li><strong>Relevance:</strong> Releases must focus on AI, Big Data, Cloud Infrastructure, MarTech, Cybersecurity, or Enterprise Software.</li>
                    <li><strong>Format:</strong> Include a clear dateline (City, Country), executive quote, and official media contact email.</li>
                    <li><strong>Review Process:</strong> Our editorial desk reviews incoming releases within 24 to 48 business hours.</li>
                </ul>
            </div>

            <!-- Inbuilt Submission Form -->
            <div class="submission-form-card">
                <h3><?php esc_html_e('Submit Announcement Details', 'improx-data'); ?></h3>
                <form class="improx-styled-form" onsubmit="event.preventDefault(); alert('Thank you! Your press release has been received by the Improx editorial desk.');">
                    <div class="form-row">
                        <div class="form-group">
                            <label><?php esc_html_e('Your Full Name *', 'improx-data'); ?></label>
                            <input type="text" required placeholder="Jane Doe" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label><?php esc_html_e('Work Email *', 'improx-data'); ?></label>
                            <input type="email" required placeholder="jane@company.com" class="form-control" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label><?php esc_html_e('Company / Agency Name *', 'improx-data'); ?></label>
                            <input type="text" required placeholder="Acme Data Systems" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label><?php esc_html_e('Press Release Headline *', 'improx-data'); ?></label>
                            <input type="text" required placeholder="Acme Launches Enterprise Data Fabric..." class="form-control" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label><?php esc_html_e('Full Press Release Text or Google Doc / Wire Link *', 'improx-data'); ?></label>
                        <textarea rows="7" required placeholder="Paste full announcement text or media room URL here..." class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                        <label><?php esc_html_e('High-Res Media Kit / Logo URL (Optional)', 'improx-data'); ?></label>
                        <input type="url" placeholder="https://company.com/press-kit.zip" class="form-control" />
                    </div>

                    <button type="submit" class="btn btn-primary btn-block btn-lg">
                        <?php esc_html_e('Submit Press Release to Editorial Team', 'improx-data'); ?> &rarr;
                    </button>
                </form>
            </div>
        </div>

    </div>
</main>

<?php
get_footer();
