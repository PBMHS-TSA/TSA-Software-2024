<template>
  <div class="container" v-if="dogs.length > 0">
    <div id="card-container">
      <Suspense>
        <card v-for="dog in this.dogs" :key="dog.id" :visible="true" :age="dog.age"
          :breed="dog.breed.charAt(0).toUpperCase() + dog.breed.slice(1)" :dogimage="dog.image" :id="dog.id"
          :name="dog.name"></card>
        <template #fallback>
          <p>Loading Image...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import { dogbreeds, dognames } from "./helper.js";

export default {
  data() {
    return {
      amount:  Math.floor(Math.random() * 5) + 1,
      dogs: []
    };
  },
  methods: {
    async getImage(breed) {
      const response = await fetch("https://dog.ceo/api/breed/" + breed + "/images/random");
      const json = await response.json();
      return await json.message;
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
  async beforeMount() {
    for (let i = 0; i < this.amount; i++) {
      const breed = await this.getBreed(); // Fetch breed first

      const data = {  
        id: Date.now(),
        age: await this.getAge(),
        breed: breed,
        name: await this.getName(),
        image: await this.getImage(breed) // Use await here
      };
      this.dogs.push(data);
    }
  },
  components: {
    Card
  }
};
</script>
