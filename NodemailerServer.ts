import express, {Express, Request, Response} from "express";
import nodemailer, {Transporter, SendMailOptions} from "nodemailer";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

export class NodemailerServer {
    private app: Express;
    private readonly port: number;
    private transporter: Transporter;

    public startServer() {
        this.app.listen(this.port, () => {
            console.log(`Serveur en cours d'exécution sur le port ${this.port}`);
        });
    }

    constructor() {
        dotenv.config();
        this.app = express();
        this.port = parseInt(process.env.PORT || "3000")

        this.app.use(bodyParser.json());

        this.transporter = nodemailer.createTransport({
            service: "Outlook",
            auth: {
                user: process.env.EMAIL_USER || "default@gmail.com",
                pass: process.env.EMAIL_PASS || "default"
            }
        });

        this.app.post("/send-email", this.sendEmail.bind(this));
    }

    private sendEmail(req: Request, res: Response) {
        const { name, email, subject, message } = req.body;

        const mailOptions: SendMailOptions = {
            from: "wbl-contact@gmail.com",
            to: "wbl-reception@gmail.com",
            subject: "Contact WBL-WebApp - " + subject,
            text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Erreur lors de l'envoi du courriel : " + error);
                res.status(500).json({ success: false, message: "Erreur lors de l'envoi du courriel" });
            } else {
                console.log("Courriel envoyé : " + info.response);
                res.status(200).json({ success: true, message: "Courriel envoyé avec succès" });
            }
        });
    }
}