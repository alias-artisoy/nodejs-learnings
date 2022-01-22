import mongoose from 'mongoose';
import log from "../logger/index";

const connect = async (): Promise<void> => {
    const DB_PORT: number = parseInt(process.env.DB_PORT);
    const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
    const dbUri = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`;

    try {
        await mongoose.connect(dbUri);
        log.info("Database connected successfully!");
    } catch (error) {
        log.error("Database connection error");
        process.exit(1);
    }
};

export default connect;