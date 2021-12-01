// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
    it('should return hello mark', function () {
        expect(helloWorld("Mark")).toBe("Hello! Mark")
    });
});

describe("double", function() {
    it('should return a number', function () {
     expect(typeof double()).toBe("number")
    });
    it("should double the input number", function () {
        expect(double(5)).toEqual(10)
    })
    it('should be a function', function () {
        expect(typeof double).toBe("function")
    });
})

describe("isFive", () => {
    it('should exist', function () {
        expect( typeof isFive).toBe("function")
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return false', function () {
        expect(isFive("5")).toBe(false)
    });
})

describe("isEven", () => {
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('2 should return true', function () {
        expect(isEven(2)).toBe(true)
    });
    it('-4 should return true', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('3 should return false', function () {
        expect(isEven(3)).toBe(false)
    });
    it('banana should return false', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('/"8/" should return true', function () {
        expect(isEven("8")).toBe(true)
    });
    it('infinity should return false', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('false should return false', function () {
        expect(isEven(true)).toBe(false)
    });
    it('/(/) should return false', function () {
        expect(isEven()).toBe(false)
    });
})
 describe("isVowel", function () {
     it('should return a boolean', function () {
         expect(typeof isVowel()).toBe("boolean")
     });
     it(' /"a/" should return true', function () {
         expect(isVowel("a")).toBe(true)
     });
 })