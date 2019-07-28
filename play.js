exports.run = (client, message, args) => {
    const content = message.content.split(' ').slice(1).join(' ')
    client.user.setActivity(content, {type: 'PLAYING'})
    message.channel.send(`Your game has been set to ${content}`)
}

exports.conf = {
  aliases: ['']
}

exports.help = {
  name: 'play'
}