module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`${client.user.username} is online!`);
        client.user.setPresence({ activities: [{ name: "Type i!help", type: "PLAYING"}], status: "online" });
    }
}