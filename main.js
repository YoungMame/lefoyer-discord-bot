require('dotenv').config(); 

const Discord = require('discord.js');
const config = require('./config');
const { searchLinks } = require('./Functions/searchLinks')
const { searchSpams } = require('./Functions/searchSpams')
const { joinMember } = require('./member') 
const { leaveMember} = require('./member')
const loadCommands = require("./Loaders/loadCommands")
//const { addRoleMember} = require('./member')


const bot = new Discord.Client({intents: config.discordClient});
bot.commands = new Discord.Collection()


bot.login(config.token);

loadCommands(bot)

bot.on('ready', async () => {
    console.log(`${bot.user.tag} est bien en ligne !`);
});

//Leave
bot.on('guildMemberRemove', member => {
    leaveMember(member)
});
//Join 
bot.on('guildMemberAdd', async member => {
    joinMember(member)
});
//Links
bot.on('messageCreate', async message => {
    searchLinks(message)
    searchSpams(message)
    if(message.content === "hello") bot.commands.get("hello").run(bot, message)
})
