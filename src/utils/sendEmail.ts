// import type { NextApiRequest, NextApiResponse } from 'next'
// import nodemailer from 'nodemailer'

export const sendEmail = (
  name: string,
  surname: string,
  email: string,
  phone: string,
  message: string
) => {};

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' })
//   }

//   const { name, surname, email, phone, message } = req.body

//   if (!name || !surname || !email || !phone || !message) {
//     return res.status(400).json({ message: 'Missing required fields' })
//   }

//   try {
//     // Configura il trasportatore SMTP (es. Gmail o SMTP personalizzato)
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false, // true se usi 465, false per altri
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     })

//     const mailOptions = {
//       from: `"${name} ${surname}" <${email}>`,
//       to: process.env.CONTACT_EMAIL, // Dove vuoi ricevere il messaggio
//       subject: 'Nuovo messaggio dal modulo di contatto',
//       text: `
// Nome: ${name}
// Cognome: ${surname}
// Email: ${email}
// Telefono: ${phone}

// Messaggio: ${message}
//       `,
//     }

//     await transporter.sendMail(mailOptions)

//     return res.status(200).json({ message: 'Email inviata con successo' })
//   } catch (error) {
//     console.error('Errore nell\'invio email:', error)
//     return res.status(500).json({ message: 'Errore durante l\'invio della mail' })
//   }
// }
