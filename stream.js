exports.run = (client, message, args) => {
    const content = message.content.split(' ').slice(1).join(' ')
    client.user.setActivity(content, {url: 'https://twitch.tv/twitch', type: 'STREAMING'})
    message.channel.send(`Streaming Status - ${content}`)
}

exports.conf = {
  aliases: ['']
}

exports.help = {
  name: 'stream'
}