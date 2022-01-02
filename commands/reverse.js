module.exports = {
    name: 'reverse',
    description: 'Reverses the text that has been provided!',
    execute(message, args, client) {
        let text = args.join(" ");
        if(!text) {
            return message.channel.send('Please provide text for me to reverse!\n**Format:** ``i!reverse [text here]``')
        }
        let reverse = text.split("").reverse().join("");
        let response = "**" + message.author.tag + ":** " + reverse;

        return message.channel.send(response)
    }
}
