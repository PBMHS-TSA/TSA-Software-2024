<template>
    <div class="card" :id="id">
        <img alt="Dog 1" :src="dogimage" />
        <h2>{{ name }}</h2>
        <p>Age: {{age }} Years</p>
        <p>Breed: {{ breed }}</p>
        <button onclick="swipe('like')" ondragover="swipemobile('like')">Like</button>
        <button onclick="swipe('dislike')" ondragover="swipemobile('dislike')">Dislike</button>
      </div>
</template>
<script>
export default {
  data() {
    return { isTargetVisible: false };
  },
  name: "Message",
  props: {
    id:Number,
    name: String,
    age: Number,
    breed: String,
    dogimage:String,

    
  },
};

</script>