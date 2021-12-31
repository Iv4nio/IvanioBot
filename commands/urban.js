const { MessageEmbed } = require("discord.js");
const axios = require('axios');

module.exports = {
    name: 'urban',
    description: 'Urban Dictionary',
    async execute(message, Discord, args, client) {

        let query = args.join(" ");
        if (!query) {
            return message.channel.send('What are you looking for?')
        }
        let link = "https://api-urbandictionary.com/v0/define?term=";
        let fetch = await axios(link + encodeURI(query));
        fetch = fetch.data.list;

        if(fetch.length === 0) {
            return message.channel.send('Your definition was not found!')
        }
        let data = fetch[0];
        let definition = data.definition;
        let example = data.example;
        let permaLink = data.permalink;
        let thumbsUp = data.thumbs_up;
        let thumbsDown = data.thumbs_down;
        let title = data.word;

        definition = definition.length >= 1024 ? definition.slice(0, 1020) + "..." : definition;
        example = example.length >= 1024 ? example.slice(0, 1024) + "..." : example;

        const embed = new MessageEmbed()
        .setTitle(title)
        .setURL(permaLink)
        .setColor('RANDOM')
        .addFields(
            {name: "Definition:", value: definition},
            {name: 'Example:', value: example}
        )
        .setTimestamp()
        .setFooter(`👍 ${thumbsUp} | 👎 ${thumbsDown}`)

        message.channel.send({ embeds: [embed] })
    }
}