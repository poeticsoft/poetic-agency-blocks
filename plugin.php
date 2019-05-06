<?php

	/**
	*
	* Plugin Name: poeticsoft-agency-blocks 
	* Plugin URI: http://www.poeticsoft.com/plugins/poeticsoft-agency-blocks
	* Description: WordPress Agency Engine Blocks by Poeticsoft
	* Version: 0.00
	* Author: Alberto Moral
	* Author URI: http://www.poeticsoft.com/albertomoral
	*
	**/	

	/* DEBUG */

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

  /* BLOCKS */

  // https://css-tricks.com/learning-gutenberg-7-building-our-block-custom-card-block/

  /** ---------------------------------------------------------------------- 
   * Poetic Agency Categorie 
   */

  function poetic_agency_blocks_category( $categories, $post) {

    return array_merge(
      $categories,
      array(
        array(
          'slug' => 'poeticagency',
          'title' => __( 'Poetic Agency', 'poeticagency'),
        ),
      )
   );
  }

  add_filter( 'block_categories', 'poetic_agency_blocks_category', 10, 2);

  /** ---------------------------------------------------------------------- 
   * Poetic Agency Blocks
   */

  /* Register */

  function poetic_agency_block_register() {

    /* Static */

    $StaticBlocks = array(
      'static'
    );  

    foreach($StaticBlocks as $BlockName) {

      wp_register_style(
        'poetic_agency_block_' . $BlockName . '_style',
        plugins_url('work/' . $BlockName . '.css', __FILE__),
        array( 'wp-blocks'),
        filemtime(__DIR__ . '/work/' . $BlockName . '.css') 
      );

      wp_register_script(
        'poetic_agency_block_' . $BlockName . '_edit_script',
        plugins_url('work/' . $BlockName . '.js', __FILE__),
        array(
          'wp-blocks',
          'wp-element',
          'wp-editor',
          'wp-i18n'
       ),
        __DIR__ . '/work/' . $BlockName . '.js' 
      );

      register_block_type(
        'poeticagency/' . $BlockName, 
        array(
          'editor_script' =>  'poetic_agency_block_' . $BlockName . '_edit_script',
          'style' =>          'poetic_agency_block_' . $BlockName . '_style',
        )
      );
    }

    /* Dynamics */

    $DynamicBlocks = array(
      'dynamic'
    );

    foreach($DynamicBlocks as $BlockName) {

      wp_register_style(
        'poetic_agency_block_' . $BlockName . '_style',
        plugins_url('work/' . $BlockName . '.css', __FILE__),
        array( 'wp-blocks'),
        filemtime(__DIR__ . '/work/' . $BlockName . '.css') 
      );

      wp_register_script(
        'poetic_agency_block_' . $BlockName . '_edit_script',
        plugins_url('work/' . $BlockName . '.js', __FILE__),
        array(
          'wp-blocks',
          'wp-element',
          'wp-editor',
          'wp-i18n',
          'wp-data'
        ),
        __DIR__ . '/work/' . $BlockName . '.js' 
      );

      require __dir__ . '/src/callback/' . $BlockName . '.php';

      register_block_type(
        'poeticagency/' . $BlockName, 
        array(
          'editor_script' => 'poetic_agency_block_' . $BlockName . '_edit_script',
          'render_callback' => 'poetic_agency_block_' . $BlockName . '_render_callback'
        )
      );
    }
  }

  add_action('init', 'poetic_agency_block_register');
  
?>