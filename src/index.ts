import * as dotenv from "dotenv";
import express, { application } from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import { router } from "./routes/index";
import connect from "./utils/dbconnect"

dotenv.config();

if(!process.env.PORT){
    process.exit(1)
}

const app = express();
const PORT:number = parseInt(process.env.PORT as string, 10);

app.use(helmet());
app.use(cors({
    origin: process.env.ALLOW_ORIGIN
}));
app.use(express.json());

app.use('/', router);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
    console.log('Listening at ', PORT);
    connect();
});