<?php

/**
 * implementation of hook_panels_layouts()
 */
// Plugin definition
$plugin = array(
  'title' => t('WWM 3-Column Stacked'),
  'category' => t('WWM'),
  'icon' => 'wwm_three_col_stacked.png',
  'theme' => 'wwm_three_col_stacked',
  'css' => 'wwm_three_col_stacked.css',
  'regions' => array(
  	'content' => t('Main Content'),
  	'content_bottom' => t('Content Bottom'),
  	'content_top' => t('Content Top'),
  	'help' => t('Help'),
  	'left_sidebar' => t('Left Sidebar'),
  	'right_sidebar' => t('Right Sidebar'),
  ),
);
