const botgram = require("botgram")
const bot = botgram("")
const cmd = require('node-cmd');
const fs = require("fs");

bot.command("start", "help", (msg, reply) =>
  reply.text("To schedule an alert, do: /alert <seconds> <text>"))

bot.command("alert", (msg, reply) => {
  var [ seconds, text ] = msg.args(2)
  if (!seconds.match(/^\d+$/) || !text) return next()

  setTimeout(() => reply.text(text), Number(seconds) * 1000)
})

bot.command("Saludo",(msg, reply)=>{
	reply.text(`Hola xodo ${msg.args(1)[0]}`)
})

bot.command("Agenda",(msg,reply)=>{
  if (msg.args(1)[0]) {
    console.log(msg.args(1)[0]);
    let rand = Math.round(new Date()/1000);
    cmd.run(`ttsmp3 "${msg.args(1)[0]}" -o ./archivos/${rand}.mp3 -l es -g ml`);
    const stream = fs.createReadStream(`./archivos/${rand}.mp3`);
    reply.audio(stream);
  }
})

bot.command((msg, reply) =>
  reply.text("Invalid command."))
