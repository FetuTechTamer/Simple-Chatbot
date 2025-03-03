# Simple Chatbot

## Overview

The Simple Chatbot is a web application that allows users to interact with a bot via a chat interface. Built using Flask for the backend and vanilla JavaScript for the frontend, this project serves as a basic example of how to create a conversational agent. The bot can respond to simple greetings, questions, and tell jokes, providing an engaging user experience.

## Features

- **Interactive Chat Interface**: Users can send messages and receive responses in real-time.
- **Basic Response Logic**: The bot can handle a variety of user inputs, including greetings, farewells, and requests for jokes.
- **User and Bot Message Display**: Messages are styled differently for users and the bot for better readability.
- **Simple Setup**: Easily run the application locally with minimal configuration.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **Hosting**: Localhost

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.x
- pip (Python package installer)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FetuTechTamer/simple-chatbot.git
   cd simple-chatbot
Install Flask: Create a virtual environment (optional but recommended):
bash


python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Then install Flask:
bash


pip install Flask
Run the Flask application: Run the app with:
bash


python app.py
The server should start at http://127.0.0.1:5000.
Open the chat interface: Open index.html in your web browser to interact with the chatbot.
Usage
Type a message in the input field and press "Send" or hit Enter.
The bot will respond based on predefined responses.
You can ask the bot simple questions like:
"Hi"
"How are you?"
"Can you tell me a joke?"
"Bye"
