import express from "express";
import connection from "./database/db.js";
import dotenv from 'dotenv';
import defaultData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();
//middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", router);


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

connection(username, password);
app.listen(PORT, () => {
    console.log("listening at port 8000");
});
//defaultData();