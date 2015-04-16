var tabId = "#home";

$(document).ready(function(){
	$("#header").load("../../html/header.inc", function(){
		$(tabId).addClass("selected");
	});
	$("#footer").load("../../html/footer.inc");
	
});