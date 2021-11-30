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