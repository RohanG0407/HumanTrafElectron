var location = [-73.780070,42.859790];

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oYW5nIiwiYSI6ImNqdGM1eThxcjB0OHU0NHA0NnE2ZHRsa2UifQ.MV8JZhwT4IeduQPcy2zSAg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rohang/ck8bpt2bn29951iqielnml0tq',
    center: location,
    zoom: 13
});



linkers = 'input.html';
var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<div class="mapboxgl-popupContainerButton"><button id="mapboxgl-popupButton" onclick="window.location.href=linkers">Submit Request</button></div>'
);


// create DOM element for the marker
var el = document.getElementById('marker');

// create the marker
new mapboxgl.Marker(el)
    .setLngLat(location)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);


