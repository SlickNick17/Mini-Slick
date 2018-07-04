const commando = require('discord.js-commando');
class GamesCommand extends commando.Command{
    constructor(client){
        super(client, {
            name: 'games',
            group: 'rolemanagement',
            memberName: 'games',
            description: 'Handles played games.'
        });
    }
    async run(message, args){
        let role1 = message.guild.roles.find("name", "Overwatch");
        let role2 = message.guild.roles.find("name", "League of Legends");
        let role3 = message.guild.roles.find("name", "Hearthstone");
        let role4 = message.guild.roles.find("name", "Smash Brothers");
        let role5 = message.guild.roles.find("name", "Fortnite");
        const splitCommand = message.content.split(' ')
        switch (splitCommand[1]) {
            case "Overwatch":  message.reply("You have added Overwatch as one of your games!");
            message.member.addRole(role1).catch(console.error);
            break;
            case "overwatch":  message.reply("You have added Overwatch as one of your games!");
            message.member.addRole(role1).catch(console.error);
            break;
            case "ow":  message.reply("You have added Overwatch as one of your games!");
            message.member.addRole(role1).catch(console.error);
            break;
            case "League of Legends"||"league of legends"||"league"||"League Of Legends":  message.reply("You have added League of Legends as one of your games!");
            message.member.addRole(role2).catch(console.error);
            break;
            case "league of legends":  message.reply("You have added League of Legends as one of your games!");
            message.member.addRole(role2).catch(console.error);
            break;
            case "League of legends":  message.reply("You have added League of Legends as one of your games!");
            message.member.addRole(role2).catch(console.error);
            break;
            case "league":  message.reply("You have added League of Legends as one of your games!");
            message.member.addRole(role2).catch(console.error);
            break;
            case "lol":  message.reply("You have added League of Legends as one of your games!");
            message.member.addRole(role2).catch(console.error);
            break;
            case "Hearthstone": message.reply("You have added Hearthstone as one of your games!");
            message.member.addRole(role3).catch(console.error);
            break; 
            case "hearthstone": message.reply("You have added Hearthstone as one of your games!");
            message.member.addRole(role3).catch(console.error);
            break; 
            case "hs": message.reply("You have added Hearthstone as one of your games!");
            message.member.addRole(role3).catch(console.error);
            break; 
            case "Smash Brothers":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "ssb":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "smash":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "Smash":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "SSB":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "smash bros":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "Smash Bros":  message.reply("You have added Smash Brothers as one of your games!");
            message.member.addRole(role4).catch(console.error);
            break;
            case "Fortnite":   message.reply("You have added Fortnite as one of your games!");
            message.member.addRole(role5).catch(console.error);        
            break;  
            case "fort":   message.reply("You have added Fortnite as one of your games!");
            message.member.addRole(role5).catch(console.error);        
            break; 
            case "Fort":   message.reply("You have added Fortnite as one of your games!");
            message.member.addRole(role5).catch(console.error);        
            break;   
            case "fortnite":   message.reply("You have added Fortnite as one of your games!");
            message.member.addRole(role5).catch(console.error);        
            break;
            default: message.reply("That is not a game played in the Newton South eSports Club! Message @Slick#4710 or @Douglas#1725 to request new games.")  
        }
    }
}
module.exports = GamesCommand;