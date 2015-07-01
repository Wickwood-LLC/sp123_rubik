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
 *   $content['content']
 *   $content['content_bottom']
 *   $content['content_top']
 *   $content['help']
 *   $content['left_sidebar']
 *   $content['right_sidebar']
 */
?>
<?php dpm($renderer); ?>
<div class="panel-display panel-wwm-3col-stacked 
  <?php if ($renderer->prepared['regions']['left_sidebar']['pids'] && $renderer->prepared['regions']['right_sidebar']['pids']) { 
    print "has-two-sidebars";
  } elseif ($renderer->prepared['regions']['left_sidebar']['pids']) {
    print "has-one-sidebar left-sidebar";
  } elseif ($renderer->prepared['regions']['right_sidebar']['pids']) {
    print "has-one-sidebar right-sidebar";
  }?> clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <div class="panel-panel panel-col panel-col-mid">
    <?php if ($content['content_top']): ?>
    	<div class="content-top">
        <?php print $content['content_top']; ?>
      </div>
    <?php endif; ?>
    <?php if ($content['help']): ?>
    	<div class="help">
    	  <?php print $content['help']; ?>
    	</div>
    <?php endif; ?>
    <?php if ($content['content']): ?>
    	<div class="content-main">
    	  <?php print $content['content']; ?>
    	</div>
    <?php endif; ?>
    <?php if ($content['content_bottom']): ?>
    	<div class="content-bottom">
    	  <?php print $content['content_bottom']; ?>
    	</div>
    <?php endif; ?>
  </div>
  <div class="panel-panel panel-col panel-col-left">
    <?php if ($renderer->prepared['regions']['left_sidebar']['pids']) {
      print $content['left_sidebar'];
    } ?>
  </div>
    <div class="panel-panel panel-col panel-col-right">
      <?php if ($renderer->prepared['regions']['right_sidebar']['pids']) {
        print $content['right_sidebar'];
      } ?>
    </div>
</div>
