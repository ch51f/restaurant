$(function() {
});

var order = function() {
	alert("Ordering Success");
}

var feedback = function() {
	alert("Thinks");
	$.mobile.navigate("#food");
}

function initialize() {
    var mapOptions = {
        center: { lat: -34.397, lng: 150.644},
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
// google.maps.event.addDomListener(window, 'load', initialize);