const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows all the commands within this bot.',
    async execute(message, Discord, args, client) {

            const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("Help")
                .setPlaceholder("Select a Command Category")
                .addOptions([
                    {
                        label: "Utility Commands",
                        description: "A bot's essentials and statistics",
                        value: "first",
                        emoji: "🛠️"
                    },
                    {
                        label: "Fun Commands",
                        description: "All the fun and satisfaction a discord user needs",
                        value: "second",
                        emoji: "🎯"
                    },
                    {
                        label: "Moderation Commands",
                        description: "To keep a server safe, you'll need this",
                        value: "third",
                        emoji: "⚔️"
                    }
                ])
            )
        let embed = new MessageEmbed()
        .setTitle("Welcome to the Help menu")
        .setDescription("Choose the command category you want to select.")
        .setColor('RANDOM')

        let sendmsg = await message.channel.send({ content : "  ", embeds: [embed], components: [row] })

        let embed1 = new MessageEmbed()
        .setTitle("Utility Commands")
        .setDescription("Below you will discover all the utility commands within the bot.\n **PREFIX:** ``i!``")
        .addFields(
            {name: "ping", value: "Shows the latency counter"},
            {name: "uptime", value: "Shows how long the bot's been online"},
            {name: "help", value: "You are here"},
            {name: "avatar", value: "Displays your avatar supplimented with the URL link"},
            {name: "youtube", value: "Displays statistics of a YouTube channel"},
            {name: "poll", value: "Start a poll in a certain channel"},
            {name: "snipe", value: "Retrieves a deleted message - This is called being a dick"}
        )
        .setColor('RANDOM')
        .setFooter('Bot coded by Ivanio', client.user.displayAvatarURL())
        .setTimestamp()

        let embed2 = new MessageEmbed()
        .setTitle("Fun Commands")
        .setDescription("Below you will discover all the fun commands within the bot.\n**PREFIX:** ``i!``")
        .addFields(
            {name: "8ball", value: "Ask questions to this 8ball and it'll answer with variations of a yes or no"},
            {name: "rps", value: "Rock paper scissors"},
            {name: "offensivememe", value: "The most darkest (probably not even tbh) memes"}
        )
        .setColor('RANDOM')
        .setFooter('Bot coded by Ivanio', client.user.displayAvatarURL())
        .setTimestamp()

        let embed3 = new MessageEmbed()
        .setTitle("Moderation Commands")
        .setDescription("Below you will discover all the moderation commands within the bot.\n**PREFIX:** ``i!``")
        .addFields(
            {name: "ban", value: "Bans a member from the server"},
            {name: "unban", value: "Unbans a member from the server"},
            {name: 'kick', value: 'Kicks a member from the server'},
            {name: 'clear', value: 'Purges a specific amount of messages'},
            {name: 'slowmode', value: 'Sets a slowmode in a channel provided by a number'}
        )
        .setColor('RANDOM')
        .setFooter('Bot coded by Ivanio', client.user.displayAvatarURL())
        .setTimestamp()

        const collector = message.channel.createMessageComponentCollector({
            componentType: "SELECT_MENU"
        })

        collector.on("collect", async (collected) => {
            const value = collected.values[0]

        if (value === 'first') {
            collected.reply({embeds: [embed1] })
        } 
        if (value === 'second') {
            collected.reply({embeds: [embed2] })
        } 
        if (value === 'third') {
            collected.reply({embeds: [embed3] })
        }            

        })

    }
} 