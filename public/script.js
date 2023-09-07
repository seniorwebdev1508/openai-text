const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to append a message to the chat messages container
function appendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
}

// Function to send a message to the server
async function sendMessageToServer(message) {
  const response = await fetch('/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  console.log(data)
  return data.message;
}