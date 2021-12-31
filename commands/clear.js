const { Permissions } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Purges a specific amount of messages',
    async execute(message, Discord, args, client) {

            if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send('You do not have permission to clear messages!');
            if (!args[0]) return message.channel.send('You must provide an amount of messages to clear!\n**Format:** ``i!clear [number]``');
            const amountToDelete = Number(args[0], 10);

            if (isNaN(amountToDelete)) return message.channel.send('The number provided isn\'t a valid number');
            if(!Number.isInteger(amountToDelete)) return message.channel.send('The number provided must be an integer!');
            if(!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('The number stated must be between ``2`` and ``100``');
            const fetched = await message.channel.messages.fetch({
                limit: amountToDelete
            });
            try {
                await message.channel.bulkDelete(fetched)
                    .then(messages => message.channel.send(`Deleted **${messages.size}** messages!`))
            } catch(err) {
                console.log(err)
                message.channel.send('I was unable to delete the amount stated. Be sure the messages are within ``14 days``')
        }
    }
}