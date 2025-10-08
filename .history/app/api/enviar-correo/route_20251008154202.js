import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { nombre, apellido, empresa, email, mensaje } = await request.json();

    // Validación de datos
    if (!nombre || !apellido || !empresa || !email || !mensaje) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'El email no es válido' },
        { status: 400 }
      );
    }

    // Configuración de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'deamoncompany18@gmail.com',
        pass: process.env.EMAIL_PASS || 'qqpjocekljsjgwvf',
      },
      timeout: 15000, // 15 segundos de timeout
    });

    // Opciones del correo
    const mailOptions = {
      from: process.env.EMAIL_USER || 'deamoncompany18@gmail.com',
      replyTo: email,
      to: process.env.EMAIL_USER || 'deamoncompany18@gmail.com',
      subject: `Nuevo mensaje de ${nombre} ${apellido} - ${empresa}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #673372; border-bottom: 2px solid #673372; padding-bottom: 10px;">Nuevo Mensaje de Contacto</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${nombre} ${apellido}</p>
            <p style="margin: 10px 0;"><strong>Organización:</strong> ${empresa}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Mensaje:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Este mensaje fue enviado desde el formulario de contacto de www.deamondd.com</p>
          </div>
        </div>
      `,
      text: `
Nuevo Mensaje de Contacto

Nombre: ${nombre} ${apellido}
Organización: ${empresa}
Email: ${email}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de www.deamondd.com
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Correo enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    
    return NextResponse.json(
      { 
        message: 'Error al enviar el correo',
        error: error.message 
      },
      { status: 500 }
    );
  }
}

// Opcional: Manejar otros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { message: 'Método no permitido. Use POST para enviar correos.' },
    { status: 405 }
  );
}

