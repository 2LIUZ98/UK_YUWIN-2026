import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASSWORD

    }

});


// Verify transporter when the server starts
transporter.verify(function (err, success) {

    if (err) {

        console.error("❌ Mail transporter error:");
        console.error(err);

    } else {

        console.log("✅ Mail transporter is ready.");

    }

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

    console.log("✅ Email sent.");
    console.log(info);
}