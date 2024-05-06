<template>
  <h1 style="font-family: Black Ops One; font-size: 50px; text-align: center">Snout Social</h1>
  <h1 style="font-family: Black Ops One; font-size: 50px; text-align: center">Snout Social</h1>
  <div class="Overview" style="font-family: Comic Sans MS; font-size: 30px">Connect Fido with furry friends! Our app pairs your pup with compatible companions and locates nearby animal-friendly parks for playful adventures. Because every dog deserves a buddy to wag tails with!</div>

  <div class="FAQs">
    <h1>FAQs</h1>

    <div class="Dropdown">
      <button :onClick="Button1" class="dropbtn">
        1) How do you use the app?
        <nobr style="color: #e7bd1d">(Click Us)</nobr>
      </button>
      <div id="Description_1" class="Dropdown_Contents-alt">
        <ul>
          <li>1 Download the app</li>
          <li>2 Create an account</li>
          <li>3 Add your dog's information</li>
          <li>4 Start swiping to find your dog's new best friend!</li>
        </ul>
      </div>
    </div>

    <div class="Dropdown">
      <button :onClick="Button2" class="dropbtn">2) What's the program's purpose?</button>
      <div id="Description_2" class="Dropdown_Contents-alt">
        <ul>
          <li class="smallerfont">• Matching dogs with compatible playmates.</li>
          <li class="smallerfont">• Locating nearby animal-friendly parks.</li>
          <li class="smallerfont">• Providing services for hiring dog walkers or finding dog sitters.</li>
          <li class="smallerfont">• Offering a platform for dog owners to socialize and arrange meetups for their pets.</li>
          <p>Overall, the app aims to enhance the social and recreational experiences of dogs and their owners while also addressing practical needs such as pet care services.</p>
        </ul>
      </div>
    </div>

    <div class="Dropdown">
      <button :onClick="Button3" class="dropbtn">3) How much does our app cost</button>
      <div id="Description_3" class="Dropdown_Contents">
        <p>
          <b>Absolutely free!</b>
          Enjoy our app's full functionality without any charges. Plus, take advantage of our convenient paid services to find trusted dog walkers or sitters, ensuring your furry friend gets the care they deserve.
        </p>
      </div>
    </div>

    <div class="Dropdown">
      <button :onClick="Button4" class="dropbtn">4) How it works</button>
      <div id="Description_4" class="Dropdown_Contents-alt">
        <ul>
          <li>
            <h>• Swipe Left or Right</h>
            <p class="ml5 smallerfont">
              - Swipe
              <b>left</b>
              to dislike a profile
            </p>
            <p class="ml5 smallerfont">
              - Swipe
              <b>right</b>
              to like a profile
            </p>
          </li>
          <li>
            <h>• Tap to open Profile</h>
            <p class="ml5 smallerfont">- If you're interested in knowing more about a profile, tap on the right side of the profile card.</p>
            <p class="ml5 smallerfont">- This action will open up the detailed profile where you can view more information about the user and their dog.</p>
          </li>
          <li>
            <h>• Navigation</h>
            <p class="ml5 smallerfont">- Use the navigation bar or menu options to explore additional features such as searching for specific dog breeds, adjusting your preferences, or accessing messaging features.</p>
          </li>
          <li>
            <h>• Matching</h>
            <p class="ml5 smallerfont">- If both you and another user swipe right on each other's profiles, it's a match! You can then start messaging each other and plan a playdate for your dogs.</p>
          </li>
          <li>
            <h>• Doggy Dates</h>
            <p class="ml5 smallerfont">- Once you've connected with other dog owners, you can arrange meetups at local dog parks or other pet-friendly locations through the app's messaging or event planning features.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");

.FAQs {
  margin: auto;
  padding-left: auto;
  padding-right: auto;
  background-color: white;
  border: 5px solid black;
  width: 70%;
  border-radius: 30px;
  margin-top: 5%;
}

.FAQs h1 {
  margin-top: auto;
  font-family: Black Ops One;
  font-size: 40px;
  text-align: center;
  padding-top: 25px;
}

.FAQs .Dropdown .dropbtn {
  background-color: transparent;
  text-align: right;
  font-size: 30px;
  font-family: Black Ops One;
  border: none;
  margin-bottom: 3%;
  margin-left: auto;
  margin-right: auto;
  color: black;
}

.Dropdown {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: block;
  bottom: 20px;
  width: inherit;
}

.FAQs .dropbtn:hover {
  color: darkgray;
  cursor: pointer;
  transition: 0.3s ease;
}

.FAQs .Dropdown_Contents {
  display: none;
  position: relative;
  text-align: center;
  font-family: Black Ops One;
  font-size: 25px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  bottom: 10px;
}
.FAQs .Dropdown_Contents-alt {
  display: none;
  position: relative;
  font-family: Black Ops One;
  font-size: 25px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 2%;
  bottom: 10px;
}
ul li p.ml5 {
  margin-left: 5%;
}
ul li p.ml10 {
  margin-left: 10%;
}
.smallerfont {
  font-size: 15px;
}

.Dropdown .show {
  display: block;
}
</style>
<script>
export default {
  methods: {
    Button1() {
      document.getElementById("Description_1").classList.toggle("show");
    },
    Button2() {
      document.getElementById("Description_2").classList.toggle("show");
    },
    Button3() {
      document.getElementById("Description_3").classList.toggle("show");
    },
    Button4() {
      document.getElementById("Description_4").classList.toggle("show");
    },
  },
};
</script>
