const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'OTc1NDIyNzMwMzkwMzQ3ODQ2.GWFF_M.21DVcl2lU0i6aYwyyo8Wr9eb-W3HhXq3S7R0PA' ;

client.on("ready", () => {  
    console.log('Estou Online!');   
});

client.on("message" , (msg) => {
    
    if (msg.content === 'olá' ) { 
         msg.reply('olá!');

    }

    if (msg.content === 'oi') {
        msg.channel.send('Olá '  +  msg.author.username);
    }

    if (msg.content === '!dia') {
        msg.channel.send ('https://tenor.com/view/bom-dia-sol-gif-23469110' + msg.author.username);
    }
    if (msg.content === '!careca') {
        msg.channel.send ('https://tenor.com/view/slap-funny-gif-11614284' + msg.author.username)
    }
    if (msg.content === '!tarde'){
        msg.channel.send ('https://tenor.com/view/boa-tarde-garfield-summer-vibes-gif-8923314' + msg.author.username)
    }
    if (msg.content === '!dormi') {
        msg.channel.send ('https://tenor.com/view/a-mimir-sleep-fail-fall-gif-23342440' + msg.author.username)
    }
    if (msg.content === '!boa'){
        msg.channel.send ('https://tenor.com/view/minions-good-job-bom-trabalho-okay-gif-10632614' + msg.author.username)
    }
    if (msg.content === 'Comandos'){
       msg.channel.send (
           ' Comandos: olá, oi, !dia, !careca, !tarde, !dormi, !boa, !noite'  + msg.author.username)       
    }
    if (msg.content === '!noite'){
        msg.channel.send ('https://tenor.com/view/boa-noite-valtatui-garfield-tired-sleep-gif-16126167')
    }
});

client.login(TOKEN);