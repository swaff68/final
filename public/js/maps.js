var map;
var markers = [];

var geocoder;


  // var image = './pics/clothes.png';

  // var marker = new google.maps.Marker({
  //   position: boulder,       
  //   map: map,
  //   icon: image,
  //   title:"Only Clothing Requests"
  //   });
 
  // Adds a marker at the center of the map.
    // addMarker(boulder);
  var updateMarkers = function(){

    deleteMarkers()
    
  $.get('/requestMarkers', function(data){

    var groups = _.groupBy(data, function(item){
      return item.groupId
    })
      console.log(groups)

    for (var requestMarker in groups) {

    

  
      var mapMarker = new google.maps.LatLng(groups[requestMarker][0].lat, groups[requestMarker][0].long);

      var clothes = './pics/clothes.png';
      var defaultMarker = null;
      var pets = './pics/pets.png';
      var transport = './pics/transport.png';
      var lodge = './pics/lodge.png';
      var meals = './pics/meals.png';
      var water = './pics/water.png';
      var multiItem = './pics/multiRequest.png';
      var image = defaultMarker;

      // test()

      if(groups[requestMarker].length >1){
        image = multiItem
      }
      else
      {
       if(groups[requestMarker][0].requestType === 'clothing'){
        image = clothes
      }

      if(groups[requestMarker][0].requestType === 'transportation'){
        image = transport
      }

      if(groups[requestMarker][0].requestType === 'lodging'){
        image = lodge
      }

      if(groups[requestMarker][0].requestType === 'meals'){
        image = meals
      }

        if(groups[requestMarker][0].requestType === 'pets'){
        image = pets
      }

      if(groups[requestMarker][0].requestType === 'water'){
        image = water
      } 
      }

      addMarker(mapMarker, image)
      // var marker = new google.maps.Marker({
      //       map: map,
      //       icon: image,
      //       position: mapMarker
      //   });
      // console.log(requestMarker)

      // addMarker(mapMarker);

    };
    console.log(data)
  })
}

function initialize() {
  geocoder = new google.maps.Geocoder();
  var boulder = new google.maps.LatLng(40.0457966, -105.1249414);
  var mapOptions = {
    zoom: 10,
    center: boulder,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // This event listener will call addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng);
  });
  updateMarkers()
}
// Add a marker to the map and push to the array.
function addMarker(location, icon) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: icon
  });
  google.maps.event.addListener(marker, "dblclick", function() {
    marker.setMap(null);
});

  markers.push(marker);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

// this is the geocoding function

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


  google.maps.event.addDomListener(window, 'load', initialize);



