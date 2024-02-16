<template>
  	
    <div class="container">
        <div id="card-container">
            <div class="card" id="card1">
                <img alt="Dog 1" :src="doglinks[0]">
                <h2>Dog Name 1</h2>
                <p>Age: 2 years</p>
                <button onclick="swipe('like')">Like</button>
                <button onclick="swipe('dislike')">Dislike</button>
            </div>
            <div class="card" id="card2" style="display: none;">
                <img :src="doglinks[0]" alt="Dog 2">
                <h2>Dog Name 2</h2>
                <p>Age: 2 years</p>
                <button onclick="swipe('like')">Like</button>
                <button onclick="swipe('dislike')">Dislike</button>
            </div>
            <div class="card" id="card3" style="display: none;">
                <img :src="doglinks[0]" alt="Dog 3">
                <h2>Dog Name 3</h2>
                <p>Age: 2 years</p>
                <button onclick="swipe('like')">Like</button>
                <button onclick="swipe('dislike')">Dislike</button>
            </div>
            <div class="card" id="card4" style="display: none;">
                <img :src="doglinks[0]" alt="Dog 4">
                <h2>Dog Name 4</h2>
                <p>Age: 2 years</p>
                <button onclick="swipe('like')">Like</button>
                <button onclick="swipe('dislike')">Dislike</button>
            </div>
            <div class="card" id="card5" style="display: none;">
                <img :src="doglinks[0]" alt="Dog 5">
                <h2>Dog Name 5</h2>
                <p>Age: 2 years</p>
                <button onclick="swipe('like')">Like</button>
                <button onclick="swipe('dislike')">Dislike</button>
            </div>
        </div>
    </div>
  </template>
  <script>
    // import { CredentialManager } from "../../globals";
export default {
  data() {
    return {
      doglinks: [
        "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog1.png?alt=media&token=5c36858c-dad8-4c05-a6ce-6a9b41322316",
        "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog2.png?alt=media&token=da5c9a22-0b3a-471a-9d51-2247879a3d17",
        "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog3.png?alt=media&token=731d7473-4372-402b-b4f2-86f39bd6d4b2",
        "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog4.png?alt=media&token=68caf9d3-6b8c-4029-ad97-c4c23ced5adf",
        "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog5.png?alt=media&token=58833b94-8663-489f-9fc7-11b5aa4f00b7",
      ],

    };
  },
  methods: {
    // async submit() {
    //   CredentialManager.AddCheck(this.form.username, this.form.password, undefined, (valid) => {
    //     this.$router.push("/chat");
    //   });
    // },
  },
};
  </script>