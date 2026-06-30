import express from "express";
import cors from "cors";
import ViteExpress from "vite-express";

import routesRouter from "./routes/routes.mjs";
import vehiclesRouter from "./routes/vehicles.mjs";
import inquiriesRouter from "./routes/inquiries.mjs";
import categoriesRouter from "./routes/categories.mjs";

// Initialise Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Register API routes
app.use("/routes", routesRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/inquiries", inquiriesRouter);
app.use("/categories", categoriesRouter);

// Start server using ViteExpress
ViteExpress.listen(app, 3000, () => {
    console.log("Server running at http://localhost:3000");
});