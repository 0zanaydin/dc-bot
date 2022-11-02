import { config } from 'dotenv'
import { AttachmentBuilder, Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    
    ]
})

config()

client.once('ready', () => {
    console.log(`${client.user.username} has logged in!`);
})

client.on('messageCreate', (msg) => {
    // console.log(msg.content);
    // console.log(msg.createdAt.toDateString())
    // console.log(msg.author.tag);


    switch (msg.content) {
        case "sa":
            // msg.reply("as!")
            msg.author.send("bu senin için özel mesaj canım")
            break;
        case "😃":
            msg.reply("bu emojidir");
            break;
        case "ping":
            msg.reply("pong")
        case "pong":
            msg.reply("Şaka yapmayı bırak şakacı şey seni!!!! 😃😃")
        case "🥸":
            msg.reply("HOŞGELDİN CEM!")
        default:
            break;
    }
})

// client.on('guildMemberAdd', async member => {
//     const channel = member.guild.channels.cache.get(member.guild.id);
//     if (!channel) return;

//     channel.send("text-here!")
// });

// client.on("messageCreate", (msg) =>{
//     let isWelcomeMessage = msg.type === GUILD_MEMBER_ADD

//     if (isWelcomeMessage) {
//         msg.author.send(`Welcome our server ${msg.author.username}`)
//     }

// })

client.on("guildMemberAdd", member => {
    member.guild.channels.cache.get("1026155097970987020").send("test message")
    console.log(member.user.username + ' is in da house');

});

client.login(process.env.token)