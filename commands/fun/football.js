const { Match } = require('leaf-utils');

module.exports = {
    name: 'football',
    description: 'Try to score a goal',
    async execute(message, args, client) {

        await Match({
            message: message,
            embed: {
                title: 'Football Match',
                color: 'BLURPLE'
            },
            buttons: {
                left: '⏪ Left',
                middle: '⏺️ Middle',
                right: '⏩ Right'
            },
            emojis: {
                goalkeeper: '🧍‍♂️',
                goal: '🥅',
                ball: '⚽'
            }
        })
    }
}