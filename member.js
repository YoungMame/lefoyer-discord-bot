const { EmbedBuilder } = require('discord.js')

//Notificaiton quand un joueur rejoint le serveur 
module.exports.joinMember = async function(member) {
    const avatarURL = member.user.displayAvatarURL()
    const roleIds = ['1250310025751035925', '1250330038423916575']
    const welcomeChannelId = '1251533493515718727'
    const roles = roleIds.map(roleId => member.guild.roles.cache.get(roleId))
    for (const role of roles) {
        if (role) {
            try {
                await member.roles.add(role); } catch (error) {}
        } else {
        }
    }
    const channel = member.guild.channels.cache.get(welcomeChannelId)
    if (!channel) {
        return
    }
    const addEmbed = new EmbedBuilder()
        .setColor(0x1FFF00)
        .setTitle('Bienvenue à toi sur le serveur')  
        .setThumbnail(avatarURL)
        .setDescription(`${ member }`)
    channel.send({ embeds: [addEmbed] })
}
//Notificaiton quand un membre quitte le serveur 
module.exports.leaveMember = function(member) {
    const avatarURL = member.user.displayAvatarURL()
    const leaveChannelId = '1251533493515718727'
    const channel = member.guild.channels.cache.get(leaveChannelId)
    if (!channel) return;
    const addEmbed = new EmbedBuilder()
        .setColor(0xFF0000)
        .setTitle('Pourquoi tu quittes')  
        .setThumbnail(avatarURL)
        .setDescription(`${ member }`)
    channel.send({ embeds: [addEmbed] })
}



