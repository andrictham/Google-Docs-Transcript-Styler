function styleListItemsAsSubtitle() {
	// var targetDocId = "1_XMKsTd_jHR7x7Gdpm_GJiDdBxG1PPVsydzw-b_Z394";  
	// var targetDoc = DocumentApp.openById(targetDocId);
	// var body = targetDoc.getBody(); 
	var body = DocumentApp.getActiveDocument().getBody()
	var listItems = body.getListItems();
	for (var i = 0; i < listItems.length; i++) {
		var listItem = listItems[i];
		listItem.setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
	}
}

function onOpen() {
	var ui = DocumentApp.getUi();
	// Or DocumentApp or FormApp.
	ui.createMenu('List Item to Subtitle')
		.addItem('Style List Items as Subtitle', 'menuItem1')
		.addToUi();
}

function menuItem1() {
	styleListItemsAsSubtitle();
}

