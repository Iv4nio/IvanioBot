const { Permissions } = require('discord.js');

module.exports = {
    name: 'slowmode',
    description: 'Activates slowmode in a channel',
    async execute(message, args, client) {

        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return message.channel.send('You do not have permission to use this comamnd!');

        const value = Number(args[0]);

        if (!args[0]) return message.channel.send('You need to state a number to determine the slowmode timer!\n**Format:** ``i!slowmode (number)``');
        if (!Number.isInteger(value)) return message.channel.send('You need to provide a valid integer!\n**Format:** ``i!slowmode (number)``');
        try {
            await message.channel.setRateLimitPerUser(value);
            message.channel.send(`The slowmode for ${message.channel} has been set to **${value}** second(s)`);
        } catch (err) {
            console.log(err);
            message.channel.send('There was an error setting up the slowmode');
        }
    } 
}
