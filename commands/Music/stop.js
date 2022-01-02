const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return
    if (!message.member.voice.channel) return message.reply('Kamu harus berada di voice channel')
    let queue = await Client.distube.getQueue(message)
    if (queue) {
        Client.distube.stop(message)
        message.channel.send('Party is over, disconnected')
    } else if (!queue) {
        return
    }
}

module.exports.help = {
    name: 'stop',
    aliases: ["leave"]
}