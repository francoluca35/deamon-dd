'use client'
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, apellido, empresa, email, mensaje } = req.body;

  if (!nombre || !apellido || !empresa || !email || !mensaje) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${nombre} ${apellido}" <${process.env.EMAIL_USER}>`,
      to: "deamoncompany18@gmail.com",
      subject: `Nuevo mensaje de ${nombre} ${apellido}`,
      text: `Nombre: ${nombre} ${apellido}
      Empresa: ${empresa}
      Email: ${email}
      
      Mensaje:
      ${mensaje}`,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ message: "Error al enviar el correo", error });
  }
}
