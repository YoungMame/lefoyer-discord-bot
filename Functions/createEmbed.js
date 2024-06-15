const { EmbedBuilder } = require('discord.js')

module.exports.createEmbed = function(message) {
    if (message.content === 'test') {
        const member = message.member 
        const avatarURL = member.user.displayAvatarURL()
        const addEmbed = new EmbedBuilder()
            .setColor(0x8f2f94)
            .setTitle('Bienvenue à toi sur le serveur')  
            .setThumbnail(avatarURL)
            .setDescription(`${ member }`)
        message.channel.send({ embeds: [addEmbed] })
    }
}