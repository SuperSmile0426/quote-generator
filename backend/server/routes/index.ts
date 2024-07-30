import express from "express";
import quoteRouter from "./quoteRoutes";

const appRoutes = express.Router();

appRoutes.use("/quotes", quoteRouter);
export default appRoutes;
