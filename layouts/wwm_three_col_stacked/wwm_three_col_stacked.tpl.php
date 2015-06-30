<?php
/**
 * @file
 * Template for a 3 column panel layout.
 *
 * This template provides a very simple "one column" panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['middle']: The only panel in the layout.
 */
?>
<div class="panel-display panel-wwm-3col-stacked clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <div class="panel-panel panel-col panel-col-mid">
  	<div class="content-top">
	  <?php print $content['content_top']; ?>
	</div>
  	<div class="help">
	  <?php print $content['help']; ?>
	</div>
  	<div class="content-main">
  	  <?php print $content['content']; ?>
  	</div>
  	<div class="content-bottom">
  	  <?php print $content['content_bottom']; ?>
  	</div>
  </div>
  <div class="panel-panel panel-col panel-col-left">
    <?php print $content['left_sidebar']; ?>
  </div>
  <div class="panel-panel panel-col panel-col-right">
    <?php print $content['right_sidebar']; ?>
  </div>
</div>
