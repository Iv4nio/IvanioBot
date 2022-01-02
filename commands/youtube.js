const { MessageEmbed } = require('discord.js');
const fetch = require('node-superfetch');

module.exports = {
    name: 'youtube',
    description: 'Finds stats for a youtube channel',
    async execute(message, args, client) {

        let name = args.slice(0).join(" ").replace(/ -/g, " ");
        let google = 'AIzaSyChndz6Q8zqhudAW5HwXrDi9dd9x9p92Ns';

        if (!name) return message.channel.send('Please provide a YouTube channel name!\n**Format:** ``i!youtube [channel name here]``');

            const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${google}&maxResults=1&type=channel`)
            .catch(() => message.channel.send('Unknown Channel Error'));
        
        if (!channel.body.items[0]) return message.channel.send('No channel result. Try again kid.');

            const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${google}`)
            .catch(() => message.channel.send('Unknown Channel Data Error'));

            const embed = new MessageEmbed()
                .setTitle('YouTube Stats')
                .setColor('RANDOM')
                .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
                .setTimestamp()
                .addField('Channel Name', channel.body.items[0].snippet.channelTitle, true)
                .addField('Channel Description', channel.body.items[0].snippet.description, true)
                .addField('Subscribers Count', parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true) 
                .addField('Total Views', parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
                .addField('Total Videos', parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
                .addField('Date Created', new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
                .addField('Link', `[${channel.body.items[0].snippet.channelTitle}] (https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)
                .addField('Country', data.body.items[0].snippet.country ? `${data.body.items[0].snippet.country}` : `No Country Provided`, true)
            message.channel.send({ embeds: [embed] })       
    }
}
