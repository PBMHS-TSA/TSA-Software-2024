<template>
  <div class="container">
    <h2>Chat with Dog Name 1</h2>
    <div id="chat-messages">
      <div class="message sent">
        <p>Hello! How are you?</p>
      </div>
      <div class="message received">
        <p>Hi! I'm doing great, thanks!</p>
      </div>
    </div>
    <textarea id="message-input" placeholder="Type your message..."></textarea>
    <button onclick="sendMessage()">Send</button>
  </div>  
</template>
