import { BaseItem, Item } from "./item.interface";
import itemSchema from "./item-schema";

export const findAll = async (): Promise<Item[]> => {
    return await itemSchema.find();
};

export const find = async (id: string): Promise<Item> => {
    return await itemSchema.findOne({
        "_id": id
    });
}

export const create = async (newData: BaseItem): Promise<Item> => {
    return await itemSchema.create(newData);
}

export const update = async(id: string, updateData: BaseItem): Promise<Item | null> => {
    const query = {
        "_id": id
    };
    return await itemSchema.findOneAndUpdate(query, updateData, {
        returnOriginal: false
    });
}

export const remove = async(id: string): Promise<void | null> => {
    const query = {
        "_id": id
    };
    await itemSchema.deleteOne(query);
}
