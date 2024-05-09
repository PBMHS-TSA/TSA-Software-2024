function getRandomResponse() {
  const responses = ["Hello!", "Good! How about you?", "Thats Good! When do you want to meet up?"];

  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

function sendMessage() {
  const messageInput = document.getElementById("message-input");
  const chatMessages = document.getElementById("chat-messages");

  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", "sent");
    messageElement.innerHTML = `<p>${messageText}</p>`;
    chatMessages.appendChild(messageElement);

    messageInput.value = "";

    setTimeout(() => {
      const receivedMessageElement = document.createElement("div");
      receivedMessageElement.classList.add("message", "received");
      receivedMessageElement.innerHTML = `<p>${getRandomResponse()}</p>`;
      chatMessages.appendChild(receivedMessageElement);
    }, 1000);
  }
}
