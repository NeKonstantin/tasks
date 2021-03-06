import { ECSType, EntityCS } from "./entityCS.type";

export function customSort(entities: EntityCS[], order: ECSType[]): EntityCS[] {

    entities.sort(function (a: EntityCS, b: EntityCS): number {
        return a.id - b.id;
    });
    entities.sort(function (a: EntityCS, b: EntityCS): number {
        return order.indexOf(a.type) - order.indexOf(b.type);
    });
    return entities.filter(e => order.includes(e.type));
}
