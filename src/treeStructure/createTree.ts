import { DbEntity } from "./dbEntity.type";
import { BlEntity } from "./blEntity.type";
import { ExtEntity } from "./treeStructureUtilities/extEntity.type";
import { makeExtEntity } from "./treeStructureUtilities/makeExtEntity";
import { makeBlEntity } from "./treeStructureUtilities/makeBlEntity";

export function createTree(db: DbEntity[]): BlEntity[] {
	const map: Map<number, ExtEntity>  = new Map();

	db.forEach(el => map.set(el.id, makeExtEntity(el)));

	for (let item of map.values()) {
		if (!map.has(item.parentId)) {
			continue;
		}
		const parent = map.get(item.parentId);
		parent.children = [...parent.children || [], item];
	}
	map.forEach(el => makeBlEntity(el));
	// function: findRoot
	return root; // _TODO: find root      [...map.values()].filter(item => !item.parentId);
}
