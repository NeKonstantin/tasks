import { EntityDBI } from "./entityDBI.type";

export function distinctById(entities: EntityDBI[]): EntityDBI[] {
  return [...entities.reduce((map, item) => {
    const key = item.id;
// tslint:disable-next-line: no-unused-expression
    map.has(key) || map.set(key, item);
    return map;
  }, new Map()).values()];
}
