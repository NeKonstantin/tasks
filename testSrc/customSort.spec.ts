import { expect } from "chai";
import { EntityCS, ECSType } from "../src/customSort/entityCS.type";
import { customSort } from "../src/customSort/orderByDefinition";
import { customSort2 } from "../src/customSort/customSort2";


describe("customSort", function (): void {
  describe("should return array with determinate order", function (): void {

    it("happy path", function (): void {
      const inputEntity: EntityCS[] = [
        { id: 3, type: "", content: "a" },
        { id: 2, type: null, content: "b" },
        { id: 1, type: 1, content: "c" }
      ];
      const inputOrder: ECSType[] = [
          1, "", null
      ];
      const expected: EntityCS[] = [
        { id: 1, type: 1, content: "c" },
        { id: 3, type: "", content: "a" },
        { id: 2, type: null, content: "b" }
      ];

      const result = customSort(inputEntity, inputOrder);
      expect(result).deep.equals(expected);
    });

    it("case with types not included in order", function (): void {
        const inputEntity: EntityCS[] = [
            { id: 5, type: "", content: "a" },
            { id: 3, type: null, content: "b" },
            { id: 4, type: 1, content: "c" },
            { id: 2, type: "1", content: "c" },
            { id: 1, type: "1", content: "c" }
          ];
        const inputOrder: ECSType[] = [
              1, "", null
          ];
        const expected: EntityCS[] = [
            { id: 4, type: 1, content: "c" },
            { id: 5, type: "", content: "a" },
            { id: 3, type: null, content: "b" },
            { id: 1, type: "1", content: "c" },
            { id: 2, type: "1", content: "c" }
          ];

        const result = customSort(inputEntity, inputOrder);
        // console.log(result);
        expect(result).deep.equals(expected);
    });

  });
});
