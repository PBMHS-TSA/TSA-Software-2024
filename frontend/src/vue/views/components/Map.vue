<template>
  <div id="map">
    <!-- In the following div the HERE Map will render -->
    <div id="mapContainer" style="height: 600px; width: 100%" ref="hereMap"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    center: Object,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: "j0QxHumNVhmcu8MHfAh8Ag-HSn4cZ4z4NScpNELwce0",
      // You can get the API KEY from developer.here.com
    };
  },
  async mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;
    if ("geolocation" in navigator) {
  // Request the current position
   navigator.geolocation.getCurrentPosition( (position) => {
    // Retrieve latitude and longitude from the position object
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.initializeHereMap(latitude,longitude);

    // Do something with the latitude and longitude, such as displaying them on the webpage
    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  }, function(error) {
    // Handle errors, such as the user denying permission or if the browser does not support geolocation
    console.error("Error getting the current position:", error);
  });
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}

  },
  methods: {
    createMarker(lat,lng,icon, map,size) {
    const marker = new H.map.Marker({lat: lat, lng: lng});
        let pngIcon = new H.map.Icon(icon, {size: {w: size.width, h: size.height}});      

  marker.setIcon(pngIcon)
  map.addObject(marker);
},
    async initializeHereMap(lat,lng) {
      const mapContainer = this.$refs.hereMap;
      const H = window.H;

      // Obtain the default map types from the platform object
      const maptypes = this.platform.createDefaultLayers();
      
      // Instantiate (and display) a map object:
      const map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 10,
        center: { lat: lat, lng: lng }
      });
      

      addEventListener("resize", () => map.getViewPort().resize());

      // Add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // Add UI
      H.ui.UI.createDefault(map, maptypes);
      let pins = {
            location:"https://i.ibb.co/Fh7GNsy/location-location-pin-location-icon-transparent-free-png.png",
            shops: "https://i.ibb.co/1vXMzNK/tom-fotor-bg-remover-20240222215654.png",
            groomer: "https://i.ibb.co/N3S6xQP/Groomer-pin-removebg-preview.png",
            dogwalkers: "https://i.ibb.co/PYFC9M3/walking-pin-removebg-preview.png",
            parks: "https://i.ibb.co/0c90tpD/Untitled-design-1-removebg-preview.png",  
        }

      this.createMarker(lat, lng,pins.location, map, {width: 56, height: 56})
      // Fetch points of interest using HERE Places API
      const response = await fetch(
        `https://places.ls.hereapi.com/places/v1/discover/around?at=28.4820108,-81.4566075&apiKey=${this.apikey}`
      );

      if (!response.ok) {
        console.error("Failed to fetch POIs");
        return;
      }

      const data = await response.json();

      // Display POIs on the map
      data.results.items.forEach(place => {
        console.log(place)
        const marker = new H.map.Marker({
          lat: place.position[0],
          lng: place.position[1]
        });
        map.addObject(marker);
      });
      window.maperer = map

    }
  }
};
</script>

<style scoped>
#map {
  width: 60vw;
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>
