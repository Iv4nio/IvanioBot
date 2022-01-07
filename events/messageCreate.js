const config = require('../config.json');
const prefix = config.prefix;

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		const cmd = client.commands.get(command);

    if(cmd) cmd.execute(message, args, client);
  }
}