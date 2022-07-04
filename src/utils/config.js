import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 8080;
export const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
