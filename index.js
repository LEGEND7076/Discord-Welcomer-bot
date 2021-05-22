const express = require("express")
 app = express()

app.get("/", (req, res) => {
  res.send("Welcomer Is Running..")
})

app.listen(8080, () => {
  console.log("The bot is online!")
})

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
var dateFormat = require('dateformat');

client.on('ready', () => {
  console.log(`logged  in as ${client.user.username}`)
    console.log('working'); }); 

client.on('guildMemberAdd', member => { 
  const channel = member.guild.channels.cache.get('config.welcome');
  if (!channel) return console.log("did not found any channel")
  let embed = new Discord.MessageEmbed()
    .setTitle(`WELCOME TO OUR SERVER`)
    .setAuthor(`${member.user.tag} Has Joined.`, member.user.displayAvatarURL({ dynamic: true }))
    .setColor(`RANDOM`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`<@${member.user.id}> hope you enjoy our server `)
    .setFooter(`We Now Have ${member.guild.memberCount} Members ` , `https://cdn.discordapp.com/emojis/841194327266426900.gif?v=1`)
    .setTimestamp();
  channel.send(embed);

});
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.get('config.leave'); 
  if (!channel) return console.log("did not found any channel")
  let embed = new Discord.MessageEmbed()
    .setTitle("Bye...")
    .setAuthor(`${member.user.tag} Has Left.`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField('Account Created At', dateFormat(member.user.createdAt, "mm:dd:yyyy h:MM"), true)
    .addField('Total Members', member.guild.memberCount, true)
  channel.send(embed);

});

client.on("ready", () => {
  client.user.setStatus("idle");
      client.user.setActivity(`https://github.com/ishuraj28/Discord-Welcomer-bot/ `, { type: "LISTENING" });
  console.log("ready");
});

client.login(config.token);

