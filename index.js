const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES] 
});
const fs = require('fs');

const config = require('./config.json');

client.commands = new Collection();
client.snipes = new Map();

fs.readdirSync("./commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}    

client.login(config.token);
