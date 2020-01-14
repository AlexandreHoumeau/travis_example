const script = require('../src/script');
var sum = script.method1;
var sub = script.method2;
var mult = script.method3;
var fibo = script.method4;

describe('script', function() {
  describe('sum', function() {
      it('should return 4 when given 2 and 2', function() {
        expect(sum(2, 2)).toBe(4);
      })
  })

  describe('sub', function() {
      it('should return 1 when given 2 and 2', function() {
          expect(sub(2, 2)).toBe(1);
      })
  })

  describe('mult', function() {
    it('should return 4 when given 2 and 2', function() {
        expect(mult(2, 2)).toBe(4);
    })
  })
  describe('fibo', function() {
    it('should return 2 when given 3', function() {
        expect(fibo(3)).toBe(2);
    })
  })
});