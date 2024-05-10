function number(n) {
  let a = n;
  return () => a;
}

let b = number(7);
console.log(b());

let c = number(1);
let d = number(2);

console.log(c(), d());
