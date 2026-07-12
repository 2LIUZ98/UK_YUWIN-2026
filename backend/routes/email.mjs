import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASSWORD

    }

});



export async function sendInquiryEmail(inquiry){


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


Vehicle:
${inquiry.Preferred_Vehicle}


Phone:
${inquiry.Contact_Phone}


Email:
${inquiry.Contact_Email}


Remark:
${inquiry.Remark || "None"}

    `;



    await transporter.sendMail({

        from: process.env.EMAIL_USER,

        to: process.env.EMAIL_RECEIVE,

        subject: "🚐 New Private Hire Inquiry",

        text: message

    });


}