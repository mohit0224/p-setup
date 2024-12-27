declare module "nodemailer-express-handlebars" {
    import { Options } from "nodemailer";

    interface ViewEngineOptions {
        extName: string;
        partialsDir?: string | string[];
        layoutsDir?: string;
        defaultLayout?: string | false;
    }

    interface HandlebarsOptions {
        viewEngine: ViewEngineOptions;
        viewPath: string;
        extName: string;
    }

    const hbs: (options: HandlebarsOptions) => (mail: Options) => void;

    export = hbs;
}

import "nodemailer";

declare module "nodemailer" {
    interface Options {
        template?: string; // Add template as an optional property
        context?: Record<string, unknown>; // Add context for template variables
    }
}

