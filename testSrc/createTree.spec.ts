import { expect } from "chai";
import { DbEntity } from "../src/treeStructure/dbEntity.type";
import { BlEntity } from "../src/treeStructure/blEntity.type";
import { createTree } from "../src/treeStructure/createTree";

describe("createTree", function (): void {
  describe("should return array of root elements", function (): void {

    it("One root / Happy path", function (): void {
      const input: DbEntity[] = [
        { id: 1, content: "1", parentId: null },
        { id: 2, content: "2", parentId: 1 },
        { id: 3, content: "3", parentId: 2 },
      ];
      const expected: BlEntity[] = [
        {
            id: 1,
            content: "1",
            children: [
                {
                    id: 2,
                    content: "2",
                    children: [
                        {
                            id: 3,
                            content: "3",
                            children: []
                        }
                    ]
                }
            ]
        }
      ];

      const result = createTree(input);
      expect(result).deep.equals(expected);
    });

    it("Few roots / Happy path", function (): void {
        const input: DbEntity[] = [
            { id: 1, content: "1", parentId: null },
            { id: 2, content: "2", parentId: 1 },
            { id: 3, content: "3", parentId: null },
          ];
        const expected: BlEntity[] = [
            {
              id: 1,
              content: "1",
              children: [
                {
                  id: 2,
                  content: "2",
                  children: []
                }
              ]
            },
            {
                id: 3,
                content: "3",
                children: []
              }
          ];

        const result = createTree(input);
        expect(result).deep.equals(expected);
    });

    it("Input array is shuffled", function (): void {
        const input: DbEntity[] = [
            { id: 2, content: "2", parentId: 1 },
            { id: 3, content: "3", parentId: 2 },
            { id: 1, content: "1", parentId: null },
          ];
        const expected: BlEntity[] = [
            {
                id: 1,
                content: "1",
                children: [
                    {
                        id: 2,
                        content: "2",
                        children: [
                            {
                                id: 3,
                                content: "3",
                                children: []
                            }
                        ]
                    }
                ]
            }
          ];

        const result = createTree(input);
        expect(result).deep.equals(expected);
      });

    it("Input array is single item", function (): void {
        const input: DbEntity[] = [
            { id: 1, content: "1", parentId: null },
          ];
        const expected: BlEntity[] = [
            {
                id: 1,
                content: "1",
                children: []
            }
          ];

        const result = createTree(input);
        expect(result).deep.equals(expected);
      });

  });
});
