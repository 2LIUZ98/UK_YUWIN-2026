import nodemailer from "nodemailer";
import dns from "dns";


dns.setDefaultResultOrder("ipv4first");


const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 587,

    secure: false,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASSWORD

    },

    connectionTimeout: 10000,

    greetingTimeout: 10000,

    socketTimeout: 10000

});


export async function sendInquiryEmail(inquiry) {

    console.log("📧 Preparing email...");


    const message = `

🚐 NEW BOOKING INQUIRY

Name:
${inquiry.Contact_Name}

Route:
${inquiry.Origin} → ${inquiry.Destination}

Date:
${inquiry.Travel_Date}

Time:
${inquiry.Travel_Time}

Passengers:
${inquiry.Passenger_Count}

Phone:
${inquiry.Contact_Phone}

Email:
${inquiry.Contact_Email}

Remark:
${inquiry.Remark || "None"}

`;


    console.log("📧 Sending email...");


    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_RECEIVE,

        subject: "🚐 New Private Hire Inquiry",

        text: message

    });


    console.log("✅ Email sent");

}