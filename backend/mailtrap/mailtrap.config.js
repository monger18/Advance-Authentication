import { configDotenv } from 'dotenv'
import { MailtrapClient } from 'mailtrap'

configDotenv()
const TOKEN = process.env.MAILTRAP_TOKEN
const ENDPOINT = process.env.MAILTRAP_ENDPOINT

export const mailtrapclient = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
})

export const sender = {
  email: 'hello@demomailtrap.com',
  name: 'Satyam',
}
