onst Discord = require('discord.js'); 
function clean(text) {
    if (typeof(text) == 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
 else 
    return text;
}

exports.run = (client, message, args) => {
    const content = args.join(' ');
        try {
            var evaled = eval(content);
            if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
    
            message.delete();
            const embed = new Discord.RichEmbed()
            .setTitle('<:success:398176056013750284> Evaluation: Success')
            .setColor('BLUE')
            .addField('INPUT <:input:398178224644947968>', `\`\`\`fix\n${content}\n\`\`\``)
            .addField('OUTPUT <:output:398178276889329677>', `\`\`\`fix\n${clean(evaled)}\n\`\`\``);
            message.channel.send({embed: embed});
        } catch (err) {
            const embed = new Discord.RichEmbed()
            .setTitle('<:cancel:398173465234112512> Evaluation Failed')
            .setColor('#ffffff')
            .addField('INPUT <:input:398178224644947968>', `\`\`\`fix\n${content}\n\`\`\``)
            .addField('OUTPUT <:output:398178276889329677>', `\`\`\`fix\nError: ${clean(evaled)}\n\`\`\``);
            message.channel.send({embed: embed});
        }
};
exports.conf = {
    aliases: ['']
};

exports.help = {
    name: 'eval',
    description: 'evaluate javascript strings',
    usage: 'eval {string}'
};