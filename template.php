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

  if (isset($vars['breadcrumb'][3])) {  // If we are 4 levels deep in the breadcrumb
    $pages = array("News", "Articles", "Press Releases");
    preg_match('/(?<=\>).*?(?=\<)/', $vars['breadcrumb'][1], $lists);

    if (in_array($lists[0], $pages)) {  // check if we are on the "News", "Articles", or "Press Releases" pages
      preg_match('/(?<=\>).*?(?=\<)/', $vars['breadcrumb'][3], $match);
      switch ($match[0]) {
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
        
        default:
          $month = $match[0];
          break;
      }
      $vars['breadcrumb'][3] = preg_replace('/(?<=\>).*?(?=\<)/', $month, $vars['breadcrumb'][3]);  // then replace the breadcrumb item for "month" with the month's full name
    }
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

/**
 * Override of date_all_day_label.
 */
function full_rubik_date_all_day_label() {
  return '';
}

/**
 * Override of theme_field_multiple_value_form.
 */
function theme_field_multiple_value_form($variables) {
  $element = $variables['element'];
  $output = '';

  if ($element['#cardinality'] > 1 || $element['#cardinality'] == FIELD_CARDINALITY_UNLIMITED) {
    $table_id = drupal_html_id($element['#field_name'] . '_values');
    $order_class = $element['#field_name'] . '-delta-order';
    $required = !empty($element['#required']) ? theme('form_required_marker', $variables) : '';

    $header = array(
      array(
        'data' => '<label>' . t('!title !required', array('!title' => $element['#title'], '!required' => $required)) . "</label>",
        'colspan' => 2,
        'class' => array('field-label'),
        'description' => '<div class="description">' . $element['#description'] . '</div>'
      ),
      t('Order'),
    );
    $rows = array();

    // Sort items according to '_weight' (needed when the form comes back after
    // preview or failed validation)
    $items = array();
    foreach (element_children($element) as $key) {
      if ($key === 'add_more') {
        $add_more_button = &$element[$key];
      }
      else {
        $items[] = &$element[$key];
      }
    }
    usort($items, '_field_sort_items_value_helper');

    // Add the items as table rows.
    foreach ($items as $key => $item) {
      $item['_weight']['#attributes']['class'] = array($order_class);
      $delta_element = drupal_render($item['_weight']);
      $cells = array(
        array('data' => '', 'class' => array('field-multiple-drag')),
        drupal_render($item),
        array('data' => $delta_element, 'class' => array('delta-order')),
      );
      $rows[] = array(
        'data' => $cells,
        'class' => array('draggable'),
      );
    }

    $output = '<div class="form-item">';
    $output .= theme('table', array('header' => $header, 'rows' => $rows, 'attributes' => array('id' => $table_id, 'class' => array('field-multiple-table'))));
    $output .= $element['#description'] ? '<div class="description">' . $element['#description'] . '</div>' : '';
    $output .= '<div class="clearfix">' . drupal_render($add_more_button) . '</div>';
    $output .= '</div>';

    drupal_add_tabledrag($table_id, 'order', 'sibling', $order_class);
  }
  else {
    foreach (element_children($element) as $key) {
      $output .= drupal_render($element[$key]);
    }
  }

  return $output;
}

