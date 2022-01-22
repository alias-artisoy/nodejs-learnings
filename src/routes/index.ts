import express from "express";
import { itemsRouter } from "../items/item.router";

export const router = express.Router();

router.get('/', (req, res) =>
    res.json({ message: 'Hello there!' })
);

router.use('/api/menu/items', itemsRouter);



