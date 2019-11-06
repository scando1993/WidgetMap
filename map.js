var polyline, mymap;

    mymap = L.map('mapid').setView([-34.397, 150.644], 13);
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //         lat: -34.397,
    //         lng: 150.644
    //     },
    //     zoom: 13
    // });
    // map.addListener('click', insertDataPoint);
    mymap.on('click', insertDataPoint);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);


polyline = L.polyline({
        color: '#000000',
        opacity: 0.7,
        weight: 3
    }).addTo(mymap);
    // polyline = new google.maps.Polyline({
    //     strokeColor: '#000000',
    //     strokeOpacity: 0.7,
    //     strokeWeight: 3
    // });
    // polyline.setMap(map);


plots = [];

// Bunch of other code that isn't important

function insertDataPoint(e) {
    console.log("data point printed");
    var path = polyline.getLatLngs();
    path.push(e.latlng);
    console.log(e.latlng);
    // Logic to set up marker or circle
    if (plots.length === 0) {
        // Case: first click
        var startMarker = L.marker(e.latlng);
        startMarker.addTo(mymap);
        // startMarker.setPosition(e.latLng);
        // startMarker.setMap(map);
        plots.push(startMarker);
        console.log(plots);

    } else {
        if (plots.length !== 1) {
            // Case: we have intermediate points between start and end
            var plot = plots.pop();

            var marker = L.marker(plot.getLatLng()).addTo(mymap);
            // var marker = new google.maps.Marker({
            //     position: plot.getPosition(),
            //     icon: {
            //         path: google.maps.SymbolPath.CIRCLE,
            //         fillColor: '#ffffff',
            //         fillOpacity: 0.6,
            //         strokeColor: '#ffffff',
            //         strokeOpacity: 0.8,
            //         strokeWeight: 2,
            //         scale: 3
            //     }
            // });
            // marker.setMap(map);
            plots.push(marker);
        }
        var endMarker = L.marker(e.latlng);
        // Case: add an end marker
        // endMarker.setPosition(e.latLng);
        if (plots.length === 1) {
            endMarker.addTo(mymap);
            // endMarker.setMap(map);
        }
        plots.push(endMarker);
    }
}

function exportGeoJson() {
    // var geoJson = {
    //     "type": "FeatureCollection",
    //     "features": []
    // };
    // var polylineFeature = {
    //     "type": "Feature",
    //     "geometry": {
    //         "type": "LineString",
    //         "coordinates": []
    //     },
    //     "properties": {}
    // };
    // for (var i = 0; i < polyline.getPath().getLength(); i++) {
    //     var pt = polyline.getPath().getAt(i);
    //     polylineFeature.geometry.coordinates.push([
    //         pt.lng(), pt.lat()]);
    // }
    // geoJson.features.push(polylineFeature);
    // document.getElementById('geojson').value = JSON.stringify(geoJson);
    // polyline.setPath([]);
    // map.data.addGeoJson(geoJson);
    // // Set the stroke width, and fill color for each polygon
    // map.data.setStyle({
    //     strokeColor: 'green',
    //     strokeWeight: 2
    // });
    // map.data.toGeoJson( function(data) {
    //     document.getElementById('exported').value=JSON.stringify(data)
    // });

}