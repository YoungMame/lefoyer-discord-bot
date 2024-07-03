const Discord = require("discord.js")
const { REST }= require("@discordjs/rest")
const { Routes } = require("discord.js")

module.exports = async (bot) => {
    let commands = []

    bot.commands.forEach(command => {
        try {
            let slashcommand = new Discord.SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description)
            .setDefaultMemberPermissions(command.permission)
            .setDMPermission(command.dm)

            if(command.options?.length >= 1) {
                command.options.forEach(option => {
                    switch (option.type) {
                        case 'STRING':
                            slashcommand.addStringOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required))
                        break
                        case 'INTEGER':
                            slashcommand.addIntegerOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required))
                        break
                        case 'BOOLEAN':
                            slashcommand.addBooleanOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required))
                        break
                        case 'USER':
                            slashcommand.addUserOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required))
                        break
                        case 'CHANNEL':
                            slashcommand.addChannelOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required))
                        break
                        case 'ROLE':
                            slashcommand.addRoleOption(opt => opt.setName(option.name).setDescription(option.description).setRequired(option.required))
                        break
                        default: throw new Error(`Le type de la commande ${command.name} invalide`)
                    }
                })
            }
            commands.push(slashcommand)
        } catch (error) {
            console.log(`Erreur lors de l'ajout de la commande ${command.name} : ${error}`)
        }       
    })

    const rest = new REST().setToken(bot.token)
    await rest.put(Routes.applicationCommands(bot.user.id), {body:commands})
    console.log("Les slashs commandes sont envoyees a l'API de discord")
}