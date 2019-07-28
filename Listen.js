exports.run = (client, message, args) => {
    const content = message.content.split(' ').slice(1).join(' ')
    client.user.setActivity(content, {type: 'LISTENING' })
    message.channel.send(`You have set your listening status to ${content}`)
}

exports.conf = {
  aliases: ['']
}

exports.help = {
  name: 'listen'
}