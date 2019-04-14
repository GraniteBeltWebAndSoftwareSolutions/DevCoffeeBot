// this was copied from https://github.com/DmsChrisPena/DevCoffeeBot

const Discord = require("discord.js");
const token = ""; //remember to put in token here from the channel you use

const client = new Discord.Client();

// this was copied from https://github.com/DmsChrisPena/DevCoffeeBot
client.on('message', (msg) =>  {
	if (msg.content === "!test"){
		msg.channel.send(`Hello ${msg.author}`);
	}
		if (msg.content === "!granitebeltweb"){
		msg.channel.send('https://github.com/GraniteBeltWebAndSoftwareSolutions');
	}
	
	
	if (msg.content === '!pretty-msg') {
		msg.channel.send('https://www.youtube.com/c/devcoffee');
		const embed = new Discord.RichEmbed()
        .setTitle('This is the title')
        .setDescription('This is the description field')
      // .addField('Field Name1', 'Field Value1', true)
      // .addField('Field Name2', 'Field Value2', true)
      // .addField('Field Name3', 'Field Value3', false)
      // .setAuthor('Tim Shenk', 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/11226559_10153351803422980_5095261185894120077_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-1.xx&oh=2368eb2c0f78f1df41962741df62e0a7&oe=5CD94B38')
      .setColor('#010101')
	msg.channel.send(embed);
	console.log(msg);
	}
});

client.on('ready', () => {
	console.log('bot is now connected');
	//client.channels.find(x => x.name === 'test').send("Hello. I\'m now connected")
	
});

client.login(token);

