<template>
  <div class="container">
    <div id="card-container">
        
            <card v-for="i in amount" :visible="(i==1 ? true : false)"  :key="i" :age="getAge()" :breed="getBreed()" :dogimage="doglinks[Math.floor(Math.random() * doglinks.length)]" :id="i" :name="getName()" ></card>
    </div>
  </div>
</template>
<script>
// import { CredentialManager } from "../../globals";
import Card from "./components/Card.vue";
import {dogbreeds,dognames} from  "./helper.js";

export default {
  data() {
    return {
        amount: Math.floor(Math.random() * 99) + 1,
      doglinks: ["https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog1.png?alt=media&token=5c36858c-dad8-4c05-a6ce-6a9b41322316", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog2.png?alt=media&token=da5c9a22-0b3a-471a-9d51-2247879a3d17", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog3.png?alt=media&token=731d7473-4372-402b-b4f2-86f39bd6d4b2", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog4.png?alt=media&token=68caf9d3-6b8c-4029-ad97-c4c23ced5adf", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog5.png?alt=media&token=58833b94-8663-489f-9fc7-11b5aa4f00b7"],
    };
  },
  methods: {
    getImage() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            let json = JSON.stringify(data.message);
        });
    },
    getAge() {
      return Math.floor(Math.random() * 13) + 1;
    },
    getName() {
      return dognames[Math.floor(Math.random() * dognames.length)];
    },
    getBreed() {
      return dogbreeds[Math.floor(Math.random() * dogbreeds.length)];
    },
    // async submit() {
    //   CredentialManager.AddCheck(this.form.username, this.form.password, undefined, (valid) => {
    //     this.$router.push("/chat");
    //   });
    // },
  },
  components: {
    Card,
  },
};
</script>
