require("dotenv").config();  // Cargar variables de entorno

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configurar Nodemailer con variables de entorno
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para manejar el envío de correos
app.post("/enviar-correo", (req, res) => {
  const { nombre, apellido, empresa, email, mensaje } = req.body;

  if (!nombre || !apellido || !empresa || !email || !mensaje) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const mailOptions = {
    from: `"${nombre} ${apellido}" <${process.env.EMAIL_USER}>`, 
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${nombre} ${apellido}`,
    text: `Nombre: ${nombre} ${apellido}
Empresa: ${empresa}
Email: ${email}

Mensaje:
${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar correo:", error);
      return res.status(500).json({ message: "Error al enviar el correo", error });
    }
    console.log("Correo enviado:", info.response);
    return res.status(200).json({ message: "Correo enviado exitosamente", info });
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
