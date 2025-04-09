import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, surname, email, phone, message } = body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.CLIENT_EMAIL,
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Cognome:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Messaggio:</strong> ${message}</p>
      `,
    })
    return NextResponse.json({ message: 'Messaggio inviato con successo, verrai contattato presto!' }, { status: 200 })
  } catch (error) {
    console.error('Errore invio email:', error)
    return NextResponse.json({ message: 'Errore durante l’invio dell’email, stiamo risolvendo il problema. Contattaci a p.spallone@libero.it' }, { status: 500 })
  }
}

