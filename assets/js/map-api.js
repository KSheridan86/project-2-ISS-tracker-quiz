/* jshint esversion: 8 */

//make map and tiles
const map = L.map('map-box', {
    zoomControl: false
}).setView([0, 0], 2);
const attribution =
    '<a href="https://www.maptiler.com/copyright/" target="_blank"></a><a href="https://www.openstreetmap.org/copyright" target="_blank"></a>';
const tileUrl =
    'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=2Oi9o6YKioemgeKcXlQS';
const tiles = L.tileLayer(tileUrl, {
    attribution
});
tiles.addTo(map);

//making a marker icon
const crosshair = L.icon({
    iconUrl: 'assets/images/crosshair-icon-green.png',
    iconSize: [50, 50],
    iconAnchor: [20, 30]
});
const marker = L.marker([0, 0], {
    icon: crosshair
}).addTo(map);