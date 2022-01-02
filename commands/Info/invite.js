const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons');
const colors = require('./../../colors.json')
const { MessageActionRow } = require('discord-buttons');


module.exports.run = async (Client, message, args, prefix) => {

  if (!message.content.startsWith(prefix)) return;


  //code
  let embed = new Discord.MessageEmbed()
    .setTitle('Invite Me / Support Me.')
    .setDescription('Silahkan invite BOT Music Rahmat jika kalian berminat & jangan lupa untuk support dengan cara donasi di link dibawah ini')
    .setColor(colors.uptime)
    .addField('**INVITE BOT**', '\n [Click here](https://discord.com/oauth2/authorize?client_id=889132327417024583&scope=bot&permissions=3148800) To Invite Me To Your Server.', true)
    .addField('**Support BOT**', '\n [Click here](https://saweria.co/discordbot) To Join Our Support BOT.', true)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())

  const support = new MessageButton()
    .setID('support')
    .setLabel('Support!')
    .setStyle('green')
    .setEmoji('💎')

  const button = new MessageButton()
    .setStyle('url')
    .setURL('https://discord.com/oauth2/authorize?client')
    .setLabel('Invite!')


  let row = new MessageActionRow();
  row.addComponent(button);
  row.addComponent(support);


  //Do same for all buttons

  message.channel.send("", {
    embed: embed,
    component: row
  })


}
module.exports.help = {
  name: 'invite',
  aliases: []
}

