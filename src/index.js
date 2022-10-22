import { config } from 'dotenv'
import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
})

config()

client.once('ready', () => {
    console.log(`${client.user.username} has logged in!`);
})

client.on('messageCreate', (msg) => {
    console.log(msg.content);
    console.log(msg.createdAt.toDateString())
    console.log(msg.author.tag);


    // switch (msg.content) {
    //     case "sa":
    //         console.log("as");
    //         break;
    //     case "😃":
    //         console.log("bu emojidir");

    //         break;

    //     default:
    //         break;
    // }

})

client.on("messageCreate", async (msg) => {
   
    
    if (msg.content === 'ping') {
        console.log(msg.content);
        msg.reply("pong!")
    }

})


client.login(process.env.token)