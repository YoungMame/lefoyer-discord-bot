require('dotenv').config(); //appelation des variables d'env

const Discord = require("discord.js");
const config = require("./config");

const bot = new Discord.Client({intents: config.discordClient});

bot.login(config.token);
bot.on("ready", async () => {
    console.log(`${bot.user.tag} est bien en ligne !`);
});

//Join
bot.on("guildMemberAdd", member => {
    const welcomeChannelId = "1250010156868173847"; 
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (!channel) return;
    channel.send(`${member} bienvenue mon enfant de chienne`);
});
//Leave
bot.on("guildMemberRemove", member => {
    const leaveChannelId = "1250010156868173847"; 
    const channel = member.guild.channels.cache.get(leaveChannelId);
    if (!channel) return;
    channel.send(`${member} pourquoi tu quittes le discord ta mère la pute`);
});
//