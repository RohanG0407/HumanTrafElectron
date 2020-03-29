var location = [-73.780070, 42.859790];
marketDATA = [
    {
        company: "marshalls",
        location: [-73.780067,42.859791]
    },
    {
        company: "sears",
        location: [-73.847763,42.697849]
    },
    {
        company: "macys",
        location: [-73.814537,42.711330]
    }
];


mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oYW5nIiwiYSI6ImNqdGM1eThxcjB0OHU0NHA0NnE2ZHRsa2UifQ.MV8JZhwT4IeduQPcy2zSAg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rohang/ck8bpt2bn29951iqielnml0tq',
    center: location,
    zoom: 13
});


linkers = 'input.html';
//company = 'chipotle';


/*var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<link href= \'map.css\' rel="stylesheet"/>' +
    '<div class="mapboxgl-popupContainerButton"><p class="popupText" id=company>company</p><button class="mapboxgl-popupButton" onclick="window.location.href=linkers">Submit Request</button></div>'
); */

// create DOM element for the marker


function makeMarker(company, location) {
    var container = document.getElementById('container');
    var newMarker = document.createElement('div');
    newMarker.id = "marker";
    container.appendChild(newMarker);
    var popupContainer = document.createElement('div');
    var text = document.createElement('p');
    text.innerText = company;

    var button = document.createElement('button');
    button.classList.add("mapboxgl-popupButton");
    button.setAttribute('onclick', 'window.location.href = linkers');
    button.innerText = "Submit Request";
    popupContainer.appendChild(text);
    popupContainer.appendChild(button);
    var popup = new mapboxgl.Popup({offset: 25}).setHTML(popupContainer.innerHTML);

    new mapboxgl.Marker(newMarker)
        .setLngLat(location)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
}
for(i = 0; i < marketDATA.length; i++) {

    makeMarker(marketDATA[i]['company'],marketDATA[i]['location']);

};








