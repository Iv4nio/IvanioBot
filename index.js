const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES]
});

const config = require('./config.json');
const prefix = config.prefix;

const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdirSync("./commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })

client.snipes = new Map();

client.on('messageDelete', async message => {
		client.snipes.set(message.channel.id, {
        	content: message.content,
        	author: message.author,
        	image: message.attachments.first() ? message.attachments.first().proxyURL : null
	})
});

client.on('ready', async () => {
		console.log(`${client.user.username} is online!`);
        client.user.setPresence({ activities: [{ name: "Type i!help", type: "PLAYING"}], status: "online" });	
});

client.on('messageCreate', async message => {

		if(!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		if (command === 'ping') {
			client.commands.get('ping').execute(message, Discord, args, client)
		}
		if (command === 'avatar') {
			client.commands.get('avatar').execute(message, Discord, args, client)
		}
		if (command === 'offensivememe') {
			client.commands.get('offensivememe').execute(message, Discord, args, client)
		}
		if (command === '8ball') {
			client.commands.get('8ball').execute(message, Discord, args, client)
		}
		if (command === 'poll') {
			client.commands.get('poll').execute(message, Discord, args, client)
		}
		if (command === 'rps') {
			client.commands.get('rps').execute(message, Discord, args, client)
		}
		if (command === 'reverse') {
			client.commands.get('reverse').execute(message, Discord, args, client)
		}
		if (command === 'youtube') {
			client.commands.get('youtube').execute(message, Discord, args, client)
		}
		if (command === 'snipe') {
			client.commands.get('snipe').execute(message, Discord, args, client)
		}
		if (command === 'help') {
			client.commands.get('help').execute(message, Discord, args, client)
		}
		if (command === 'uptime') {
			client.commands.get('uptime').execute(message, Discord, args, client)
		}
		if (command === 'ban') {
			client.commands.get('ban').execute(message, Discord, args, client)
		}
		if (command === 'kick') {
			client.commands.get('kick').execute(message, Discord, args, client)
		}
		if (command === 'unban') {
			client.commands.get('unban').execute(message, Discord, args, client)
		}
		if (command === 'clear') {
			client.commands.get('clear').execute(message, Discord, args, client)
		}
		if (command === 'slowmode') {
			client.commands.get('slowmode').execute(message, Discord, args, client)
		}
});

client.login(config.token);