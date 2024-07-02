const fs = require("fs")

module.exports = async (bot) => {
    fs.readdirSync("Commands").filter(folder => folder.endsWith(".js")).forEach(async file => {
        let command = require(`../Commands/${file}`)
        if(!command.name || typeof(command.name) !== "string") {
            console.log(`La function ${file} n'a pas de nom`)
        } else {
            bot.commands.set(command.name, command)
            console.log(`La commande ${command.name} a ete chargee`)
        }
    })
}