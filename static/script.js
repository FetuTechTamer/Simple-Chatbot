document.getElementById("send-btn").onclick = function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;  // Ignore empty messages

    appendMessage("You: " + userInput, 'user');  // Display user message
    document.getElementById("user-input").value = "";  // Clear input field

    fetch("/chat", {  // Send POST request to the Flask server
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),  // Send message as JSON
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        appendBotHeader(); // Add bot header with image and name
        appendMessage(data.response, 'bot');  // Display bot response
    })
    .catch(error => {
        console.error('Error:', error);  // Log any errors
    });
};

function appendMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.className = sender;  // Set class for styling
    messageElement.textContent = message;  // Set message text
    chatBox.appendChild(messageElement);  // Add message to chat box
    chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom
}

function appendBotHeader() {
    const chatBox = document.getElementById("chat-box");

    // Create a container for the bot header
    const botHeaderContainer = document.createElement("div");
    botHeaderContainer.className = 'bot-header';

    // Create an image element for the bot's icon
    const botImage = document.createElement("img");
    botImage.src = "/static/favicon.png";  // Replace with your bot image URL
    botImage.alt = "Chat Bot Icon";

    // Create a paragraph for the bot's name
    const botName = document.createElement("p");
    botName.textContent = "Chat-Bot";  // Change to your bot's name
    botName.className = 'bot-name'; // Optional: for additional styling

    // Append image and name to the header container
    botHeaderContainer.appendChild(botImage);
    botHeaderContainer.appendChild(botName);

    // Append the bot header to the chat box
    chatBox.appendChild(botHeaderContainer);
}