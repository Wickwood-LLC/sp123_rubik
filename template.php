<?php
/**
 * Override of theme('breadcrumb').
 */
function full_rubik_breadcrumb($vars) {
  $output = '';

  // // Add current page onto the end.
  // if (!drupal_is_front_page()) {
  //   $item = menu_get_item();
  //   $end = end($vars['breadcrumb']);
  //   if ($end && strip_tags($end) !== $item['title']) {
  //     $vars['breadcrumb'][] = (isset($item['localized_options']['html']) && $item['localized_options']['html']) ? $item['title'] : check_plain($item['title']);
  //   }
  // }

  $dids = array(23,24);
  if (in_array(panels_get_current_page_display()->did, $dids)) {
    dpm(panels_get_current_page_display());
    switch ($vars['breadcrumb'][3]) {
      case '01':
        $month = "January";
        break;
      case '02':
        $month = "February";
        break;
      case '03':
        $month = "March";
        break;
      case '04':
        $month = "April";
        break;
      case '05':
        $month = "May";
        break;
      case '06':
        $month = "June";
        break;
      case '07':
        $month = "July";
        break;
      case '08':
        $month = "August";
        break;
      case '09':
        $month = "September";
        break;
      case '10':
        $month = "October";
        break;
      case '11':
        $month = "November";
        break;
      case '12':
        $month = "December";
        break;
    }
    $vars['breadcrumb'][3] = preg_replace('/(?<=\>).*?(?=\<)/', $month, $vars['breadcrumb'][3]);
    dpm($vars);

  }

  // Optional: Add the site name to the front of the stack.
  if (!empty($vars['prepend'])) {
    $site_name = empty($vars['breadcrumb']) ? "<strong>". check_plain(variable_get('site_name', '')) ."</strong>" : l(variable_get('site_name', ''), '<front>', array('purl' => array('disabled' => TRUE)));
    array_unshift($vars['breadcrumb'], $site_name);
  }

  $depth = 0;
  foreach ($vars['breadcrumb'] as $link) {

    // If the item isn't a link, surround it with a strong tag to format it like
    // one.
    if (!preg_match('/^<a/', $link) && !preg_match('/^<strong/', $link)) {
      $link = '<strong>' . $link . '</strong>';
    }

    $output .= "<span class='breadcrumb-link breadcrumb-depth-{$depth}'>{$link}</span>";
    $depth++;
  }
  return $output;
}
