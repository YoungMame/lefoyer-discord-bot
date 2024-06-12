require('dotenv').config();

module.exports = {
  token: process.env.TOKEN,
  discordClient: JSON.parse(process.env.DISCORDCLIENT)  
};

module.exports = {
  roleIds: [
    "1250310025751035925",
    "1250330038423916575"
    ]
  };
  