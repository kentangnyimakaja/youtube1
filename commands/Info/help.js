const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  let helpEmbed = new MessageEmbed()
    .setTitle("Berikut adalah perintah saya")
    .setDescription("Berikut adalah beberapa command yang dapat kalian gunakan :")
    .addField(
      "**MUSIC ( HANYA BISA YOUTUBE SAJA !!! )**",
      "`play` | `queue` | `loop` | `resume` | `skip` | `volume`"
    )
    .addField(
      "**HELP**",
      "`help` | `botinfo` | `invite` | `donate`"
    )
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())

  return message.channel.send(helpEmbed)
}

module.exports.help = {
  name: 'help',
  aliases: []
}
