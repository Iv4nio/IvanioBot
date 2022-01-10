const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'Set up a voting poll with this command',
    async execute(message, args, client) {

        const channel = message.guild.channels.cache.find(c => c.name === '📥-polls');
        if(!channel) return message.channel.send('There isn\'t a channel for polls dumbass');

        let msgArgs = args.join(' ');

        if(!msgArgs) return message.channel.send('Add a message for your poll you fucking idiot')

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Voting Poll:')
        .setDescription(msgArgs)
        .setTimestamp()
        .setFooter('Poll started by: ' + message.author.username + '#' + message.author.discriminator)

        channel.send({ embeds: [embed] }).then((msg) => {
          msg.react('✅');
          msg.react('❌');
        })
    }
}
