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
