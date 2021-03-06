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
                left: 'βͺ Left',
                middle: 'βΊοΈ Middle',
                right: 'β© Right'
            },
            emojis: {
                goalkeeper: 'π§ββοΈ',
                goal: 'π₯',
                ball: 'β½'
            }
        })
    }
}