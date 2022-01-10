const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Displays the author\'s avatar',
    execute(message, args, client) {
            let user;

            if(message.mentions.users.first()) {
                user = message.mentions.users.first(); 
            } else if (args[0]) {
                user = message.guild.members.cache.get(args[0]).user;
            } else {
                user = message.author;
            }

            let avatar = user.displayAvatarURL({size: 4096, dynamic: true});

            const embed = new MessageEmbed()
                .setTitle(`${user.tag}'s Avatar:`)
                .setDescription(`[Avatar URL](${avatar})`)
                .setColor('RANDOM')
                .setImage(avatar)

            return message.channel.send({ embeds: [embed] });
    }
}
