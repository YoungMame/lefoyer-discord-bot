const Discord = require('discord.js');

module.exports = {
    name:"hello",
    description: "Juste dire hello",
    permission: null,
    dm: true,
    async run(bot, message) {
        await message.reply("Salut a toi aussi ma pupuce")
    }
}