const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const fetch = require("node-fetch");

export namespace EmailController {
    export async function SendEmail(emailConfig: any): Promise<any> {
        return new Promise((resolve: (result) => void, reject: (error: Error) => void) => {

            validateHuman(emailConfig.reCAPTCHAToken).then((data) => {


                let msg = {
                    to: 'wohamilton@gmail.com',
                    from: process.env.SENDGRID_VERIFIED_EMAIL,
                    subject: 'Default',
                    text: 'Something is not quite right here, contact your IT support.',
                    html: 'Something is not quite right here, contact your IT support.'
                }

                if (emailConfig.type === "CONTACT-FORM") {
                    msg = {
                        ...msg,
                        subject: `TMB Website Contact Form Submitted: ${emailConfig.name}`,
                        text: 'Contact form submitted from the The Marriage Bureau website.',
                        html: `
                    Contact form submitted from the The Marriage Bureau website. Details as follows: <br />
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${emailConfig.name}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>${emailConfig.email}</td>
                            </tr>
                            <tr>
                                <td>Telephone:</td>
                                <td>${emailConfig.phone}</td>
                            </tr>
                            <tr>
                                <td>Company:</td>
                                <td>${emailConfig.company}</td>
                            </tr>
                            <tr>
                                <td>Message:</td>
                                <td>${emailConfig.message}</td>
                            </tr>
                        </tbody>
                    <table>
                    `
                    }
                } else if (emailConfig.type === "BUYER-JOURNEY") {
                    msg = {
                        ...msg,
                        subject: `New Marriage Bureau Buyer Journey Completed: ${emailConfig.name}`,
                        text: 'New Marriage Bureau Buyer Journey Completed.',
                        html: `
                    Buyer journey completed on The Marriage Bureau website. Details as follows: <br />
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${emailConfig.name}</td>
                            </tr>
                            <tr>
                                <td>Company Name:</td>
                                <td>${emailConfig.companyName}</td>
                            </tr>
                            <tr>
                                <td>Telephone:</td>
                                <td>${emailConfig.phone}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>${emailConfig.email}</td>
                            </tr>
                            <tr>
                                <td>Required Client Location List:</td>
                                <td>${emailConfig.isDontMind ? "Don't mind" : JSON.stringify(emailConfig.clientLocationList)}</td>
                            </tr>
                            <tr>
                                <td>Specific Location Details:</td>
                                <td>${emailConfig.specificLocationDetails}</td>
                            </tr>
                            <tr>
                                <td>AUM:</td>
                                <td>${emailConfig.aum}</td>
                            </tr>
                            <tr>
                                <td>Clients:</td>
                                <td>${emailConfig.clients}</td>
                            </tr>
                            <tr>
                                <td>Advisers:</td>
                                <td>${emailConfig.advisers}</td>
                            </tr>
                            <tr>
                                <td>Timescale:</td>
                                <td>${emailConfig.timescale}</td>
                            </tr>
                        </tbody>
                    <table>
                    `
                    }
                } else if (emailConfig.type === "SELLER-JOURNEY") {
                    msg = {
                        ...msg,
                        subject: `New Marriage Bureau Seller Journey Completed: ${emailConfig.name}`,
                        text: 'New Marriage Bureau Seller Journey Completed.',
                        html: `
                    Seller journey completed on The Marriage Bureau website. Details as follows: <br />
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>${emailConfig.name}</td>
                            </tr>
                            <tr>
                                <td>Company Name:</td>
                                <td>${emailConfig.companyName}</td>
                            </tr>
                            <tr>
                                <td>Telephone:</td>
                                <td>${emailConfig.phone}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>${emailConfig.email}</td>
                            </tr>
                            <tr>
                                <td>Required Client Location List:</td>
                                <td>${emailConfig.isDontMind ? "Nationwide" : JSON.stringify(emailConfig.clientLocationList)}</td>
                            </tr>
                            <tr>
                                <td>Specific Location Details:</td>
                                <td>${emailConfig.specificLocationDetails}</td>
                            </tr>
                            <tr>
                                <td>AUM:</td>
                                <td>${emailConfig.aum}</td>
                            </tr>
                            <tr>
                                <td>Clients:</td>
                                <td>${emailConfig.clients}</td>
                            </tr>
                            <tr>
                                <td>Advisers:</td>
                                <td>${emailConfig.advisers}</td>
                            </tr>
                            <tr>
                                <td>Timescale:</td>
                                <td>${emailConfig.timescale}</td>
                            </tr>
                        </tbody>
                    <table>`
                    }
                }

                sgMail.send(msg).then(() => {
                    resolve(`reCAPTCHA valitated and email sent.`)
                }).catch((error) => {
                    console.error(error)
                })

            }).catch((error) => {
                console.log(error)
            })
        });
    }

    async function validateHuman(token: string): Promise<boolean> {
        const secret = process.env.RECAPTCHA_SECRET_KEY
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
            {
                method: "POST"
            })

        const data = await response.json();
        console.log(data)
        return data.success;
    }
}