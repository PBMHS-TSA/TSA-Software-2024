<template>
  <div class="container">
    <h2 class="Mainhead">CREATE DOG PROFILE</h2>
    <label for="dog-image" class="profile-pic-container">
      <input type="file" id="dog-image" name="dog-image" accept="image/*" class="add-image-btn" style="display: none" />
      <img src="./../assets/Plus.png" alt="User Picture" class="profile-pic" style="width: 225px; height: 200px; cursor: pointer" />
    </label>

    <div class="spacepar profile-pic-container">
      <label for="dog-image" class="add-image-label">Add Profile Picture</label>
    </div>

    <form action="submit_profile.php" method="post" enctype="multipart/form-data" class="card">
      <div class="form-group">
        <label for="dog-name">Dog Name:</label>
        <input type="text" id="dog-name" name="dog-name" required />
      </div>

      <div class="form-group">
        <label>Gender:</label>
        <label for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female" />
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="0" required />
      </div>

      <div class="form-group">
        <label for="breed">Breed:</label>
        <select id="breed" name="breed" class="breed-dropdown" style="width: 100%">
          <option :for="dogbreed in dogbreeds" :value="dogbreed">{{ dogbreed }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="weight">Weight (lbs):</label>
        <input type="number" id="weight" name="weight" min="0" step="0.1" required />
      </div>

      <div class="form-group">
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" required />
      </div>

      <div class="form-group characteristics-container">
        <label for="characteristics">Select up to 7 Characteristics:</label>
        <div class="characteristics">
          <div class="characteristic" onclick="toggleCharacteristic(this)">Friendly</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Energetic</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Lone Wolf</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Toy Shredder</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Couch Potato</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Loyal</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Curious</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Adventurous</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Playful</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Intelligent</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Lazy</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Stubborn</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Brave</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Calm</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Affectionate</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Sociable</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Reserved</div>
          <div class="characteristic" onclick="toggleCharacteristic(this)">Eager to Please</div>
        </div>
        <div class="characteristics-message" id="characteristicsMessage"></div>
      </div>

      <div class="form-group"></div>
    </form>
  </div>

  <div class="form-group">
    <button type="submit" class="post-btn">Create Profile</button>
  </div>

  <button class="spacepar back-btn" href="Createaccount.html">BACK</button>
</template>
<script>
import { dogbreeds } from "./helper.js";
$(document).ready(function () {
  $("#breed").select2({
    tags: true,
    tokenSeparators: [",", " "],
  });
});
$(document).ready(function () {
  $("#breed").select2({
    tags: true,
    tokenSeparators: [",", " "],
  });
});
export default {
  data() {
    return {
      dogbreeds: dogbreeds,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    toggleCharacteristic(element) {
      element.classList.toggle("selected");
      updateCharacteristicsMessage();
    },

    updateCharacteristicsMessage() {
      var selectedCharacteristics = document.querySelectorAll(".characteristic.selected");
      var message = document.getElementById("characteristicsMessage");
      if (selectedCharacteristics.length > 7) {
        message.textContent = "Select up to 7 Characteristics only!";
      } else {
        message.textContent = "";
      }
    },
  },
};
</script>
