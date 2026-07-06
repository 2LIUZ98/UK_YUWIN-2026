import express from "express";
const routesRouter = express.Router();
import db from "./db.mjs";

// existing routes
routesRouter.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM ROUTES");
    const results = stmt.all();
    res.json(results);
});

routesRouter.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM ROUTES WHERE Route_ID = ?");
    const result = stmt.get(req.params.id);

    if (!result) {
        return res.status(404).json({ message: "Route not found" });
    }

    res.json(result);
});


// ==============================
// NEW: Airport Transfer API
// ==============================
routesRouter.get("/airport/all", (req, res) => {
    try {
        const stmt = db.prepare(`
            SELECT 
                r.Route_ID,
                r.Start_Point,
                r.Destination,
                c.Category_Name,
                r.Price_1_Passenger,
                r.Price_2_Passengers,
                r.Price_3_Passengers,
                r.Price_4_Passengers,
                r.Price_5_Passengers,
                r.Price_6_Passengers,
                r.Price_7_Passengers,
                r.Price_8_Passengers
            FROM ROUTES r
            JOIN route_categories c
            ON r.Category_ID = c.Category_ID
        `);

        const results = stmt.all();
        res.json(results);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch airport routes" });
    }
});

export default routesRouter;