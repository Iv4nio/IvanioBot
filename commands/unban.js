const { Permissions } = require('discord.js');

module.exports = {
    name: 'unban',
    description: 'Unbans a member from a server',
    async execute(message, args, client) {

        if(!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send('You do not have permission to unban members!');

        let userID = args[0];
        let reason = args.slice(1).join(" ");

        if(!reason) return message.channel.send('You need to provide a reason for your unban!\n**Format:** ``i!unban [ID] (reason here)``');
        if(!args[0]) return message.channel.send('You need to state an ID to unban!\n**Format:** ``i!ban [ID] (reason)``');
        if(isNaN(args[0])) return message.channel.send('You need to provide a valid ID\n**Format:** ``i!unban [ID] (reason)``')

        message.guild.bans.fetch().then(async bans => {
            if (bans.size == 0) return message.channel.send('This server does not have any user banned!')
            let bUser = bans.find(b => b.user.id == userID);
            if (!bUser) return message.channel.send('The user ID stated is not banned');
            await message.guild.members.unban(bUser.user, reason).catch(err => {
                console.log(err)
                return message.channel.send('Something went wrong unbanning the ID');
            }).then(() => {
                message.channel.send(`Successfully unbanned <@${args[0]}>`);
            })
        })
    }
}
