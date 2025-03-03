from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Sample responses for the bot
responses = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hello! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing well! How about you?",
    "bye": "Goodbye! Have a great day!",
    "can you tell me a joke?": "Sure! Why did the scarecrow win an award?",
    "why?": "Because he was outstanding in his field!",
}

@app.route('/')
def home():
    return render_template('index.html')  # Serve the HTML file

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()  # Get JSON data from the request
    user_message = data.get('message', '').lower()  # Extract and lowercase the message
    
    # Simple response logic
    response = responses.get(user_message, "Sorry, I don't understand that.")
    
    return jsonify({"response": response})  # Return the response as JSON

if __name__ == '__main__':
    app.run(debug=True)  # Run the app in debug mode