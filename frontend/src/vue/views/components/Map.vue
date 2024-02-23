
<template>
    <div id="map">
        
    <!--In the following div the HERE Map will render-->
      <div id="mapContainer" style="height:600px;width:100%" ref="hereMap"></div>
    </div>
    <!--<table>
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
      </table>-->
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
        let pngIcon = new H.map.Icon(icon, {size: {w: size.width, h: size.height}});      

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
            location:"https://static.vecteezy.com/system/resources/previews/009/590/005/original/location-location-pin-location-icon-transparent-free-png.png",
            shops: "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tom-fotor-bg-remover-20240222215654.png?alt=media&token=1323c06f-9e54-40bf-ad1d-2fdce7fa55fe",
            goomer: "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/Groomer_pin-removebg-preview.png?alt=media&token=c5ab06ab-4290-4df0-a440-785154d5f73a",
            dogwalkers: "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/walking_pin-removebg-preview.png?alt=media&token=91ef29f8-5c37-442e-874b-e1e7a4409462",
            parks: "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/Untitled_design__1_-removebg-preview.png?alt=media&token=4f312ad1-2bfc-421f-b480-511dea2767e2",  
        }
        window.maperer = map

        // End rendering the initial map28.49242972397546, -81.46890825104127
        this.createMarker(28.4820108,-81.4566075,pins.location, map, {width: 56, height: 56})
        this.createMarker(28.49242972397546, -81.46890825104127,pins.shops, map, {width: 56, height: 56})
        this.createMarker(28.496303761987644, -81.42943979263434,pins.shops, map, {width: 56, height: 56})
        this.createMarker(28.51466439300104, -81.48442262819522,pins.shops, map, {width: 56, height: 56})
        this.createMarker(28.494163431126942, -81.46982592908185,pins.groomer, map, {width: 56, height: 56})
        this.createMarker(28.507509646254267, -81.45729211781445,pins.groomer, map, {width: 56, height: 56})
        this.createMarker(28.4846335635329, -81.4609175293766,pins.dogwalkers, map, {width: 56, height: 56})
        this.createMarker(28.487033485843625, -81.46200114175743,pins.dogwalkers, map, {width: 56, height: 56})
        this.createMarker(28.486646861578627, -81.46393769659025,pins.dogwalkers, map, {width: 56, height: 56})
        this.createMarker(28.48462044269299, -81.46526029961568,pins.dogwalkers, map, {width: 56, height: 56})
        this.createMarker(28.483722805516027, -81.465062045014,pins.dogwalkers, map, {width: 56, height: 56})
        this.createMarker(28.489545034717654, -81.48231208709925,pins.parks, map, {width: 56, height: 56})
        this.createMarker(28.492562469524763, -81.47819221421392,pins.parks, map, {width: 56, height: 56})
        this.createMarker(28.514888805984743, -81.43441856480727,pins.parks, map, {width: 56, height: 56})

        // Add marker to the map
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
  