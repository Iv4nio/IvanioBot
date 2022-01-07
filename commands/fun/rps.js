const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js")

module.exports = {
    name: 'rps',
    description: 'Rock paper scissors',
    async execute(message, args, client) {

        let botPick;
        let botEmoji;
        let botChoose;
        let playerScore = 0;
        let botScore = 0;
        let rock = '🪨 Rock';
        let paper = '📰 Paper';
        let scissors = '✂️ Scissors';

        let rockButton = new MessageButton()
        .setCustomId('rock')
        .setStyle('PRIMARY')
        .setEmoji('🪨')
        .setLabel('Rock')

        let paperButton = new MessageButton()
        .setCustomId('paper')
        .setStyle('SUCCESS')
        .setEmoji('📰')
        .setLabel('Paper')

        let scissorsButton = new MessageButton()
        .setCustomId('scissors')
        .setStyle('DANGER')
        .setEmoji('✂️')
        .setLabel('Scissors')

        let row = new MessageActionRow()
        .addComponents(
            rockButton,
            paperButton,
            scissorsButton
        )

        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)

        message.channel.send({embeds: [embed], components: [row] }).then((interaction) => {
            const filter = (buttons) => buttons.user.id === message.author.id;
            const collector = interaction.createMessageComponentCollector({filter}); // Duration of the game (10 seconds)

        collector.on("collect", async(button) => {

            botPick = Math.floor(Math.random() * 3) + 1
            if (botPick === 1) {
                botChoose = 'rock';
            }
            if (botPick === 2) {
                botChoose = 'paper';
            }
            if (botPick === 3) {
                botChoose = 'scissors';
            }

            let embed1 = new MessageEmbed()
            .setColor('RANDOM')
            .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)

            // If user clicks on rock:
            if (button.customId === 'rock') {
                botPick = Math.floor(Math.random() * 3) + 1
    
                if (botChoose === 'paper') {
                    botScore++;
                    let embed2 = new MessageEmbed()
                    .setColor('RANDOM')
                    .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)
                return button.update({ content: `I picked **${paper}**\nYou picked **${rock}**\n**Result:** You lost`, embeds: [embed2], components: [row] })
                }
            if (botChoose === 'rock') {
                return button.update({ content: `I picked **${rock}**\nYou picked **${rock}**\n**Result:** We tied`, embeds: [embed1], components: [row] })
            }
            if (botChoose === 'scissors') {
                playerScore++;
                let embed2 = new MessageEmbed()
                .setColor('RANDOM')
                .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)
            return button.update({ content: `I picked **${scissors}**\nYou picked **${rock}**\n**Result:** You win`, embeds: [embed2], components: [row] })
                }
            }
            // If user clicks on paper:
            if (button.customId === 'paper') {
                botPick = Math.floor(Math.random() * 3) + 1
    
                if (botChoose === 'scissors') {
                    botScore++;
                    let embed2 = new MessageEmbed()
                    .setColor('RANDOM')
                    .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)
                return button.update({ content: `I picked **${scissors}**\nYou picked **${paper}**\n**Result:** You lost`, embeds: [embed2], components: [row] })
                }
    
            if (botChoose === 'paper') {
                return button.update({ content: `I picked **${paper}**\nYou picked **${paper}**\n**Result:** We tied`, embeds: [embed1], components: [row] })
            }
            if (botChoose === 'rock') {
                playerScore++;
                let embed2 = new MessageEmbed()
                .setColor('RANDOM')
                .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)
            return button.update({ content: `I picked **${rock}**\nYou picked **${paper}**\n**Result:** You win`, embeds: [embed2], components: [row] })
                }
            }
            // If user clicks on scissors:
            if (button.customId === 'scissors') {
                botPick = Math.floor(Math.random() * 3) + 1
    
                if (botChoose === 'rock') {
                    botScore++; 
                    let embed2 = new MessageEmbed()
                    .setColor('RANDOM')
                    .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)
                return button.update({ content: `I picked **${rock}**\nYou picked **${scissors}**\n**Result:** You lost`, embeds: [embed2], components: [row] })
                }
    
            if (botChoose === 'scissors') {
                return button.update({ content: `I picked **${scissors}**\nYou picked **${scissors}**\n**Result:** We tied`, embeds: [embed1], components: [row] })
            }
            if (botChoose === 'paper') {
                playerScore++;
                let embed2 = new MessageEmbed()
                .setColor('RANDOM')
                .addField('Score RPS', `\`->\` ${message.author}: **${playerScore} Points**\n\`->\` ${client.user}: **${botScore} Points**`)
            return button.update({ content: `I picked **${paper}**\nYou picked **${scissors}**\n**Result:** You win`, embeds: [embed2], components: [row] })
                    }
                }
            })
        })
    }
}