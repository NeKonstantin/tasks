import { expect } from "chai";
import { EntityDBI } from "../src/distinctById/entityDBI.type";
import { distinctById } from "../src/distinctById/distinctById";

describe("basic function", function (): void {
  it("should return sum of two numbers", function (): void {
    // arrange
    const input: EntityDBI[] = [
      {
        id: 1,
        content: "a"
      },
      {
        id: 2,
        content: "b"
      },
      {
        id: 1,
        content: "c"
      }
    ];
    const expected: EntityDBI[] = [
      {
        id: 1,
        content: "a"
      },
      {
        id: 2,
        content: "b"
      }
    ];

    // act
    const result = distinctById(input);

    // assert
    expect(result).deep.equals(expected);
  });
});
