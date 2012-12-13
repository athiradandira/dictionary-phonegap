$(document).bind("mobileinit", function(){
	navigator.notification.alert("Hello World of PhoneGap");
});

var showMessageBox = function() {
	navigator.notification.alert("Hello World of PhoneGap");
}

function traTu(){	
	$.mobile.showPageLoadingMsg();
	$.mobile.changePage( "#tratu-page", { transition: "slideup"} );
	$.mobile.hidePageLoadingMsg();	
}

function hienThiThongTin(){
	alert('hienthiThongTin');
}

function capNhatDuLieu(){
	alert('capnhatDuLieu');
}

function thoatUngDung(){
	alert('thoatUngDung');
}

function keyUpHandler(){
	//alert($('#search-text').val());
	var result = $("#search-text").val();
	$("#char-pressed").val(result);
}