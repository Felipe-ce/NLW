const proffys = [
  {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "8899998887",
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórioe por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject: "Quimica",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_out: [1220]
  },
  {
    name: "Daniele",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "8899998887",
    bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratórioe por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject: "Quimica",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_out: [1220]
  }
]

function pageLanding(req, res) {
  return res.sendFile("index.html")
}
function pageStudy(req, res) {
  return res.sendFile("study.html", { diego: proffys[0] })
}
function pagegiveClasses(req, res) {
  return res.sendFile("give-classes.html")
}
const express = require('express')
const server = express()


// configurar nunjucks
const nunjucks = requier('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


server
  // configurar arquivos estaticos (css, sripts, imagens)
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pagegiveClasses)
  .listen(5500)