import nodemailer from "nodemailer";
import envConfig from "../configs/envConfig";
import Handlebars from "handlebars";
import fs from "fs";
import path from "path";

const transporter = nodemailer.createTransport({
    host: envConfig.SMTP_HOST,
    port: envConfig.SMTP_PORT,
    secure: false,
    auth: {
        user: envConfig.SMTP_USERNAME,
        pass: envConfig.SMTP_PASS,
    },
});

const cachedTemplates: { [key: string]: Handlebars.TemplateDelegate } = {};

const getTemplate = (templateName: string) => {
    if (cachedTemplates[templateName]) {
        return cachedTemplates[templateName];
    }

    const templatePath = path.join(__dirname, `../templates/${templateName}.hbs`);
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const template = Handlebars.compile(templateSource);
    cachedTemplates[templateName] = template;

    return template;
};

const emailTransporter = async (email: string, subject: string, emailTemplate: string, data: object) => {
    const template = getTemplate(emailTemplate);
    const html = template(data);

    const mailOptions = {
        from: "testing@yuvamanthan.org",
        to: `${email}`,
        subject,
        html,
    };

    return await transporter.sendMail(mailOptions);
};

export default emailTransporter;

