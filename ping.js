const { MessageEmbed } = require('discord.js')
module.exports = {
    info: {
        name: "ping",
        description: "PING",
        usage: "l!ping",
        aliases: ["ms"]
    },

    run: async function(client, message, args){

 const ping = new MessageEmbed()
 .setColor('#2f3136')
 .setFooter(`Executed by: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Ping')
        .setDescription(`:ping_pong: ${Date.now() - message.createdTimestamp}ms`)
 message.reply({
   embeds:[ping]
 })
 }
}
