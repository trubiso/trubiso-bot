const algebra = require("algebra.js");

module.exports = {
	name: 'simplify_equation',
	help: {
        category: 'maths',
		brief: 'Simplifies equations.',
		usage: 'simplify_equation {equation}',
	},
	execute(message, args, client) {
        if (!args.length)
            throw "You must input an equation.";
        return message.channel.send(algebra.parse(args.join(" ")).toString());
    }
}