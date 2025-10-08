# Configuración de Email para el Formulario de Contacto

## ✅ Problema Solucionado

Se ha solucionado el error de timeout al enviar correos desde el formulario de contacto.

## 🔧 Cambios Realizados

### 1. Nueva API Route en Next.js
- ✅ Creado `app/api/enviar-correo/route.js` siguiendo el formato correcto de Next.js App Router
- ✅ Aumentado el timeout a 15 segundos en la configuración de Nodemailer
- ✅ Mejorado el manejo de errores
- ✅ Agregada validación de datos
- ✅ HTML mejorado para los correos

### 2. Actualización del Formulario de Contacto
- ✅ Cambiado de `${process.env.NEXT_PUBLIC_API_URL}/enviar-correo` a `/api/enviar-correo`
- ✅ Aumentado el timeout de 10 a 20 segundos
- ✅ Ahora usa la API route interna de Next.js

### 3. Eliminación de Archivos Obsoletos
- ✅ Eliminado `app/api/enviar-correo.js` (formato incorrecto)
- ✅ Eliminado `app/api/server.js` (servidor Express innecesario)
- ✅ Eliminado `app/api/testEmail.js` (contenía credenciales expuestas)

## 📝 Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con:

```env
EMAIL_USER=deamoncompany18@gmail.com
EMAIL_PASS=qqpjocekljsjgwvf
```

**IMPORTANTE:**
- ✅ Ya tienes configuradas las credenciales correctas en el código
- ✅ La contraseña es una "App Password" de Gmail (no la contraseña normal)
- ⚠️ NUNCA subas el archivo `.env.local` a Git (ya está en `.gitignore`)

## 🚀 Cómo Funciona Ahora

1. El usuario llena el formulario de contacto
2. El formulario envía una petición POST a `/api/enviar-correo`
3. La API route valida los datos
4. Nodemailer envía el correo usando Gmail
5. El usuario recibe confirmación de envío exitoso

## ✨ Mejoras Implementadas

- **Timeout aumentado**: De 10s a 20s para evitar errores
- **Mejor manejo de errores**: Mensajes más descriptivos
- **Validación mejorada**: Verifica email y campos requeridos
- **HTML en correos**: Los correos ahora se ven profesionales
- **Seguridad**: Credenciales en variables de entorno

## 🧪 Cómo Probar

1. Asegúrate de tener el archivo `.env.local` configurado
2. Reinicia el servidor de desarrollo: `npm run dev`
3. Ve a la sección de contacto en tu sitio
4. Llena el formulario y envía
5. Deberías recibir el correo en `deamoncompany18@gmail.com`

## ❗ Si Aún Tienes Problemas

Si continúas teniendo errores de timeout:

1. **Verifica tu conexión a internet**
2. **Revisa las credenciales de Gmail**:
   - Asegúrate de usar una "App Password" válida
   - Verifica que el email sea correcto
3. **Habilita acceso de apps menos seguras** (si es necesario):
   - Ve a https://myaccount.google.com/security
   - Busca "Acceso de apps menos seguras"
4. **Verifica la configuración de Gmail**:
   - SMTP debe estar habilitado
   - 2FA (autenticación de dos factores) debe estar configurado para usar App Passwords

## 📦 Dependencias

El proyecto ya tiene instalado:
- `nodemailer` - Para enviar correos
- `axios` - Para hacer peticiones HTTP

No necesitas instalar nada adicional.

## 🔒 Seguridad

- ✅ Las credenciales están en variables de entorno
- ✅ El archivo `.env.local` NO se sube a Git
- ✅ La validación previene inyección de código
- ✅ Los correos usan HTML sanitizado

---

**Fecha de actualización**: 8 de Octubre, 2025
**Autor**: Asistente de IA

