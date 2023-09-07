// <!DOCTYPE html>
// <html>
// <head>
//   <title>Chatbot Website</title>
//   <style>
//     /* CSS styling for the chatbot interface */
//     #chatContainer {
//       width: 300px;
//       height: 400px;
//       border: 1px solid #ccc;
//       overflow-y: scroll;
//       padding: 10px;
//     }
//     #chatContainer .message {
//       margin-bottom: 10px;
//     }
//     #chatContainer .sent {
//       text-align: right;
//     }
//   </style>
// </head>
// <body>
//   <h1>Chatbot Website</h1>
  
//   <div id="chatContainer">
//     <!-- Chat messages will be appended here dynamically -->
//   </div>

//   <div>
//     <input type="text" id="chatInput" placeholder="Type your message">
//     <button id="sendButton">Send</button>
//   </div>

//   <script>
//     // JavaScript code for chat functionality

//     // DOM elements
//     const chatContainer = document.getElementById('chatContainer');
//     const chatInput = document.getElementById('chatInput');
//     const sendButton = document.getElementById('sendButton');

//     // Function to append a message to the chat messages container
//     function appendMessage(message, sender) {
//       const messageElement = document.createElement('div');
//       messageElement.classList.add('message');
//       messageElement.classList.add(sender);
//       messageElement.textContent = message;
//       chatContainer.appendChild(messageElement);
//       // Scroll to the bottom of the chat container
//       chatContainer.scrollTop = chatContainer.scrollHeight;
//     }

//     // Function to send a message to the server
//     async function sendMessageToServer(message) {
//       // Modify the URL and payload as needed
//       const response = await fetch('https://bizzman-website-chatbot.lakshithachandr.repl.co/api/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ message, senderId: 'user123' }) // Provide the sender ID or any other identifier
//       });

//       const data = await response.json();
//       return data;
//     }

//     // Send button click event listener
//     sendButton.addEventListener('click', async () => {
//       const message = chatInput.value.trim();
//       if (message !== '') {
//         appendMessage(message, 'sent');

//         // Send the message to the server and get the response
//         const { message: responseMessage } = await sendMessageToServer(message);
//         appendMessage(responseMessage, 'received');

//         // Clear the input field
//         chatInput.value = '';
//       }
//     });

//     // Handle Enter key press event
//     chatInput.addEventListener('keydown', async (event) => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         sendButton.click();
//       }
//     });
//   </script>
// </body>
// </html>