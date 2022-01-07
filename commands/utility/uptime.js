const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'uptime',
    description: 'Shows how long the bot has been active',
    execute(message, args, client) {

        const days = Math.floor(client.uptime / 86400000)
        const hours = Math.floor(client.uptime / 3600000) % 24
        const minutes = Math.floor(client.uptime / 60000) % 60
        const seconds = Math.floor(client.uptime / 1000) % 60

        const embed = new MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM')
                .setDescription(`My uptime is: \`${days}\` Days \`${hours}\` Hours \`${minutes}\` Minutes \`${seconds}\` Seconds`)
            message.channel.send({ embeds: [embed ]})
    }
}
