<template>
  <div class="card" :id='"card" + id' :style='(visible ? "" : "display:none;")'>
    <img alt="Dog 1" :src="dogimage" />
    <h2>{{ name }}</h2>
    <p>Age: {{ age }} Years</p>
    <p>Breed: {{ breed }}</p>
    <button onclick="swipe('like')" :ondragover="swipemobile(event,'like', id)">Like</button>
    <button onclick="swipe('dislike')" :ondragover="swipemobile(event,'dislike', id)">Dislike</button>
  </div>
</template>
<script>
window.stuffs = {
  currentCardIndex: 1,
  dislikeCount: 0,
  likeCount: 0
}
export default {
  data() {
    return { isTargetVisible: false };
  },
  methods: {
    swipemobile(event,action , id) {
      console.log(event)
      if (action === 'dislike') {
        window.stuffs.dislikeCount++;
      } else if (action === 'like') {
        window.stuffs.likeCount++;

        if (likeCount === Math.floor(Math.random() * 20)) {
          window.location.href = 'Chat.html';
          return;
        }
      }

      showNextCard();
    },
    swipe(action) {
      if (action === 'dislike') {
        window.stuffs.dislikeCount++;
      } else if (action === 'like') {
        window.stuffs.likeCount++;

        if (likeCount === Math.floor(Math.random() * 20)) {
          window.location.href = 'Chat.html';
          return;
        }
      }

      showNextCard();
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
        window.location.href = 'Chat.html';
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