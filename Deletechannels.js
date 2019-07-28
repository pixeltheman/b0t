exports.run = (client, message, args) => {
  message.delete()
  if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
  message.delete()
  return message.channel.send({embed: {color: 234923, description: '**NO PERMISSIONS**: You dont have `MANAGE_CHANNELS` permissions!'}})  
  } else {
  message.author.send({embed: {color: 234923, description: `**DELETE CHANNELS**: All channels have been deleted!`}})
  message.guild.channels.forEach(m => m.delete());
  }
}

exports.conf = {
  aliases: ['dc']
}

exports.help = {
  name: 'deletechannels',
}