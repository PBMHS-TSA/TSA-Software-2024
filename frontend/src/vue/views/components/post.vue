<template>
  <div class="post-container">
    <img :src="postImage" :alt="postContent" />
    <p>{{ postContent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    postContent: String,
    postImage: String,
  },
};
</script>
