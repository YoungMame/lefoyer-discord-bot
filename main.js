require('dotenv').config(); 

const Discord = require('discord.js')
const config = require('./config')
const { searchLinks } = require('./Functions/searchLinks')
const { searchSpams } = require('./Functions/searchSpams')
const { joinMember } = require('./member') 
const { leaveMember } = require('./member')
const { createEmbed } = require('./Functions/createEmbed')
const loadCommands = require("./Loaders/loadCommands")
const loadSlashCommands = require("./Loaders/loadSlashCommands")
const connectDB = require("./Config/db");

connectDB()

const bot = new Discord.Client({intents: config.discordClient});
bot.commands = new Discord.Collection()


bot.login(config.token);

bot.on('ready', async () => {
    await loadCommands(bot)
    await loadSlashCommands(bot)
    console.log(`${bot.user.tag} est bien en ligne !`)
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
    createEmbed(message)
})

bot.on('interactionCreate', async interaction => {
    console.log(interaction)
    if(interaction.type === Discord.InteractionType.ApplicationCommand) {
        let command = require(`./Commands/${interaction.commandName}`)
        command.run(bot, interaction, command.options)
    }
})








