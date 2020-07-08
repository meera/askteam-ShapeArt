<?php
/**
 * @package askteammate
 * @version 1.7.2
 */
/*
Plugin Name: AskTeamMate ShapeArt
Plugin URI: https://askteammate.com/wordpress/shapeart
Description:  Adds Gutenberg block to display text inside a Shape. Create eye-catching graphics inside Gutenberg block.
Author: Meera Datey
Author URI: https://askteammate.com/
Version: 1.0
*/

if( ! defined('ABSPATH')) {
    exit;
}



function shapeart_block_register() {

    wp_register_script(
        'askteammate-shapeart-editor-script', 
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components')
        );

    wp_register_style(
        'askteammate-shapeart-editor-syle', 
        plugins_url('dist/bundle.css', __FILE__),
        array('wp-edit-blocks')
        );

        wp_register_style(
            'askteammate-shapeart-frontend-syle', 
            plugins_url('dist/bundle.css', __FILE__),
            array('wp-edit-blocks')
            );
    //wp_register_style
    register_block_type(
        'askteammate/shapeart', 
        array(
            'editor_script' => 'askteammate-shapeart-editor-script',
            'editor_style' => 'askteammate-shapeart-editor-syle',
            'style' =>  'askteammate-shapeart-frontend-syle',
          

    ));
}
add_action('init', 'shapeart_block_register');
