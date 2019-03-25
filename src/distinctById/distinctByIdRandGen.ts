import { makeId } from "../utilities/randomId";
import { makeRandomWord } from "../utilities/randomWord";
import { EntityDBI } from "./entityDBI.type";

export function generateEntity(count: number): EntityDBI[] {
    const entities: EntityDBI[] = [];
    for (let i = 0; i < count; i++) {
        entities.push({
            id: makeId(),
            content: makeRandomWord()
        });
    }
    return entities;
}