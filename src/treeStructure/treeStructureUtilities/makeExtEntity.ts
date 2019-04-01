import { DbEntity } from "../dbEntity.type";
import { ExtEntity } from "./extEntity.type";

export function makeExtEntity(e: DbEntity): ExtEntity {
    return {
        id: e.id,
        parentId: e.parentId,
        content: e.content,
        children: []
    };
}