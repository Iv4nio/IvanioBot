module.exports = {
    name: "ping",
    description: "Displays the ping counter",
    execute(message, args, client) {

        message.channel.send(`:ping_pong: **Pong!** | ${Date.now() - message.createdTimestamp}ms!`)
    
    }  
}
