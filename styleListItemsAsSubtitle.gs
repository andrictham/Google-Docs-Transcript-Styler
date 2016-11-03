//
// This is the main function that iterates through our entire document and applies our desired style to all list items.
//

function styleListItemsAsSubtitle() {
	
	// // We can reference the document by its ID, like so:
	// var targetDocId = "1_XMKsTd_jHR7x7Gdpm_GJiDdBxG1PPVsydzw-b_Z394";  
	// var targetDoc = DocumentApp.openById(targetDocId);
	// var body = targetDoc.getBody(); 
	
	// // Or, we can reference the bound document directly. 
	// // If we run this from Tools > Script editor within a document, Google Docs will run it within the context of that document.
	
	var body = DocumentApp.getActiveDocument().getBody()
	var listItems = body.getListItems();
	for (var i = 0; i < listItems.length; i++) {
		var listItem = listItems[i];
		// Here, we can choose the desired paragraph style to be applied to all of our list items.
		// https://developers.google.com/apps-script/reference/document/paragraph-heading
		listItem.setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
	}
}

//
// This is the function we want to run from Script Editor, that initializes a convenient menu for us within the UI to execute our script.
//

function onOpen() {
	var ui = DocumentApp.getUi();
	// Or DocumentApp or FormApp.
	ui.createMenu('List Item to Subtitle')
		.addItem('Style List Items as Subtitle', 'menuItem1')
		.addToUi();
}

// Initialize menu item that runs our script.
function menuItem1() {
	styleListItemsAsSubtitle();
}

