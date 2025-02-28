const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deamoncompany18@gmail.com",
    pass: "tu-contraseña-de-app",
  },
});

exports.enviarCorreo = functions.firestore
  .document("contactos/{contactoId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: "tu-email@gmail.com",
      to: "tu-email@gmail.com",
      subject: "Nuevo mensaje de contacto",
      text: `
        Nombre: ${data.nombre}
        Apellido: ${data.apellido}
        Empresa: ${data.empresa}
        Email: ${data.email}
        Mensaje: ${data.mensaje}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Correo enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  });
