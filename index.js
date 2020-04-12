const Discord = require("discord.js");
const package = require("./package.json");

module.exports = {
  version: package.version,
  mutualservers: function(client, userid) {
    let mutualservers = [];
    client.guilds.cache.forEach(guild => {
      let guildobj = { name: guild.name, id: guild.id };
      let guildmember = guild.members.cache.get(userid);
      if (guildmember) {
        mutualservers.push(guildobj);
      }
    });
    if (mutualservers === []) return false;
    return mutualservers;
  },
  glitchinvite: function() {
    if (process.env.PROJECT_INVITE_TOKEN)
      return `https://glitch.com/edit/#!/join/${process.env.PROJECT_INVITE_TOKEN}`;
    return false;
  }
};
