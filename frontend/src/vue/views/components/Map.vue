
<template>
    <div id="map">
        
    <!--In the following div the HERE Map will render-->
      <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Map",
    props: {
      center: Object
      // center object { lat: 40.730610, lng: -73.935242 }
    },
    data() {
      return {
        platform: null,
        apikey: "j0QxHumNVhmcu8MHfAh8Ag-HSn4cZ4z4NScpNELwce0"
        // You can get the API KEY from developer.here.com
      };
    },
    
    async mounted() {
      // Initialize the platform object:
      const platform = new window.H.service.Platform({
        apikey: this.apikey
      });
      this.platform = platform;
      this.initializeHereMap();
    },
    methods: {
createMarker(lat,lng,icon, map) {
    const marker = new H.map.Marker({lat: lat, lng: lng});
        var pngIcon = new H.map.Icon(icon);      

  marker.setIcon(pngIcon)
  map.addObject(marker);
},
      initializeHereMap() { // rendering map
  
        const mapContainer = this.$refs.hereMap;
        const H = window.H;
        // Obtain the default map types from the platform object
        var maptypes = this.platform.createDefaultLayers();
  
        // Instantiate (and display) a map object:
        var map = new H.Map(mapContainer, maptypes.vector.normal.map, {
          zoom: 10,
          center: {lng:-81.4566075,lat:28.4820108}
          // center object { lat: 40.730610, lng: -73.935242 }
        });
  
        addEventListener("resize", () => map.getViewPort().resize());
  
        // add behavior control
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
        // add UI
        H.ui.UI.createDefault(map, maptypes);
        // End rendering the initial map
        this.createMarker(28.4820108,-81.4566075,"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Flocation-pin_2776067&psig=AOvVaw0VRpxByt9Q3O8KDPx_i7Bx&ust=1708734249029000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNj4-6GZwIQDFQAAAAAdAAAAABAE", map)
  // Add marker to the map
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
  