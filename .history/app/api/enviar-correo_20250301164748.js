'use client'
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, apellido, empresa, email, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "deamoncompany18@gmail.com",
      pass: "qqpjocekljsjgwvf",
    },
  });

  const mailOptions = {
    from: `"${nombre} ${apellido}" <deamoncompany18@gmail.com>`,
    to: "deamoncompany18@gmail.com",
    subject: `Nuevo mensaje de ${nombre} ${apellido}`,
    text: `Empresa: ${empresa}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
}
