import { EntityDBDI } from "./entityDBI.type";

export function distinctByDoubleId(list: EntityDBDI[]): EntityDBDI[] {
  return [...list.reduce((map, item) => {
    const key = item.id1;
    map.has(key) || map.set(key, item);
    return map;
  }, new Map()).values()];
}
