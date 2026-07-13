console.log("✅ Database insert completed.");

try {

    console.log("📧 Sending email...");

    await sendInquiryEmail({

        Contact_Name,

        Origin,
        Destination,

        Travel_Date,
        Travel_Time,

        Passenger_Count,

        Checked_Luggage_Count,
        Hand_Luggage_Count,

        Contact_Phone,
        Contact_Email,

        Contact_Wechat,

        Remark

    });

    console.log("✅ Email finished.");

} catch (emailError) {

    console.error("❌ Email notification failed:");
    console.error(emailError);

}

console.log("✅ Sending HTTP response.");

res.json({

    message: "Inquiry created successfully",

    Inquiry_ID: result.lastInsertRowid

});