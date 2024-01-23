<template>
    <div id="app" @click.right.prevent="tomato">
      <!-- <div class="nav" style="background-color:#2f3241;">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Logo</a>
            <ul id="nav-mobile" class="left">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/chat">Chat</router-link></li>
            </ul> 
            <ul id="nav-mobile" class="right">
              <li><router-link to="/signup">Signup</router-link></li>
              <li><router-link to="/forgot">Forgot</router-link></li>
            </ul>
          </div>
        </nav>
      </div> -->
      <router-view />
    </div>
  </template>
  
  <script>
  //import { socket, CredentialManager } from "../globals";
  
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