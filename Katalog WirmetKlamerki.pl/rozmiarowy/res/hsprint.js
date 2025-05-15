/**
* Modified for Highslide from http://www.boutell.com/newfaq/creating/printpart.html
*/
if (!hsp) { var hsp = {
	stylesFile : '',
	printCaption : false,
	printHeading : false,
	printLeft : false,
	printRight : false,
	captionWidth : 0,
	printLink: '',
	openLink : ''}
}

hs.printImage = function (el) {
	var exp = hs.expanders[hs.getWrapperKey(el)];
	link = "about:blank";
	var pw = window.open(link, "_new");
	pw.document.open();
	pw.document.write(exp.getPrintPage());
	pw.document.close();
	return false;
};

hs.openImage = function (el) {
	var exp = hs.expanders[hs.getWrapperKey(el)];
	link = "about:blank";
	var pw = window.open(link, "_new");
	pw.document.open();
	pw.document.write(exp.getOpenPage());
	pw.document.close();
	return false;
};

hs.Expander.prototype.getPrintPage = function() {
	htmlString = "<html><head><title>Print Image</title><link href='" + hsp.stylesFile + "' rel='stylesheet' />" +
		"<style type='text/css'>BODY{background-color: #ffffff;background-image: url();}.imgcount{display: none;}.metadata{display: none;}.exiflink{display: none;}.button{display: none;}.highslide-caption, .highslide-heading{background-color: #ffffff;color: #000000;padding: 0px;}</style>" +
		"<script>function step1(){setTimeout('step2()', 10);};function step2(){window.print();window.close();};</scr" + "ipt></head><body onLoad='step1()'>";
		if (hsp.printHeading) {htmlString += "<div class='highslide-heading' style='display: block; width: " + hsp.captionWidth + "px;'>" + this.heading.innerHTML + "</div><img src='" + hsp.printLink + "'/>";
		} else if (hsp.printCaption) {htmlString += "<img src='" + hsp.printLink + "'/><div class='highslide-caption' style='display: block; width: " + hsp.captionWidth + "px; padding: 5px;'>" + this.caption.innerHTML + "</div>";
		} else if (hsp.printLeft) {htmlString += "<table cellspacing='5'><tr><td style='vertical-align: top;'><div class='highslide-caption' style='display: block; width: " + hsp.captionWidth + "px;'>" + this.caption.innerHTML + "</div></td><td><img src='" + hsp.printLink + "'/></td></tr></table>";
		} else if (hsp.printRight) {htmlString += "<table cellspacing='5'><tr><td><img src='" + hsp.printLink + "'/></td><td style='vertical-align: top;'><div class='highslide-caption' style='display: block; width: " + hsp.captionWidth + "px;'>" + this.caption.innerHTML + "</div></td></tr></table>";
		} else {htmlString += "<img src='" + hsp.printLink + "'/>";}
		htmlString += "</body></html>";
	return htmlString;
};

hs.Expander.prototype.getOpenPage = function() {
	htmlString = "<html><head><title>Raw Image</title></head><body><img src='" + hsp.openLink + "'/></body></html>";
	return htmlString;
};
