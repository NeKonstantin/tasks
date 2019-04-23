import { EntityCS } from "../src/customSort/entityCS.type";

export interface DatasetCS {
  desc: string;
  order: number[];
  input: EntityCS[];
  expected: EntityCS[];
}
