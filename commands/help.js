module.exports = {
	name: 'help',
	help: {
        category: 'general',
		brief: 'Shows help for any command, or shows every command.',
		usage: 'help [command]'
	},
	execute(message, args, client) {
        out = "";
		if (!args.length){
            out = "**Commands: **\n\n";
            for (category of client.categories){
                out += `**${category.help.name}: **`
                for (command of category.commands){
                    out += `${command.name}, `;
                }
                out = out.slice(0, -2) + "\n";
            }
        } else {
            const cmd = args[0].toString().toLowerCase();
            cmdExists = false;
            for (_command of client.commands){
                const command = client.commands.get(_command[0]);
                if (command.name === cmd){
                    cmdExists = true;
                    out = `**${client.prefix}${command.name}**\n${command.help.brief}\n\nUsage: \`${client.prefix}${command.help.usage}\`\n${(command.help.extra === undefined ? "" : command.help.extra)}`
                }
            }
            for (category of client.categories){
                if (category.name === cmd){
                    cmdExists = true;
                    out = `**${category.help.name}**\n${category.help.brief}\n\n**Commands: **`;
                    for (command of category.commands){
                        out += `${command.name}, `;
                    }
                    out = out.slice(0, -2);
                }
            }
            if (!cmdExists) out = `Couldn't find command **${cmd}**.`
        }
        return message.channel.send(out);
	},
};