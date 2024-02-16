<template>
  <div class="container">
    <div id="card-container">
      <div class="card" id="card1">
        <img alt="Dog 1" :src="doglinks[0]" />
        <h2>{{ getName() }}</h2>
        <p>Age: {{ getAge() }} Years</p>
        <button onclick="swipe('like')">Like</button>
        <button onclick="swipe('dislike')">Dislike</button>
      </div>
      <div class="card" id="card2" style="display: none">
        <img :src="doglinks[0]" alt="Dog 2" />
        <h2>{{ getName() }}</h2>
        <p>Age: {{ getAge() }} YAears</p>
        <button onclick="swipe('like')" ondragover="swipemobile('like')">Like</button>
        <button onclick="swipe('dislike')" ondragover="swipemobile('dislike')">Dislike</button>
      </div>
      <div class="card" id="card3" style="display: none">
        <img :src="doglinks[0]" alt="Dog 3" />
        <h2>{{ getName() }}</h2>
        <p>Age: {{ getAge() }} Years</p>
        <button onclick="swipe('like')">Like</button>
        <button onclick="swipe('dislike')">Dislike</button>
      </div>
      <div class="card" id="card4" style="display: none">
        <img :src="doglinks[0]" alt="Dog 4" />
        <h2>{{ getName() }}</h2>
        <p>Age: {{ getAge() }} Years</p>
        <button onclick="swipe('like')">Like</button>
        <button onclick="swipe('dislike')">Dislike</button>
      </div>
      <div class="card" id="card5" style="display: none">
        <img :src="doglinks[0]" alt="Dog 5" />
        <h2>{{ getName() }}</h2>
        <p>Age: {{ getAge() }} Years</p>
        <button onclick="swipe('like')">Like</button>
        <button onclick="swipe('dislike')">Dislike</button>
      </div>
    </div>
  </div>
</template>
<script>
// import { CredentialManager } from "../../globals";
const dognames = [
  "Ace",
  "Addie",
  "Adele",
  "Annie",
  "Apollo",
  "Aspen",
  "Bailey",
  "Beamer",
  "Bear",
  "Belle",
  "Bella",
  "Birdie",
  "Bling",
  "Blue",
  "Bogey",
  "Body",
  "Boomer",
  "Bowen",
  "Breeze",
  "Brie",
  "Brody",
  "Buzz",
  "Callaway",
  "Casey",
  "Cash",
  "Catcher",
  "Chaos",
  "Chase",
  "Chili",
  "CiCi",
  "Cody",
  "Cole",
  "Comet",
  "Cooper",
  "Cruise",
  "Crush",
  "Daisy",
  "Dare",
  "Dash",
  "Dawson",
  "Dazzle",
  "Demi",
  "Denali",
  "Diva",
  "Dixie",
  "Echo",
  "Eli",
  "Ellie",
  "Emmy",
  "Evie",
  "Finn",
  "Flash",
  "Frankie",
  "Frisco",
  "Gator",
  "Georgia",
  "Ginger",
  "Grace",
  "Haley",
  "Happy",
  "Harley",
  "Hattie",
  "Hope",
  "Hunter",
  "Indy",
  "Jack",
  "Jamie",
  "Jax",
  "Jazz",
  "Jenna",
  "Jersey",
  "Jet",
  "Jinx",
  "JoJo",
  "Josie",
  "Joy",
  "Juno",
  "Karma",
  "Kenzi",
  "Kiva",
  "Kona",
  "Kyra",
  "Lacie",
  "Lark",
  "Laser",
  "Latte",
  "Levi",
  "Lilly",
  "Linx",
  "Logan",
  "Lucy",
  "Luke",
  "Max",
  "Mia",
  "Mojo",
  "Molly",
  "Murphy",
  "Nike",
  "Nova",
  "Obie",
  "Ollie",
  "Peach",
  "Penny",
  "Pepper",
  "Piper",
  "Prada",
  "Ranger",
  "Raven",
  "Reggie",
  "Remington",
  "Riley",
  "Ripley",
  "Riot",
  "River",
  "Roxie",
  "Ruby",
  "Rumor",
  "Salsa",
  "Scarlett",
  "Scout",
  "Shadow",
  "Shiloh",
  "Skye",
  "Slater",
  "Sophie",
  "Spark",
  "Spencer",
  "Spirit",
  "Spring",
  "Star",
  "Storm",
  "Strider",
  "Summer",
  "Tally",
  "Tango",
  "Tank",
  "Taylor",
  "Tease",
  "Tessa",
  "Token",
  "Tori",
  "Tripp",
  "Trooper",
  "Tucker",
  "Tux",
  "Whip",
  "Wyatt",
  "Zeke",
  "Zip",
  
];

export default {
  data() {
    return {
      doglinks: ["https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog1.png?alt=media&token=5c36858c-dad8-4c05-a6ce-6a9b41322316", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog2.png?alt=media&token=da5c9a22-0b3a-471a-9d51-2247879a3d17", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog3.png?alt=media&token=731d7473-4372-402b-b4f2-86f39bd6d4b2", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog4.png?alt=media&token=68caf9d3-6b8c-4029-ad97-c4c23ced5adf", "https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/tsapics%2FDog5.png?alt=media&token=58833b94-8663-489f-9fc7-11b5aa4f00b7"],
    };
  },
  methods: {
    getAge() {
      return Math.floor(Math.random() * 13) + 1;
    },
    getName() {
      return dognames[Math.floor(Math.random() * dognames.length)];
    },
    // async submit() {
    //   CredentialManager.AddCheck(this.form.username, this.form.password, undefined, (valid) => {
    //     this.$router.push("/chat");
    //   });
    // },
  },
};
</script>
