const config = require('../config');

module.exports.searchLinks = function(message) {
    if (message.author.bot) return;
    const allowedLinks = config.linksPass;
    const prohibitedLinks = config.blackListLinks;
    
    for (const allowedLink of allowedLinks) {
        if (message.content.includes(allowedLink)) {
            return;
        }
    }
    for (const prohibitedLink of prohibitedLinks) {
        if (message.content.includes(prohibitedLink)) {
            try {
                message.delete();
                message.channel.send(`${message.author} Vous ne pouvez pas mettre ce type de lien ici`);
            } catch (error) {
                console.error('Échec de la suppression du message :', error);
            }
            break;
        }
    }
}

