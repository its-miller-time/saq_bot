require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

let kickCount = 0

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',(msg)=>{
    if(msg.content === 'kick saq'){
        msg.reply(`I have kicked Saq in the sack. Saq has been kicked ${kickCount.toString()} times`)
        kickCount++
        console.log(kickCount)
    }
})

client.on('message', msg => {
    if (msg.author.bot) return;
    if (msg.mentions.users.first() == null) return
    msg.mentions.users.forEach( user =>{
        if(user.username === 'kick_saq'){
            msg.reply(`I have kicked Saq in the sack. Saq has been kicked ${kickCount.toString()} times`)
            kickCount++
        }
    })
});

client.login(process.env.TOKEN)
