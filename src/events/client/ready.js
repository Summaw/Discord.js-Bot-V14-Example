module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready ${client.user.tag} is logged in and online!`)
        client.user.setPresence({ activities: [{ name: 'Summers Example Bot | Link: https://github.com/Summaw'}] });
    }
}