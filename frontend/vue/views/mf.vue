
<template>
  <div class="container">
    <div id="card-container">
      <Suspense>
            <card v-for="i in amount" :visible="(i==1 ? true : false)"  :key="i" :age="getAge()" :breed="this.lastbreed.charAt(0).toUpperCase()+ this.lastbreed.slice(1)" :dogimage="doglinks[i]" :id="i" :name="getName()" ></card>
      <template #fallback>
        <p>Loading Image...</p>
        </template>
          </Suspense>
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
        amount: 1, //Math.floor(Math.random() * 5) + 1,
        lastbreed: "",
        doglinks: []
    };
  },
  methods: {
    async getImage() {
        this.lastbreed=dogbreeds[Math.floor(Math.random() * dogbreeds.length)];
         await fetch("https://dog.ceo/api/breed/"+this.lastbreed+"/images/random")
          .then((data) => {
            let json = JSON.stringify(data);
 console.log(json)
 return json.message;
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
  
  beforeMount() {
    for (let i = 0; i < this.amount; i++) {
      let data = this.getImage()
        this.doglinks.push(data);
    }
  },
  components: {
    Card,
  },
};
</script>
