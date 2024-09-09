const express = require(`express`)
const homePage = require(`../controllers/homePage`)
const pageNotFound = require(`../controllers/pageNotFound`)
const sendMessage = require(`../controllers/sendMessage`)
const successPage = require(`../controllers/successPage`)

// server

const app = express()
const port = 5500 || process.env.PORT

// in-built middleware

app.use(express.urlencoded({extended: false}))
app.use(express.static(`public`))

// register a view engine

app.set(`view engine`, `ejs`)

// handling get requests

app.get(`/`, homePage)
app.get(`/success`, successPage)

// handling post requests

app.post(`/form/send`, sendMessage)

// handling wrong requests

app.all(`*`, pageNotFound)

// server init

app.listen(port, () => { console.log(`Server listening on port ${port}`) })

module.exports = app