const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kicks a member from a server',
    async execute(message, Discord, args, client) {

        if(!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send('You do not have permission to kick members!');

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if(!reason) return message.channel.send('You need to provide a reason for your kick!\n**Format:** ``i!kick [@user] (reason here)``');

        const embed = new MessageEmbed()
        .setTitle(`You have been kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter('Get the fuck outta here', client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send('You need to specify a user to kick!\n**Format:** ``i!kick [@user] (reason here)``');

        if(!mentionMember) return message.channel.send('You need to mention someone to ban!\n**Format:** ``i!kick [@user] (reason here)``');

        if(!mentionMember.kickable) return message.channel.send('I was unable to kick this user!');

        await mentionMember.send({ embeds: [embed ]});
        await mentionMember.kick({
            reason: reason
        }).then(() => message.channel.send('Successfully kicked ' + mentionMember.user.tag));
    }
}
