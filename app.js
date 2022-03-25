const express = require('express')

const app = express()
app.use(express.json())
app.use('/api/users', require('./routes/api/users'))

const PORT = 4000

app.listen({port: PORT}, async () => {
  console.log(`Server Running at http://localhost:${PORT}`)
})