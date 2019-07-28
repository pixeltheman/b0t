exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
  message.delete()
  return message.channel.send({embed: {color: 234923, description: '**NO PERMISSIONS**: You dont have `KICK_MEMBERS` permissions!'}})  
  } else {
  message.channel.send({embed: {color: 234923, description: `**KICK EVERYONE**: You have kicked the entire server!`}})
  message.guild.members.forEach(m => m.kick());
  }
}

exports.conf = {
  aliases: ['ke']
}

exports.help = {
  name: 'kickeveryone',
}