const config = require('../config.json');
const prefix = config.prefix;

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if(!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		if (command === 'ping') {
			client.commands.get('ping').execute(message, args, client)
		}
		if (command === 'avatar') {
			client.commands.get('avatar').execute(message, args, client)
		}
		if (command === 'offensivememe') {
			client.commands.get('offensivememe').execute(message, args, client)
		}
		if (command === '8ball') {
			client.commands.get('8ball').execute(message, args, client)
		}
		if (command === 'poll') {
			client.commands.get('poll').execute(message, args, client)
		}
		if (command === 'rps') {
			client.commands.get('rps').execute(message, args, client)
		}
		if (command === 'reverse') {
			client.commands.get('reverse').execute(message, args, client)
		}
		if (command === 'youtube') {
			client.commands.get('youtube').execute(message, args, client)
		}
		if (command === 'snipe') {
			client.commands.get('snipe').execute(message, args, client)
		}
		if (command === 'help') {
			client.commands.get('help').execute(message, args, client)
		}
		if (command === 'uptime') {
			client.commands.get('uptime').execute(message, args, client)
		}
		if (command === 'ban') {
			client.commands.get('ban').execute(message, args, client)
		}
		if (command === 'kick') {
			client.commands.get('kick').execute(message, args, client)
		}
		if (command === 'unban') {
			client.commands.get('unban').execute(message, args, client)
		}
		if (command === 'clear') {
			client.commands.get('clear').execute(message, args, client)
		}
		if (command === 'slowmode') {
			client.commands.get('slowmode').execute(message, args, client)
		}
    }
}