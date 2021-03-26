const converter = require("convert-units");

module.exports = {
	name: 'convert',
	help: {
		category: 'maths',
		brief: 'Converts units.',
		usage: 'convert {number} {source unit} {destination unit}',
		extra: (()=>{
			out = "**Possible units:**";
			for(measure of converter().measures()){
				out += `\n\t**${measure}**: `;
				for(possibility of converter().possibilities(measure)){
					out += `${possibility}, `;
				}
				out = out.slice(0, -2);
			}
			return out;
		})()
	},
	execute(message, args, client) {
		out = "";
		if (!args.length || args.length != 3)
			throw "You must input the number, followed by a space and the source unit, followed by a space and the destination unit."
		const num = parseFloat(args[0]), src = args[1].toString(), dst = args[2].toString();
		try {
			out = `${num} ${src} = ${converter(num).from(src).to(dst).toFixed(3)} ${dst}`;
			message.delete();
		} catch (error) {
			out = "Correct usage: `convert {number} {source unit} {destination unit}`\n" + error.toString();
		}
		return message.channel.send(out);
	}
};
