require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./client'))


const port = process.env.PORT || 8800
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})

// opción 1:
// const homeProducts = require("./routes/homeProducts")

// opción 2: poner el require direcatemennte sin variable
app.use("/api", require("./routes/homeProducts"))

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to Irene's shop</h1>")
})