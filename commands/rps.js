module.exports = {
    name: 'rps',
    description: 'Rock paper scissors',
    async execute(message, Discord, args, client) {

        const botChoice = Math.ceil(Math.random() * 3)

        let botEmoji;
        let playerEmoji;
        let botChoiceStr;

        if (!args[0]) return message.channel.send('**You need to state your choice:** rock, paper or scissors.')
        if (!['rock', 'paper', 'scissors'].includes(args[0])) return message.channel.send('**Your choice wasn\'t one of the options:** rock, paper or scissors.')

        if (botChoice == 1) {
            botChoiceStr = 'rock';
            botEmoji = ':rock: Rock';
        }
        if (botChoice == 2) {
            botChoiceStr = 'paper';
            botEmoji = ':newspaper: Paper';
        }
        if (botChoice == 3) {
            botChoiceStr = 'scissors';
            botEmoji = ':scissors: Scissors';
        }

        if (args[0] == 'rock') playerEmoji = ':rock: Rock';
        if (args[0] == 'paper') playerEmoji = ':newspaper: Paper';
        if (args[0] == 'scissors') playerEmoji = ':scissors: Scissors';

        if (botChoiceStr == args[0]) return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. We tied ffs`);
        if (args[0] == 'rock') {
            if (botChoiceStr == 'paper') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You lose lmao`);
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You win (fuck you)`)
        }
        else if (args[0] == 'paper') {
            if (botChoiceStr == 'scissors') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You lose lmao`);
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You win (fuck you)`)
        }
        else if (args[0] == 'scissors') {
            if (botChoiceStr == 'rock') return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You lose lmao`);
            else return message.channel.send(`I picked ${botEmoji}, you picked ${playerEmoji}. You win (fuck you)`)
        }
    }
}