const config = require('../config');

module.exports.searchLinks = function(message) {
    const content = message.content
    if(message.author.bot) return
    if(content.includes("https://") || content.includes("http://"))   {
        const regex = /(https?:\/\/[^\s]+)/g
        const links = content.match(regex)
        if (links) {
            for(const link of links) {
                const url = new URL(link)
                let authorized = true
                for (let i = 0; i < config.blacklistedDomains.length; i++) {
                    const element = config.blacklistedDomains[i];
                    if(url.hostname === element) {
                        authorized = false
                    }
                }
                if(!authorized) {
                    message.delete()
                    message.channel.send(`${message.author} ce sale batard envoit des liens coquinous`)
                }
            }
        }
    }
}
