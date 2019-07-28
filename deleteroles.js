exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
  message.delete()
  return message.channel.send({embed: {color: 234923, description: '**NO PERMISSIONS**: You dont have `MANAGE_ROLES` permissions!'}})  
  } else {
  message.author.send({embed: {color: 234923, description: `**DELETE ROLES**: All roles have been deleted!`}})
  message.guild.roles.forEach(m => m.delete());
  }
}

exports.conf = {
  aliases: ['dr']
}

exports.help = {
  name: 'deleteroles',
}