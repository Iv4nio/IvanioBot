module.exports = {
    name: "ping",
    description: "Displays the ping counter",
    execute(message, Discord, args, client) {

        message.channel.send(`:ping_pong: **Pong!** | ${Date.now() - message.createdTimestamp}ms!`)
    
    }  
}