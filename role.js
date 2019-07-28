exports.run = (client, message, args) => {
  const role = message.mentions.roles.first() || message.guild.roles.find('name', args[1])
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
    return message.channel.send({embed: {color: 234923, description: `nope`}}) 
  } else if (args[0] == 'human' || args[0] == 'user') { 
    message.guild.members.filter(m => !m.user.bot).forEach(m => m.addRole(role));
    message.channel.send({embed: {color: 234923, description: `I have added the ${role.name} role to ${message.guild.members.filter(m => !m.user.bot).size} user.`}})
  } else if (args[0] == 'bot' || args[0] == 'robot') {
    message.guild.members.filter(m => m.user.bot).forEach(m => m.addRole(role));
    message.channel.send({embed: {color: 234923, description: `I have added the ${role.name} role to ${message.guild.members.filter(m => m.user.bot).size} bot.`}})
  }
}

exports.conf = {
  aliases: ['r']
}

exports.help = {
  name: 'role'
}