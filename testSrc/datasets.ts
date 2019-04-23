import { DatasetCS } from "./datasetCS.type";

export const CS_1: DatasetCS = {
  desc: "Dataset #1",
  order: [
    555,
    0, /* <- unused type */
    6, 5, 3, 4
  ],
  input: [
    { id: 555, type: 555, content: "x" },
    { id: 3, type: 3, content: "c" },
    { id: 33, type: 3, content: "c" },
    { id: 333, type: 3, content: "c" },
    { id: 10, type: 999, content: "j" }, /* item with unknown type must be deleted */
    { id: 4, type: 4, content: "d" },
    { id: 5, type: 5, content: "e" },
    { id: 6, type: 6, content: "f" }
  ],
  expected: [
    { id: 555, type: 555, content: "x" },
    { id: 6, type: 6, content: "f" },
    { id: 5, type: 5, content: "e" },
    { id: 3, type: 3, content: "c" },
    { id: 33, type: 3, content: "c" },
    { id: 333, type: 3, content: "c" },
    { id: 4, type: 4, content: "d" },
  ]
};

export const CS_HAPPY: DatasetCS = {
  desc: "Happy path",
  order: [1, 2, 3, 4, 5],
  input: [
    { id: 1, type: 1, content: "a" },
    { id: 2, type: 2, content: "b" },
    { id: 3, type: 3, content: "c" },
    { id: 4, type: 4, content: "d" },
    { id: 5, type: 5, content: "e" }
  ],
  expected: [
    { id: 1, type: 1, content: "a" },
    { id: 2, type: 2, content: "b" },
    { id: 3, type: 3, content: "c" },
    { id: 4, type: 4, content: "d" },
    { id: 5, type: 5, content: "e" }
  ]
};
