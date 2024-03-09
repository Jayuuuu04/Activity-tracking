import express from "express"

const app = express()

const port = process.env.PORT || 8000


app.get('/', (req,res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`App is Running on port : http//localhost:{port}`)
})