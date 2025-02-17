import { Client, GatewayIntentBits } from 'discord.js';
import ollama from "ollama";
import dotenv from 'dotenv';
dotenv.config();

const PREFIX = process.env.PREFIX
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag} 🤖`);
});

// Function to interact with Ollama
async function chatWithOllama(message) {
    try {
        const response = await ollama.chat({
            model: "llama3.2:1b",
            messages: [{ role: "user", content: message }],
        });

        const cleanMessage = response.message.content
            .replace(/<think>.*?<\/think>/gs, "")
            .trim();
        return cleanMessage;
    } catch (error) {
        console.error("Error:", error);
        return "An error occurred while processing your request.";
    }
}

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const userMessage = message.content.slice(PREFIX.length).trim();
        try {
            await message.channel.sendTyping();
            const reply = await chatWithOllama(userMessage);
            message.channel.send(reply || "Sorry, I couldn't process that.");
        } catch (error) {
            console.error(error);
            message.reply("⚠️Could not process your message.Try again!");
        }
    }
});

client.login(process.env.DISCORD_TOKEN);