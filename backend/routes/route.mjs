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
// Airport routes ONLY (Category_ID = 1)
routesRouter.get("/airport/all", (req, res) => {
    try {
        const stmt = db.prepare(`
            SELECT *
            FROM ROUTES
            WHERE Category_ID = 1
        `);

        const results = stmt.all();
        res.json(results);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch airport routes" });
    }
});

export default routesRouter;