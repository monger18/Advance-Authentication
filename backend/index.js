import express from 'express'
import { connectDB } from './db/connetDB.js'
import { configDotenv } from 'dotenv'
import authRoutes from './routes/auth.route.js'

configDotenv()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  connectDB()
  console.log('Server is running on PORT:', PORT)
})
