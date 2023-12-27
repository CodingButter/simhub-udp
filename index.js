//create a express app and serve a react app located at /Users/codingbutter/Documents/GitHub/simhub-udp/build
const express = require("express")
const path = require("path")
const app = express()
const port = 3000

//serve the react app
app.use(express.static(path.join(__dirname, "build")))

//start the server
app.listen(port, () => console.log(`Listening on port ${port}`))
