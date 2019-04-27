const express = require('express')
const app = express()
const port = 9998

app.get('/', (req, res) =>
  res.send('Greetings from wuttachai...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
