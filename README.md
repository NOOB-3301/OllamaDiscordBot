# Discord Bot with Ollama API

This project is a Discord bot that integrates with an Express server to generate AI-powered responses using the Ollama API. Users can send messages with a prefix (`!`) in a Discord server, and the bot will generate a response using the Ollama model.

## Features
- AI-generated responses using Ollama API
- Express backend for handling AI requests
- Discord bot using `discord.js`
- Configurable command prefix

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Discord Developer Account](https://discord.com/developers/applications)
- ollama installed in your system . Head over to ollama website to install ollama [link](https://ollama.com/)

### First Step:
start ollama using `ollama serve`

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/discord-ollama-bot.git
cd discord-ollama-bot
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```plaintext
DISCORD_TOKEN=your_discord_bot_token
PREFIX=!
```
Replace `your_discord_bot_token` with your actual bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

### 4. Start the Express server
Run the following command to start the backend:
```sh
node index.js
```

### 5. Start the Discord bot
Run:
```sh
node bot.js
```

## Usage
- Type `!your-message` in a Discord server where the bot is added.
- The bot will send an AI-generated response based on the message.

## Future Updates
Adding vector db to increase llm memory
```
[Bot] <-> [Express App] <-> [Vector Search] <-> [Qdrant]
                                   |
                                [Ollama]
```

## Deployment
- Deploy the Express backend to services like **Vercel**, **Railway**, or a **VPS**.
- Host the Discord bot on **Replit**, **Railway**, or a **VPS** for 24/7 uptime.

## Future Improvements
- Add **slash commands** support.
- Improve response handling and error messages.
- Deploy backend to a cloud-based solution.

## License
This project is open-source under the [MIT License](LICENSE).

---

### Need Help?
Feel free to open an issue or reach out!

