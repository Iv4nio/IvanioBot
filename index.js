const { Client, Intents, Collection } = require('discord.js'); 
const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES] 
});
const fs = require('fs');

const express = require('express');
const app = express();
const port = 5200;
app.listen(port, () => console.log(`Bot running on http://localhost/:$%7Bport%7D`)); 

client.commands = new Collection();
client.snipes = new Map();

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandFolder = fs.readdirSync('./commands');

for (let folder of commandFolder) {
    let commandFiles = fs.readdirSync(`./commands/${folder}`)
    .filter(file => file.endsWith('.js'));

    for (let file of commandFiles) {
        let command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

const mySecret = process.env['env']
client.login(mySecret);
