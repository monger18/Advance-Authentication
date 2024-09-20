import express from 'express'
import { connectDB } from './db/connetDB.js'
import { configDotenv } from 'dotenv'

configDotenv()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(3000, () => {
  connectDB()
  console.log('Server is running on PORT 3000')
})
