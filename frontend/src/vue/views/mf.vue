<template>
  <div class="container" v-if="dogs.length > 0">
    <div id="card-container">
      <card v-for="dog in this.dogs" :gender="dog.gender" :key="dog.id" :age="dog.age" :breed="dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)" :dogimage="dog.image" :id="dog.id" :name="dog.name" :linenumber="dog.linenumber" :owner="dog.owner" :distance="dog.distance"></card>
    </div>
  </div>
</template>

<script>
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

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
      const response = await fetch("https://randommer.io/Name/?type=fullname&number=1&X-Requested-With=XMLHttpRequest", { method: "POST" });
      const json = await response.json();

      let owner = {
        name: json[0],
        age: Math.floor(Math.random() * (80 - 18 + 1)) + 18
      };
      return owner;
    },
    async getMiles() {
      // Generate a random number between 0 and 10 with decimals
      var randomNumber = Math.random() * 6;
      console.log(randomNumber); // Output a random number between 0 and 10 (exclusive)

      // If you want to limit the number of decimal places, you can use toFixed() method
      var decimalPlaces = 2;
      var roundedRandomNumber = randomNumber.toFixed(decimalPlaces);
      console.log(roundedRandomNumber); // Output a random number with 2 decimal places
      return roundedRandomNumber;
    },
    async getAge(int) {
      return Math.floor(Math.random() * int) + 1;
    },
    async getName() {
      return dognames[Math.floor(Math.random() * dognames.length)];
    },
    async getBreed() {
      return dogbreeds[Math.floor(Math.random() * dogbreeds.length)];
    },
    async getGender() {
      let math =  Math.floor(Math.random() * 13) + 1;
      return (math == 1 ? "Male" :"Female")
    },
    async getDescription(data) {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `write a about a breed of dog that is ${data.breed}. The dogs name is ${data.dogname}, and he is ${data.age} years old. 
            make 1 explanation talking about the dog and its behavior, and make each description vary from 100 to 300 words.`,
           name: "System",
          },

        ],

        model: "gpt-3.5-turbo",
      });

      console.log(completion.choices[0]);

      //return completion.choices[0];
    },
  },

  async created() {
    for (let i = 0; i < this.amount; i++) {
      const breed = await this.getBreed(); // Fetch breed first

      const data = {
        id: Date.now(),
        age: await this.getAge(13),
        breed: breed,
        name: await this.getName(),
        image: await this.getImage(breed), // Use await here
        linenumber: i,
        distance: await this.getMiles(),
        owner: await this.getOwner(),
        gender: await this.getGender(),
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
