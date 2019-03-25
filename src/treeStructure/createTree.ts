import { DbEntity } from "./dbEntity.type";
// import { BlEntity } from './blEntity.type';

export function createTree(db: DbEntity[]): DbEntity[] {
  const newMap = [...db.map(e => {
    let key = e.id;
    return [key, e];
  })];
  const map = new Map(newMap);

  for (let item of map.values()) {
    if (!map.has(item.parentId)) {
      continue;
    }
    const parent = map.get(item.parentId);
    parent.children = [...parent.children || [], item];
  }
  return [...map.values()].filter(item => !item.parentId);
}
