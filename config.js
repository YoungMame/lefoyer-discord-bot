require('dotenv').config();

module.exports = {
  token: process.env.TOKEN,
  discordClient: JSON.parse(process.env.DISCORDCLIENT)  
};