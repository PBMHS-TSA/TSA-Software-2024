<template>
    <div id="nav">
        <router-link to="/">Chat</router-link> |
        <router-link to="/mf">Selection</router-link>| 
        <router-link to="/chat">Chat</router-link>| 
      <router-link to="/sessionid">Session</router-link>
    </div>
    <router-view />
  </template>
  <script>
  import { socket, CredentialManager } from "../globals";
  
  export default {
    async mounted() {
      // if (await CredentialManager.Validate()) {
      //   this.$router.push("/chat")
      // } else {
      //   this.$router.push("/login")
      // }
    },
    methods: {
      tomato() {},
    },
  };
  </script>