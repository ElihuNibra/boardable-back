//This will be deleted in the future
import express from "express";
import cors from "cors";

export const app = express();

const corsOptions = {
    origin: "http://127.0.0.1:5173",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get("/", (_req, res) => {
    res.json({ "test": "Instalacion de dependencias y librerias" });
});