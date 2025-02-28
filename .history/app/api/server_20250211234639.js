const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deamoncompany18@gmail.com",  // Tu correo Gmail
    pass: "qqpjocekljsjgwvf", // Contraseña de la cuenta o contraseña de aplicación de Gmail
  },
});

// Ruta para manejar el envío de correos
app.post("/enviar-correo", (req, res) => {
  const { nombre, apellido, empresa, email, mensaje } = req.body;

  const mailOptions = {
    from: "tu-correo@gmail.com", // Tu correo
    to: "destinatario@dominio.com", // El correo que recibirá el mensaje
    subject: "Nuevo mensaje de contacto",
    text: `Nombre: ${nombre} ${apellido}\nEmpresa: ${empresa}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error al enviar el correo", error });
    }
    return res.status(200).json({ message: "Correo enviado exitosamente", info });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
