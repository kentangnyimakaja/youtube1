const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return;

    // setting the perm that only peoplw with manage msgs can use this cmd, and it also sends that msg
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You don't have permission to use that command.");


    if (!message.member.voice.channel) {
        var embed = new Discord.MessageEmbed()
            .setTitle('⛔ Ops...⛔')
            .setDescription('Kamu harus berada di voice channel')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setColor("RED")
        return message.channel.send(embed)
    }

    const queue = Client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Tidak ada dalam antrian sekarang!`)
    const volume = parseInt(args[0]) // if someone didnt say a number example =v gd
    if (isNaN(volume)) return message.channel.send(`masukan nomor yang valid !!`) // so it gonna send this
    Client.distube.setVolume(message, volume) // set the volume

    const embed1 = new Discord.MessageEmbed()
        .setTitle(`🔉 Volume 🔊`)
        .setDescription(`Volume set to ${volume}`)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .setColor("#FFFF00")
    message.channel.send(embed1) // send this embed

}

module.exports.help = {
    name: `volume`,
    aliases: ["v"]
};