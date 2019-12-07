<?php
/*
	Plugin Name: Custom Gutenberg Block
	Author: Nazanin Hesamzadeh
	Version: 1.0.0
	Description: Block containing title and description
*/
function CustomGutenbergBlock(){
	wp_enqueue_script(
		'cgb-block',
		plugin_dir_url(__FILE__). 'cgb-block.js',
		array('wp-blocks','wp-editor'),
		true
	);
}
add_action('enqueue_block_editor_assets','CustomGutenbergBlock');