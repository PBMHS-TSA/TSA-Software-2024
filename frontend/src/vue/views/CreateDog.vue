<template>
  <div class="container">
    <h2 class="Mainhead">CREATE DOG PROFILE</h2>
    <label for="dog-image" class="profile-pic-container">
      <input type="file" id="dog-image" name="dog-image" accept="image/*" class="add-image-btn" style="display: none" />
      <img src="./../assets/plus.png" alt="User Picture" class="profile-pic" style="width: 225px; height: 200px; cursor: pointer" />
    </label>

    <div class="spacepar profile-pic-container">
      <label for="dog-image" class="add-image-label">Add Profile Picture</label>
    </div>

    <form action="submit_profile.php" method="post" enctype="multipart/form-data" class="card" style="width:100%">
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
          <option value="affenpinscher">Affenpinscher</option>
<option value="afghanhound">Afghan Hound</option>
<option value="airedaleterrier">Airedale Terrier</option>
<option value="akita">Akita</option>
<option value="alaskanmalamute">Alaskan Malamute</option>
<option value="americanbulldog">American Bulldog</option>
<option value="americaneskimo">American Eskimo Dog</option>
<option value="americanfoxhound">American Foxhound</option>
<option value="americanpitbullterrier">American Pit Bull Terrier</option>
<option value="americanstaffordshireterrier">American Staffordshire Terrier</option>
<option value="anatolianshepherd">Anatolian Shepherd Dog</option>
<option value="australiancattledog">Australian Cattle Dog</option>
<option value="australianterrier">Australian Terrier</option>
<option value="basenji">Basenji</option>
<option value="basset_hound">Basset Hound</option>
<option value="beagle">Beagle</option>
<option value="beauceron">Beauceron</option>
<option value="bedlington_terrier">Bedlington Terrier</option>
<option value="belgianmalinois">Belgian Malinois</option>
<option value="belgiansheepdog">Belgian Sheepdog</option>
<option value="bernese_mountain_dog">Bernese Mountain Dog</option>
<option value="bichonfrise">Bichon Frise</option>
<option value="blackandtancoonhound">Black and Tan Coonhound</option>
<option value="blackrussianterrier">Black Russian Terrier</option>
<option value="bloodhound">Bloodhound</option>
<option value="bluetickcoonhound">Bluetick Coonhound</option>
<option value="bolognesedog">Bolognese</option>
<option value="borzoi">Borzoi</option>
<option value="bostonterrier">Boston Terrier</option>
<option value="bouvierdesflandres">Bouvier des Flandres</option>
<option value="boxer">Boxer</option>
<option value="boykin_spaniel">Boykin Spaniel</option>
<option value="briard">Briard</option>
<option value="brittany">Brittany</option>
<option value="brusselsgriffon">Brussels Griffon</option>
<option value="bullmastiff">Bullmastiff</option>
<option value="cairn_terrier">Cairn Terrier</option>
<option value="canaan_dog">Canaan Dog</option>
<option value="cane_corso">Cane Corso</option>
<option value="cardiganwelshcorgi">Cardigan Welsh Corgi</option>
<option value="cavalier_king_charles_spaniel">Cavalier King Charles Spaniel</option>
<option value="chesapeake_bay_retriever">Chesapeake Bay Retriever</option>
<option value="chihuahua">Chihuahua</option>
<option value="chinesecrested">Chinese Crested</option>
<option value="chowchow">Chow Chow</option>
<option value="clumberspaniel">Clumber Spaniel</option>
<option value="cockapoo">Cockapoo</option>
<option value="bordercollie">Border Collie</option>
<option value="borderterrier">Border Terrier</option>
<option value="borzoi">Borzoi</option>
<option value="bostonterrier">Boston Terrier</option>
<option value="bouviersdesflandres">Bouvier des Flandres</option>
<option value="boxer">Boxer</option>
<option value="boykinspaniel">Boykin Spaniel</option>
<option value="briard">Briard</option>
<option value="brittany">Brittany</option>
<option value="brusselsgriffon">Brussels Griffon</option>
<option value="bullmastiff">Bullmastiff</option>
<option value="cairnterrier">Cairn Terrier</option>
<option value="canaandog">Canaan Dog</option>
<option value="canecorso">Cane Corso</option>
<option value="cardiganwelshcorgi">Cardigan Welsh Corgi</option>
<option value="cavalierkingcharlesspaniel">Cavalier King Charles Spaniel</option>
<option value="chesapeakebayretriever">Chesapeake Bay Retriever</option>
<option value="chihuahua">Chihuahua</option>
<option value="chinesecrested">Chinese Crested</option>
<option value="chowchow">Chow Chow</option>
<option value="clumberspaniel">Clumber Spaniel</option>
<option value="cockapoo">Cockapoo</option>
<option value="collie">Collie</option>
<option value="corgi">Corgi</option>
<option value="cotondetulear">Coton de Tulear</option>
<option value="dachshund">Dachshund</option>
<option value="dalmatian">Dalmatian</option>
<option value="dane">Dane</option>
<option value="deerhound">Deerhound</option>
<option value="dhole">Dhole</option>
<option value="doberman">Doberman</option>
<option value="elkhound">Elkhound</option>
<option value="entlebucher">Entlebucher</option>
<option value="eskimo">Eskimo</option>
<option value="finnish_spitz">Finnish Spitz</option>
<option value="frenchbulldog">French Bulldog</option>
<option value="germanshepherd">German Shepherd</option>
<option value="germanshorthairedpointer">German Shorthaired Pointer</option>
<option value="germanspitz">German Spitz</option>
<option value="germanwirehairedpointer">German Wirehaired Pointer</option>
<option value="giant_schnauzer">Giant Schnauzer</option>
<option value="goldenretriever">Golden Retriever</option>
<option value="goldendoodle">Goldendoodle</option>
<option value="gordonsetter">Gordon Setter</option>
<option value="greatdane">Great Dane</option>
<option value="greatpyrenees">Great Pyrenees</option>
<option value="greater_swiss_mountain_dog">Greater Swiss Mountain Dog</option>
<option value="greyhound">Greyhound</option>
<option value="havanese">Havanese</option>
<option value="hound">Hound</option>
<option value="husky">Husky</option>
<option value="ibizanhound">Ibizan Hound</option>
<option value="irishsetter">Irish Setter</option>
<option value="irishwolfhound">Irish Wolfhound</option>
<option value="italiangreyhound">Italian Greyhound</option>
<option value="jackrussellterrier">Jack Russell Terrier</option>
<option value="japanesechin">Japanese Chin</option>
<option value="japanesespaniel">Japanese Spaniel</option>
<option value="jindo">Jindo</option>
<option value="kangal">Kangal</option>
<option value="keeshond">Keeshond</option>
<option value="kelpie">Kelpie</option>
<option value="kerryblueterrier">Kerry Blue Terrier</option>
<option value="kingcharlesspaniel">King Charles Spaniel</option>
<option value="klee_kai">Klee Kai</option>
<option value="komondor">Komondor</option>
<option value="kuvasz">Kuvasz</option>
<option value="labrador">Labrador Retriever</option>
<option value="lagotto_romagnolo">Lagotto Romagnolo</option>
<option value="lakeland_terrier">Lakeland Terrier</option>
<option value="lancashireheeler">Lancashire Heeler</option>
<option value="leonberger">Leonberger</option>
<option value="lhasaapso">Lhasa Apso</option>
<option value="malamute">Malamute</option>
<option value="malinois">Malinois</option>
<option value="maltese">Maltese</option>
<option value="mastiff">Mastiff</option>
<option value="miniatureschnauzer">Miniature Schnauzer</option>
<option value="mountaincur">Mountain Cur</option>
<option value="newfoundland">Newfoundland</option>
<option value="norfolkterrier">Norfolk Terrier</option>
<option value="norwegianelkhound">Norwegian Elkhound</option>
<option value="norwichterrier">Norwich Terrier</option>
<option value="nova_scotia_duck_tolling_retriever">Nova Scotia Duck Tolling Retriever</option>
<option value="oldenglishsheepdog">Old English Sheepdog</option>
<option value="otterhound">Otterhound</option>
<option value="papillon">Papillon</option>
<option value="pekingese">Pekingese</option>
<option value="pembroke_welsh_corgi">Pembroke Welsh Corgi</option>
<option value="pharaohhound">Pharaoh Hound</option>
<option value="pitbull">Pit Bull</option>
<option value="pointer">Pointer</option>
<option value="pomeranian">Pomeranian</option>
<option value="poodle">Poodle</option>
<option value="pug">Pug</option>
<option value="puggle">Puggle</option>
<option value="pyrenees">Pyrenees</option>
<option value="redbone">Redbone</option>
<option value="retriever">Retriever</option>
<option value="rhodesianridgeback">Rhodesian Ridgeback</option>
<option value="rottweiler">Rottweiler</option>
<option value="saluki">Saluki</option>
<option value="samoyed">Samoyed</option>
<option value="schipperke">Schipperke</option>
<option value="schnauzer">Schnauzer</option>
<option value="scottishterrier">Scottish Terrier</option>
<option value="setter">Setter</option>
<option value="sharpei">Shar Pei</option>
<option value="sheepdog">Sheepdog</option>
<option value="shiba_inu">Shiba Inu</option>
<option value="shihtzu">Shih Tzu</option>
<option value="silkyterrier">Silky Terrier</option>
<option value="sloughi">Sloughi</option>
<option value="smallmunsterlander_pointer">Small Munsterlander Pointer</option>
<option value="spaniel">Spaniel</option>
<option value="spitz">Spitz</option>
<option value="springer">Springer</option>
<option value="stbernard">St. Bernard</option>
<option value="staffordshirebullterrier">Staffordshire Bull Terrier</option>
<option value="standard_schnauzer">Standard Schnauzer</option>
<option value="sussex_spaniel">Sussex Spaniel</option>
<option value="swissy">Swissy</option>
<option value="tibetan_mastiff">Tibetan Mastiff</option>
<option value="tibetan_terrier">Tibetan Terrier</option>
<option value="toller">Toller</option>
<option value="tosa">Tosa</option>
<option value="toy_terrier">Toy Terrier</option>
<option value="tundrabulldog">Tundra Bulldog</option>
<option value="vizsla">Vizsla</option>
<option value="walker_hound">Walker Hound</option>
<option value="weimaraner">Weimaraner</option>
<option value="welsh_springer_spaniel">Welsh Springer Spaniel</option>
<option value="westhighland_white_terrier">West Highland White Terrier</option>
<option value="whippet">Whippet</option>
<option value="yorkshireterrier">Yorkshire Terrier</option>        </select>
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
          <div class="characteristic" :onclick="toggletrait">Friendly</div>
          <div class="characteristic" :onclick="toggletrait">Energetic</div>
          <div class="characteristic" :onclick="toggletrait">Lone Wolf</div>
          <div class="characteristic" :onclick="toggletrait">Toy Shredder</div>
          <div class="characteristic" :onclick="toggletrait">Couch Potato</div>
          <div class="characteristic" :onclick="toggletrait">Loyal</div>
          <div class="characteristic" :onclick="toggletrait">Adventurous</div>
          <div class="characteristic" :onclick="toggletrait">Playful</div>
          <div class="characteristic" :onclick="toggletrait">Curious</div>
          <div class="characteristic" :onclick="toggletrait">Intelligent</div>
          <div class="characteristic" :onclick="toggletrait">Lazy</div>
          <div class="characteristic" :onclick="toggletrait">Stubborn</div>
          <div class="characteristic" :onclick="toggletrait">Brave</div>
          <div class="characteristic" :onclick="toggletrait">Calm</div>
          <div class="characteristic" :onclick="toggletrait">Affectionate</div>
          <div class="characteristic" :onclick="toggletrait">Sociable</div>
          <div class="characteristic" :onclick="toggletrait">Reserved</div>
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
import {ref} from "vue"
var breeds = ref([])
breeds.value=dogbreeds
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
      dogbeeds: dogbreeds,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    toggletrait(element) {
    console.log(element);
      element.target.classList.toggle("selected");
      this.updateCharacteristicsMessage();
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
