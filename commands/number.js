module.exports = {
	name: 'random',
	help: {
        category: 'maths',
		brief: 'Random!',
		usage: 'random'
	},
	execute(message, args, client) {
                const i = Math.random();
                a = i * Math.pow(i, Math.PI * (i / Math.sqrt(2 * i)));
                a *= Math.sign(a);
                a *= Math.pow(Math.cos(a), 2);
                a *= Math.pow(Math.sqrt(a) * (a / Math.sqrt(2 * a)), Math.PI);
                a *= 10**8;

                b = i * Math.sqrt(i) - Math.sqrt(2 * i)
                b *= Math.sign(b);
                b *= Math.sqrt(Math.sin(b) * 2);
                b *= Math.sqrt(Math.pow(a, Math.PI) * (a / Math.pow(a, 2)));

                c = (a + b) / 2;
                message.channel.send(`Random number: **${c.toString()}**`);
	},
};