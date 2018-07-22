const commando = new require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('rolemanagement', 'RoleManagement');
bot.registry.registerGroup('custommessages', 'CustomMessages');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.login(' ') //hid key so I don't get griefed again.

