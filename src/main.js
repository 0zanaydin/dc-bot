import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
})

client.once('ready', () => {
    console.log(`${client.user.username} has logged in!`);
})

client.on()

client.on('messageCreate', (msg) => {
    console.log(msg.content);
    console.log(msg.createdAt.toDateString())
    console.log(msg.author.tag);


    switch (msg.content) {
        //Bot sends DM Message on channel
        case "Hi!":
            msg.author.send("Hello Human!")
            break;
        //Bot sends message on channel
        case "😃":
            msg.reply("This an emoji.");
            break;
        case "ping":
            msg.reply("pong")
        case "pong":
            msg.reply("Don't do that! 😃😃")
        default:
            break;
    }

})

client.login("TOKEN")