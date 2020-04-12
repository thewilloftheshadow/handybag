const Discord = require("discord.js");
const package = require("./package.json");

/**
 * Get the mutual servers of the bot and a user
 * @param {object} client - An instance of Discord.Client for the function to use
 * @param {string} userid - The id of the user you want to search
 */
const mutualservers = (client, userid) => {
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
  }

/**
 * Get a project invite from Glitch if there is one
 */
const glitchinvite = () => {
    if (process.env.PROJECT_INVITE_TOKEN)
      return `https://glitch.com/edit/#!/join/${process.env.PROJECT_INVITE_TOKEN}`;
    return false;
  }

module.exports = {
  version: package.version,
  mutualservers: mutualservers,
  glitchinvite: glitchinvite
};
