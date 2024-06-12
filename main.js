require('dotenv').config(); 

const Discord = require('discord.js');
const config = require('./config');

const bot = new Discord.Client({intents: config.discordClient});

bot.login(config.token);
bot.on('ready', async () => {
    console.log(`${bot.user.tag} est bien en ligne !`);
});

//Join
bot.on('guildMemberAdd', member => {
    const welcomeChannelId = '1250266955538108457'; 
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (!channel) return;
    channel.send(`${member} viens de rejoindre le discord`);
});
//Leave
bot.on('guildMemberRemove', member => {
    const leaveChannelId = '1250266955538108457'; 
    const channel = member.guild.channels.cache.get(leaveChannelId);
    if (!channel) return;
    channel.send(`${member} viens de quitter le discord`);
});
// //Auto role 
bot.on('guildMemberAdd', async member => {
    const roleIds = ['1250310025751035925', '1250330038423916575']; 
    const roles = roleIds.map(roleId => member.guild.roles.cache.get(roleId));
    for (const role of roles) {
        if (role) {
            try {
                await member.roles.add(role);
                console.log(`Rôle ${role.name} attribué à ${member.user.tag}`);
            } catch (error) {
                console.error(`Erreur lors de l'attribution du rôle ${role.name} : ${error}`);
            }
        } else {
            console.error(`Le rôle avec l'ID ${role.id} est introuvable.`);
        }
    }
});