import { expect } from "chai";
import * as DS from "./datasets";
import { customSort } from "../src/customSort/orderByDefinition";

describe("[2] Order by definition aka Custom sort", function (): void {

  describe("orderByDefinitionV5", function (): void {

    it(DS.CS_HAPPY.desc, function (): void {
      const result = customSort(DS.CS_HAPPY.input, DS.CS_HAPPY.order); // act
      expect(result).deep.equals(DS.CS_HAPPY.expected); // assert
    });

    it(DS.CS_1.desc, function (): void {
      const result = customSort(DS.CS_1.input, DS.CS_1.order); // act
      expect(result).deep.equals(DS.CS_1.expected); // assert
    });

  });

});
