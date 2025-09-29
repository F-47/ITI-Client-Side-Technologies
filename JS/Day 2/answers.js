// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
// var x = "258.90";
// var xInt = parseInt(x);
// var xFloat = parseFloat(x);
// console.log(xInt, xFloat);

// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
// var num = 7.45678;
// var newNum = num.toFixed(2);
// console.log(newNum);

// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
// var x = "abc";
// console.log(Number.isNaN(x)); // false
// console.log(Number.isNaN("123")); // false, since it's not NaN

// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
// var a = 0.1;
// var b = 0.2;
// console.log(a + b == 0.3); // false
// console.log((a + b).toFixed(1) == 0.3); // true

// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
// function textParser(x) {
//   if (Number.isNaN(parseInt(x))) {
//     return null;
//   } else {
//     return parseInt(x);
//   }
// }
// console.log(textParser("120px")); // 120
// console.log(textParser("px120")); // null

// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
// function isFiniteNumber(value) {
//   return (
//     typeof value === "number" &&
//     !isNaN(value) &&
//     value !== Infinity &&
//     value !== -Infinity
//   );
// }

// console.log(isFiniteNumber(42)); // true
// console.log(isFiniteNumber(0)); // true
// console.log(isFiniteNumber(-3.14)); // true
// console.log(isFiniteNumber(1e6)); // true

// console.log(isFiniteNumber("42")); // false
// console.log(isFiniteNumber(NaN)); // false
// console.log(isFiniteNumber(Infinity)); // false
// console.log(isFiniteNumber(null)); // false

// 7. Remove leading and trailing spaces from the string "   hello world  ".
// var x = "   hello world  ";
// console.log(x.trim()); // hello world

// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
// var x = "javascript";
// console.log(x.slice(4, 10)); // script
// console.log(x.substring(10, 4)); // script

// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
// var x = "Banana Mania";
// console.log(x.toLowerCase().split("a").length - 1); // 5

// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
// function reverseString(s) {
//   //   return s.split("").reverse();
//   return s.split("").reduceRight((acc, cur) => acc + cur);
// }
// console.log(reverseString("fares"));

// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
// function capitalizeWords(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(capitalizeWords("hello there friend"));

// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
// var url = "https://example.com/path/to/page";
// var start = url.indexOf("://") + 3;
// var end = url.indexOf("/", start);
// console.log(url.slice(start, end));

// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
// function naiveIndexOf(haystack, needle) {
//   if (needle === "") return 0;

//   for (var i = 0; i <= haystack.length - needle.length; i++) {
//     for (var j = 0; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) break;
//       if (j === needle.length - 1) return i;
//     }
//   }
//   return -1;
// }

// console.log(naiveIndexOf("hello world", "world")); // 6

// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
// it should be
// var s = "hello";
// if (s.toUpperCase() == "HELLO") {
//   console.log("match");
// }
// explaination:
// it's == not just = and it should be s.toUpperCase() not s.toUpperCase

// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
// var arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// 16. Remove the last element and store it. Remove the first element and store it.
// var arr = [1, 2, 3, 4, 5];
// lastEle = arr.pop();
// console.log(lastEle); // 5
// firstEle = arr.shift();
// console.log(firstEle); // 1
// console.log(arr); // [2, 3, 4]

// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
// var arr = [10, 20, 30, 40, 50];
// var newArr = arr.slice(0, 3);
// console.log(newArr); // [10, 20, 30]

// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
// var arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, "a", "b");
// console.log(arr); // [1, 2, 'a', 'b', 5]

// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
// Slice: it cuts a certain part of the array without modifying on the og one.
// var arrSl = [1, 2, 3, 4, 5];
// var removed = arrSl.slice(2, 3);
// console.log(arrSl); // [1, 2, 3, 4, 5]
// console.log(removed); // [3]

// Splice: it cuts a certain part of the array and affecting the og one
// var arrSpl = [1, 2, 3, 4, 5];
// var removed = arrSpl.splice(2, 2);
// console.log(removed); // [3, 4]
// console.log(arrSpl);  // [1, 2, 5]

// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
// var arr = [];
// arr[7] = "hello"; // assign only at index 7
// console.log(arr); // [ empty x 7, 'hello' ]
// console.log(arr.length); // 8

// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
// function compact(array) {
//   var result = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i]) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }
// console.log(compact([0, 1, false, 2, ""])); // [1, 2]

// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat .
// var arr = [1, 2, 3, 4, 5];
// // var arrClone = [...arr];
// // console.log(arrClone);

// var clone = [];
// for (var i = 0; i < arr.length; i++) {
//   clone[i] = arr[i];
// }
// console.log(clone); // [1, 2, 3, 4, 5]

// 23. Map [1,2,3] to their squares using map.
// var arr = [1, 2, 3];
// console.log(
//   arr.map((item) => {
//     return item * item;
//   })
// ); // [1, 4, 9]

// 24. Filter [5,10,15,20] to keep values >= 12.
// var arr = [5, 10, 15, 20];
// console.log(
//   arr.filter((item) => {
//     return item >= 12;
//   })
// ); // [15, 20]

// 25. Reduce [2,4,6] to product.
// var arr = [2, 4, 6];
// console.log(
//   arr.reduce((acc, curr) => {
//     return acc * curr;
//   })
// ); // 48

// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
// function arraySum(a) {
//   return a.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);
// }
// function arraySumLoop(a) {
//   sum = 0;
//   for (var num of a) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(arraySum([1, 2, 3, 4])); // 10
// console.log(arraySumLoop([1, 2, 3, 4])); // 10

// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
// var arr = ["Ali", "Sara", "Kareem"];
// var output = [];
// for (var word of arr) {
//   output.push(word.charAt(0).toUpperCase());
// }
// console.log(output); // ['A','S','K']

// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
// function unique(a) {
//   var result = [];
//   for (var i = 0; i < a.length; i++) {
//     if (result.indexOf(a[i]) === -1) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// }

// console.log(unique([5, 2, 4, 3, 1, 2, 1])); // [5, 2, 4, 3, 1]
// About the complexity if we use map or hash it will make it o(n)

// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
// function flatten1(arr) {
//   var newArr = [];
//   for (var i of arr) {
//     if (Array.isArray(i)) {
//       for (var j of i) {
//         newArr.push(j);
//       }
//     } else {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }
// console.log(flatten1([1, [2, 3], [4], 5])); // [1, 2, 3, 4, 5]

// 31. Create object person with name and age; add a new property city after creation.
// var obj = {
//   name: "fares",
//   age: 23,
// };
// obj["city"] = "alex";
// console.log(obj);

// 32. Access a property via bracket notation with a dynamic key variable.
// var obj = {
//   name: "Fares",
//   age: 23,
//   city: "alex",
// };
// var dKey = "age";
// console.log(obj[dKey]); // 23

// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
// function countKeys(obj) {
//   //   option 1
//   //   console.log(Object.keys(obj).length);
//   // option 2
//   var count = 0;
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       count++;
//     }
//   }
//   return count;
// }

// var user = { name: "Fares", age: 23, city: "alex" };
// console.log(countKeys(user)); // 3

// 39. List (as comments) 5 different values that coerce to false in ES5.
// NaN
// ""
// undefined
// null
// 0
// false

// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
// function safeToBoolean(v) {
//   return v === true || v === "true" || v === 1 || v === "1";
// }
// console.log(safeToBoolean(true));

// 41. Create a Date for Jan 1, 2025 00:00 local.
// var date = new Date(2025, 0, 1);
// console.log(date.toString()); // Wed Jan 01 2025 00:00:00 GMT+0300 (GMT+03:00)

// 42. Get the current year from new Date().
// var date = new Date();
// console.log(date.getFullYear()); // 2025

// 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
// function daysBetween(d1, d2) {
//   var msPerDay = 1000 * 60 * 60 * 24;
//   var diff = d2.getTime() - d1.getTime();
//   return Math.floor(diff / msPerDay);
// }

// var d1 = new Date(2025, 0, 1);
// var d2 = new Date(2025, 0, 10);

// console.log(daysBetween(d1, d2)); // 9

// 44. Generate a random integer 1..100.
// var num = Math.floor(Math.random() * 100) + 1;
// console.log(num);

// 45. Round 4.567 to nearest integer, round down, and round up (three results).
// var num = 4.567;
// console.log(Math.round(num)); // 5
// console.log(Math.floor(num)); // 4
// console.log(Math.ceil(num)); // 5

// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
// function randomIntArray(n, min, max) {
//   var result = [];
//   for (var i = 0; i < n; i++) {
//     var rand = Math.floor(Math.random() * (max - min + 1)) + min;
//     result.push(rand);
//   }
//   return result;
// }

// console.log(randomIntArray(5, 10, 20)); // [12, 19, 15, 10, 17]

// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
// function parsePriceList(str) {
//   var result = {};
//   var items = str.split(";");
//   for (var i = 0; i < items.length; i++) {
//     var parts = items[i].split(":");
//     var key = parts[0];
//     var value = parseFloat(parts[1]);
//     result[key] = value;
//   }
//   return result;
// }
// console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3")); // {Apple: 2.5, Orange: 1.75, Banana: 3}

// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
// function filterAndSortNumbers(mixedArray) {
//   var result = [];
//   for (var i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "number" && isFinite(mixedArray[i])) {
//       result.push(mixedArray[i]);
//     }
//   }
//   result.sort(function (a, b) {
//     return a - b;
//   });
//   return result;
// }

// console.log(filterAndSortNumbers([3, "a", NaN, 10, -2, Infinity, 5, null, 7]));
