const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return
    if (!message.member.voice.channel) return message.reply('Kamu harus berada di voice channel')
    let queue = await Client.distube.getQueue(message)
    if (!queue) message.channel.send('Party is over, disconnected')
    const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
    message.channel.send(q)



}

module.exports.help = {
    name: 'queue',
    aliases: ["q"]
}