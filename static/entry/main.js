
var template = require("../components/page/page.handlebars");

document.write(template({ 
	title: "A book", 
	synopsis: "With a description" 
}));