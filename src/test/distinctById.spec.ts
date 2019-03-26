import { expect } from "chai";
import { EntityDBI } from "../distinctById/entityDBI.type";
import { distinctById } from "../distinctById/distinctById";

describe("distinctById", function (): void {
  describe("should return array without duplicate", function (): void {

    it("happy path", function (): void {
      const input: EntityDBI[] = [
        { id: 1, content: "a" },
        { id: 2, content: "b" },
        { id: 1, content: "c" }
      ];
      const expected: EntityDBI[] = [
        { id: 1, content: "a" },
        { id: 2, content: "b" }
      ];

      const result = distinctById(input);
      expect(result).deep.equals(expected);
    });

    it("case with nulls", function (): void {
      const input: EntityDBI[] = [
        { id: null, content: "a" },
        { id: null, content: "b" },
        { id: 1, content: "c" }
      ];
      const expected: EntityDBI[] = [
        { id: null, content: "a" },
        { id: 1, content: "c" }
      ];

      const result = distinctById(input);
      expect(result).deep.equals(expected);
    });

  });
});
