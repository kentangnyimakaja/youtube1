const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return
    if (!message.member.voice.channel) return message.reply('Kamu harus berada di voice channel')
    const music = args.join(" ")
    if (!music) return message.channel.send('harap sediakan lagu untuk dimainkan')
    Client.distube.play(message, music)
}

module.exports.help = {
    name: 'play',
    aliases: ["p"]
}