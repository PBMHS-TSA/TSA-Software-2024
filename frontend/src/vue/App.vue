<template>
  <nav style="position: fixed ; margin-bottom: 1%; z-index: 100; top: 0px">
    <div class="nav-wrapper indigo">
      <img style="height: auto; width: auto; max-height: -webkit-fill-available" src="https://firebasestorage.googleapis.com/v0/b/twetzel-a07f2.appspot.com/o/logo.png?alt=media&token=03163384-242a-4530-9d14-3409521b721a" class="center brand-logo" />
      <ul id="nav-mobile" style="display:none;" class="left hide-on-med-and-down">
<li><router-link to="/mobileview">Mobile View</router-link></li>

      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/mf">Dashboard</router-link></li>

        <li><router-link to="/chat/1">Messages</router-link></li>
        <li><router-link to="/map">Map</router-link></li>

        <li><a :onclick="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
  <div style="margin-top: 5%">
    <router-view /> 
  </div>
</template>
<script>
import { socket, CredentialManager } from "../globals";

export default {
  async mounted() {},
  methods: {
    logout() {
      window.location.href = `http://localhost/socket/logout/${socket.id}`;
    },
  },
};
</script>
