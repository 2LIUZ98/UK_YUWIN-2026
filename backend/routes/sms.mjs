import twilio from "twilio";


const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);



export async function sendInquirySMS(inquiry) {


    const message = `

🚐 NEW BOOKING INQUIRY

Name:
${inquiry.Contact_Name}

Route:
${inquiry.Origin} → ${inquiry.Destination}

Travel Date:
${inquiry.Travel_Date}

Travel Time:
${inquiry.Travel_Time}

Passengers:
${inquiry.Passenger_Count}

Vehicle:
${inquiry.Preferred_Vehicle}

Checked Luggage:
${inquiry.Checked_Luggage}

Hand Luggage:
${inquiry.Hand_Luggage}

Phone:
${inquiry.Contact_Phone}

Email:
${inquiry.Contact_Email}

WeChat:
${inquiry.Contact_Wechat || "N/A"}

Remark:
${inquiry.Remark || "None"}

    `;


    try {


        await client.messages.create({

            body: message,

            from: process.env.TWILIO_PHONE_NUMBER,

            to: "+4475923844209"

        });


        console.log("Inquiry SMS sent successfully");


    } catch(err) {

        console.error(
            "Failed to send SMS:",
            err.message
        );

    }


}