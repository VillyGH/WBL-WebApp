const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;


export const startMailServer = () => {
    app.use(bodyParser.json());
    app.listen(port, () => {
        console.log(`Serveur en cours d'exécution sur le port ${port}`);
    });
}

const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
        user: "wbl-contact@gmail.com",
        pass: "wbl-contact"
    }
});

app.post("/send-email", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    const mailOptions = {
        from: "wbl-contact@gmail.com",
        to: "wbl-reception@gmail.com",
        subject: "Contact WBL-WebApp - " + subject,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Erreur lors de l'envoi du courriel : " + error);
            res.status(500).json({ success: false, message: "Erreur lors de l'envoi du courriel" });
        } else {
            console.log("Courriel envoyé : " + info.response);
            res.status(200).json({ success: true, message: "Courriel envoyé avec succès" });
        }
    });
});

