import { config } from 'dotenv'
import { AttachmentBuilder, Client, GatewayIntentBits, EmbedBuilder } from 'discord.js'

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

    member.guild.editWelcomeScreen
    console.log(member.user.username + ' is in da house');

});

// // *********************gömülü mesaj kişiye atar.
// const exampleEmbed = new EmbedBuilder()
//     .setColor(0x0099FF)
//     .setTitle('Test Sunucusuna Hoşgeldin')
//     .setURL('https://discord.js.org/')
//     .setAuthor({ name: 'ZORT', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
//     .setDescription('BAZI Tanımlamalar')
//     .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/6/6a/L80385-flash-superhero-logo-1544.png')
//     .addFields(
//         { name: 'Regular field title', value: 'Some value here' },
//         { name: '\u200B', value: '\u200B' },
//         { name: 'Inline field title', value: 'Some value here', inline: true },
//         { name: 'Inline field title', value: 'Some value here', inline: true },
//     )
//     .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
//     .setImage('https://i.imgur.com/AfFp7pu.png')
//     .setTimestamp()
//     .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

// client.on("guildMemberAdd", msg => {
//     msg.send({
//         embeds: [exampleEmbed]
//     }
//     );
// })



client.login(process.env.token)