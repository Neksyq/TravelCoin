import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const SERVICE_PORT = process.env.SERVICE_PORT;
app.listen(SERVICE_PORT, () => {
  console.log(`Service is running on port ${SERVICE_PORT}`);
});
