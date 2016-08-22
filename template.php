<?php

/**
 * Display a single views grouping.
 */
function sp123_rubik_views_view_grouping($vars) {
  $view = $vars['view'];
  $title = $vars['title'];
  $content = $vars['content'];

  $output = theme('ctools_collapsible', array('handle' => $title, 'content' => $content, 'collapsed' => TRUE));

  return $output;
}
