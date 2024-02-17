
<template>
  <div class="container">
    <div id="card-container">
      <Suspense>
            <card v-for="i in amount" :visible="(i==1 ? true : false)"  :key="i" :age="dogs[i].age" :breed="dogs[i].breed.charAt(0).toUpperCase()+ dogs[i].breed.slice(1)" :dogimage="dogs[i].image" :id="dogs[i].id" :name="dogs[i].name" ></card>
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
        dogs: []
    };
  },
  methods: {
    async getImage(breed) {
         await fetch("https://dog.ceo/api/breed/"+breed+"/images/random")
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
      let data = {
        id: i,
        age: getAge(),
        breed: getBreed(),
        name: getName(),
        image: getImage(data.breed),
      };
      
        this.dogs.push(data);
    }
  },
  components: {
    Card,
  },
};
</script>
