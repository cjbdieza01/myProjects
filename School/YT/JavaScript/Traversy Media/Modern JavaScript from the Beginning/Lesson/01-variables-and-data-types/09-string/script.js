let x;
const name = 'John';
const age = 30;
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';


// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String properties and methods
const s = new String('Hello World!');
x = typeof s;
x = s.length;
// x = s[1]
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(1);
x = s.indexOf('d');
x = s.substring(1, 5);
x = s.substring(1);
// x = s.slice(-12, -7);
// x = s.trim();
// x = s.replace('World', 'Philippines')
// x = s.includes('Hello');
// x = s.valueOf()
// x = s.split('');
console.log(x);