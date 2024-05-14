<template>
  <div class="row" >
    <div class="col s7">{{ name }}</div>
    <div class="col s3">{{ type }}</div>
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
