<template>
  <Map id="map-selector" class="disabled"></Map>
  <div class="container" style="align-items: unset">
    <h2>Chat with Marley</h2>
    <div id="chat-messages">
      <div class="message received" v-if="id != 1">
        <p>Hello! How are you?</p>
      </div>
      <div class="message sent" v-if="id != 1">
        <p>Hi! I'm doing great, thanks!</p>
      </div>
      <div class="message received" v-if="id != 1">Thats Good! Where do you want to meet up?</div>
    </div>
    <div class="row" style="margin-top: 5%">
      <div class="input-field col s8">
        <input placeholder="" id="message-input" type="text" class="validate" />
        <label for="message-input">Type your message...</label>
      </div>
      <div class="input-field col s2">
        <a class="waves-effect waves-light btn" :onclick="sendMessage"><i class="material-icons">send</i></a>
      </div>
      <div class="input-field col s2">
        <a class="waves-effect waves-light btn location-selector" :onclick="createMap"><i class="material-icons">public</i></a>
      </div>
    </div>
  </div>
</template>
<style>
#map-selector.disabled {
  display: none !important;
}
.map-selector {
  position: absolute;
}
.location-selector {
}
.message.sent {
  margin-left: 50%;
}
.message.received {
  margin-right: 50%;
}
.message {
  min-width: 100px;
  min-height: 100px;
  max-width: 200px;
  max-height: 200px;
}
</style>
<script>
import Map from "./components/Map.vue";
export default {
  methods: {
    createMap() {
      document.getElementById("map-selector").classList.toggle("disabled");
    },
    sendMessage() {
      if (!window.index) {
        window.index = 0;
      }
      const messageInput = document.getElementById("message-input");
      const chatMessages = document.getElementById("chat-messages");

      const messageText = messageInput.value.trim();

      if (messageText !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = `<p>${messageText}</p>`;
        chatMessages.appendChild(messageElement);

        messageInput.value = "";

        // setTimeout(() => {
        //   const receivedMessageElement = document.createElement("div");
        //   receivedMessageElement.classList.add("message", "received");
        //   receivedMessageElement.innerHTML = `<p>${getRandomResponse(window.index++)}</p>`;
        //   chatMessages.appendChild(receivedMessageElement);
        // }, 1000);
      }
    },
  },
  components: {
    Map,
  },
  props: {
    id: Number
  }
};
</script>
