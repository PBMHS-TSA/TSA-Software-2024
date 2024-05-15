<template>
  <div class="row">
    <div class="col s6  ">{{ name }}</div>
    <div class="col s3">{{ type }}</div>
    <div :v-if="location!=undefined" class="col s3"><a  :href="'http://maps.google.com/maps?q=loc:' + this.location.lat + ',' + this.location.lng">Navigate</a></div>
  </div>
</template>
<style>
.map-style {
  position: absolute;
  margin-left: 10%;
  margin-top: 4%;
}
</style>
<script>
export default {
  name: "MapItem",
  props: {
    location: Object,
    name: String,
    type: String,
    // center object { lat: 40.730610, lng: -73.935242 }
  },
};
</script>
