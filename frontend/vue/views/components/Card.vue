<template>
    <div class="card" :id='"card" +id' :style='(visible ? "" : "display:none;")'>
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
  methods: {
    swipe(action) {
      if (action === 'dislike') {
        dislikeCount++;
      } else if (action === 'like') {
        likeCount++;

        if (likeCount === 3) {
          window.location.href = 'Chat.html';
          return;
        }
      }

      showNextCard();
    },

    showNextCard() {
      const currentCard = document.getElementById(`card${currentCardIndex}`);
      currentCardIndex++;

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
    id:Number,
    name: String,
    age: Number,
    breed: String,
    dogimage:String,

    
  },
};

</script>