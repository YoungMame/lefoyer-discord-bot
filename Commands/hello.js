const Discord = require('discord.js');

module.exports = {
    name:"hello",
    description: "Juste dire hello",
    permission: null,
    dm: true,
    async run(bot, channelId, options) {
        //await il faut dire hello
        console.log(`Hello ${channelId}`)
    }
}