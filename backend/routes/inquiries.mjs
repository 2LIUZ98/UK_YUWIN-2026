import express from "express";
const inquiriesRouter = express.Router();
import db from "./db.mjs";

// Retrieves all records from the INQUIRIES table
inquiriesRouter.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM INQUIRIES");
    const results = stmt.all();
    res.json(results);
});


// Retrieves a specific inquiry by Inquiry_ID
inquiriesRouter.get("/:id", (req, res) => {
    const stmt = db.prepare(
        "SELECT * FROM INQUIRIES WHERE Inquiry_ID = ?"
    );

    const result = stmt.get(req.params.id);
    res.json(result);
});


// Adds a new inquiry
inquiriesRouter.post("/", (req, res) => {

    const {
        Route_ID,
        Vehicle_ID,
        Origin,
        Destination,
        Travel_Date,
        Travel_Time,
        Passenger_Count,
        Checked_Luggage_Count,
        Hand_Luggage_Count,
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
            Vehicle_ID,
            Origin,
            Destination,
            Travel_Date,
            Travel_Time,
            Passenger_Count,
            Checked_Luggage_Count,
            Hand_Luggage_Count,
            Contact_Name,
            Contact_Phone,
            Contact_Email,
            Contact_Wechat,
            Remark
        )
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);


    const result = stmt.run(
        Route_ID,
        Vehicle_ID,
        Origin,
        Destination,
        Travel_Date,
        Travel_Time,
        Passenger_Count,
        Checked_Luggage_Count,
        Hand_Luggage_Count,
        Contact_Name,
        Contact_Phone,
        Contact_Email,
        Contact_Wechat,
        Remark
    );


    res.json({
        message: "Inquiry created successfully",
        Inquiry_ID: result.lastInsertRowid
    });

});


export default inquiriesRouter;