<template>
  <div class="container" v-if="dogs.length > 0">
    <div id="card-container">
      <card v-for="dog in this.dogs" :gender="dog.gender" :key="dog.id" :age="dog.age" :breed="dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)" :dogimage="dog.image" :id="dog.id" :name="dog.name" :linenumber="dog.linenumber" :owner="dog.owner" :distance="dog.distance"></card>
    </div>
  </div>
</template>

<script>
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: "sk-", dangerouslyAllowBrowser: true });

import Card from "./components/Card.vue";
import {dogbreeds,getAge,dognames,getBreed,getGender,getImage,getMiles,getName,getOwner} from  "./helper.js";

export default {
  data() {
    return {
      amount: 30, // Math.floor(Math.random() * 5) + 1,
      dogs: [],
    };
  },
  methods: {

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
      const breed = await getBreed(); // Fetch breed first

      const data = {
        id: Date.now(),
        age: await getAge(13),
        breed: breed,
        name: await getName(),
        image: await getImage(breed), // Use await here
        linenumber: i,
        distance: await getMiles(),
        owner: await getOwner(),
        gender: await getGender(),
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
