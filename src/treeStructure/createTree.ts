import { DbEntity } from "./dbEntity.type";
import { BlEntity } from "./blEntity.type";

export function createTree(db: DbEntity[]): BlEntity[] {
    const map: Map<number, DbEntity> = new Map();
    db.forEach(el => map.set(el.id, el));
    const blMap: Map<number, BlEntity> = new Map();
    map.forEach(el => blMap.set(el.id, {
        id: el.id,
        content: el.content,
        children: []
    }));
    const rootCount = [];
    for (let item of map.values()) {
        if (!map.has(item.parentId)) {
            rootCount.push(item.id);
            continue;
        }
        const child = blMap.get(item.id);
        const parent = blMap.get(item.parentId);
        parent.children = [...(parent.children || []), child];
    }
    const roots: BlEntity[] = [];
    rootCount.forEach(el => roots.push(blMap.get(el)));
    return roots;
}
