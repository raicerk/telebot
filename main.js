const botgram = require("botgram")
const bot = botgram("477829273:AAFKH-a5wMTAvyk2o-6hH0dLRfo6hYsSPyE")

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

bot.command((msg, reply) =>
  reply.text("Invalid command."))
