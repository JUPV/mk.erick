const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'OTc1NDIyNzMwMzkwMzQ3ODQ2.GWFF_M.21DVcl2lU0i6aYwyyo8Wr9eb-W3HhXq3S7R0PA' ;

client.on("ready", () => {  
    console.log('Estou Online!');   
});

client.on("message" , (msg) => {
    if (msg.content === 'olá ' ) { 
         msg.reply('olá!');
    }
    if (msg.content === 'oi') {
        msg.channel.send('Olá '  +  msg.author.username);
    }
});

client.login(TOKEN);