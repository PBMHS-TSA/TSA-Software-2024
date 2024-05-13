<template>
  <div class="row" style="position: absolute; margin-left: 10%">
    <div class="col s5">{{ name }}</div>
    <div class="col s5">{{ type }}</div>
  </div>
</template>
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
