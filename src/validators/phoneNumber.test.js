import Validator from "./phoneNumber";

describe("PhoneNumberValidator", () => {
  describe("on empty input", () => {
    it("should return error", () => {
      const result = Validator("");

      expect(result).toEqual("It's not correct");
    });
  });

  describe("647-555-1212", () => {
    it("should return correct", () => {
      const result = Validator("647-555-1212");

      expect(result).toEqual("Correct 10-digit number");
    });
  });

  describe("647 555 1212", () => {
    it("should return correct", () => {
      const result = Validator("647 555 1212");

      expect(result).toEqual("Correct 10-digit number");
    });
  });

  describe("words", () => {
    it("should return an error", () => {
      const result = Validator("helloe");

      expect(result).toEqual("It's not correct");
    });
  });

  describe("less than 10 digits", () => {
    it("should return an error", () => {
      const result = Validator("1234");

      expect(result).toEqual("It's not correct");
    });
  });

  describe("more than 10 digits", () => {
    it("should return an error", () => {
      const result = Validator("12341343242342");

      expect(result).toEqual("It's not correct");
    });
  });
});
