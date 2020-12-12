const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.categories = [];
client.prefix = prefix;

const emojis = {
    emotiguy: {
        business: "729362524184510575",
        sad: "717683548487811111",
        sad3: "729374854104612934",
        happy: "717683480787550228",
        think: "750019258842480663",
        please: "729378455728422924"
    }
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const categoryFiles = fs.readdirSync('./categories').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of categoryFiles) {
    const category = require(`./categories/${file}`);
    let catcomds = [];
    client.commands.forEach(v=>{
        if (v.help.category) if (v.help.category == file.slice(0, -3)) catcomds.push(v);
    });
    let o = {name: file.slice(0, -3), help: category.help, commands: catcomds};
    client.categories.push(o);
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) {
        if (msg.mentions.has(client.user)) {
            msg.react("👋");
            msg.react(emojis.emotiguy.happy);
        }
        if (msg.content.includes("busines")) {
            msg.react(emojis.emotiguy.business);
        }
        return;
    }

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    try {
        client.commands.get(command).execute(msg, args, client);
    } catch (error) {
        msg.channel.send(`There was an error executing your command: ${error.toString()}`);
    }
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.login(token);