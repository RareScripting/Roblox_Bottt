const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";

bot.on("message", (message)=>{
if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "help")){
  message.channel.send("Commands : !hello, !stats, and more to come");


}
if(message.content.startsWith(prefix + "hello")){
    message.channel.send("Hello! " + message.author);
  
  
  }
  if(message.content.startsWith(prefix + "stats")){

   message.channel.send(message.author + " Bot is up and running!")

  
  
  }
}
)
