const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment')
const client = new Discord.Client();
const prefix = process.env.PREFIX

  // The list of if/else is replaced with those simple 2 lines:
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.error(err);
  
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
          console.log("No commands to load!");
          return;
      }
      console.log(`Loaded ${jsfiles.length} commands!`)
      
  
      jsfiles.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      console.log(`${i + 1}: command ${f} loaded!`)
      client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
      });
  });
  var reload = (message, cmd) => {
    delete require.cache[require.resolve('./commands/' + cmd)];
    try {
      let cmdFile = require('./commands/' + cmd);
    } catch (err) {
      message.channel.send(`Problem loading ${cmd} : ${err}`)
    }
    message.channel.send(`The command **${cmd}** has successfully reloaded.`)
  }
  exports.reload = reload;
client.on("message", message => {
  if (message.author.id !== "258970604005359616") return;
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  //const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  //const command = args.shift().toLowerCase();
    
  var messageArray = message.content.split(/\s+/g);  
  let command = message.content.split(' ')[0].slice(1);
  let args = messageArray.slice(1);

  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, args);
  } else {
}
});
client.login(process.env.USERTOKEN);