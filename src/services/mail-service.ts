import nodemailer, {
  SentMessageInfo,
  TransportOptions,
  Transporter,
} from "nodemailer"

type MailServiceProps = {
  fullname: string
  email: string
  bodytext: string
}

export default async function MailService({
  fullname,
  email,
  bodytext,
}: MailServiceProps): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  } as TransportOptions)

  // Email for admin
  const emailForAdmin = `
    <p>Nouvelle demande reçue depuis le formulaire de contact.</p>
    <h3>Détails de la demande</h3>
    <p>Nom : ${fullname}</p>
    <p>Email : ${email}</p>
    <h3>Contenu du message</h3>
    <p>${bodytext}</p>
  `

  const emailForUser = `Hey, I got your message! I'll get back to you asap.`

  const mailOptions = [
    {
      from: `${fullname} ${email}`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New message',
      html: emailForAdmin,
    },
    {
      from: `${process.env.ADMIN_FULLNAME} ${process.env.ADMIN_EMAIL}`,
      to: email,
      subject: "Thanks for your message",
      html: emailForUser,
    },
  ]

  const sendMailPromise = ({
    transporter,
    mailOptions,
  }: {
    transporter: Transporter
    mailOptions: any
  }): Promise<SentMessageInfo> => {
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error)
        } else {
          resolve(info)
        }
      })
    })
  }

  await Promise.all([
    sendMailPromise({ transporter, mailOptions: mailOptions[0] }),
    sendMailPromise({ transporter, mailOptions: mailOptions[1] }),
  ])
}
