import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const PREFIX=process.env.PREFIX
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready',()=>{
    console.log(`Logged in as ${client.user.tag} 🤖`);
});

client.on('messageCreate', async (message)=>{
    if (message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        const userMessage=message.content.slice(PREFIX.length).trim();

        try {
            const response=await axios.post('http://localhost:3000/getmsg',{
                message:userMessage
            });
            const replyText=response.data.generatedMessage.response;
            message.reply(replyText);
        } catch (error) {
            console.error(error);
            message.reply("⚠️Could not process your message.Try again!");
        }
    }
});

client.login(process.env.DISCORD_TOKEN);