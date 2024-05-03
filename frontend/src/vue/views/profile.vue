<template>
  <div class="container">
    <h2 class="mainst">PROFILE</h2>

    <div class="profile-section">
      <div class="user-info" style="display: flex">
        <img src="../assets/jaxon/profilepic.png" alt="User Picture" class="profile-pic" style="border-radius: 1000px; width: 256px; height: 256px" />
        <div class="dog-info" style="top: 45px; position: relative; margin-left: 20%">
          <p>Name: Jaxon</p>
          <p>Age: 3 years</p>
          <p>Breed: Golden Retriever</p>
          <p>Gender: Male</p>
        </div>
      </div>

      <div class="user-posts">
        <h3>User Posts</h3>
        <post id="posts" :for="post in posts" :postContent="post.postContent" :postImage="post.postImage"></post>
        <div class="post-container">
          <img src="../assets/jaxon/toy.png" alt="Post 1" />
          <p>I got a new chew toy! Check it out!</p>
        </div>
        <post :postContent="'lmao'" :postImage="'http://localhost:5173/src/vue/assets/jaxon/profilepic.png'"></post>
      </div>
    </div>
  </div>
</template>
<script>

import post from "./components/post.vue";
import {ref} from "vue";

const posts = ref([])
export default {
  props: {
    userId: String,
  },
  components: {
    post,
  },
};
</script>
<style>
.user-posts img {
  max-width: 480px;
  max-height: 480px;
}
</style>
