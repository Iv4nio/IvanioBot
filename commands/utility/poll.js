const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'Set up a voting poll with this command',
    async execute(message, args, client) {

        let theDescription = args.slice(1).join(" ")
        let channelID = message.mentions.channels.first()

        if(!theDescription) return message.channel.send("Please provide text for the poll!\n**Format:** ``i!poll (#channel) [text here]``");
        if(!channelID) return message.channel.send("Please provide a channel for the poll to be in!\n**Format:** ``i!poll (#channel) [text here]``");

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Voting Poll')
            .setDescription(theDescription)
            .setFooter('Poll started by: ' + message.author.username + '#' + message.author.discriminator)

            let msgEmbed = await channelID.send({ embeds: [embed] });
            await msgEmbed.react('✅');
            await msgEmbed.react('❌');
    }
}
