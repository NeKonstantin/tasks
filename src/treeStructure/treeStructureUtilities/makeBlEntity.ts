import { ExtEntity } from "./extEntity.type";
import { BlEntity } from "../blEntity.type";

export function makeBlEntity(e: ExtEntity): BlEntity {
    return {
        id: e.id,
        content: e.content,
        children: [...e.children]
    };
}