<header id="header">
  <a href="/" rel="home" id="logo">
    <img src="<?php print $logo; ?>" />
  </a>
  <h1 id="site-name">
    <?php print $site_name; ?>
  </h1>
  <h2 id="site-slogan">
    <?php print $site_slogan; ?>
  </h2>
  <?php print render($page['header']); ?>
  <?php print render($page['navbar']); ?>
</header>
<?php if (theme_get_setting('rubik_show_branding')): ?>
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
