<template>
  <div class="row" style="margin: 0">
    <div class="col s6">{{ name }}</div>
    <div class="col s2">{{ type }}</div>
    <div :v-if="distance != undefined" class="col s2">{{ distance }}</div>
    <div :v-if="location != undefined" class="col s2"><a class="map-navigate" target="_blank" :onclick="openGoogleMaps">Navigate</a></div>
  </div>
</template>
<style>
.map-style {
  position: absolute;
  margin-left: 10%;
  margin-top: 4%;
}
.map-navigate {
  border-width: 1px;
  border-radius: 100px;
  background-color: #039be5;
  padding: 1px 5px 1px 5px;
  color: black;
}
</style>
<script>
export default {
  name: "MapItem",
  props: {
    location: Object,
    name: String,
    type: String,
    distance: Number,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  methods: {
    openGoogleMaps() {
      let latitude = this.location.lat;
      let longitude = this.location.lng;
      // Encode the name for the URL
      const encodedName = encodeURIComponent(this.name);

      // Construct the Google Maps URL
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${encodedName}`;

      // Open the URL in a new tab
      window.open(url, "_blank");
    },
  },
};
</script>
