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
    if ("geolocation" in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Retrieve latitude and longitude from the position object
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.initializeHereMap(latitude, longitude);
          // Do something with the latitude and longitude, such as displaying them on the webpage
          console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        },
        function(error) {
          // Handle errors, such as the user denying permission or if the browser does not support geolocation
          console.error("Error getting the current position:", error);
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported by this browser.");
    }
  },
  methods: {
    createMarker(lat, lng, icon, map, size) {
      const marker = new H.map.Marker({ lat: lat, lng: lng });
      const pngIcon = new H.map.Icon(icon, { size: { w: size.width, h: size.height } });
      marker.setIcon(pngIcon);
      map.addObject(marker);
    },
    async initializeHereMap(lat, lng) {
      const mapContainer = this.$refs.hereMap;
      const H = window.H;

      // Initialize the platform object:
      this.platform = new H.service.Platform({
        apikey: this.apikey
      });

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
      window.maperer = map;
      let pins = {
            "location":"https://i.ibb.co/Fh7GNsy/location-location-pin-location-icon-transparent-free-png.png",
            "pet-store": "https://i.ibb.co/1vXMzNK/tom-fotor-bg-remover-20240222215654.png",
            "dog-groomer": "https://i.ibb.co/N3S6xQP/Groomer-pin-removebg-preview.png",
            "dogwalkers": "https://i.ibb.co/PYFC9M3/walking-pin-removebg-preview.png",
            "dog-park": "https://i.ibb.co/0c90tpD/Untitled-design-1-removebg-preview.png",  
        }

      this.createMarker(lat, lng,pins.location, map, {width: 56, height: 56})
      // Fetch points of interest using HERE Geocoding & Search API v7
      const categories = {
        parks: "dog-park",
        groomers: "dog-groomer",
        petStores: "pet-store"
      };

      for (const category of Object.keys(categories)) {
        const places = await this.fetchDogCarePlaces(category, lat, lng);
        places.forEach(place => {
          console.log(place)
          this.createMarker(place.position[0], place.position[1], pins[category], map, { width: 56, height: 56 });
        });
      }
    },
    async fetchDogCarePlaces(category, lat, lng) {
      const url = `https://discover.search.hereapi.com/v1/discover?at=${lat},${lng}&q=${category}&limit=10&apiKey=${this.apikey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items;
      } catch (error) {
        console.error(`Error fetching ${category}:`, error);
        return [];
      }
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
