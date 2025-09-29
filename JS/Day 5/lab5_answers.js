// 1. Predict (in comments) the output order of this code, then run to verify.
//    console.log(a()); // A
//    const b = function(){ return 'B'; };
//    function a(){ return 'A'; }
//    console.log(b());
//    After verifying, explain (one short line) why a works before definition and b does not.
//    because a is a function declaration and b is a function expression, so a is hoisted and b is not.

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
//     function sum(a, b) {
//         return a + b;
//     }
//   const add = sum;

//   console.log(add(3, 4)); // 7
//   console.log(sum(3, 4)); // 7

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
//    var factorial = function fact(n){
//        if(n <= 1){
//            return 1;
//        }
//        return n * fact(n-1); // because the internal name is not global.
//    }
//    console.log(factorial(5));

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
//    const showInfo = function(){
//        console.log(arguments.length);
//        for(let i = 0; i < arguments.length; i++){
//            console.log(arguments[i]);
//        }
//    }
//    showInfo();
//    showInfo("apple", "banana"); // 2 | apple, banana
//    showInfo(1, 2, 3, 4, 5);  // 5 | 1, 2, 3, 4, 5

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
//    const mutate = function(x,y){
//        console.log(arguments[0] / arguments[1]); // 0.5
//        x = 10;
//        y = 20;
//        console.log(arguments[0] / arguments[1]); // 0.5
//    }
//    mutate(5,10);
// because the arguments object is not mutated. but the variables x and y are mutated.

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
//    const sumAll = function(){
//        let sum = 0;
//        for(let i = 0; i < arguments.length; i++){
//            sum += arguments[i];
//        }
//        return sum;
//    }
//    console.log(sumAll(2,5,3)); // 10
//    console.log(sumAll()); // 0

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
//    const sumAll = function(){
//        return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
//    }
//    console.log(sumAll(2,5,3)); // 10

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
//    const describeValue = function(){
//        if(arguments.length === 0){
//            return 'none';
//        }
//        else if(arguments.length === 1){
//            return 'one:' + arguments[0];
//        }
//        else if(arguments.length === 2){
//            return 'two:' + arguments[0] + ',' + arguments[1];
//        }
//        else{
//            return 'too many';
//        }
//    }
//    console.log(describeValue(1)); // one:1
//    console.log(describeValue(1,2)); // two:1,2
//    console.log(describeValue(1,2,3)); // too many
//    console.log(describeValue()); // none

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
//     const funcs = [
//         function(n) { return n + 2; },
//         function(n) { return n * 3; },
//         function(n) { return n - 5; }
//     ];
//    let start = 10;
//    for(let i = 0; i < funcs.length; i++){
//        start = funcs[i](start);
//    }
//    console.log(start); // 31

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
//     function makeMultiplier(factor) {
//         return function(n) {
//             return n * factor;
//         };
//     }
//    const double = makeMultiplier(2);
//    const triple = makeMultiplier(3);
//    console.log(double(7)); // 14
//    console.log(triple(7)); // 21

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
// const once = function(fn){
//     let done = false;
//     return function(){
//         if(!done){
//             done = true;
//             console.log('fn called');
//             return fn();
//         }
//     }
// }
// function test(){
//     return 'Hello';
// }
// const runOnce = once(test);
// console.log(runOnce()); // fn called | Hello
// console.log(runOnce()); // Hello | undefined

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
// const once = function (fn) {
//   let done = false;
//   let result;
//   return function () {
//     if (!done) {
//       done = true;
//       console.log("fn called");
//       result = fn();
//     }
//     return result;
//   };
// };
// function test() {
//   return "Hello";
// }
// const runOnce = once(test);
// console.log(runOnce()); // fn called | Hello
// console.log(runOnce()); // Hello | undefined

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.
// const makeCounter = (start) => {
//   return {
//     inc: () => {
//       start++;
//       return start;
//     },
//     dec: () => {
//       start--;
//       return start;
//     },
//     value: () => {
//       return start;
//     },
//   };
// };
// const counter1 = makeCounter(0);
// console.log(counter1.inc()); // 1
// console.log(counter1.dec()); // 0
// console.log(counter1.value()); // 0
// const counter2 = makeCounter(10);
// console.log(counter2.inc()); // 11
// console.log(counter2.dec()); // 10
// console.log(counter2.value()); // 10

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
// const makeAdder = (start) => {
//   return function (n) {
//     return start + n;
//   };
// };
// const add5 = makeAdder(5);
// console.log(add5(3));
// const add10 = makeAdder(10);
// console.log(add10(3));

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice (timing optional comment).
// const memoize1 = function (fn) {
//   const cache = {};
//   return function (n) {
//     if (n in cache) {
//       return cache[n]; // return cached result
//     }
//     const result = fn(n);
//     cache[n] = result;
//     return result;
//   };
// };
// const slowSquare = function (n) {
//   console.log(n); // 9
//   return n * n;
// };
// const memoizedSquare = memoize1(slowSquare);
// console.log(memoizedSquare(9));
// console.log(memoizedSquare(9));

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).
//    var memoizeN = function(fn){
//        var cache = {};
//        return function(){
//            var key = JSON.stringify(arguments);
//            if(cache[key]){
//                return cache[key];
//            }
//            var result = fn.apply(this, arguments);
//            cache[key] = result;
//            return result;
//        }
//    }
// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
// const user = {
//   name: "Fares",
//   sayHi: function () {
//     console.log("Hi " + this.name);
//     // or as explained in the lab
//     // console.log("Hi " + user.name);
//   },
// };
// user.sayHi();
// var f = user.sayHi; // Hi Fares
// f(); // Hi

// because the sayHi method is called as a function and not as a method of the user object. so it wil not show the name of the user object.

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
// const user = {
//   name: "Fares",
//   sayHi: function () {
//     console.log("Hi " + this.name);
//   },
// };
// const user2 = {
//   name: "Sara",
// };
// user.sayHi.call(user2); // Hi Sara
// user.sayHi.apply(user2); // Hi Sara

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
// const greeter = {
//   greet: function (greeting, sign) {
//     console.log(greeting + " " + this.name + " " + sign);
//   },
// };
// greeter.greet.apply({ name: "Ali" }, ["Hello", "!"]); // Hello Ali !

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
// function greet(greeting) {
//   console.log(greeting + " " + this.name);
// }
// var greetLara = greet.bind({ name: "Lara" });
// greetLara("Hello"); // Hello Lara
// greetLara("Hi"); // Hi Lara
// greetLara("Hola"); // Hola Lara

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
// function greet(greeting, sign) {
//   console.log(greeting + " " + this.name + sign);
// }
// function sayHello(obj) {
//   return greet.bind(obj, "Hello");
// }
// const helloSara = sayHello({ name: "Sara" });
// const helloOmar = sayHello({ name: "Omar" });

// helloSara("!"); // Hello Sara!
// helloSara("*"); // Hello Sara*
// helloOmar("!!"); // Hello Omar!!
// helloOmar("<#"); // Hello Omar<#

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
// const reverseArgs = function () {
//   const args = [].slice.bind(arguments)();
//   return args.reverse();
// };
// console.log(reverseArgs(1, 2, 3, 4, 5)); // [5, 4, 3, 2, 1]

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
// const arr = [5, 2, 11, 7];
// const max = function () {
//   return Math.max.apply(null, arguments);
// };
// const maxUsingLoop = function () {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
// console.log(max(5, 2, 11, 7)); // 11
// console.log(maxUsingLoop(5, 2, 11, 7)); // 11

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
// const arr = [5, 2, 11, 7];
// console.log(Math.max.apply(null, arr));
// console.log(Math.max.call(null, 5, 2, 11, 7));
// apply is better because it can take a array of numbers.

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
// const name = "Fares";
// const age = 23;
// const str1 = "User: " + name + " Age: " + (age + 1);
// const str2 = `User: ${name} Age: ${age + 1}`;
// console.log(str1); // User: Fares Age: 24
// console.log(str2); // User: Fares Age: 24

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
// const title = "Hello";
// const body = "World";
// const str = `Title: ${title}\nBody: ${body}`;
// console.log(str);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
// if (true) {
//   var i = 5;
//   let j = 10;
// }
// console.log(i); // 5
// console.log(j); // ReferenceError: Cannot access 'J' before initialization

// 28. Write code that tries to log x before let x = 5;.
// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]
// arr = [5, 6, 7];
// console.log(arr); // TypeError: Assignment to constant variable.

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
// const squareFull = (n) => {
//   return n * n;
// }; // full body form
// console.log(squareFull(5)); // 25
// const squareConcise = (n) => n * n; // concise form
// console.log(squareConcise(5)); // 25
// console.log([1, 2, 3].map((n) => n * n)); // inline form : [1, 4, 9]

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...})
// and startArrow using setInterval(()=>{...}).
// Show difference in how this works (stop after a few increments using clearInterval).
// const timer = {
//   count: 0,
//   startClassic: function () {
//     setInterval(function () {
//       this.count++; // inside the function this will not work because it refers to the global object.
//       console.log(this.count);
//     }, 1000);
//   },
//   startArrow: function () {
//     setInterval(() => {
//       this.count++; // inside the arrow function this will work because it refers to the timer object.
//       console.log(this.count);
//     }, 1000);
//   },
// };
// timer.startClassic();
// timer.startArrow();
// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
// const arrowObj = () => ({ v: 10 });
// console.log(arrowObj()); // { v: 10 }
// console.log(arrowObj); // () => ({ v: 10 })
// // the parentheses are needed to return an object.

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
// const obj = {
//   name: "Fares",
//   sayHi: function () {
//     console.log("Hi " + this.name);
//   },
//   sayHiArrow: () => {
//     console.log("Hi " + this.name);
//   },
// };
// obj.sayHi(); // Hi Fares
// obj.sayHiArrow(); // Hi
// the arrow function is a bad choice because it does not have a dynamic this.

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
// function declaration
// const greet = function (name) {
//   return "Hi " + name + "!";
// };
// // arrow function
// const greetArrow = (name) => {
//   return "Hi " + name + "!";
// };
// console.log(greet("Fares")); // Hi Fares!
// console.log(greetArrow("Fares")); // Hi Fares!

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that
// loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
// const add2 = (n) => n + 2;
// const times3 = (n) => n * 3;
// const minus1 = (n) => n - 1;
// const runPipeline = (n, fnsArray) => {
//   for (let i = 0; i < fnsArray.length; i++) {
//     n = fnsArray[i](n);
//   }
//   return n;
// };
// console.log(runPipeline(5, [add2, times3, minus1])); // 20

// 36. (write answers BEFORE running):
//     var obj = { n: 1, inc: function(){ this.n++; return this.n; } };
//     var inc = obj.inc;
//     console.log(obj.inc());
//     console.log(inc());
//    Explain both lines.
// console.log(obj.inc()); will return 2 because obj.inc() is a method call

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
// const counters = [];
// for (let i = 0; i < 1000; i++) {
//   counters.push(function () {
//     return i;
//   });
// }
// console.log(counters[0]()); // 0
// console.log(counters[1]()); // 1
// console.log(counters[2]()); // 2
// creating thousands of closures stores thousands of references in memory. i think this will increase memory usge if the loop is large.

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
// const safeFirst = function () {
//   if (arguments.length === 0) {
//     return undefined;
//   }
//   return Array.from(arguments);
// };
// console.log(safeFirst());
// console.log(safeFirst(1, 2, 3)); // [1, 2, 3]

// 39. factory(namesArray) returns object with a counter function for each name (all independent).
//  Example: var counters = factory(['a','b']); counters.a(); counters.b();
