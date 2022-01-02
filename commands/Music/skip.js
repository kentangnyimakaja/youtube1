const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return

    if (!message.member.voice.channel) return message.reply('Kamu harus berada di voice channel')
    const queue = Client.distube.getQueue(message)
    if (!queue) return message.channel.send('Tidak ada yang diputar!')
    Client.distube.skip(message)
    message.channel.send('Song is skipped')
}

module.exports.help = {
    name: 'skip',
    aliases: ["s"]
}