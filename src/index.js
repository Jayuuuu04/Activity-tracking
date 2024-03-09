import express from "express"

const app = express()

const port = 3000

import sequelize from "./config/mysql_db.js"

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`App is Running on port : http://localhost:${port}`)
})