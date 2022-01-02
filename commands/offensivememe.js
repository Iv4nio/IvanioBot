const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'offensivememe',
    description: 'Crude memes from reddit',
    async execute(message, args, client) {

        let data = await fetch(`https://meme-api.herokuapp.com/gimme/Offensivejokes`).then(response => response.json()) 

        const embed = new MessageEmbed()
        .setTitle(data.title)
        .setURL(data.postLink)
        .setColor('RANDOM')
        .setFooter(data.ups + " Upvotes")
        .setTimestamp()
        .setImage(data.url)
        message.channel.send({ embeds: [embed] })
    }
}
