import express from "express";

const inquiriesRouter = express.Router();

import db from "./db.mjs";

import { sendInquiryEmail } from "./email.mjs";


// =====================================
// GET ALL INQUIRIES
// =====================================
inquiriesRouter.get("/", (req, res) => {

    try {

        const stmt = db.prepare(
            "SELECT * FROM INQUIRIES ORDER BY Created_At DESC"
        );

        const results = stmt.all();

        res.json(results);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Failed to retrieve inquiries"
        });

    }

});





// =====================================
// GET SINGLE INQUIRY
// =====================================
inquiriesRouter.get("/:id", (req, res) => {

    try {

        const stmt = db.prepare(
            "SELECT * FROM INQUIRIES WHERE Inquiry_ID = ?"
        );

        const result = stmt.get(req.params.id);


        if (!result) {

            return res.status(404).json({
                message: "Inquiry not found"
            });

        }


        res.json(result);


    } catch(err) {

        console.error(err);

        res.status(500).json({
            error:"Failed to retrieve inquiry"
        });

    }

});





// =====================================
// CREATE NEW INQUIRY
// =====================================
inquiriesRouter.post("/", async (req, res)=>{


    try {


        const {

            Route_ID,

            Origin,
            Destination,

            Travel_Date,
            Travel_Time,

            Passenger_Count,

            Checked_Luggage,
            Hand_Luggage,

            Preferred_Vehicle,

            Contact_Name,
            Contact_Phone,
            Contact_Email,
            Contact_Wechat,

            Remark


        } = req.body;





        const stmt = db.prepare(`

            INSERT INTO INQUIRIES

            (

                Route_ID,

                Origin,
                Destination,

                Travel_Date,
                Travel_Time,

                Passenger_Count,

                Checked_Luggage,
                Hand_Luggage,

                Preferred_Vehicle,

                Contact_Name,
                Contact_Phone,
                Contact_Email,
                Contact_Wechat,

                Remark,

                Status,

                Created_At

            )

            VALUES

            (

                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now')

            )

        `);





        const result = stmt.run(

            Route_ID || null,

            Origin,
            Destination,

            Travel_Date,
            Travel_Time,

            Passenger_Count,

            Checked_Luggage,
            Hand_Luggage,

            Preferred_Vehicle,

            Contact_Name,
            Contact_Phone,
            Contact_Email,
            Contact_Wechat,

            Remark,

            "Pending"

        );





        // =====================================
        // SEND EMAIL NOTIFICATION
        // =====================================

       try {

    await sendInquiryEmail({

        Contact_Name,

        Origin,
        Destination,

        Travel_Date,
        Travel_Time,

        Passenger_Count,

        Checked_Luggage,
        Hand_Luggage,

        Preferred_Vehicle,

        Contact_Phone,
        Contact_Email,

        Contact_Wechat,

        Remark

    });

} catch(emailError) {

    console.error(
        "Email notification failed:",
        emailError.message
    );

}





        res.json({

            message:"Inquiry created successfully",

            Inquiry_ID: result.lastInsertRowid

        });





    } catch(err) {


        console.error(err);


        res.status(500).json({

            error:"Failed to create inquiry"

        });


    }


});





export default inquiriesRouter;