const commando = new require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('rolemanagement', 'RoleManagement');
bot.registry.registerGroup('custommessages', 'CustomMessages');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.login('NDU3Mjg4NjQ0NDYyNTEwMDk0.DgW61A.MiMr10CduvuVRX76An7Gdv2R9qY');

