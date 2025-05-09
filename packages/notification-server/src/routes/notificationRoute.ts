
import express from 'express';
import { sendEmail } from '../config/mailer';
import { validateTemplate } from '../mailTemplates/validateTemplate';
const notificationRoute = express.Router();

notificationRoute.post('/notification/send', (req: express.Request, res: express.Response) => {
    try{
        const {to, subject, data,type} = req.body;
        const mailtext=validateTemplate(type,data);
        console.log(mailtext)
        sendEmail(to, subject, mailtext);
        res.send('Email sent');
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to send email.' });
    }  
});

export default notificationRoute;