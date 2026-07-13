import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASSWORD

    },

    connectionTimeout: 10000,

    greetingTimeout: 10000,

    socketTimeout: 10000

});



// Test SMTP connection when server starts
(async () => {

    try {

        await transporter.verify();

        console.log("✅ Gmail SMTP connection successful");

    } catch (err) {

        console.error("❌ Gmail SMTP connection failed");

        console.error(err);

    }

})();



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


Checked Luggage:
${inquiry.Checked_Luggage_Count}


Hand Luggage:
${inquiry.Hand_Luggage_Count}


Phone:
${inquiry.Contact_Phone}


Email:
${inquiry.Contact_Email}


WeChat:
${inquiry.Contact_Wechat}


Remark:
${inquiry.Remark || "None"}

`;



    console.log("📧 Sending email...");


    const info = await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_RECEIVE,

        subject: "🚐 New Private Hire Inquiry",

        text: message

    });


    console.log("✅ Email sent:", info.messageId);


}