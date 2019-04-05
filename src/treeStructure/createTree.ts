import { DbEntity } from "./dbEntity.type";
import { BlEntity } from "./blEntity.type";
import { ExtEntity } from "./treeStructureUtilities/extEntity.type";
import { makeExtEntity } from "./treeStructureUtilities/makeExtEntity";
import { makeBlEntity } from "./treeStructureUtilities/makeBlEntity";

export function createTree(db: DbEntity[]): BlEntity[] {
  const map: Map<number, ExtEntity> = new Map();

  db.forEach(el => map.set(el.id, makeExtEntity(el)));

  for (let item of map.values()) {
    if (!map.has(item.parentId)) {
      continue;
    }
    const parent = map.get(item.parentId);
    parent.children = [...(parent.children || []), item];
  }
  const mapValues: ExtEntity[] = [...map.values()];
  const arr: BlEntity[] = mapValues.map(el => {
    if (el.parentId === null) { root.push(makeBlEntity(el)); }
    return makeBlEntity(el);
  });
  // function: findRoot
  const root: BlEntity[] = arr.filter(item => item.children.length > 0);
  return root;
}
