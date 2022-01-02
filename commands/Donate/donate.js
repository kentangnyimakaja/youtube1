const discord = require('discord.js')
const colors = require('../../colors.json')


module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return;


    const UltraX = new discord.MessageEmbed()
    .setTitle('Tekan disini untuk ke Saweria Discord BOT !!!') // sets the title for the embed
    .setURL('https://saweria.co/discordbot') // sets the URL for the title
    .setDescription(`Hello everyone, I'm a bot developer who codes in nodes.js! I've been coding since 2021. One of my hobbies is playing video games ( Mobile Legends )`) // sets the description
    .setColor('#00ff00') // color
    .setThumbnail('https://files.catbox.moe/v3c6qw.jpeg') // sets the thumbnail 
    .setImage('https://files.catbox.moe/oao4c3.jpeg') // sets an image 
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
    .addFields(
        { name: 'Link Instagram', value: 'https://www.instagram.com/rahmat_stop/', inline: true }, // Fields, inline: true mean they will be in the same line
        { name: 'Link Discord Server', value: 'https://linktr.ee/discordrahmat', inline: true },
        { name: 'Link Saweria Discord BOT', value: 'https://saweria.co/discordbot' })
    .setTimestamp() // put when the msg got sent
    
    message.channel.send(UltraX) // sends the embed

}

module.exports.help = {
    name: `donate`,
    aliases: []
};
