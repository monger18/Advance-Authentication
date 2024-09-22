import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplate.js'
import { mailtrapclient, sender } from './mailtrap.config.js'

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }]

  try {
    const response = await mailtrapclient.send({
      from: sender,
      to: recipient,
      subject: 'Verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verificationToken
      ),
      category: 'Email Verification',
    })
    console.log('Email sent successfully', response)
  } catch (error) {
    console.error(`Error sending verification`, error)
    throw new Error(`Error sending verification email: ${error}`)
  }
}

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }]
  try {
    const res = await mailtrapclient.send({
      from: sender,
      to: recipient,
      template_uuid: '65653859-f4ff-4544-b24a-e76102d0c504',
      template_variables: {
        company_info_name: 'FutAuth',
        name: name,
      },
    })
    console.log('Welcome email sent successfully', res)
  } catch (error) {
    console.error(`Error sending welcome email`, error)
    throw new Error(`Error sending welcome email:${error}`)
  }
}
