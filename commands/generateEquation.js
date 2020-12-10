const algebra = require("algebra.js");

module.exports = {
	name: 'generate_equation',
	help: {
		category: 'maths',
		brief: 'Generates equations.',
		usage: 'generate_equation {no. of terms - integer} {max. exponent - integer} {min. number - integer} {max. number - integer} [show multiplication symbols ? true : false] [show solution ? true : false]',
	},
	execute(message, args, client) {
		if (!args.length || args.length < 4)
			throw "You must input correct parameters. Please, check `u!help generate_equation` for more information.";
		function algebraGen(terms, maxExponent, _min, _max, multiplicationSigns = false){
			function randint(_min, _max){
				return Math.floor(Math.max(Math.min(Math.random() * (_max+1), _max), _min));
			}			
			function randomElement(items){
				return items[Math.floor(Math.random() * items.length)];
			}
			function agri(_min, _max){
				let v = randint(_min, _max);
				return v > 1 ? v.toString() : "";
			}
			let xVals = []; 
			[...Array(maxExponent+1).keys()].forEach(_=>xVals.push(_ > 1 ? "x^" + _.toString() : (_ > 0 ? "x" : "")));
			let v = randomElement(xVals);
			let c = agri(_min, _max);
			let out = randomElement(["-", ""]) + (v != "" ? (c + (multiplicationSigns && c!="" ? "*" : "") + v) : randint(_min+1, _max).toString());
			[...Array(terms-1).keys()].forEach(_=>{
				let _v = randomElement(xVals);
				let _c = agri(_min, _max);
				out += " " + randomElement(["- ", "+ "]) + (_v != "" ? (_c + (multiplicationSigns && _c!="" ? "*" : "") + _v) : randint(_min+1, _max).toString());
			});
			return out.includes("x") ? (out + " = " + randint(_min, _max).toString()) : algebraGen(terms, maxExponent, _min, _max);
		}
		let show_m_d = false;
		if (args[4]) show_m_d = args[4].toLowerCase() == 'true';
		let show_sol = false;
		if (args[5]) show_sol = args[5].toLowerCase() == 'true';
		let equation = algebraGen(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), true);
		let shownEqt = show_m_d ? equation.replaceAll('*', '\\*') : equation.replaceAll('*', '');
		let solution = algebra.parse(equation).solveFor("x");
		if (solution == "") return this.execute(message, args, client);
		else return message.channel.send("**Your equation:** " + shownEqt + (show_sol ? ("\n**Solution: ** x = " + (solution instanceof Array ? solution.join(", ") : solution.toString())) : ""));
	}
};