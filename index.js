const Discord = require("discord.js")
const giveaways = require("discord-giveaways")
const package = require("./package.json")

module.exports = {
giveaways: giveaways,
version: package.version
mutualservers: function(userid){
let mutualservers = [];
  client.guilds.forEach(guild => {
    let guildobj = { name: guild.name, id: guild.id };
    let guildmember = guild.members.get(userid);
    if (guildmember) {
      mutualservers.push(guildobj);
    }
  });
  if (mutualservers === []) return false;
  return mutualservers;
}
}
