function sum(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a / b;
  }
  
  function mult(a, b) {
    return a * b;
  }
  
  function fibo(n) {
    if (n < 2) return n;
    return fibo(n - 2) + fibo(n - 1);
  }
  
  sum(3, 4);
  sub(3, 4);
  mult(3, 4);
  fibo(3);
  
  module.exports = {
    method1: sum,
    method2: sub,
    method3: mult,
    method4: fibo
  }