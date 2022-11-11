const { execute } = require("../../commands/tools/menu");

module.exports = {
    data: {
        name: 'summaw'
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `Hello maams`
        })
    }
}