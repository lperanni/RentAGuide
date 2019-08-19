import express from "express";
import router from "./routes/routes.index";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen( process.env.PORT, () => {
  console.log(`Server running on ${ process.env.PORT }`);
});