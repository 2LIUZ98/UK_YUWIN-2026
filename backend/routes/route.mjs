import express from "express";
const routesRouter = express.Router();
import db from "./db.mjs";

// Retrieves all routes
routesRouter.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM ROUTES");
    const results = stmt.all();
    res.json(results);
});

// Retrieves a route by ID
routesRouter.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM ROUTES WHERE Route_ID = ?");
    const result = stmt.get(req.params.id);

    if (!result) {
        return res.status(404).json({ message: "Route not found" });
    }

    res.json(result);
});

export default routesRouter;