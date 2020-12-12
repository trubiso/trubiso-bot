module.exports = {
	name: '8ball',
	help: {
        category: 'general',
		brief: 'Da smilie gods will decide if they can agree with something',
		usage: '8ball [question]'
	},
    execute(message, args, client) {

        if (!args.length) {
            message.channel.send("You have to ask a question. <:really:717684438506405969>");
        }
        else {

        const answers = ["absolutlie, of cuors!! <:happy:717683480787550228>", "noe.. not at alle.. <:sad:717683548487811111>",
        "honestlie... <:angel_emotiguy:723288149530509342> i hav no ideae <:sad:717683548487811111>",
        "dat's obviouslie a noe <:sad:717683548487811111>", "2883!!",
        "i thinke soe.. <:think:750019258842480663>",
        "i dont think soe <:sad:717683548487811111>", "obviouslie <:glad:750313444758257734>",
        "i'm not suar <:think:750019258842480663>",
        "hard to answere <:sad2:725041947160477780>",
        "i'm 100% certaine, yese!! <:excited:729447550846763040>",
        "how am i supoesd to giv an anser to dat <:think:750019258842480663>",
        "maybi!! <:glad:750313444758257734>", "42!!", "wat da hekke? NOE!! <:angry_pink:753969564408086600>",
        "dis question doesnt maek sens <:think:750019258842480663>",
        "maybi <:think:750019258842480663>", "noe.. <:sad:717683548487811111>",
        "i dont wana tel yu <:silly:729411456491323412>",
        "of cuors!! <:happy:717683480787550228>", "yeahe <:glad:750313444758257734>",
        "i dubt it <:sad:717683548487811111>",
        "dat is verie easie <:really:717684438506405969>", "da rng says yese! <:glad:750313444758257734>"];

        let answer_pos = Math.floor(Math.random()*answers.length);
        let answer = answers[answer_pos];
        message.channel.send(answer);

        }
    },
};
