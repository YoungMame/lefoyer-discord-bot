const config = require('../config');

let spamArray = []

module.exports.searchSpams = async function(message) {
    const authorId = message.author.id
    const author = message.author
    if(message.author.bot) return

    if (spamArray.includes(authorId)) {
        message.channel.send(`${author} est en train de spammer`)
    }

    spamArray.push(authorId)

    setTimeout(() => {
        const authorIndex = spamArray.indexOf(authorId)
        if (authorIndex !== -1) {
            spamArray[authorIndex].count -= 1
            spamArray.splice(authorIndex, 1)
        }
    }, 400);
}