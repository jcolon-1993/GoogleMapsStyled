var venueMap;
function init()
{
  /*
  Create a Latlng object to store the position of the
  marker using object constructor syntax
  */
  var pinLocation = new google.maps.LatLng(33.89175216759814, -118.30032003696641);

  var mapOptions =
  {
    zoom: 15,
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    panControl: false,
    zoomControl: true,
    zoomControlOptions:
    {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },

    mapTypeControl: true,
    mapTypeControlOptions:
    {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },

    scaleControls: true,
    scaleControlOptions:
    {
      position: google.maps.ControlPosition.TOP_CENTER
    },

    streetViewControl: false,
    overviewMapControl: false,

    // Styles property is an array.
    styles:
    [
      {
      // stylers property holds array of objects
        stylers:
        [

          // Overall map colors
          { hue: "#00ff6f" },
          // Overall map saturation
          { saturation: -50 }
        ]
      },
      {
        // Road Features
        featureType: "road",
        // Their geometry
        elementType: "geometry",
        stylers:
        [
          // Lightness of roads
          { lightness: 100 },
          // Level of road detail
          { visibility: "Simplified" }
        ]
      },
      {
        // Public transportation features
        featureType: "transit",
        // Their geometry
        elementType: "geometry",
        stylers:
        [
          // Color of public transportation
          { hue: "ff6600" },
          // Saturation of public transportation
          { saturation: +80 }
        ]
      },
      {
        // Publci transport features
        featureType: "transit",
        // Their labels
        elementType: "labels",
        stylers:
        [
          // label colors
          { hue: "#fff0066" },
          // label saturation
          { saturation: +80 }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers:
        [
          { visibility: "off" }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels",
        stylers:
        [
          {visibility: "on"}
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers:
        [
          { hue: "#c4f4f4" }
        ]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers:
        [
          {visibility: "off"}
        ]
      }
    ]
  };

  var venueMap = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Creates a new marker
  /*
  The Marker() constructor creates a marker
  object
  */
  var startPosition = new google.maps.Marker(
    {
      // Sets its position
      /* position is the object storing the location of the
      marker (pinlocation). */
      position: pinLocation,
      // Specify the map
      /*
      map is the map that the marker should be added to
      */
      map: venueMap,
      // Path to image from HTMl
      /*
      icon is the path to the image that should be
      displayed as the marker on the map
      */
      icon: "img/go.png"
    });
}
function loadScript()
{
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=init";
  document.body.appendChild(script);
}

window.onload = loadScript;
