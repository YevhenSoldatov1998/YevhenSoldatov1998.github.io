function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(48.5179637, 32.2118718),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        scrollwheel: true,
        draggable: true,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
    };
    var map = new google.maps.Map(document.getElementById("karta"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);