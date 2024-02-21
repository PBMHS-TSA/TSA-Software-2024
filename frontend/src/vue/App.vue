<template>
  <nav style="margin-bottom: 1%">
    <div class="nav-wrapper indigo">
      <img style="height: auto; width: auto; max-height: -webkit-fill-available" src="https://tsaweb.org/images/default-source/competitions-programs/program-logos/tsa-logoff2c085a4556450589a0a1a426c8e98f.png?sfvrsn=63b79446_0" class="center brand-logo" />
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/chat">Profile</router-link></li>
        <li><router-link to="/chat">Dashboard</router-link></li>

        <li><router-link to="/chats">Messages</router-link></li>
        <li><a :onclick="logout">Logout</a></li>
      </ul>
    </div>
  </nav>
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
    logout() {window.location.href= `http://localhost/socket/logout/${socket.id}`},
  },
};
</script>
