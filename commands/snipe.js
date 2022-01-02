const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    description: 'Retrieves a deleted message',
    async execute(message, args, client) {

        let msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send('There\'s nothing to snipe here!')
        else {
        let embed = new MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
            .setDescription(msg.content)
            .setTimestamp()
            .setImage(msg.image)
            .setFooter('Get Sniped Fucker')

        message.channel.send({ embeds: [embed] })
        }
    }
}
