// import { DbEntity } from "./dbEntity.type";
// import { BlEntity } from "./blEntity.type";

// export function createTree(db: DbEntity[]): BlEntity[] {
//   const map: Map<number, DbEntity>  = new Map();

//   db.forEach(el => map.set(el.id, el));

//   for (let item of map.values()) {
//     if (!map.has(item.parentId)) {
//       continue;
//     }
//     const parent = map.get(item.parentId);
//     parent.children = [...parent.children || [], item];
//   }
//   return [...map.values()].filter(item => !item.parentId);
// }
