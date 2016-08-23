<header id="header">
  <?php print render($page['header']); ?>
  <?php print render($page['navbar']); ?>
</header>
<?php if (theme_get_setting('rubik_show_branding')): ?>
<?php if (!empty($breadcrumb)): ?>
  <div id='branding'><div class='limiter clearfix'>  
    <?php if ((arg(0) == 'user' && arg(1) == 'login') || (arg(0) == 'user' && arg(1) == 'password')): ?>
      <div class='breadcrumb clearfix'></div>
    <?php else: ?>
      <div class='breadcrumb clearfix'><?php print $breadcrumb ?></div>
    <?php endif; ?>
  
    <?php if (!$overlay && isset($secondary_menu)) : ?>
      <?php print theme('links', array('links' => $secondary_menu, 'attributes' => array('class' => 'links secondary-menu'))) ?>
    <?php endif; ?>
  </div></div>
<?php endif; ?>
<?php endif; ?>

<div id='page-title'><div class='limiter clearfix'>
  <div class='tabs clearfix'>
    <?php if ($primary_local_tasks): ?>
      <ul class='primary-tabs links clearfix'><?php print render($primary_local_tasks) ?></ul>
    <?php endif; ?>
  </div>
  <?php print render($title_prefix); ?>
  <h1 class='page-title <?php print $page_icon_class ?>'>
    <?php if (!empty($page_icon_class)): ?><span class='icon'></span><?php endif; ?>
    <?php if (arg(0) == 'user' && arg(1) == 'login') : ?>
      <h1 class="page-title"> Log In to <?php print strip_tags($site_name); ?> </h1>
    <?php elseif (arg(0) == 'user' && arg(1) == 'password') : ?>
      <h1 class="page-title"> Reset Your <?php print strip_tags($site_name); ?> Password </h1>
    <?php else : ?>
      <?php if ($title) print $title ?>
    <?php endif ; ?>
  </h1>
  <?php if ($action_links): ?>
    <ul class='action-links links clearfix'><?php print render($action_links) ?></ul>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
</div></div>

<?php if ($show_messages && $messages): ?>
<div id='console'><div class='limiter clearfix'><?php print $messages; ?></div></div>
<?php endif; ?>

<div id='page'><div id='main-content' class='limiter clearfix'>
  <?php if ($page['help']) print render($page['help']) ?>
  <div id='content' class='page-content clearfix'>
    <?php if (!empty($page['content'])) print render($page['content']) ?>
  </div>
</div></div>

<div id='footer' class='clearfix'>
  <!-- <?php if ($feed_icons): ?>
    <div class='feed-icons clearfix'>
      <label><?php print t('Feeds') ?></label>
      <?php print $feed_icons ?>
    </div>
  <?php endif; ?> -->
  <?php print render($page['footer']); ?>
</div>
