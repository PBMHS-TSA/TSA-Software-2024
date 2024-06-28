<template>
  <div :id="'user' + id" class="usercard">
    <div :ondragover="swipemobile" class="card" :id="'card' + linenumber" :style="'display:' + (linenumber == 0 ? 'block' : 'none;')">
      <router-link :to="'/chat/' + id">
        <div class="card-message"><span class="large material-icons" style="color: WHITE">chat</span></div>
      </router-link>
      <!--:ondragover="swipemobile"-->
      <img :alt="'Dog' + id" :src="dogimage" />
      <h2>{{ name }}</h2>
      <p>Age: {{ age }} Years</p>
      <p>Gender: {{ gender }}</p>

      <p>Breed: {{ breed }}</p>
      <button :onclick="swipe" class="like"><i class="fa-solid fa-bone fa-4x"></i></button>
      <button :onclick="swipe" class="dislike"><i class="fa-solid fa-bone fa-4x"></i></button>
    </div>

    <div class="cardprofile" :id="'profile' + linenumber" :style="'display:' + (linenumber == 0 ? 'block' : 'none;')">
      <h2>{{ owner.name }}</h2>
      <p>Age: {{ owner.age }} Years</p>
      <p>Distance: {{ distance }} Miles</p>
    </div>
  </div>
</template>

<script>
window.stuffs = {
  currentCardIndex: 0,
  dislikeCount: 0,
  likeCount: 0,
};
export default {
  data() {
    return { isTargetVisible: false };
  },
  methods: {
    swipemobile(event) {
      console.log(event);
      let action = "like";
      if (action === "dislike") {
        window.stuffs.dislikeCount++;
      } else if (action === "like") {
        window.stuffs.likeCount++;

        if (window.stuffs.likeCount === Math.floor(Math.random() * 20)) {
          //window.location.href = 'chat';
          return;
        }
      }

      this.showNextCard();
    },
    swipe(event) {
      let action = event.target.className;

      console.log(event);
      if (action === "dislike") {
        window.stuffs.dislikeCount++;
      } else if (action === "like") {
        window.stuffs.likeCount++;

        if (window.stuffs.likeCount === Math.floor(Math.random() * 20)) {
          //window.location.href = 'chat';
          return;
        }
      }

      this.showNextCard();
    },

    showNextCard() {
      const currentCard = document.getElementById(`card${window.stuffs.currentCardIndex}`);
      const currentProfile = document.getElementById(`profile${window.stuffs.currentCardIndex}`);

      window.stuffs.currentCardIndex++;
      const nextCard = document.getElementById(`card${window.stuffs.currentCardIndex}`);
      const nextProfile = document.getElementById(`profile${window.stuffs.currentCardIndex}`);

      if (nextCard) {
        currentCard.style.display = "none";
        currentProfile.style.display = "none";

        nextCard.style.display = "block";
        nextProfile.style.display = "block";
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
  name: "Card",
  props: {
    id: Number,
    name: String,
    age: Number,
    breed: String,
    dogimage: String,
    linenumber: Number,
    owner: Object,
    distance: Number,
    description: String,
    gender: String,
  },
};
</script>
