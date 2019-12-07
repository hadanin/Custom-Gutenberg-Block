<?php
/*
	Plugin Name: Custom Gutenberg Block
	Author: Nazanin Hesamzadeh
	Description: Block containing title and description
	Version: 1.0.0
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