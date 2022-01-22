import express, {Request, Response} from "express";
import * as ItemService from "./item.service";
import { BaseItem, Item } from "./item.interface";

export const itemsRouter = express.Router();

itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items: Item[] = await ItemService.findAll();

        res.status(200).json(items);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

itemsRouter.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id.toString();
    try {
        const item: Item = await ItemService.find(id);

        res.status(200).json(item);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

itemsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const item: BaseItem = req.body;

        const newItem = await ItemService.create(item);

        res.status(201).json(newItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

itemsRouter.put('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id.toString();
    try {
        const item: Item = req.body;

        const existingItem = await ItemService.find(id);

        if(!existingItem){
            const newItem = ItemService.create(item);

            res.status(201).json(newItem);
        }

        const updatedItem = await ItemService.update(id, item);

        res.status(200).json(updatedItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

itemsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id.toString();
    try {
        const existingItem: Item = await ItemService.find(id);

        if(existingItem){
            await ItemService.remove(id);
        }

        res.status(204).json();
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});