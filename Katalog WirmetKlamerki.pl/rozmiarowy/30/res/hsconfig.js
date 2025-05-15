hs.addEventListener(window, "load", function() {
var autoload = /[?&]autoload=([^&#]*)/.exec(window.location.href);
if (autoload) document.getElementById(autoload[1]).onclick();
});
function toggleDiv(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
};
hs.graphicsDir = '../res/graphics/';
hsp.stylesFile = '../res/common.css';
hs.marginBottom = 15;
hs.marginTop = 15;
hs.marginLeft = 15;
hs.marginRight = 15;
hs.dragByHeading = false;
hs.preserveContent = false;
hs.outlineType = '';
hs.lang.loadingTitle = 'Kliknij aby anulować';
hs.lang.previousTitle = 'Poprzednie (lewa strzałka)';
hs.lang.playTitle = 'Rozpocznij pokaz slajdów (spacja)';
hs.lang.pauseTitle = 'Wstrzymaj pokaz slajdów (spacja)';
hs.lang.nextTitle = 'Następne (prawa strzałka)';
hs.lang.moveTitle = 'Click and drag to move';
hs.lang.fullExpandTitle = 'Expand to actual size (up arrow)';
hs.lang.closeTitle = 'Zamknij (ESC lub Enter)';
hs.lang.previousText = 'Prev';
hs.lang.playText = 'Play';
hs.lang.pauseText = 'Pause';
hs.lang.nextText = 'Next';
hs.lang.fullExpandText = '1:1';
hs.lang.closeText = 'Close';
hs.lang.loadingText = 'Wczytywanie...';
hs.lang.restoreTitle = 'Kliknij aby zamknąć';
hs.lang.focusTitle = 'Click to bring to front';
hs.lang.resizeTitle = 'Resize';
hs.align = 'center';
hs.expandDuration = 500;
hs.restoreDuration = 500;
hs.showCredits= false;
hs.allowSizeReduction = true;
hs.dimmingOpacity = 0.7;
hs.dimmingDuration = 100;
hs.transitionDuration = 500;
hs.allowMultipleInstances = true;
hs.allowWidthReduction = true;
hs.blockRightClick = true;
hs.flushImgSize = false;
hs.numberOfImagesToPreload = 5;
hs.transitions = ['expand', 'crossfade'];
hs.easing = 'easeInBack';
hs.easingClose = 'easeOutBack';
hs.onKeyDown = function(sender, e) {
	if(e.keyCode == 40 || e.keyCode == 70) return false;
	if(e.keyCode == 38) return false;
}
hs.addSlideshow({
	interval: 5000,
	repeat: false,
	overlayOptions: {
		opacity: 1.0,
		position: 'top right',
		offsetY: 0,
		offsetX: 0,
		hideOnMouseOut: true
	},
	fixedControls: false,
	useControls: true
});