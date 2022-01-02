const Discord = require("discord.js")
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if (!message.content.startsWith(prefix)) return; // checking if the msg stats with the prefix


    if (!message.member.voice.channel) {
        var embed = new Discord.MessageEmbed()
            .setTitle('⛔ Ops...⛔')
            .setDescription('Kamu harus berada di voice channel')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setColor("RED")
        return message.channel.send(embed) // if someone isnt in the vc it will send this
    }



    const queue = Client.distube.getQueue(message)
    if (!queue) return message.channel.send(`Tidak ada yang diputar!`) // if no q it gonna send this
    let mode = null // =loop 
    switch (args[0]) {
        case "off":
            mode = 0
            break
        case "song":
            mode = 1
            break
        case "queue":
            mode = 2
            break
    }
    mode = Client.distube.setRepeatMode(message, mode)
    mode = mode ? mode === 2 ? "Repeat queue" : "Repeat song" : "Off"
    if (!args[0]) return message.channel.send('Right Syntax is: **_loop queue/song/off**')
    const embed1 = new Discord.MessageEmbed()
        .setTitle(`🔁 Loop 🔁`)
        .setDescription(`set loop to ${mode}`)
        .setColor("#FFFF00")
        .setFooter(`Requested by ${message.author.username}`)
    message.channel.send(embed1)

}




module.exports.help = {
    name: `repeat`,
    aliases: ["loop"]
};