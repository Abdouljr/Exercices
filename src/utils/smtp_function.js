const nodemailer = require('nodemailer');


async function sendEmail(userEmail, message){

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: userEmail,
        subject: "Ir-yoobo Verification Code",
        html: `<h1>Ir-yoobo Verification Par Email</h1>
        <p>Votre code de verification est:</p>
        <h2 style="color: blue;">${message}</h2>
        <p>Veillez entrée votre code de verification pour completer le processus d'enregisterement de votre compte</p>
        <p>Si vous n'avez pas fait une requêtte avec cet email,  veillez ignorer cet email.</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("l'email de vérification est envoyé");
    } catch (error) {
        console.log("Erreur lors de l'envoi d'email de vérification", error.message);
        
    }
}

module.exports = sendEmail;