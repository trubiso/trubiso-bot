const algebra = require("algebra.js");

module.exports = {
	name: 'solve',
	help: {
        category: 'maths',
		brief: 'Solves equations.',
		usage: 'solve {variable to solve for} {equation}',
	},
	execute(message, args, client) {
		if (!args.length)
            throw "You must input an equation.";
        let equation = algebra.parse(args.slice(1).join(" "));
        let solution = equation.solveFor(args[0]);
        solution = solution instanceof Array ? solution.join(", ") : solution.toString();
		return message.channel.send("**Your equation:** " + equation.toString() + "\n**Solution: **" + solution);
	}
};