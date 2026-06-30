import express from "express";
const categoriesRouter = express.Router();
import db from "./db.mjs";

// Retrieves all records from the ROUTE_CATEGORIES table
categoriesRouter.get("/", (req, res) => {
    const stmt = db.prepare("SELECT * FROM ROUTE_CATEGORIES");
    const results = stmt.all();
    res.json(results);
});

// Retrieves a specific category by Category_ID
categoriesRouter.get("/:id", (req, res) => {
    const stmt = db.prepare("SELECT * FROM ROUTE_CATEGORIES WHERE Category_ID = ?");
    const result = stmt.get(req.params.id);
    res.json(result);
});

export default categoriesRouter;