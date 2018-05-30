const icons = {'university': 'https://i.imgur.com/kmEULZL.png',
                0: 'https://i.imgur.com/HVwsDcF.png',
                1: 'https://i.imgur.com/1hPEfvu.png',
                2: 'https://i.imgur.com/0ISvL2b.png'};

// DATASETS OBLIGATORIOS
let NY_neighborhood_names = {'data':'data', 'markers':''};
var NY_districts_shapes = {'data':'data', 'shapes':''};
var NY_crimes = {'data':'data', 'shapes':null};
var NY_housing = {'data':'data', 'markers':null};

// DATASETS ELEGIBLES
let NY_public_schools_enrollment_forecast;
let NY_museums = {'data':'data', 'markers':'markers'};
let NY_art_galleries = {'data':'data', 'markers':'markers'};
let NY_farmers_markets;
let NY_open_data_APIs;
let NY_neighborhood_tabulations;
let NY_air_quality;

// VARIABLES DEL SISTEMA
var map;
var selected;
var openWidow;
var university;

var main_data ={1:{1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}, 9:{}, 10:{}, 11:{}, 12:{}},
    2:{1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}, 9:{}, 10:{}, 11:{}, 12:{}},
    3:{1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}, 9:{}, 10:{}, 11:{}, 12:{},13:{}, 14:{}, 15:{}, 16:{}, 17:{}, 18:{}},
    4:{1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}, 9:{}, 10:{}, 11:{}, 12:{},13:{}, 14:{}},
    5:{1:{}, 2:{}, 3:{}}};

/************************************************************
 *             FUNCTIONS TO LOAD ALL MAIN DATA              *
 ************************************************************/
window.onload = function initMap() {
    try {
        initRanking();
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7291, lng: -73.9965},
            zoom: 10.7,
            mapTypeControl: false,
            streetViewControl: false,
            disableDefaultUI: true,
            gestureHandling: 'none',
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
                        }
                    ]
                },
                {
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#523735"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#c9b2a6"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#dcd2be"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ae9e90"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#93817c"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#a5b076"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#447530"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f1e6"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fdfcf8"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f8c967"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#e9bc62"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e98d58"
                        }
                    ]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#db8555"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#806b63"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#8f7d77"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ebe3cd"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dfd2ae"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#b9d3c2"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#92998d"
                        }
                    ]
                }
            ]
        });

        map.data.setStyle( function(feature){
            return ({ fillColor: getColor(feature),
                strokeWeight: getWeight(feature),
                strokeColor: '#FFFFFF',
                fillOpacity: getOpacity(feature),
                clickable: getClickable(feature)
            });
        });

        university = new google.maps.Marker({
            position: {lat: 40.7290549, lng:-73.9965233},
            map: null,
            icon: icons.university,
            zIndex: 1000,
            styles: {'z-index':10000}
        });
        openWidow = new google.maps.InfoWindow({
            content: ""
        });

        map.data.addListener('click', function(event) {
            if(selected !== undefined){
                selected.setProperty('isClicked', false);
                openWidow.close();
            }
            var boro = getBorough(event.feature);
            var dist = getDistrict(event.feature);
            openWidow.setContent(
                "<b>Borough: </b>"+getNameBoro(event.feature.getProperty("BoroCD"))+"<br>"+
                "<b>District: </b>"+dist+"<br>"+
                "<b>Distance: </b>"+(parseInt(main_data[boro][dist].distance*1000)/1000.0)+" Km<br>"+
                "<b>No Crimes: </b>"+main_data[boro][dist].crimes.length+"<br>"+
                "<b>No Houses: </b>"+main_data[boro][dist].units+"<br>"+
                "<b>No Museums: </b>"+main_data[boro][dist].museums.length+"<br>"+
                "<b>No Galleries: </b>"+main_data[boro][dist].galleries.length+"<br>");
            openWidow.open(map);
            openWidow.setPosition(main_data[boro][dist].center);
            selected = event.feature;
            event.feature.setProperty('isClicked', true);
            var dist = getDistrict(event.feature);
            var boro = getBorough(event.feature);
            map.fitBounds(main_data[boro][dist].bounds);
            mostrarVentanaEmergente(event.feature);
        });

        map.data.addListener('dblclick', function(event) {
            map.setCenter({lat: 40.7142700, lng: -74.0059700});
            map.setZoom(10.7);
            if(selected !== undefined){
                selected.setProperty('isClicked', false);
            }
            selected = undefined;
        });

        map.data.addListener('mouseover', function(event) {
            event.feature.setProperty('isHover', true);
        });

        map.data.addListener('mouseout', function(event) {
            event.feature.setProperty('isHover', false);
        });
        cargarDatasets();
    } catch (e) {
        alert("ERROR 0: "+e);
        cargarDatasets();
    }
}

function cargarDatasets(){
    //Primero de los datasets obligatorios
    $.getJSON("https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json", function ( data ){ NY_neighborhood_names.data = data;
        NY_neighborhood_names.markers = makeMarkers(data.data, 'house', undefined ,  9);
        NY_neighborhood_names.markers.clearMarkers();
    });


    // Segundo de los datasets obligatorios
    $.getJSON("https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson", function ( data ){
        NY_districts_shapes.data = data;
        NY_districts_shapes.shapes = map.data.addGeoJson(data);
        try{
            for(var i = 0 ; i < NY_districts_shapes.shapes.length ;i++){
                var poly = createPoly(NY_districts_shapes.shapes[i]);
                var bounds = createBounds(NY_districts_shapes.shapes[i]);
                var center = bounds.getCenter();
                var boro = getBorough(NY_districts_shapes.shapes[i]);
                var dist = getDistrict(NY_districts_shapes.shapes[i]);
                main_data[boro][dist] = {
                    shape : NY_districts_shapes.shapes[i],
                    poly : poly,
                    dist : dist,
                    boro : boro,
                    center: center,
                    bounds: bounds,
                    crimes: [],
                    houses: [],
                    museums: [],
                    galleries: [],
                    neigh : [],
                    units : 0,
                    distance: google.maps.geometry.spherical.computeDistanceBetween(center, university.getPosition())/1000
                };
            }
            createTableDistricts(data);
        } catch(err){
            alert("ERROR 1: "+err);
        }
    }).done( function () {
        loadJSON("https://data.cityofnewyork.us/resource/9s4h-37hy.json?cmplnt_fr_dt=2015-12-31T00:00:00.000", function ( data ){
            NY_crimes.data = data;
            createTableCrimes(data);
        });
        // Cuarto de los datasets obligatorios
        loadJSON("https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json", function ( data ){
            NY_housing.data = data;
            createTableHousing(data);
        });

        loadJSON("https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json", function ( data ){
            NY_museums.data = data;
            createTableMuseums(data);
            NY_museums.markers = makeMarkers(data.data, 'gallery', map ,  8);
            NY_museums.markers.clearMarkers();});

        loadJSON("https://data.cityofnewyork.us/api/views/43hw-uvdj/rows.json", function ( data ){
            NY_art_galleries.data = data;
            createTableGalleries(data);
            NY_art_galleries.markers = makeMarkers(data.data, 'gallery', map ,  9);
            NY_art_galleries.markers.clearMarkers(); });

    } );


    // Otros datasets
    loadJSON("https://data.cityofnewyork.us/api/views/c3uy-2p5r/rows.json", function ( data ){ NY_air_quality = data; });

    loadJSON("https://data.cityofnewyork.us/api/views/xzy8-qqgf/rows.json", function ( data ){ NY_public_schools_enrollment_forecast = data; });

    loadJSON("https://data.cityofnewyork.us/api/views/j8gx-kc43/rows.json", function ( data ){ NY_farmers_markets = data; createTableMarkets(data);});

    loadJSON("https://data.ny.gov/api/views/vfrh-bvhu/rows.json", function ( data ){ NY_open_data_APIs = data; });

    loadJSON("https://data.cityofnewyork.us/api/views/q2z5-ai38/rows.json", function ( data ){ NY_neighborhood_tabulations = data; });
}

function getDistrict(feature){
    return feature.getProperty('BoroCD')%100;
}

function getBorough(feature){
    return Math.trunc(feature.getProperty('BoroCD')/100);
}

function createBounds(feature) {
    var bounds = new google.maps.LatLngBounds();
    if(feature.getGeometry().b[0].b[0].b === undefined) {
        for (let i = 0; i < feature.getGeometry().b.length ; i++) {
            for (let j = 0; j < feature.getGeometry().b[i].b.length; j++) {
                bounds.extend(feature.getGeometry().b[i].b[j]);
            }
        }
    } else {
        for (let i = 0; i < feature.getGeometry().b.length ; i++) {
            for (let j = 0; j < feature.getGeometry().b[i].b.length ; j++) {
                for (let k = 0; k < feature.getGeometry().b[i].b[j].b.length ; k++) {
                    bounds.extend(feature.getGeometry().b[i].b[j].b[k]);
                }
            }
        }
    }
    return bounds;
}

function createPoly(feature) {
    var polys = [];
    if(feature.getGeometry().b[0].b[0].b === undefined){
        for (let i = 0; i < feature.getGeometry().b.length ; i++) {
            polys.push(new google.maps.Polygon({ paths:feature.getGeometry().b[i].b }));
        }
    } else {
        for (let i = 0; i < feature.getGeometry().b.length ; i++) {
            for (let j = 0; j < feature.getGeometry().b[i].b.length ; j++) {
                polys.push(new google.maps.Polygon({ paths:feature.getGeometry().b[i].b[j].b }));
            }
        }
    }
    return polys ;
}

function getNameBoro(borocd) {
    var boro = Math.trunc(borocd/100);;
    switch (boro){
        case 1:
            return "Manhattan";
        case 2:
            return "Bronx";
        case 3:
            return "Brooklyn";
        case 4:
            return "Queens";
        case 5:
            return "Staten Island";
    }
}

function loadJSON(path, success) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            }
            else {
                alert("error: "+xhr.status);
            }
        }
    };
    xhr.open('GET', path, true);
    xhr.send();
}


/************************************************************
 *          FUNCTIONS TO LOAD CLUSTERS AND MARKERS          *
 ************************************************************/
var heatmap;
function showUniversity(){
    if ( document.getElementById("university").checked === true ){
        university.setMap(map);
    } else {
        university.setMap(null);
    }
}

function showNeighborhoodNames(){
    if ( document.getElementById("neighborhood").checked === true ){
        NY_neighborhood_names.markers = makeNames(NY_neighborhood_names.data.data, 9 );
    } else {
        NY_neighborhood_names.markers.clearMarkers();
    }
}

function showGalleries(){
    if ( document.getElementById("gallery").checked === true ){
        NY_art_galleries.markers = makeMarkers(NY_art_galleries.data.data, 'gallery', '#726842', 9);
    } else {
        NY_art_galleries.markers.clearMarkers();
    }
}

function showHouses(){
    try {
        if (document.getElementById("houses").checked === true) {
            var data = NY_housing.data.data;
            var markers = [];
            for (var i = 0; i < data.length; i++) {
                var latLng = new google.maps.LatLng(data[i][23], data[i][24]);
                var marker = new google.maps.Marker({
                    position: latLng,
                    icon: 'https://raw.githubusercontent.com/marobayos/icons/master/house.png',
                    //map : map
                });
                markers.push(marker);
            }
            NY_housing.markers = new MarkerClusterer(map, markers,
                {
                    imagePath: 'https://raw.githubusercontent.com/marobayos/icons/master/house',
                    averageCenter: true,
                    gridSize: 50,
                    minimumClusterSize: 5,
                    //styles: [style],
                });
            var style = NY_housing.markers.getStyles();
            for (var i = 0; i < 5; i++) {
                style[i]["textColor"] = '#000000';
                style[i]["textSize"] = 18;
            }
            NY_housing.markers.setStyles(style);
        } else {
            if(NY_housing.markers!=null)
                NY_housing.markers.clearMarkers();
        }
    }catch (e) {
        alert("ERROR LOADING HOUSES: "+e);
    }
}

function showCrimes(){
    try {
        if (document.getElementById("crime").checked === true) {
            var positions = [];
                var data = NY_crimes.data;
                for (let i = 0; i < data.length; i++) {
                    if ("latitude" in data[i] && "longitude" in data[i]) {
                        positions.push(new google.maps.LatLng(data[i].latitude, data[i].longitude));
                    }
                }
                heatmap = new google.maps.visualization.HeatmapLayer({data: positions, map: map, opacity: 1});
            heatmap.setMap(map);
        } else {
            if (heatmap != undefined)
                heatmap.setMap(null);
        }
    } catch (e) {
        alert("ERROR LOADING CRIMES: "+e);
    }
}

function showMuseums(){
    if ( document.getElementById("museums").checked === true ){
        NY_museums.markers = makeMarkers(NY_museums.data.data, 'museum', '#000000', 8);
    } else {
        NY_museums.markers.clearMarkers();
    }
}

function makeNames(data, index){
    var markers = [];
    try{
        for (var i = 0; i < data.length; i++) {
            var coords = data[i][index].substring(7, data[i][index].length-1).split(" ");
            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
                position: latLng,
                icon: 'https://i.imgur.com/daVQUOI.png?1',
                label: data[i][10]
            });
            markers.push(marker);
        }
        var markers = new MarkerClusterer(map, markers,
            {   averageCenter: true,
                gridSize: 50,
                //styles: [style],
            });
        var style = markers.getStyles();
        for(var i = 0; i< 5 ; i++){
            style[i]["textColor"] = 'rgba(255, 0, 0, 0.01);';
            style[i]["textSize"] = 0;
        }
        //alert(JSON.stringify(style));// =  '#FFFFFF';
        markers.setStyles(style);
    } catch (err){
        alert("ERROR MAKING NAMES: "+err);
    }
    return  markers ;
}

function makeMarkers(data, icon, color, index){
    var markers = [];
    try{
        for (var i = 0; i < data.length; i++) {
            var coords = data[i][index].substring(7, data[i][index].length-1).split(" ");
            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
                position: latLng,
                icon: 'https://raw.githubusercontent.com/marobayos/icons/master/'+icon+'.png',
                //map : map
            });
            markers.push(marker);
        }
        var markers = new MarkerClusterer(map, markers,
            {   imagePath: 'https://raw.githubusercontent.com/marobayos/icons/master/'+icon,
                averageCenter: true,
                gridSize: 50,
                minimumClusterSize: 3,
                //styles: [style],
            });
        var style = markers.getStyles();
        for(var i = 0; i< 5 ; i++){
            style[i]["textColor"] = color;
            style[i]["textSize"] = 18;
        }
        //alert(JSON.stringify(style));// =  '#FFFFFF';
        markers.setStyles(style);
    } catch (err){
        alert("ERROR MAKING MARKERS: "+err);
    }
    return  markers ;
}


/************************************************************
 *          FUNCTIONS TO LOAD STYLE CUSTOM OF  MAP          *
 ************************************************************/
function getColor(feature) {
    if (feature.getProperty('tipo')===2){
        return '#000000';
    }
    const boro = getBorough(feature);
    const district = getDistrict(feature);
    if(district > 20 ){
        return '#a5b076'; // Verde
    }
    switch ( boro ){
        case 1:
            return '#ffd400'; //Amarillo
        case 2:
            return '#747462'; // Gris
        case 3:
            return '#f95b00'; //Naranja
        case 4:
            return '#ff0000'; // Rojo
        case 5:
            return '#8c3100'; // Café
    }
}

function getWeight(feature){
    if(feature.getProperty('isClicked') || feature.getProperty('isHover')){
        return 3.5;
    }
    return 1.0;
}

function getOpacity(feature){
    if(getDistrict(feature) > 20){
        return 1.0;
    } else if(feature.getProperty('isClicked')){
        return 0.7;
    } else if(feature.getProperty('isHover')){
        return 0.5;
    }
    return 0.3;
}

function getClickable(feature){
    var district = feature.getProperty('BoroCD')%100;
    if(district > 20){
        return false;
    }
    return true;
}


/************************************************************
 *       FUNCTIONS TO LOAD DATASETS AND CREATE TABLES       *
 ************************************************************/
function createTableDistricts(data){
    var table = document.getElementById("districts");
    for (let i = 0; i < data.features.length; i++) {
        var datos = data.features[i].properties;
        if((datos.BoroCD)%100 < 20) {
            var row = table.insertRow(0);
            var dist = datos.BoroCD%100;
            var boro = Math.trunc(datos.BoroCD / 100.0);
            row.insertCell(0).innerHTML = getNameBoro(datos.BoroCD);
            row.insertCell(1).innerHTML = (datos.BoroCD) % 100;
            row.insertCell(2).innerHTML = main_data[boro][dist].distance;
            row.insertCell(3).innerHTML = datos.Shape__Area*1000*2.58999*2.58999;
            row.insertCell(4).innerHTML = Math.sqrt(datos.Shape__Area*1000*2.58999*2.58999);
        }
    }
}

function createTableCrimes(data) {
    try {
        var table = document.getElementById("crimes");
        for (let i = 0; i < data.length; i++) {
            if("latitude" in data[i] && "longitude" in data[i]) {
                var row = table.insertRow(0);
                var dist = '';
                for (var j in main_data[boro]) {
                    for (let k = 0; k < main_data[boro][j].poly.length; k++) {
                        if (google.maps.geometry.poly.containsLocation(point, main_data[boro][j].poly[k] )) {
                            main_data[boro][j].crimes.push(data[i]);
                            dist = j;
                            break;
                        }
                    }
                }
                row.insertCell(0).innerHTML = data[i].boro_nm;
                row.insertCell(1).innerHTML = data[i].dist;
                row.insertCell(2).innerHTML = data[i].ofns_desc;
                row.insertCell(3).innerHTML = data[i].pd_desc;
                row.insertCell(4).innerHTML = data[i].law_cat_cd;
                row.insertCell(5).innerHTML = data[i].loc_of_occur_desc;
                row.insertCell(6).innerHTML = data[i].prem_typ_desc;
                var point = new google.maps.LatLng(data[i].latitude, data[i].longitude);
                var boro = getBORO(data[i].boro_nm)
                
            }
        }
    } catch (e) {
        alert("ERROR 2: "+e);
    }
}

function createTableHousing(data) {
    data = data.data;
    var last = "";
    try {
        var table = document.getElementById("housing");
        for (let i = 0; i < data.length; i++) {
            if (data[i].length === 49 && data[i][9]!= "CONFIDENTIAL" ) {
                var row = table.insertRow(0);
                row.insertCell(0).innerHTML = data[i][15];
                row.insertCell(1).innerHTML = data[i][19];
                row.insertCell(2).innerHTML = data[i][9];
                row.insertCell(3).innerHTML = data[i][16];
                row.insertCell(4).innerHTML = data[i][28];
                row.insertCell(5).innerHTML = data[i][47];
                var dist = parseInt(data[i][19].split('-')[1])%100;
                last = data[i][19]+": "+getBR(data[i][19])+" "+dist;
                main_data[getBR(data[i][19])][dist].units += parseInt(data[i][47]);
                main_data[getBR(data[i][19])][dist].houses.push(data[i]);
            }
        }
    }catch (e) {
        alert("ERROR 3: "+e);
        alert(last);
    }
}

function createTableMuseums(data) {
    data = data.data;
    try {
        var table = document.getElementById("museum");
        for (let i = 0; i < data.length; i++) {
            var row = table.insertRow(0);
            row.insertCell(0).innerHTML = data[i][9];
            row.insertCell(1).innerHTML = data[i][10];
            row.insertCell(2).innerHTML = data[i][11];
            row.insertCell(3).innerHTML = data[i][12] +" "+data[i][13];
            row.insertCell(4).innerHTML = data[i][14];
            row.insertCell(5).innerHTML =  Math.trunc(data[i][15]);
            var coords = data[i][8].substring(7, data[i][8].length-1).split(" ");
            var point = new google.maps.LatLng(coords[1],coords[0]);
            let res = false;
            for (var boro in main_data){
                for(var dist in main_data[boro]){
                    for (let k = 0; k < main_data[boro][dist].poly.length; k++) {
                        if (google.maps.geometry.poly.containsLocation(point, main_data[boro][dist].poly[k] )) {
                            main_data[boro][dist].museums.push(data[i]);
                            res = true;
                            break;
                        }
                    }
                    if(res === true){
                        break;
                    }
                }
                if(res === true){
                    break;
                }
            }
        }
    }catch (e) {
        alert("ERROR 4: "+e);
    }
}

function createTableGalleries(data) {
    data = data.data;
    try {
        var table = document.getElementById("galleries");
        for (let i = 0; i < data.length; i++) {
            var row = table.insertRow(0);
            row.insertCell(0).innerHTML = data[i][8];
            row.insertCell(1).innerHTML = data[i][10];
            row.insertCell(2).innerHTML = data[i][11];
            row.insertCell(3).innerHTML = data[i][12] +" "+data[i][13];
            row.insertCell(4).innerHTML = data[i][14];
            row.insertCell(5).innerHTML =  Math.trunc(data[i][15]);
            var coords = data[i][9].substring(7, data[i][9].length-1).split(" ");
            var point = new google.maps.LatLng(coords[1],coords[0]);
            var res = false;
            for (var boro in main_data){
                for(var dist in main_data[boro]){
                    for (let k = 0; k < main_data[boro][dist].poly.length; k++) {
                        if (google.maps.geometry.poly.containsLocation(point, main_data[boro][dist].poly[k] )) {
                            main_data[boro][dist].galleries.push(data[i]);
                            res = true;
                            break;
                        }
                    }
                    if(res === true){
                        break;
                    }
                }
                if(res === true){
                    break;
                }
            }
        }
    }catch (e) {
        alert("ERROR 5: "+e);
    }
}

function createTableMarkets(data) {
    data = data.data;
    try {
        var table = document.getElementById("markets");
        for (let i = 0; i < data.length; i++) {
            var row = table.insertRow(0);
            row.insertCell(0).innerHTML = data[i][8];
            row.insertCell(1).innerHTML = data[i][10];
            row.insertCell(2).innerHTML = data[i][11];
            row.insertCell(3).innerHTML = data[i][13];
            row.insertCell(4).innerHTML = data[i][9];
        }
    }catch (e) {
        alert("ERROR 6: "+e);
    }
}

function getBR(CommunityBoard) {
    var number = CommunityBoard.split('-')[1];
    switch (CommunityBoard.substring(0, 2)){
        case "MN":
            return 1;
        case "BX":
            return 2;
        case "BK":
            return 3;
        case "QN":
            return 4;
        case "SI":
            return 5;
        default:
            alert(CommunityBoard);
            return "WTF";
    }
}

function getBORO(boro_nm) {
    switch (boro_nm){
        case "MANHATTAN":
            return 1;
        case "BRONX":
            return 2;
        case "BROOKLYN":
            return 3;
        case "QUEENS":
            return 4;
        case "STATEN ISLAND":
            return 5;
    };
}


/************************************************************
 *          FUNCTIONS TO LOAD AND CREATE RANKINGS           *
 ************************************************************/
let mapR;
let markers = [];
let ar=[];
let bounds;

function initRanking(){
    mapR = new google.maps.Map(document.getElementById('map-ranking'), {
        center: {lat: 40.7291, lng: -73.9965},
        zoom: 10.8,
        mapTypeControl: false,
        streetViewControl: false,
        disableDefaultUI: true,
        gestureHandling: 'none',
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "color": "#f3f3eb"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f3eee0"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    });
}

function getTop10() {
    _getTop10(main_data);
}

function _getTop10(data){
    try {
        for(let i = 0; i < markers.length; i++){
            markers[i].setMap(null);
        }
        for(let boro in main_data){
            for(let dist in main_data[boro]){
                var polygons = main_data[boro][dist].poly;
                for (let j = 0; j <polygons.length; j++) {
                    polygons[j].setMap(null);
                }
            }
        }
        markers = [];
        var parameter = document.getElementById('parameterR');
        switch (parameter.value) {
            case '0':
                document.getElementById("TITLE").innerText = "Distance";
                ar = rankByDistance(data);
                break;
            case '1':
                document.getElementById("TITLE").innerText = "No Crimes";
                ar = rankByCrimes(data);
                break;
            case '2':
                document.getElementById("TITLE").innerText = "No Houses";
                ar = rankByUnits(data);
                break;
            case '3':
                document.getElementById("TITLE").innerText = "No Museums";
                ar = rankByMuseums(data);
                break;
            case '4':
                document.getElementById("TITLE").innerText = "No Galleries";
                ar = rankByGalleries(data);
                break;
        }
        document.getElementById("Download_ranking").disabled = false;
    } catch (e) {
        alert("ERROR IN RANKING: "+e);
    }
}

function getTop3() {
    try {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        for(let boro in main_data){
            for(let dist in main_data[boro]){
                var polygons = main_data[boro][dist].poly;
                for (let j = 0; j <polygons.length; j++) {
                    polygons[j].setMap(null);
                }
            }
        }
        markers = [];
        document.getElementById("TITLE").innerText = "Index";

        let minCrimes = 4;
        let maxCrimes = 45;
        let minUnits = 0;
        let maxUnits = 5765;
        let minDistance = 0.507;
        let maxDistance = 26.245;
        var values = [];
        for (var boro in main_data) {
            for (var dist in main_data[boro]) {
                if (parseInt(dist) > 20) continue;
                let safety = 1.0 - normalize(main_data[boro][dist].crimes.length, minCrimes, maxCrimes);
                let distance = 1.0 - normalize(main_data[boro][dist].distance, minDistance, maxDistance);
                let afford = normalize(main_data[boro][dist].units, minUnits, maxUnits);
                values.push([(afford + distance + safety) / 3.0, boro, dist, main_data[boro][dist].center]);
            }
        }
        values = values.sort(function (a, b) {
            return b[0] - a[0];
        });
        loadTop3(values);
        mapR.fitBounds(bounds, 0);
        return values;
    }catch (e) {
        alert("ERROR IN TOP-3: "+e);
    }
}

function normalize(value, min, max) {
    return (value-min)/(max-min);
}

function rankByDistance(data) {
    var values = [];
    for (var boro in data) {
        for (var dist in data[boro]){
            values.push([data[boro][dist].distance, boro, dist, data[boro][dist].center]);
        }
    }
    values =  values.sort(function (a, b) {
        return a[0] - b[0];
    });
    loadTop3(values);
    loadTop10(values);
    return values;

}

function rankByCrimes(data) {
    var values = [];
    for (var boro in data) {
        for (var dist in data[boro]){
            if(parseInt(dist)<20)
                values.push([ data[boro][dist].crimes.length , boro, dist, data[boro][dist].center]);
        }
    }
    values =  values.sort(function (a, b) {
        return a[0] - b[0];
    });
    loadTop3(values);
    loadTop10(values);
    return values;
}

function rankByUnits(data) {
    var values = [];
    for (var boro in data) {
        for (var dist in data[boro]){
            if(parseInt(dist)<20)
                values.push([ data[boro][dist].units , boro, dist, data[boro][dist].center]);
        }
    }
    values =  values.sort(function (a, b) {
        return b[0] - a[0];
    });
    loadTop3(values);
    loadTop10(values);
    mapR.setZoom(10.8);
    return values;
}

function rankByMuseums(data) {
    var values = [];
    for (var boro in data) {
        for (var dist in data[boro]){
            if(parseInt(dist)<20)
                values.push( [ data[boro][dist].museums.length , boro, dist, data[boro][dist].center] );
        }
    }
    values =  values.sort(function (a, b) {
        return b[0] - a[0];
    });
    loadTop3(values);
    loadTop10(values);
    return values;
}

function rankByGalleries(data) {
    var values = [];
    for (var boro in data) {
        for (var dist in data[boro]){
            if(parseInt(dist)<20)
                values.push([ data[boro][dist].galleries.length , boro, dist, data[boro][dist].center, data[boro][dist].bounds]);
        }
    }
    values =  values.sort(function (a, b) {
        return b[0] - a[0];
    });
    loadTop3(values);
    loadTop10(values);
    return values;
}

function download() {
    // Sacado de https://gist.github.com/lmfresneda/64101b73efe10ef8b6fd
    //comprobamos compatibilidad
    if(window.Blob && (window.URL || window.webkitURL)){
        var contenido = "",
            d = new Date(),
            blob,
            reader,
            save,
            clicEvent;
        //creamos contenido del archivo
        for (var i = 0; i < ar.length; i++) {
            //construimos cabecera del csv
            if (i == 0)
                contenido += Object.keys(ar[i]).join(";") + "\n";
            //resto del contenido
            contenido += Object.keys(ar[i]).map(function(key){
                return ar[i][key];
            }).join(";") + "\n";
        }
        //creamos el blob
        blob =  new Blob(["\ufeff", contenido], {type: 'text/csv'});
        //creamos el reader
        var reader = new FileReader();
        reader.onload = function (event) {
            //escuchamos su evento load y creamos un enlace en dom
            save = document.createElement('a');
            save.href = event.target.result;
            save.target = '_blank';
            //aquí le damos nombre al archivo
            save.download = "TOP-10.csv";
            try {
                //creamos un evento click
                clicEvent = new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true
                });
            } catch (e) {
                //si llega aquí es que probablemente implemente la forma antigua de crear un enlace
                clicEvent = document.createEvent("MouseEvent");
                clicEvent.initEvent('click', true, true);
            }
            //disparamos el evento
            save.dispatchEvent(clicEvent);
            //liberamos el objeto window.URL
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }
        //leemos como url
        reader.readAsDataURL(blob);
    }else {
        //el navegador no admite esta opción
        alert("Su navegador no permite esta acción");
    }
}

function loadTop10(values) {
    try {
        var fd = [];
        var table = document.getElementById("top-10");
        for (let i = 3; i < 10; i++) {
            var row = table.insertRow(i);
            row.insertCell(0).innerHTML = i + 1;
            row.insertCell(1).innerHTML = getName(values[i][1]);
            row.insertCell(2).innerHTML = values[i][2];
            row.insertCell(3).innerHTML = Math.round(parseFloat(values[i][0]) * 1000) / 1000;
            fd.push([getType(values[i][1], values[i][2]), Math.round(parseFloat(values[i][0]) * 1000) / 1000]);
            var polygons = main_data[values[i][1]][values[i][2]].poly;
            for (let j = 0; j <polygons.length; j++) {
                polygons[j].setMap(mapR);
                polygons[j].setOptions({
                    fillColor: '#48682b',
                    fillOpacity: 1-(i+1)/10,
                    strokeColor: '#FFFFFF',
                    strokeWeight: 1});
            }
            bounds = bounds.union(main_data[values[i][1]][values[i][2]].bounds);
            markers.push(new google.maps.Marker({
                position: values[i][3],
                label: ''+(i + 1),
                map: mapR
            }));
        }
        mapR.fitBounds(bounds, 0);
    }catch (e) {
        alert('ERROR LOADING VALUES: '+e);
    }
}

function loadTop3(values) {
    bounds = new google.maps.LatLngBounds();
    var fd = [];
    var table = document.getElementById("top-10");
    table.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = getName(values[i][1]);
        row.insertCell(2).innerHTML = values[i][2];
        row.insertCell(3).innerHTML = Math.round(parseFloat(values[i][0]) * 1000) / 1000;
        fd.push([getType(values[i][1], values[i][2]), Math.round(parseFloat(values[i][0]) * 1000) / 1000]);
        var polygons = main_data[values[i][1]][values[i][2]].poly;
        for (let j = 0; j <polygons.length; j++) {
            polygons[j].setMap(mapR);
            polygons[j].setOptions({
                fillColor: '#48682b',
                fillOpacity: 1-(i+1)/10,
                strokeColor: '#FFFFFF',
                strokeWeight: 1});
        }
        bounds = bounds.union(main_data[values[i][1]][values[i][2]].bounds);
        markers.push(new google.maps.Marker({
            position: values[i][3],
            map: mapR,
            icon: icons[i]
        }));
    }
}


/************************************************************
 *           FUNCTIONS TO LOAD AND CREATE CHARTS            *
 ************************************************************/
let barColor = 'steelblue';
let boros = 0;

function getCharts() {
    try {
        var data = {};
        boros = 0;
        if (document.getElementById("MH").checked === true) {
            boros++;
            data[1]=main_data[1];
        }
        if (document.getElementById("BX").checked === true) {
            boros++;
            data[2]=main_data[2];
        }
        if (document.getElementById("BR").checked === true) {
            boros++;
            data[3]=main_data[3];
        }
        if (document.getElementById("QN").checked === true) {
            boros++;
            data[4]=main_data[4];
        }
        if (document.getElementById("ST").checked === true) {
            boros++;
            data[5]=main_data[5];
        }
        if(boros===0){
            _getCharts(main_data);
        }else {
            _getCharts(data);
        }
    }catch (e) {
        alert("ERROR IN CHARTS: "+e);
    }
}

function _getCharts(data) {
    document.getElementById("HISTOGRAM").innerHTML = "";
    document.getElementById("PIECHART").innerHTML = "";
    document.getElementById("LEGENDS").innerHTML = "";
    var parameter = document.getElementById("parameter-charts");
    switch (parameter.value) {
        case '1':
            graphCrimes(data);
            break;
        case '2':
            graphUnits(data);
            break;
        case '3':
            graphMuseums(data);
            break;
        case '4':
            graphGalleries(data);
            break;
    }
}

function graphCrimes(data) {
    var values = [];
    var tf = [];
    for(var boro in data){
        tf.push({type:boro, freq: 0});
        for(var dist in data[boro]){
            if(parseInt(dist)>20)continue;
            values.push([getType(boro, dist),data[boro][dist].crimes.length]);
            tf[tf.length-1].freq += data[boro][dist].crimes.length;
        }
    }
    if (values.length<=30){
        histoGram(values, "#HISTOGRAM");
    }
    if (boros >= 2) {
        pieChart(tf, "#PIECHART");
        legend(tf, "#LEGENDS");
    }
}

function graphUnits(data) {
    var values = [];
    var tf = [];
    for(var boro in data){
        tf.push({type:boro, freq: 0});
        for(var dist in data[boro]){
            if(parseInt(dist)>20)continue;
            values.push([getType(boro, dist), data[boro][dist].units]);
            tf[tf.length-1].freq += data[boro][dist].units;
        }
    }
    if (values.length<=30){
        histoGram(values, '#HISTOGRAM');
    }
    if(boros>=2) {
        pieChart(tf, '#PIECHART');
        legend(tf, '#LEGENDS');
    }
}

function graphMuseums(data) {
    var values = [];
    var tf = [];
    for(var boro in data){
        tf.push({type:boro, freq: 0});
        for(var dist in data[boro]){
            if(parseInt(dist)>20)continue;
            values.push([getType(boro, dist), data[boro][dist].museums.length]);
            tf[tf.length-1].freq += data[boro][dist].museums.length;
        }
    }
    if (values.length<=30){
        histoGram(values, '#HISTOGRAM');
    }
    if(boros>=2) {
        pieChart(tf, '#PIECHART');
        legend(tf, '#LEGENDS');
    }
}

function graphGalleries(data) {
    var values = [];
    var tf = [];
    for(var boro in data){
        tf.push({type:boro, freq: 0});
        for(var dist in data[boro]){
            if(parseInt(dist)>20)continue;
            values.push([getType(boro, dist), data[boro][dist].galleries.length]);
            tf[tf.length-1].freq += data[boro][dist].galleries.length;
        }
    }
    if (values.length<=30){
        histoGram(values, '#HISTOGRAM');
    }
    if (boros>=2) {
        pieChart(tf, '#PIECHART');
        legend(tf, '#LEGENDS');
    }
}

function segColor(c){
    switch (parseInt(c)){
        case 1:
            return '#ffe14c'; //Amarillo
        case 10:
            return '#ffe359'; //Amarillo
        case 11:
            return '#ffe566'; //Amarillo
        case 12:
            return '#ffe772'; //Amarillo
        case 13:
            return '#ffe97f'; //Amarillo
        case 14:
            return '#ffeb8c'; //Amarillo
        case 15:
            return '#ffee99'; //Amarillo
        case 16:
            return '#fff0a5'; //Amarillo
        case 17:
            return '#fff2b2'; //Amarillo
        case 18:
            return '#fff4bf'; //Amarillo
        case 19:
            return '#fff6cc'; //Amarillo
        case 2:
            return '#7f7f72'; // Gris
        case 20:
            return '#727264'; // Gris
        case 21:
            return '#7f7f70'; // Gris
        case 22:
            return '#8c8c7b'; // Gris
        case 23:
            return '#999986'; // Gris
        case 24:
            return '#a5a591'; // Gris
        case 25:
            return '#b2b29d'; // Gris
        case 26:
            return '#bfbfa8'; // Gris
        case 27:
            return '#ccccb3'; // Gris
        case 28:
            return '#d8d8be'; // Gris
        case 29:
            return '#e5e5c9'; // Gris
        case 3:
            return '#f98b4a'; // Naranja
        case 30:
            return '#f99a63'; // Naranja
        case 31:
            return '#f9a270'; // Naranja
        case 32:
            return '#f9aa7c'; // Naranja
        case 33:
            return '#f9b289'; // Naranja
        case 34:
            return '#f9ba95'; // Naranja
        case 35:
            return '#f9c2a2'; // Naranja
        case 36:
            return '#f9caae'; // Naranja
        case 37:
            return '#f9d2bb'; // Naranja
        case 38:
            return '#f9dac7'; // Naranja
        case 39:
            return '#f9e2d4'; // Naranja
        case 4:
            return '#ff4c4c'; // Rojo
        case 40:
            return '#ff5959'; // Rojo
        case 41:
            return '#ff6666'; // Rojo
        case 42:
            return '#ff7272'; // Rojo
        case 43:
            return '#ff7f7f'; // Rojo
        case 44:
            return '#ff8c8c'; // Rojo
        case 45:
            return '#ff9999'; // Rojo
        case 46:
            return '#ffa5a5'; // Rojo
        case 47:
            return '#ffb2b2'; // Rojo
        case 48:
            return '#ffbfbf'; // Rojo
        case 49:
            return '#ffcccc'; // Rojo
        case 5:
            return '#8c5031'; // Cafe
        case 50:
            return '#8c5438'; // Cafe
        case 51:
            return '#915c41'; // Cafe
        case 52:
            return '#96644b'; // Cafe
        case 53:
            return '#996b54'; // Cafe
        case 54:
            return '#9e735e'; // Cafe
        case 55:
            return '#a37d6a'; // Cafe
        case 56:
            return '#a88675'; // Cafe
        case 57:
            return '#ad9082'; // Cafe
        case 58:
            return '#b29a8e'; // Cafe
        case 59:
            return '#baa79e'; // Cafe
        default:
            return 'steelblue';
    }
}

function getText(boro) {
    switch (boro){
        case '1':
            return "Manhattan";
        case '2':
            return "The Bronx";
        case '3':
            return "Brooklyn";
        case '4':
            return "Queens";
        case '5':
            return "Staten Island";
    }
}

//Taken from one of the examples of d3.js

function histoGram(fD, id){
    var hG={},    hGDim = {t: 90, r: 0, b: 30, l: 0};
    hGDim.w = 900 - hGDim.l - hGDim.r,
        hGDim.h = 300 - hGDim.t - hGDim.b;

    //create svg for histogram.
    var hGsvg = d3.select(id).append("svg")
        .attr("width", hGDim.w + hGDim.l + hGDim.r)
        .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
        .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");

    // create function for x-axis mapping.
    var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1)
        .domain(fD.map(function(d) { return d[0]; }));

    // Add x-axis to the histogram svg.
    hGsvg.append("g").attr("class", "x axis")
        .attr("transform", "translate(0," + hGDim.h + ")")
        .call(d3.svg.axis().scale(x).orient("bottom"));

    // Create function for y-axis map.
    var y = d3.scale.linear().range([hGDim.h, 0])
        .domain([0, d3.max(fD, function(d) { return d[1]; })]);

    // Create bars for histogram to contain rectangles and freq labels.
    var bars = hGsvg.selectAll(".bar").data(fD).enter()
        .append("g").attr("class", "bar");

    //create the rectangles.
    bars.append("rect")
        .attr("x", function(d) { return x(d[0]); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("width", x.rangeBand())
        .attr("height", function(d) { return hGDim.h - y(d[1]); })
        .attr('fill',barColor)
//        .on("mouseover",mouseover)// mouseover is defined below.
//        .on("mouseout",mouseout);// mouseout is defined below.

    //Create the frequency labels above the rectangles.
    bars.append("text").text(function(d){ return d3.format(",")(d[1])})
        .attr("x", function(d) { return x(d[0])+x.rangeBand()/2; })
        .attr("y", function(d) { return y(d[1])-5; })
        .attr("text-anchor", "middle");

    function mouseover(d){  // utility function to be called on mouseover.
        // filter for selected state.
        var st = fData.filter(function(s){ return s.State == d[0];})[0],
            nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});

        // call update functions of pie-chart and legend.
        pC.update(nD);
        leg.update(nD);
    }

    function mouseout(d){    // utility function to be called on mouseout.
        // reset the pie-chart and legend.
        pC.update(tF);
        leg.update(tF);
    }

    // create function to update the bars. This will be used by pie-chart.
    hG.update = function(nD, color){
        // update the domain of the y-axis map to reflect change in frequencies.
        y.domain([0, d3.max(nD, function(d) { return d[1]; })]);

        // Attach the new data to the bars.
        var bars = hGsvg.selectAll(".bar").data(nD);

        // transition the height and color of rectangles.
        bars.select("rect").transition().duration(500)
            .attr("y", function(d) {return y(d[1]); })
            .attr("height", function(d) { return hGDim.h - y(d[1]); })
            .attr("fill", color);

        // transition the frequency labels location and change value.
        bars.select("text").transition().duration(500)
            .text(function(d){ return d3.format(",")(d[1])})
            .attr("y", function(d) {return y(d[1])-5; });
    }
    return hG;
}

function pieChart(pD, id){
    var pC ={},    pieDim ={w:250, h: 250};
    pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;

    // create svg for pie chart.
    var piesvg = d3.select(id).append("svg")
        .attr("width", pieDim.w).attr("height", pieDim.h).append("g")
        .attr("transform", "translate("+pieDim.w/2+","+pieDim.h/2+")");

    // create function to draw the arcs of the pie slices.
    var arc = d3.svg.arc().outerRadius(pieDim.r - 10).innerRadius(0);

    // create a function to compute the pie slice angles.
    var pie = d3.layout.pie().sort(null).value(function(d) { return d.freq; });

    // Draw the pie slices.
    piesvg.selectAll("path").data(pie(pD)).enter().append("path").attr("d", arc)
        .each(function(d) { this._current = d; })
        .style("fill", function(d) { return segColor(d.data.type); })
        .on("mouseover",mouseover).on("mouseout",mouseout);

    // create function to update pie-chart. This will be used by histogram.
    pC.update = function(nD){
        piesvg.selectAll("path").data(pie(nD)).transition().duration(500)
            .attrTween("d", arcTween);
    }
    // Utility function to be called on mouseover a pie slice.
    function mouseover(d){
        // call the update function of histogram with new data.
        hG.update(fData.map(function(v){
            return [v.State,v.freq[d.data.type]];}),segColor(d.data.type));
    }
    //Utility function to be called on mouseout a pie slice.
    function mouseout(d){
        // call the update function of histogram with all data.
        hG.update(fData.map(function(v){
            return [v.State,v.total];}), barColor);
    }
    // Animating the pie-slice requiring a custom function which specifies
    // how the intermediate paths should be drawn.
    function arcTween(a) {
        var i = d3.interpolate(this._current, a);
        this._current = i(0);
        return function(t) { return arc(i(t));    };
    }
    return pC;
}

function legend(lD, id){
    var leg = {};

    // create table for legend.
    var legend = d3.select(id).append("table").attr('class','legend');

    // create one row per segment.
    var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");

    // create the first column for each segment.
    tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
        .attr("width", '16').attr("height", '16')
        .attr("fill",function(d){ return segColor(d.type); });

    // create the second column for each segment.
    tr.append("td").text(function(d){ return getText(d.type);});

    // create the third column for each segment.
    tr.append("td").attr("class",'legendFreq')
        .text(function(d){ return d3.format(",")(d.freq);});

    // create the fourth column for each segment.
    tr.append("td").attr("class",'legendPerc')
        .text(function(d){ return getLegend(d,lD);});

    // Utility function to be used to update the legend.
    leg.update = function(nD){
        // update the data attached to the row elements.
        var l = legend.select("tbody").selectAll("tr").data(nD);

        // update the frequencies.
        l.select(".legendFreq").text(function(d){ return d3.format(",")(d.freq);});

        // update the percentage column.
        l.select(".legendPerc").text(function(d){ return getLegend(d,nD);});
    }

    function getLegend(d,aD){ // Utility function to compute percentage.
        return d3.format("%")(d.freq/d3.sum(aD.map(function(v){ return v.freq; })));
    }

    return leg;
}

function getName(boro) {
    switch (boro){
        case '1':
            return "Manhattan";
        case '2':
            return "The Bronx";
        case '3':
            return "Brooklyn";
        case '4':
            return "Queens";
        case '5':
            return "Staten Island";
    }
}

function getType(boro, dist) {
    let res = "";
    switch (boro) {
        case '1':
            res = "MH";
            break;
        case '2':
            res = "BX";
            break;
        case '3':
            res = "BR";
            break;
        case '4':
            res = "QN";
            break;
        case '5':
            res = "SI";
            break;
    }
    res += '-'+dist;
    return res;
}
