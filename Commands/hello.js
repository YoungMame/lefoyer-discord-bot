const Discord = require('discord.js');

module.exports = {
    name:"hello",
    async run(bot, message) {
        await message.reply("Salut a toi aussi ma pupuce")
    }
}