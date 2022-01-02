const { MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bans a member from a server',
    async execute(message, args, client) {

        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send('You do not have permission to ban members!');

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");

        if(!reason) return message.channel.send('You need to provide a reason for your ban!\n**Format:** ``i!ban [@user] (reason here)``');

        const embed = new MessageEmbed()
        .setTitle(`You have been banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`Your time has ended in **${message.guild.name}**. It's time to start a new life my friend.`, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send('You need to specify a user to ban!\n**Format:** ``i!ban [@user] (reason here)``');

        if(!mentionMember) return message.channel.send('You need to mention someone to ban!\n**Format:** ``i!ban [@user] (reason here)``');

        if(!mentionMember.bannable) return message.channel.send('I was unable to ban this user!');

        await mentionMember.send({ embeds: [embed ]});
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send('Successfully banned ' + mentionMember.user.tag));
    }
}
