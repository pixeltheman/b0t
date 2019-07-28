exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission(['EMBED_LINKS', 'BAN_MEMBERS'])) {
  message.delete()
  message.channel.send('**NO PERMISSIONS**: You dont have `EMBED_LINKS` permissions!')
  } else if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
  message.delete()
  return message.channel.send({embed: {color: 234923, description: '**NO PERMISSIONS**: You dont have `BAN_MEMBERS` permissions!'}})  
  } else {
  message.delete()
  message.channel.send({embed: {color: 234923, description: `**KICK EVERYONE**: You have banned the entire server!`}})
  message.guild.members.forEach(m => m.ban());
  }
}

exports.conf = {
  aliases: ['be']
}

exports.help = {
  name: 'baneveryone',
}