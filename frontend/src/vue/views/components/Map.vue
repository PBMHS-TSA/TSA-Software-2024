
<template>
    <div style="display: inline-flex">
    <div id="map">
        
    <!--In the following div the HERE Map will render-->
      <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
    </div>
    <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><a href="https://stores.petco.com/fl/orlando/pet-supplies-orlando-fl-1748.html" target="_blank">Petco<br style="font-size:small">5151 Vineland Rd, Orlando, Florida</a></td>
            <td>0.8 Miles</td>
          </tr>
          <tr>
            <td><a href="https://stores.petco.com/fl/orlando/pet-supplies-orlando-fl-1748.html" target="_blank">Petco<br style="font-size:small">5151 Vineland Rd, Orlando, Florida</a></td>
            <td>0.8 Miles</td>
          </tr>
          <tr>
            <td><a href="https://stores.petco.com/fl/orlando/pet-supplies-orlando-fl-1748.html" target="_blank">Petco<br style="font-size:small">5151 Vineland Rd, Orlando, Florida</a></td>
            <td>0.8 Miles</td>
          </tr>
        </tbody>
      </table>
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
createMarker(lat,lng,icon, map,size) {
    const marker = new H.map.Marker({lat: lat, lng: lng});
        var pngIcon = new H.map.Icon(icon, {size: {w: size.width, h: size.height}});      

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
        let pins = {
            location:,
            shops:
            pet
        }
        // End rendering the initial map
        this.createMarker(28.4820108,-81.4566075,"https://static.vecteezy.com/system/resources/previews/009/590/005/original/location-location-pin-location-icon-transparent-free-png.png", map, {width: 56, height: 56})
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
  