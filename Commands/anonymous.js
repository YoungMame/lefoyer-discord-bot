const Discord = require('discord.js');

module.exports = {
    name:"anonymous",
    description: "Passer un message anonyme",
    permission: null,
    dm: true,
    options: [
        {
            type: "BOOLEAN",
            name: "destinataire",
            description: "Le destinataire de ton message anonyme",
            required:true
        }
    ],
    async run(bot, interaction, options) {
        const channelId = interaction.channelId
        const channel = bot.channels.cache.get(channelId);
        await channel.send(`Hello ${options.getUser('destinataire')}`)
    }
}