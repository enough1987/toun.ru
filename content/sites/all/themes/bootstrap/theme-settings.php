<?php
/**
 * @file
 * theme-settings.php
 *
 * Provides theme settings for Bootstrap based themes when admin theme is not.
 *
 * @see ./includes/settings.inc
 */

/**
 * Include common Bootstrap functions.
 */
include_once dirname(__FILE__) . '/includes/common.inc';
bootstrap_include('bootstrap', 'includes/cdn.inc');

/**
 * Implements hook_form_FORM_ID_alter().
 */
function bootstrap_form_system_theme_settings_alter(&$form, $form_state, $form_id = NULL) {
  // Do not add Bootstrap specific settings to non-bootstrap based themes,
  // including a work-around for a core bug affecting admin themes.
  // @see https://drupal.org/node/943212
  $theme = !empty($form_state['build_info']['args'][0]) ? $form_state['build_info']['args'][0] : FALSE;
  if (isset($form_id) || $theme === FALSE || !in_array('bootstrap', _bootstrap_get_base_themes($theme, TRUE))) {
    return;
  }

  // Display a warning if jQuery Update isn't enabled or using a lower version.
  if (!bootstrap_setting('toggle_jquery_error', $theme) || !module_exists('jquery_update')) {
    // Get theme specific jQuery version.
    $jquery_version = theme_get_setting('jquery_update_jquery_version', $theme);

    // Get site wide jQuery version if theme specific one is not set.
    if (!$jquery_version) {
      $jquery_version = variable_get('jquery_update_jquery_version', '1.10');
    }

    // Ensure the jQuery version is >= 1.9.
    if (!$jquery_version || !version_compare($jquery_version, '1.9', '>=')) {
      $message = t('jQuery Update is not enabled, Bootstrap requires a minimum jQuery version of 1.9 or higher. Please enable the <a href="!jquery_update_project_url">jQuery Update</a> module. If you are seeing this message, then you must <a href="!jquery_update_configure">manually configuration</a> this setting or optionally <a href="!bootstrap_suppress_jquery_error">suppress this message</a> instead.', array(
        '!jquery_update_project_url' => check_plain('https://www.drupal.org/project/jquery_update'),
        '!jquery_update_configure' => check_plain(url('admin/config/development/jquery_update')),
        '!bootstrap_suppress_jquery_error' => check_plain(url('admin/appearance/settings/' . $theme, array(
          'fragment' => 'edit-bootstrap-toggle-jquery-error',
        ))),
      ));
      drupal_set_message($message, 'error', FALSE);
    }
  }

  // Create vertical tabs for all Bootstrap related settings.
  $form['bootstrap'] = array(
    '#type' => 'vertical_tabs',
    '#attached' => array(
      'js'  => array(drupal_get_path('theme', 'bootstrap') . '/js/bootstrap.admin.js'),
    ),
    '#prefix' => '<h2><small>' . t('Bootstrap Settings') . '</small></h2>',
    '#weight' => -10,
  );

  // General.
  $form['general'] = array(
    '#type' => 'fieldset',
    '#title' => t('General'),
    '#group' => 'bootstrap',
  );

  // Персональные.
  $form['general']['front'] = array(
    '#type' => 'fieldset',
    '#title' => t('Переменные сайта'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['front']['bootstrap_phone_first'] = array(
    '#type' => 'textfield',
    '#title' => t('Телефон 1'),
    '#default_value' => bootstrap_setting('phone_first', $theme),
    '#description' => t('Основной телефон'),
  );
    $form['general']['front']['bootstrap_phone_second'] = array(
    '#type' => 'textfield',
    '#title' => t('Телефон 2'),
    '#default_value' => bootstrap_setting('phone_second', $theme),
    '#description' => t('Дополнительный телефон'),
  );
    $form['general']['front']['bootstrap_mail'] = array(
    '#type' => 'textfield',
    '#title' => t('Email'),
    '#default_value' => bootstrap_setting('mail', $theme),
    '#description' => t(''),
  );

  
    $form['general']['front']['bootstrap_link_vk'] = array(
    '#type' => 'textfield',
    '#title' => t('Вконтакте'),
    '#default_value' => bootstrap_setting('link_vk', $theme),
    '#description' => t(''),
  );
    $form['general']['front']['bootstrap_link_facebook'] = array(
    '#type' => 'textfield',
    '#title' => t('Фейсбук'),
    '#default_value' => bootstrap_setting('link_facebook', $theme),
    '#description' => t(''),
  );
 
    $form['general']['front']['bootstrap_link_youtube'] = array(
    '#type' => 'textfield',
    '#title' => t('Ютуб'),
    '#default_value' => bootstrap_setting('link_youtube', $theme),
    '#description' => t(''),
  );
         
	$form['general']['front']['bootstrap_link_instagram'] = array(
    '#type' => 'textfield',
    '#title' => t('Инстаграм'),
    '#default_value' => bootstrap_setting('link_instagram', $theme),
    '#description' => t(''),
  );
	$form['general']['front']['bootstrap_link_map'] = array(
    '#type' => 'textfield',
    '#title' => t('Ссылка на схему проезда'),
    '#default_value' => bootstrap_setting('link_map', $theme),
    '#description' => t(''),
  );

	$form['general']['front']['bootstrap_ru_title_map'] = array(
    '#type' => 'textfield',
    '#title' => t('Название ссылки'),
    '#default_value' => bootstrap_setting('ru_title_map', $theme),
    '#description' => t(''),
  );
	$form['general']['front']['bootstrap_en_title_map'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Название ссылки'),
    '#default_value' => bootstrap_setting('en_title_map', $theme),
    '#description' => t(''),
  );




  $form['general']['front']['bootstrap_video_lenta_mp4'] = array(
    '#type' => 'textfield',
    '#title' => t('Лента - mp4'),
    '#default_value' => bootstrap_setting('video_lenta_mp4', $theme),
    '#description' => t('файл в формате mp4'),
  );
  $form['general']['front']['bootstrap_video_lenta_webm'] = array(
    '#type' => 'textfield',
    '#title' => t('Лента - webm'),
    '#default_value' => bootstrap_setting('video_lenta_webm', $theme),
    '#description' => t('в формате webm'),
  );
    $form['general']['front']['bootstrap_video_lenta_ogv'] = array(
    '#type' => 'textfield',
    '#title' => t('Лента - ogv'),
    '#default_value' => bootstrap_setting('video_lenta_ogv', $theme),
    '#description' => t('файл в формате ogv'),
  );
     $form['general']['front']['bootstrap_video_lenta_jpg'] = array(
    '#type' => 'textfield',
    '#title' => t('Лента - jpg'),
    '#default_value' => bootstrap_setting('video_lenta_jpg', $theme),
    '#description' => t('файл в формате jpg'),
  );
  
  $form['general']['front']['bootstrap_video_lenta_link'] = array(
    '#type' => 'textfield',
    '#title' => t('Ссылка при клике на лету'),
    '#default_value' => bootstrap_setting('video_lenta_link', $theme),
    '#description' => t('/content/#test'),
  );
  
  $form['general']['front']['bootstrap_meta_description'] = array(
    '#type' => 'textfield',
    '#title' => t('МетаТеги главной страницы'),
    '#default_value' => bootstrap_setting('meta_description', $theme),
    '#description' => t('<META NAME="description" CONTENT="...">'),
  );
  
  
     $form['general']['front']['bootstrap_ru_adress_head'] = array(
    '#type' => 'textfield',
    '#title' => t('Адрес'),
    '#default_value' => bootstrap_setting('ru_adress_head', $theme),
    '#description' => t('в шапке'),
  ); 
  $form['general']['front']['bootstrap_en_adress_head'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Адрес'),
    '#default_value' => bootstrap_setting('en_adress_head', $theme),
    '#description' => t('В шапке'),
  );
     $form['general']['front']['bootstrap_ru_adress_footer'] = array(
    '#type' => 'textfield',
    '#title' => t('Адрес'),
    '#default_value' => bootstrap_setting('ru_adress_footer', $theme),
    '#description' => t('В футере'),
  );

     $form['general']['front']['bootstrap_en_adress_footer'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Адрес'),
    '#default_value' => bootstrap_setting('en_adress_footer', $theme),
    '#description' => t('В футере'),
  );
	$form['general']['front']['bootstrap_ru_slogan_top'] = array(
    '#type' => 'textfield',
    '#title' => t('Заголовок сайта'),
    '#default_value' => bootstrap_setting('ru_slogan_top', $theme),
    '#description' => t('В верху по центру над лого'),
  );
     $form['general']['front']['bootstrap_en_slogan_top'] = array(
    '#type' => 'textfield',
    '#title' => t('EN: Заголовок сайта'),
    '#default_value' => bootstrap_setting('en_slogan_top', $theme),
    '#description' => t('В верху по центру над лого'),
  );
  $form['general']['front']['bootstrap_ru_eyesight'] = array(
    '#type' => 'textfield',
    '#title' => t('строка слабовидящим'),
    '#default_value' => bootstrap_setting('ru_eyesight', $theme),
    '#description' => t(''),
  );
  	$form['general']['front']['bootstrap_en_eyesight'] = array(
    '#type' => 'textfield',
    '#title' => t('EN: строка слабовидящим'),
    '#default_value' => bootstrap_setting('en_eyesight', $theme),
    '#description' => t(''),
  );
     

    $form['general']['front']['bootstrap_eyesight_link'] = array(
    '#type' => 'textfield',
    '#title' => t('ссылка слабовидящим'),
    '#default_value' => bootstrap_setting('eyesight_link', $theme),
    '#description' => t('#eyesight_link'),
  );
      $form['general']['front']['bootstrap_ru_logo1'] = array(
    '#type' => 'textfield',
    '#title' => t('Лого'),
    '#default_value' => bootstrap_setting('ru_logo1', $theme),
    '#description' => t('горизонтальное лого'),
  );
      $form['general']['front']['bootstrap_ru_logo_invert1'] = array(
    '#type' => 'textfield',
    '#title' => t('лого-инверт'),
    '#default_value' => bootstrap_setting('ru_logo_invert1', $theme),
    '#description' => t('горизонтальное лого'),
  );
        $form['general']['front']['bootstrap_en_logo1'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Лого'),
    '#default_value' => bootstrap_setting('en_logo1', $theme),
    '#description' => t('горизонтальное лого'),
  );
      $form['general']['front']['bootstrap_en_logo_invert1'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:лого-инверт'),
    '#default_value' => bootstrap_setting('en_logo_invert1', $theme),
    '#description' => t('горизонтальное лого'),
  );
        $form['general']['front']['bootstrap_ru_logo2'] = array(
    '#type' => 'textfield',
    '#title' => t('Лого'),
    '#default_value' => bootstrap_setting('ru_logo2', $theme),
    '#description' => t('вертикальное лого'),
  );
      $form['general']['front']['bootstrap_ru_logo_invert2'] = array(
    '#type' => 'textfield',
    '#title' => t('лого-инверт'),
    '#default_value' => bootstrap_setting('ru_logo_invert2', $theme),
    '#description' => t('вертикальное лого'),
  );
        $form['general']['front']['bootstrap_en_logo2'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Лого'),
    '#default_value' => bootstrap_setting('en_logo2', $theme),
    '#description' => t('вертикальное лого'),
  );
      $form['general']['front']['bootstrap_en_logo_invert2'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:лого-инверт'),
    '#default_value' => bootstrap_setting('en_logo_invert2', $theme),
    '#description' => t('вертикальное лого'),
  );
  
    $form['translate'] = array(
    '#type' => 'fieldset',
    '#title' => t('Переводы'),
    '#group' => 'bootstrap',
  );
    //Container
  $form['translate']['2-day'] = array(
    '#type' => 'fieldset',
    '#title' => t('Предстоящие события'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE, 
  );
    
	$form['translate']['2-day']['bootstrap_langru2day'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Заголовок предстоящие события'),
    '#default_value' => bootstrap_setting('langru2day', $theme),
    '#description' => t(''),
  );
        $form['translate']['2-day']['bootstrap_langen2day'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Заголовок предстоящие события'),
    '#default_value' => bootstrap_setting('langen2day', $theme),
    '#description' => t(''),
  );
        $form['translate']['2-day']['bootstrap_langkh2day'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Заголовок предстоящие события'),
    '#default_value' => bootstrap_setting('langkh2day', $theme),
    '#description' => t(''),
  );
        $form['translate']['2-day']['bootstrap_langmns2day'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Заголовок предстоящие события'),
    '#default_value' => bootstrap_setting('langmns2day', $theme),
    '#description' => t(''),
  );
  
  
  $form['translate']['afisha'] = array(
    '#type' => 'fieldset',
    '#title' => t('Месяца'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
    
	
	//январь
	$form['translate']['afisha']['bootstrap_langrujan'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Январь'),
    '#default_value' => bootstrap_setting('langrujan', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenjan'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Январь'),
    '#default_value' => bootstrap_setting('langenjan', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhjan'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Январь'),
    '#default_value' => bootstrap_setting('langkhjan', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsjan'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Январь'),
    '#default_value' => bootstrap_setting('langmnsjan', $theme),
    '#description' => t(''),
  );
  //Февраль
  	$form['translate']['afisha']['bootstrap_langrufeb'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Февраль'),
    '#default_value' => bootstrap_setting('langrufeb', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenfeb'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Февраль'),
    '#default_value' => bootstrap_setting('langenfeb', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhfeb'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Февраль'),
    '#default_value' => bootstrap_setting('langkhfeb', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsfeb'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Февраль'),
    '#default_value' => bootstrap_setting('langmnsfeb', $theme),
    '#description' => t(''),
  );
  
   //Март
  	$form['translate']['afisha']['bootstrap_langrumar'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Март'),
    '#default_value' => bootstrap_setting('langrumar', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenmar'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Март'),
    '#default_value' => bootstrap_setting('langenmar', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhmar'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Март'),
    '#default_value' => bootstrap_setting('langkhmar', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsmar'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Март'),
    '#default_value' => bootstrap_setting('langmnsmar', $theme),
    '#description' => t(''),
  );
  
     //Апрель
  	$form['translate']['afisha']['bootstrap_langruapr'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Апрель'),
    '#default_value' => bootstrap_setting('langruapr', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenapr'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Апрель'),
    '#default_value' => bootstrap_setting('langenapr', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhapr'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Апрель'),
    '#default_value' => bootstrap_setting('langkhapr', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsapr'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Апрель'),
    '#default_value' => bootstrap_setting('langmnsapr', $theme),
    '#description' => t(''),
  );
  
       //Май
  	$form['translate']['afisha']['bootstrap_langrumay'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Май'),
    '#default_value' => bootstrap_setting('langrumay', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenmay'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Май'),
    '#default_value' => bootstrap_setting('langenmay', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhmay'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Май'),
    '#default_value' => bootstrap_setting('langkhmay', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsmay'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Май'),
    '#default_value' => bootstrap_setting('langmnsmay', $theme),
    '#description' => t(''),
  );
  
         //Июнь
  	$form['translate']['afisha']['bootstrap_langrujun'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Июнь'),
    '#default_value' => bootstrap_setting('langrujun', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenjun'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Июнь'),
    '#default_value' => bootstrap_setting('langenjun', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhjun'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Июнь'),
    '#default_value' => bootstrap_setting('langkhjun', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsjun'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Июнь'),
    '#default_value' => bootstrap_setting('langmnsjun', $theme),
    '#description' => t(''),
  );
  
           //Июль
  	$form['translate']['afisha']['bootstrap_langrujul'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Июль'),
    '#default_value' => bootstrap_setting('langrujul', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenjul'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Июль'),
    '#default_value' => bootstrap_setting('langenjul', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhjul'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Июль'),
    '#default_value' => bootstrap_setting('langkhjul', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsjul'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Июль'),
    '#default_value' => bootstrap_setting('langmnsjul', $theme),
    '#description' => t(''),
  );
  
  
             //Август
  	$form['translate']['afisha']['bootstrap_langruaug'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Август'),
    '#default_value' => bootstrap_setting('langruaug', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenaug'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Август'),
    '#default_value' => bootstrap_setting('langenaug', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhaug'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Август'),
    '#default_value' => bootstrap_setting('langkhaug', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsaug'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Август'),
    '#default_value' => bootstrap_setting('langmnsaug', $theme),
    '#description' => t(''),
  );
  
               //Сентябрь
  	$form['translate']['afisha']['bootstrap_langrusep'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Сентябрь'),
    '#default_value' => bootstrap_setting('langrusep', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langensep'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Сентябрь'),
    '#default_value' => bootstrap_setting('langensep', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhsep'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Сентябрь'),
    '#default_value' => bootstrap_setting('langkhsep', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnssep'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Сентябрь'),
    '#default_value' => bootstrap_setting('langmnssep', $theme),
    '#description' => t(''),
  );
  
                 //октябрь
  	$form['translate']['afisha']['bootstrap_langruokt'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:октябрь'),
    '#default_value' => bootstrap_setting('langruokt', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langenokt'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:октябрь'),
    '#default_value' => bootstrap_setting('langenokt', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhokt'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:октябрь'),
    '#default_value' => bootstrap_setting('langkhokt', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsokt'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:октябрь'),
    '#default_value' => bootstrap_setting('langmnsokt', $theme),
    '#description' => t(''),
  );
  
                   //ноябрь
  	$form['translate']['afisha']['bootstrap_langrunov'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Ноябрь'),
    '#default_value' => bootstrap_setting('langrunov', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langennov'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Ноябрь'),
    '#default_value' => bootstrap_setting('langennov', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhnov'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Ноябрь'),
    '#default_value' => bootstrap_setting('langkhnov', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsnov'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Ноябрь'),
    '#default_value' => bootstrap_setting('langmnsnov', $theme),
    '#description' => t(''),
  );
  
                     //Декабрь
 $form['translate']['afisha']['bootstrap_langrudec'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Декабрь'),
    '#default_value' => bootstrap_setting('langrudec', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langendec'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Декабрь'),
    '#default_value' => bootstrap_setting('langendec', $theme),
    '#description' => t(''),
  );
        $form['translate']['afisha']['bootstrap_langkhdec'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Декабрь'),
    '#default_value' => bootstrap_setting('langkhdec', $theme),
    '#description' => t(''),
  );  
        $form['translate']['afisha']['bootstrap_langmnsdec'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Декабрь'),
    '#default_value' => bootstrap_setting('langmnsdec', $theme),
    '#description' => t(''),
  );
  
  $form['translate']['news'] = array(
    '#type' => 'fieldset',
    '#title' => t('Новости'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
    
	$form['translate']['news']['bootstrap_lang_ru_2day'] = array(
    '#type' => 'textfield',
    '#title' => t('RU:Заголовок Новости'),
    '#default_value' => bootstrap_setting('lang_ru_2day', $theme),
    '#description' => t(''),
  );
        $form['translate']['news']['bootstrap_lang_en_2day'] = array(
    '#type' => 'textfield',
    '#title' => t('EN:Заголовок Новости'),
    '#default_value' => bootstrap_setting('lang_en_2day', $theme),
    '#description' => t(''),
  );
        $form['translate']['news']['bootstrap_lang_kh_2day'] = array(
    '#type' => 'textfield',
    '#title' => t('KH:Заголовок Новости'),
    '#default_value' => bootstrap_setting('lang_kh_2day', $theme),
    '#description' => t(''),
  );  
        $form['translate']['news']['bootstrap_lang_mns_2day'] = array(
    '#type' => 'textfield',
    '#title' => t('MNS:Заголовок Новости'),
    '#default_value' => bootstrap_setting('lang_mns_2day', $theme),
    '#description' => t(''),
  );
  
  
  //Container
  $form['general']['container'] = array(
    '#type' => 'fieldset',
    '#title' => t('Container'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['general']['container']['bootstrap_fluid_container'] = array(
    '#type' => 'checkbox',
    '#title' => t('Fluid container'),
    '#default_value' => bootstrap_setting('fluid_container', $theme),
    '#description' => t('Use <code>.container-fluid</code> class. See <a href="!url">Fluid container</a>', array(
      '!url' => 'http://getbootstrap.com/css/#grid-example-fluid',
    )),
  );

  // Buttons.
  $form['general']['buttons'] = array(
    '#type' => 'fieldset',
    '#title' => t('Buttons'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['general']['buttons']['bootstrap_button_size'] = array(
    '#type' => 'select',
    '#title' => t('Default button size'),
    '#default_value' => bootstrap_setting('button_size', $theme),
    '#empty_option' => t('Normal'),
    '#options' => array(
      'btn-xs' => t('Extra Small'),
      'btn-sm' => t('Small'),
      'btn-lg' => t('Large'),
    ),
  );
  $form['general']['buttons']['bootstrap_button_colorize'] = array(
    '#type' => 'checkbox',
    '#title' => t('Colorize Buttons'),
    '#default_value' => bootstrap_setting('button_colorize', $theme),
    '#description' => t('Adds classes to buttons based on their text value. See: <a href="!bootstrap_url" target="_blank">Buttons</a> and <a href="!api_url" target="_blank">hook_bootstrap_colorize_text_alter()</a>', array(
      '!bootstrap_url' => 'http://getbootstrap.com/css/#buttons',
      '!api_url' => 'http://drupal-bootstrap.org/apis/hook_bootstrap_colorize_text_alter',
    )),
  );
  $form['general']['buttons']['bootstrap_button_iconize'] = array(
    '#type' => 'checkbox',
    '#title' => t('Iconize Buttons'),
    '#default_value' => bootstrap_setting('button_iconize', $theme),
    '#description' => t('Adds icons to buttons based on the text value. See: <a href="!api_url" target="_blank">hook_bootstrap_iconize_text_alter()</a>', array(
      '!api_url' => 'http://drupal-bootstrap.org/apis/hook_bootstrap_iconize_text_alter',
    )),
  );

  // Forms.
  $form['general']['forms'] = array(
    '#type' => 'fieldset',
    '#title' => t('Forms'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['general']['forms']['bootstrap_forms_required_has_error'] = array(
    '#type' => 'checkbox',
    '#title' => t('Make required elements display as an error'),
    '#default_value' => bootstrap_setting('forms_required_has_error', $theme),
    '#description' => t('If an element in a form is required, enabling this will always display the element with a <code>.has-error</code> class. This turns the element red and helps in usability for determining which form elements are required to submit the form.  This feature compliments the "JavaScript > Forms > Automatically remove error classes when values have been entered" feature.'),
  );
  $form['general']['forms']['bootstrap_forms_smart_descriptions'] = array(
    '#type' => 'checkbox',
    '#title' => t('Smart form descriptions (via Tooltips)'),
    '#description' => t('Convert descriptions into tooltips (must be enabled) automatically based on certain criteria. This helps reduce the, sometimes unnecessary, amount of noise on a page full of form elements.'),
    '#default_value' => bootstrap_setting('forms_smart_descriptions', $theme),
  );
  $form['general']['forms']['bootstrap_forms_smart_descriptions_limit'] = array(
    '#type' => 'textfield',
    '#title' => t('"Smart form descriptions" maximum character limit'),
    '#description' => t('Prevents descriptions from becoming tooltips by checking the character length of the description (HTML is not counted towards this limit). To disable this filtering criteria, leave an empty value.'),
    '#default_value' => bootstrap_setting('forms_smart_descriptions_limit', $theme),
    '#states' => array(
      'visible' => array(
        ':input[name="bootstrap_forms_smart_descriptions"]' => array('checked' => TRUE),
      ),
    ),
  );
  $form['general']['forms']['bootstrap_forms_smart_descriptions_allowed_tags'] = array(
    '#type' => 'textfield',
    '#title' => t('"Smart form descriptions" allowed (HTML) tags'),
    '#description' => t('Prevents descriptions from becoming tooltips by checking for HTML not in the list above (i.e. links). Separate by commas. To disable this filtering criteria, leave an empty value.'),
    '#default_value' => bootstrap_setting('forms_smart_descriptions_allowed_tags', $theme),
    '#states' => array(
      'visible' => array(
        ':input[name="bootstrap_forms_smart_descriptions"]' => array('checked' => TRUE),
      ),
    ),
  );

  // Images.
  $form['general']['images'] = array(
    '#type' => 'fieldset',
    '#title' => t('Images'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['general']['images']['bootstrap_image_shape'] = array(
    '#type' => 'select',
    '#title' => t('Default image shape'),
    '#description' => t('Add classes to an <code>&lt;img&gt;</code> element to easily style images in any project. Note: Internet Explorer 8 lacks support for rounded corners. See: <a href="!bootstrap_url" target="_blank">Image Shapes</a>', array(
      '!bootstrap_url' => 'http://getbootstrap.com/css/#images-shapes',
    )),
    '#default_value' => bootstrap_setting('image_shape', $theme),
    '#empty_option' => t('None'),
    '#options' => array(
      'img-rounded' => t('Rounded'),
      'img-circle' => t('Circle'),
      'img-thumbnail' => t('Thumbnail'),
    ),
  );
  $form['general']['images']['bootstrap_image_responsive'] = array(
    '#type' => 'checkbox',
    '#title' => t('Responsive Images'),
    '#default_value' => bootstrap_setting('image_responsive', $theme),
    '#description' => t('Images in Bootstrap 3 can be made responsive-friendly via the addition of the <code>.img-responsive</code> class. This applies <code>max-width: 100%;</code> and <code>height: auto;</code> to the image so that it scales nicely to the parent element.'),
  );

  // Tables.
  $form['general']['tables'] = array(
    '#type' => 'fieldset',
    '#title' => t('Tables'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['general']['tables']['bootstrap_table_bordered'] = array(
    '#type' => 'checkbox',
    '#title' => t('Bordered table'),
    '#default_value' => bootstrap_setting('table_bordered', $theme),
    '#description' => t('Add borders on all sides of the table and cells.'),
  );
  $form['general']['tables']['bootstrap_table_condensed'] = array(
    '#type' => 'checkbox',
    '#title' => t('Condensed table'),
    '#default_value' => bootstrap_setting('table_condensed', $theme),
    '#description' => t('Make tables more compact by cutting cell padding in half.'),
  );
  $form['general']['tables']['bootstrap_table_hover'] = array(
    '#type' => 'checkbox',
    '#title' => t('Hover rows'),
    '#default_value' => bootstrap_setting('table_hover', $theme),
    '#description' => t('Enable a hover state on table rows.'),
  );
  $form['general']['tables']['bootstrap_table_striped'] = array(
    '#type' => 'checkbox',
    '#title' => t('Striped rows'),
    '#default_value' => bootstrap_setting('table_striped', $theme),
    '#description' => t('Add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>. <strong>Note:</strong> Striped tables are styled via the <code>:nth-child</code> CSS selector, which is not available in Internet Explorer 8.'),
  );
  $form['general']['tables']['bootstrap_table_responsive'] = array(
    '#type' => 'checkbox',
    '#title' => t('Responsive tables'),
    '#default_value' => bootstrap_setting('table_responsive', $theme),
    '#description' => t('Makes tables responsive by wrapping them in <code>.table-responsive</code> to make them scroll horizontally up to small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables.'),
  );

  // Components.
  $form['components'] = array(
    '#type' => 'fieldset',
    '#title' => t('Components'),
    '#group' => 'bootstrap',
  );

  // Breadcrumbs.
  $form['components']['breadcrumbs'] = array(
    '#type' => 'fieldset',
    '#title' => t('Breadcrumbs'),
  );

  // Show message for Path Breadcrumbs module support.
  if (_bootstrap_use_path_breadcrumbs($theme)) {
    $form['components']['breadcrumbs']['#description'] = t('The <a href="!path_breadcrumbs" target="_blank">Path Breadcrumbs</a> module is being used to manage this site\'s breadcrumbs display and cannot be configured via theme settings. To configure this site\'s breadcrumbs display, enable the <a href="!enable">Path Breadcrumbs UI</a> sub-module and then visit <a href="!settings">Path Breadcrumbs Settings</a>.', array(
      '!path_breadcrumbs' => 'https://www.drupal.org/project/path_breadcrumbs',
      '!enable' => url('admin/modules', array('fragment' => 'edit-modules-path-breadcrumbs')),
      '!settings' => url('admin/structure/path-breadcrumbs/settings'),
    ));
  }
  else {
    $form['components']['breadcrumbs']['#collapsible'] = TRUE;
    $form['components']['breadcrumbs']['#collapsed'] = TRUE;
    $form['components']['breadcrumbs']['bootstrap_breadcrumb'] = array(
      '#type' => 'select',
      '#title' => t('Breadcrumb visibility'),
      '#default_value' => bootstrap_setting('breadcrumb', $theme),
      '#options' => array(
        0 => t('Hidden'),
        1 => t('Visible'),
        2 => t('Only in admin areas'),
      ),
    );
    $form['components']['breadcrumbs']['bootstrap_breadcrumb_home'] = array(
      '#type' => 'checkbox',
      '#title' => t('Show "Home" breadcrumb link'),
      '#default_value' => bootstrap_setting('breadcrumb_home', $theme),
      '#description' => t('If your site has a module dedicated to handling breadcrumbs already, ensure this setting is enabled.'),
      '#states' => array(
        'invisible' => array(
          ':input[name="bootstrap_breadcrumb"]' => array('value' => 0),
        ),
      ),
    );
    $form['components']['breadcrumbs']['bootstrap_breadcrumb_title'] = array(
      '#type' => 'checkbox',
      '#title' => t('Show current page title at end'),
      '#default_value' => bootstrap_setting('breadcrumb_title', $theme),
      '#description' => t('If your site has a module dedicated to handling breadcrumbs already, ensure this setting is disabled.'),
      '#states' => array(
        'invisible' => array(
          ':input[name="bootstrap_breadcrumb"]' => array('value' => 0),
        ),
      ),
    );
  }

  // Navbar.
  $form['components']['navbar'] = array(
    '#type' => 'fieldset',
    '#title' => t('Navbar'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['components']['navbar']['bootstrap_navbar_position'] = array(
    '#type' => 'select',
    '#title' => t('Navbar Position'),
    '#description' => t('Select your Navbar position.'),
    '#default_value' => bootstrap_setting('navbar_position', $theme),
    '#options' => array(
      'static-top' => t('Static Top'),
      'fixed-top' => t('Fixed Top'),
      'fixed-bottom' => t('Fixed Bottom'),
    ),
    '#empty_option' => t('Normal'),
  );
  $form['components']['navbar']['bootstrap_navbar_inverse'] = array(
    '#type' => 'checkbox',
    '#title' => t('Inverse navbar style'),
    '#description' => t('Select if you want the inverse navbar style.'),
    '#default_value' => bootstrap_setting('navbar_inverse', $theme),
  );

  // Pager
  $form['components']['pager'] = array(
    '#type' => 'fieldset',
    '#title' => t('Pagination'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );

  $form['components']['pager']['bootstrap_pager_first_and_last'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show "First" and "Last" links in the pager'),
    '#description' => t('Allow user to choose whether to display "First" and "Last" links on pagers.'),
    '#default_value' => bootstrap_setting('pager_first_and_last', $theme),
  );

  // Region wells.
  $wells = array(
    '' => t('None'),
    'well' => t('.well (normal)'),
    'well well-sm' => t('.well-sm (small)'),
    'well well-lg' => t('.well-lg (large)'),
  );
  $form['components']['region_wells'] = array(
    '#type' => 'fieldset',
    '#title' => t('Region wells'),
    '#description' => t('Enable the <code>.well</code>, <code>.well-sm</code> or <code>.well-lg</code> classes for specified regions. See: documentation on <a href="!wells" target="_blank">Bootstrap Wells</a>.', array(
      '!wells' => 'http://getbootstrap.com/components/#wells',
    )),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  // Get defined regions.
  $regions = system_region_list($theme);
  foreach ($regions as $name => $title) {
    $form['components']['region_wells']['bootstrap_region_well-' . $name] = array(
      '#title' => $title,
      '#type' => 'select',
      '#attributes' => array(
        'class' => array('input-sm'),
      ),
      '#options' => $wells,
      '#default_value' => bootstrap_setting('region_well-' . $name, $theme),
    );
  }

  // JavaScript settings.
  $form['javascript'] = array(
    '#type' => 'fieldset',
    '#title' => t('JavaScript'),
    '#group' => 'bootstrap',
  );

  // Anchors.
  $form['javascript']['anchors'] = array(
    '#type' => 'fieldset',
    '#title' => t('Anchors'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#description' => t('This plugin is not able to be configured from the UI as it is severely broken. In an effort to balance not break backwards compatibility and to prevent new users from running into unforeseen issues, you must manually opt-in/out inside your theme .info file. Please see the following issue for more details: <a href="!url" target="_blank">Replace custom JS with the bootstrap-anchor plugin</a>', array(
      '!url' => 'https://www.drupal.org/node/2462645',
    )),
  );
  $form['javascript']['anchors']['bootstrap_anchors_fix'] = array(
    '#type' => 'checkbox',
    '#title' => t('Fix anchor positions'),
    '#default_value' => bootstrap_setting('anchors_fix', $theme),
    '#description' => t('Ensures anchors are correctly positioned only when there is margin or padding detected on the BODY element. This is useful when fixed navbar or administration menus are used.'),
    // Prevent UI edits, see description above.
    '#disabled' => TRUE,
  );
  $form['javascript']['anchors']['bootstrap_anchors_smooth_scrolling'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable smooth scrolling'),
    '#default_value' => bootstrap_setting('anchors_smooth_scrolling', $theme),
    '#description' => t('Animates page by scrolling to an anchor link target smoothly when clicked.'),
    '#states' => array(
      'invisible' => array(
        ':input[name="bootstrap_anchors_fix"]' => array('checked' => FALSE),
      ),
    ),
    // Prevent UI edits, see description above.
    '#disabled' => TRUE,
  );

  // Forms.
  $form['javascript']['forms'] = array(
    '#type' => 'fieldset',
    '#title' => t('Forms'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['javascript']['forms']['bootstrap_forms_has_error_value_toggle'] = array(
    '#type' => 'checkbox',
    '#title' => t('Automatically remove error classes when values have been entered'),
    '#default_value' => bootstrap_setting('forms_has_error_value_toggle', $theme),
    '#description' => t('If an element has a <code>.has-error</code> class attached to it, enabling this will automatically remove that class when a value is entered. This feature compliments the "General > Forms > Make required elements display as an error" feature.'),
  );

  // Popovers.
  $form['javascript']['popovers'] = array(
    '#type' => 'fieldset',
    '#title' => t('Popovers'),
    '#description' => t('Add small overlays of content, like those on the iPad, to any element for housing secondary information.'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['javascript']['popovers']['bootstrap_popover_enabled'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable popovers.'),
    '#description' => t('Elements that have the <code>data-toggle="popover"</code> attribute set will automatically initialize the popover upon page load. <strong class="error text-error">WARNING: This feature can sometimes impact performance. Disable if pages appear to "hang" after initial load.</strong>'),
    '#default_value' => bootstrap_setting('popover_enabled', $theme),
  );
  $form['javascript']['popovers']['options'] = array(
    '#type' => 'fieldset',
    '#title' => t('Options'),
    '#description' => t('These are global options. Each popover can independently override desired settings by appending the option name to <code>data-</code>. Example: <code>data-animation="false"</code>.'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#states' => array(
      'visible' => array(
        ':input[name="bootstrap_popover_enabled"]' => array('checked' => TRUE),
      ),
    ),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_animation'] = array(
    '#type' => 'checkbox',
    '#title' => t('animate'),
    '#description' => t('Apply a CSS fade transition to the popover.'),
    '#default_value' => bootstrap_setting('popover_animation', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_html'] = array(
    '#type' => 'checkbox',
    '#title' => t('HTML'),
    '#description' => t("Insert HTML into the popover. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks."),
    '#default_value' => bootstrap_setting('popover_html', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_placement'] = array(
    '#type' => 'select',
    '#title' => t('placement'),
    '#description' => t('Where to position the popover. When "auto" is specified, it will dynamically reorient the popover. For example, if placement is "auto left", the popover will display to the left when possible, otherwise it will display right.'),
    '#default_value' => bootstrap_setting('popover_placement', $theme),
    '#options' => drupal_map_assoc(array(
      'top',
      'bottom',
      'left',
      'right',
      'auto',
      'auto top',
      'auto bottom',
      'auto left',
      'auto right',
    )),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_selector'] = array(
    '#type' => 'textfield',
    '#title' => t('selector'),
    '#description' => t('If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See <a href="!this" target="_blank">this</a> and <a href="!example" target="_blank">an informative example</a>.', array(
      '!this' => 'https://github.com/twbs/bootstrap/issues/4215',
      '!example' => 'http://jsfiddle.net/fScua/',
    )),
    '#default_value' => bootstrap_setting('popover_selector', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_trigger'] = array(
    '#type' => 'checkboxes',
    '#title' => t('trigger'),
    '#description' => t('How a popover is triggered.'),
    '#default_value' => bootstrap_setting('popover_trigger', $theme),
    '#options' => drupal_map_assoc(array(
      'click',
      'hover',
      'focus',
      'manual',
    )),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_trigger_autoclose'] = array(
    '#type' => 'checkbox',
    '#title' => t('Auto-close on document click'),
    '#description' => t('Will automatically close the current popover if a click occurs anywhere else other than the popover element.'),
    '#default_value' => bootstrap_setting('popover_trigger_autoclose', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_title'] = array(
    '#type' => 'textfield',
    '#title' => t('title'),
    '#description' => t("Default title value if \"title\" attribute isn't present."),
    '#default_value' => bootstrap_setting('popover_title', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_content'] = array(
    '#type' => 'textfield',
    '#title' => t('content'),
    '#description' => t('Default content value if "data-content" or "data-target" attributes are not present.'),
    '#default_value' => bootstrap_setting('popover_content', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_delay'] = array(
    '#type' => 'textfield',
    '#title' => t('delay'),
    '#description' => t('The amount of time to delay showing and hiding the popover (in milliseconds). Does not apply to manual trigger type.'),
    '#default_value' => bootstrap_setting('popover_delay', $theme),
  );
  $form['javascript']['popovers']['options']['bootstrap_popover_container'] = array(
    '#type' => 'textfield',
    '#title' => t('container'),
    '#description' => t('Appends the popover to a specific element. Example: "body". This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.'),
    '#default_value' => bootstrap_setting('popover_container', $theme),
  );

  // Tooltips.
  $form['javascript']['tooltips'] = array(
    '#type' => 'fieldset',
    '#title' => t('Tooltips'),
    '#description' => t('Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don\'t rely on images, use CSS3 for animations, and data-attributes for local title storage. See <a href="!url" target="_blank">Bootstrap tooltips</a> for more documentation.', array(
      '!url' => 'http://getbootstrap.com/javascript/#tooltips',
    )),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['javascript']['tooltips']['bootstrap_tooltip_enabled'] = array(
    '#type' => 'checkbox',
    '#title' => t('Enable tooltips'),
    '#description' => t('Elements that have the <code>data-toggle="tooltip"</code> attribute set will automatically initialize the tooltip upon page load. <strong class="error text-error">WARNING: This feature can sometimes impact performance. Disable if pages appear to "hang" after initial load.</strong>'),
    '#default_value' => bootstrap_setting('tooltip_enabled', $theme),
  );
  $form['javascript']['tooltips']['options'] = array(
    '#type' => 'fieldset',
    '#title' => t('Options'),
    '#description' => t('These are global options. Each tooltip can independently override desired settings by appending the option name to <code>data-</code>. Example: <code>data-animation="false"</code>.'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#states' => array(
      'visible' => array(
        ':input[name="bootstrap_tooltip_enabled"]' => array('checked' => TRUE),
      ),
    ),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_animation'] = array(
    '#type' => 'checkbox',
    '#title' => t('animate'),
    '#description' => t('Apply a CSS fade transition to the tooltip.'),
    '#default_value' => bootstrap_setting('tooltip_animation', $theme),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_html'] = array(
    '#type' => 'checkbox',
    '#title' => t('HTML'),
    '#description' => t("Insert HTML into the tooltip. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks."),
    '#default_value' => bootstrap_setting('tooltip_html', $theme),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_placement'] = array(
    '#type' => 'select',
    '#title' => t('placement'),
    '#description' => t('Where to position the tooltip. When "auto" is specified, it will dynamically reorient the tooltip. For example, if placement is "auto left", the tooltip will display to the left when possible, otherwise it will display right.'),
    '#default_value' => bootstrap_setting('tooltip_placement', $theme),
    '#options' => drupal_map_assoc(array(
      'top',
      'bottom',
      'left',
      'right',
      'auto',
      'auto top',
      'auto bottom',
      'auto left',
      'auto right',
    )),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_selector'] = array(
    '#type' => 'textfield',
    '#title' => t('selector'),
    '#description' => t('If a selector is provided, tooltip objects will be delegated to the specified targets.'),
    '#default_value' => bootstrap_setting('tooltip_selector', $theme),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_trigger'] = array(
    '#type' => 'checkboxes',
    '#title' => t('trigger'),
    '#description' => t('How a tooltip is triggered.'),
    '#default_value' => bootstrap_setting('tooltip_trigger', $theme),
    '#options' => drupal_map_assoc(array(
      'click',
      'hover',
      'focus',
      'manual',
    )),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_delay'] = array(
    '#type' => 'textfield',
    '#title' => t('delay'),
    '#description' => t('The amount of time to delay showing and hiding the tooltip (in milliseconds). Does not apply to manual trigger type.'),
    '#default_value' => bootstrap_setting('tooltip_delay', $theme),
  );
  $form['javascript']['tooltips']['options']['bootstrap_tooltip_container'] = array(
    '#type' => 'textfield',
    '#title' => t('container'),
    '#description' => t('Appends the tooltip to a specific element. Example: "body"'),
    '#default_value' => bootstrap_setting('tooltip_container', $theme),
  );

  // Advanced settings.
  $form['advanced'] = array(
    '#type' => 'fieldset',
    '#title' => t('Advanced'),
    '#group' => 'bootstrap',
  );

  // jQuery Update error suppression.
  $form['advanced']['bootstrap_toggle_jquery_error'] = array(
    '#type' => 'checkbox',
    '#title' => t('Suppress jQuery version error message'),
    '#default_value' => bootstrap_setting('toggle_jquery_error', $theme),
    '#description' => t('Enable this if the version of jQuery has been upgraded to 1.9+ using a method other than the <a href="!jquery_update" target="_blank">jQuery Update</a> module.', array(
      '!jquery_update' => 'https://drupal.org/project/jquery_update',
    )),
  );

  // BootstrapCDN.
  bootstrap_cdn_provider_settings_form($form, $form_state, $theme);
}


