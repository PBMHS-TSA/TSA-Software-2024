<template>
  <div class="card" :id='"card" + id' :style='(visible ? "" : "display:none;")'> <!--:ondragover="swipemobile"-->
    <img :alt='"Dog" + i' :src="dogimage" />
    <h2>{{ name }}</h2>
    <p>Age: {{ age }} Years</p>
    <p>Breed: {{ breed }}</p>
    <button :onclick="swipe('like')">Like</button>
    <button :onclick="swipe('dislike')">Dislike</button>
  </div>
</template>
<script>
window.stuffs = {
  currentCardIndex: 0,
  dislikeCount: 0,
  likeCount: 0
}
export default {
  data() {
    return { isTargetVisible: false };
  },
  methods: {
    swipemobile(event) {
      let action = 'like'
      console.log(event)
      if (action === 'dislike') {
        window.stuffs.dislikeCount++;
      } else if (action === 'like') {
        window.stuffs.likeCount++;

        if (window.stuffs.likeCount === Math.floor(Math.random() * 20)) {
          //window.location.href = 'chat';
          return;
        }
      }

      this.showNextCard();
    },
    swipe(action) {
      if (action === 'dislike') {
        window.stuffs.dislikeCount++;
      } else if (action === 'like') {
        window.stuffs.likeCount++;

        if (window.stuffs.likeCount === Math.floor(Math.random() * 20)) {
          //window.location.href = 'chat';
          return;
        }
      }

      this.showNextCard();
    },

    showNextCard() {
      let currentCardIndex = window.stuffs.currentCardIndex;
      const currentCard = document.getElementById(`card${currentCardIndex}`);
      currentCardIndex++
      const nextCard = document.getElementById(`card${currentCardIndex}`);
      if (nextCard) {
        currentCard.style.display = 'none';

        nextCard.style.display = 'block';
      } else {
        //this.$router.push({ path: 'chat' })
      }
    },
  },
  name: "Card",
  props: {
    visible: Boolean,
    id: Number,
    name: String,
    age: Number,
    breed: String,
    dogimage: String,


  },
};

</script>