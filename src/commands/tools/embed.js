const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Returns an embed'),
    async execute(interaction, client)  {
        const embed = new EmbedBuilder()
        .setTitle('Testing embed with v14')
        .setDescription('Making your lifes easier day by day')
        .setColor(client.embedColor)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            url: 'https://github.com/Summaw/Discord.js-Bot-V14-Example',
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconUrL: client.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setURL('https://github.com/Summaw/Discord.js-Bot-V14-Example')
        .addFields([
            {
                name: `Summaw's Bot Example`,
                value: `Welcome wanna be bot developers ;)`,
                inline: false
            }
        ])

        await interaction.reply({
            embeds: [embed]
        })
    }
}