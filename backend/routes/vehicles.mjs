import express from "express";
const vehiclesRouter = express.Router();
import db from "./db.mjs";

// Retrieves all records from the VEHICLES table
vehiclesRouter.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM VEHICLES");
    const results = stmt.all();
    res.json(results);
});

// Retrieves a specific vehicle by Vehicle_ID
vehiclesRouter.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM VEHICLES WHERE Vehicle_ID = ?");
    const result = stmt.get(req.params.id);
    res.json(result);
});

export default vehiclesRouter;