module.exports = {
  token: process.env.TOKEN,
  discordClient: JSON.parse(process.env.DISCORDCLIENT),
  blacklistedDomains: ['youtube.com', 'pornhub.com', 'discord.gg']
};
