const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.get('/test', (req, res) => res
    .status(200)
    .send({ message:'Welcome to BQs API'}))

app.listen(PORT, () => console.log(`Server running up the hill beyond ${port}`))

module.exports = app