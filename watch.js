exports.run = (client, message, args) => {
    const content = message.content.split(' ').slice(1).join(' ')
    client.user.setActivity(content, {type: 'WATCHING' })
    message.channel.send(`You have set your watching status to ${content}`)
}

exports.conf = {
  aliases: ['']
}

exports.help = {
  name: 'watch'
}