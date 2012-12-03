		

var showMessageBox = function() {
	navigator.notification.alert("Hello World of PhoneGap");
}

function init() {
		//document.addEventListener("deviceready", showMessageBox, true);
}

function traTu(){	
	 //$.mobile.changePage("#tratu-page");
	$.mobile.showPageLoadingMsg();
	$.mobile.changePage( "tratu.html", { transition: "slideup"} );
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