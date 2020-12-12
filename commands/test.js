module.exports = {
	name: 'test',
	help: {
        category: 'General',
		brief: 'Just a test.',
		usage: 'Seriously, just a test. What could go wrong when calling this?'
	},
    execute(message, args, client) {
        message.channel.send("Hello Discord");
    },
};
