
//register block - info 
wp.blocks.registerBlockType('cgb-block/loader', {
  name: 'mcg_block',
  title: 'My Custom Block',
  icon: 'editor-kitchensink',
  category: 'common',
  attributes: {
    content: {type: 'string'},
    description: {type: 'string'}
  },
  
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({content: event.target.value})
    }
    function updateDescription(event) {
      props.setAttributes({description: event.target.value})
    }
    return React.createElement(
      "div",
      null,
	  React.createElement("input", { type: "text", value: props.attributes.content , style:{ width:"100%"}, onChange: updateContent, placeHolder:"Title" }),
	  React.createElement("textarea", { value: props.attributes.description , style:{ width:"100%"},onChange: updateDescription , placeHolder:"Description"}),
    );
  },
  save: function(props) {
    return wp.element.createElement(
      "div",
      { style: { border: "1px 0px solid gray"} },
	  React.createElement("h3", {} , props.attributes.content),
	  React.createElement("p", { style:{ fontStyle: "italic" , fontSize:"17px" }} , props.attributes.description)
    );
  }
})