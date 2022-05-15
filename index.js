const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'OTc1NDIyNzMwMzkwMzQ3ODQ2.GWFF_M.21DVcl2lU0i6aYwyyo8Wr9eb-W3HhXq3S7R0PA' ;

client.on("ready", () => {  
    console.log('Estou Online!');   
});

client.on("message") , (msg) => {
    
    if (msg.content === 'olá' ) { 
         msg.reply('olá!');

    }

    if (msg.content === 'oi') {
        msg.channel.send('Olá '  +  msg.author.username);
    }

    if (msg.content === '!dia') {
        msg.channel.send ('  https://tenor.com/view/bom-dia-sol-gif-23469110  ' + msg.author.username);
    }
    if (msg.content === '!careca') {
        msg.channel.send ('  https://tenor.com/view/slap-funny-gif-11614284  ' + msg.author.username)
    }
    if (msg.content === '!tarde'){
        msg.channel.send ('  https://tenor.com/view/boa-tarde-garfield-summer-vibes-gif-8923314  ' + msg.author.username)
    }
    if (msg.content === '!dormi') {
        msg.channel.send ('  https://tenor.com/view/a-mimir-sleep-fail-fall-gif-23342440  ' + msg.author.username)
    }
    if (msg.content === '!boa'){
        msg.channel.send (' https://tenor.com/view/minions-good-job-bom-trabalho-okay-gif-10632614  ' + msg.author.username)
    }
    if (msg.content === 'Comandos'){
       msg.channel.send (
           ' Comandos: olá, oi, !dia, !careca, !tarde, !dormi, !boa, !noite ')       
    }
    if (msg.content === '!noite'){
        msg.channel.send ('https://tenor.com/view/boa-noite-valtatui-garfield-tired-sleep-gif-16126167' )
    }
    client.on ('raw' , async dados => {
        if (dados.t!== "MESSAGE_REACTION_ADD"  && dados.t !== "MESSAGE_REACTION_REMOVE") return
        if (dados.d.message_id != "975457566140289074 ") return 

        let servidor = client.guilds.get("975457566140289074")
        let membro = servidor.members.get(dados.d.user_Id)

        let cargo1 = servidor.roles.get('975457566140289074')
            cargo2 = servidor.roles.get('975457643084783676')
            cargo3 = servidor.roles.get('975457676672778240')
         if(dados.t === "MESSAGE_REACTION_ADD")
             if (dados.d.emoji.id === "975462966315085874"){
                if(membro.roles.has(cargo1)) return
                membro.addRole (cargo1)
             }else if(dados.d.emoji.name === "🎉"){
                 if (membro.roles.has(cargo2)) return
                 membro.addRole(cargo2)
             }else if(dados.d.emoji.id === "975466013271416832"){
                 if(membro.roles.has(cargo3)) return
                 membro.addRole(cargo3)

                 if(dados.t === "MESSAGE_REACTION_REMOVE")
                 if (dados.d.emoji.id === "975462966315085874"){
                    if(membro.roles.has(cargo1)) return
                    membro.removeRole (cargo1)
                 }else if(dados.d.emoji.name === "🎉"){
                     if(membro.roles.has(cargo2)) return
                     membro.removeRole(cargo2)
                 }else if(dados.d.emoji.id === "975466013271416832"){
                     if(membro.roles.has(cargo3)) return
                     membro.removeRole(cargo)
                     
                     
      }          
} }) }          
                     
                                
                     
client.login(TOKEN)                     