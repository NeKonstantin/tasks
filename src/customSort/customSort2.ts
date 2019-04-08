import { ECSType, EntityCS } from "./entityCS.type";

export function customSort2(entities: EntityCS[], order: ECSType[]): EntityCS[] {
    const newMap: Map<number, EntityCS> = new Map;
    entities.forEach(elem => newMap.set(elem.id, elem));
    [...newMap.values()].sort(function (a: EntityCS, b: EntityCS): number {
        return a.id - b.id;
    });
    const backUpArr: EntityCS[] = [];
    newMap.forEach(element => {
        if (!order.includes(element.type)) {
            backUpArr.push(element);
            newMap.delete(element.id);
        }
    });
    [...newMap.values()].sort(function (a: EntityCS, b: EntityCS): number {
        return order.indexOf(a.type) - order.indexOf(b.type);
    });
    const result: EntityCS[] = [...newMap.values(), ...backUpArr];
    return result;
 }