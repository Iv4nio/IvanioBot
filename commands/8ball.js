module.exports = {
    name: '8ball',
    description: 'Solves questions by answering a yes/no',
    execute(message, Discord, args, client) {

        if(!args[0]) return message.channel.send('Please provide a question for the 8ball!\n**Format:** ``i!8ball (text here)``');

        else {

        let replies = [':8ball: | **Yes**', 
                        ':8ball: | **Fuck yeah**',
                        ':8ball: | **Without a doubt**',
                        ':8ball: | **Abso-fucking-lutely**',
                        ':8ball: | **Yes definitely**',
                        ':8ball: | **Sure bro**',
                        ':8ball: | **Don\'t ask me**',
                        ':8ball: | **Most likely**',
                        ':8ball: | **Yes m\'lady**',
                        ':8ball: | **Sorry this 8ball has been hacked**',
                        ':8ball: | **My mom says yes**',
                        ':8ball: | **Try again** (Nice cock btw)',
                        ':8ball: | **Ask again stupid bitch**',
                        ':8ball: | **You should kill yourself... NOW!**',
                        ':8ball: | **Cannot predict now**',
                        ':8ball: | **No, fuck off**',
                        ':8ball: | **Don’t count on it**',
                        ':8ball: | **No lol**',
                        ':8ball: | **My girlfriend says no**',
                        ':8ball: | **Nah**',
                        ':8ball: | **Absolutely not**',
                        ':8ball: | **Lmao you wish kid']

        let result = Math.floor((Math.random() * replies.length));


        message.channel.send(replies[result]);
        }
    }
}