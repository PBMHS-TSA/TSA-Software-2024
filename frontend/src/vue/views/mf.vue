<template>
  <div class="container" v-if="dogs.length > 0">
    <div id="card-container">
      <card v-for="dog in this.dogs" :key="dog.id"  :age="dog.age" :breed="dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)" :dogimage="dog.image" :id="dog.id" :name="dog.name" :linenumber="dog.linenumber" :owner="dog.owner" :distance="dog.distance"></card>
    </div>
  </div>
</template>

<script>
import OpenAI from "openai";

const openai = new OpenAI();


import Card from "./components/Card.vue";
import { dogbreeds, dognames } from "./helper.js";

export default {
  data() {
    return {
      amount: 5, // Math.floor(Math.random() * 5) + 1,
      dogs: [],
    };
  },
  methods: {
    async getImage(breed) {
      const response = await fetch("https://dog.ceo/api/breed/" + breed + "/images/random");
      const json = await response.json();
      return await json.message;
    },
    async getOwner() {
      const response = await fetch("https://randommer.io/Name/?type=fullname&number=1&X-Requested-With=XMLHttpRequest",{method: 'POST'});
      const json = await response.json();

      let owner = {
        name: json[0],
        
      };
      return owner
    },
    async getMiles() {
// Generate a random number between 0 and 10 with decimals
var randomNumber = Math.random() * 10;
console.log(randomNumber); // Output a random number between 0 and 10 (exclusive)

// If you want to limit the number of decimal places, you can use toFixed() method
var decimalPlaces = 2;
var roundedRandomNumber = randomNumber.toFixed(decimalPlaces);
console.log(roundedRandomNumber); // Output a random number with 2 decimal places
return roundedRandomNumber;
    },
    async getAge() {
      return Math.floor(Math.random() * 13) + 1;
    },
    async getName() {
      return dognames[Math.floor(Math.random() * dognames.length)];
    },
    async getBreed() {
      return dogbreeds[Math.floor(Math.random() * dogbreeds.length)];
    },
  },
  async getDescription() {
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: `write a short little description about the breed of a Kuvasz that is 8 years old and named Cruise 
 make it sound like a human wrote it
 make it a little more dumbed down 
 i dont want a description of the breed itself 
dumb it down` }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

  //return completion.choices[0];

  },
  async created() {
    for (let i = 0; i < this.amount; i++) {
      const breed = await this.getBreed(); // Fetch breed first

      const data = {
        id: Date.now(),
        age: await this.getAge(),
        breed: breed,
        name: await this.getName(),
        image: await this.getImage(breed), // Use await here
        linenumber: i,
        distance: await this.getMiles(),
        owner: await this.getOwner(),
      };
      this.dogs.push(data);
      console.log(this.dogs);
    }
  },
  components: {
    Card,
  },
};
</script>
