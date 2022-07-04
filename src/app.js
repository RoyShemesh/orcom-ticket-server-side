import morgan from "morgan";
import express from "express";
import axios from "axios";
import cors from "cors";
import { REACT_APP_API_KEY } from "./utils/config.js";
const app = express();
app.use(cors());
app.use(express.json());
morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
const APIUrl = "https://orcom-it.manavate.com/api/tickets/create";

app.post("/addTicket", async (req, res) => {
  try {
    const { name, subject, email, description } = req.body;
    if (!name || !subject || !email || !description)
      res.send("Missing data").status(400);
    const data = await axios.post(APIUrl, req.body, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "auth-token": REACT_APP_API_KEY,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

export default app;
