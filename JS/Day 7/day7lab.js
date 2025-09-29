// 1- Write a function that greets a user, using a default parameter for the name.
function greeting(name = "Fares") {
  return "Hello " + name;
}
console.log(greeting("Galal")); // Hello Galal
// 2- Write a function that calculates the total price with a default tax rate parameter.
function calculateTotalPrice(price, tax = 0.4) {
  return `Total Price: ${price + tax * price}$`;
}
console.log(calculateTotalPrice(500)); // Hello Galal

// 3- Write a function that creates a user object, using a default role parameter.
function createUserObj(name, role = "Frontend Dev") {
  return {
    name,
    role,
  };
}
console.log(createUserObj("Fares")); // { "name": "Fares", "role": "Frontend Dev"}

// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiply(...args) {
  return args.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiply(1, 4, 6, 7, 3)); // 504

// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
function multiplyFirstArg(...args) {
  const [first, ...rest] = args;
  return first * rest.reduce((acc, curr) => acc + curr, 1);
}
console.log(multiplyFirstArg(10, 4, 6, 7, 3)); // 210

// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
function collectStrings(...strings) {
  return strings;
}
console.log(collectStrings("apple", "banana", "cherry")); // ["apple","banana","cherry"]

// 7- Create a new array by combining two arrays using the spread operator.
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const newArr = [...arr1, ...arr2];
console.log(newArr); // [1,2,3,4,5,6,7,8]

// 8- Copy an array using the spread operator.
const toCopy = [1, 2, 3, 4];
const pasted = [...toCopy];
console.log(pasted); // [1, 2, 3, 4]

// 9- Merge two objects into one using the spread operator.
const obj1Info = {
  name: "Fares",
  age: 23,
};
const obj2Work = {
  title: "Frontend Dev",
  working: false,
};
const mergedObj = { ...obj1Info, ...obj2Work };
console.log(mergedObj); // {name: 'Fares', age: 23, title: 'Frontend Dev', working: false}

// 10- Update a property in an object using the spread operator to create a new object.
const objToUpdate = {
  name: "Faressss",
  job: "Frontend Dev",
};
const updatedObj = {
  ...objToUpdate,
  name: "Fares",
};
console.log(updatedObj); // {name: 'Fares', job: 'Frontend Dev'}

// 11- Destructure an array to get the first and second elements into variables.
const arr11 = [1, 2, 3, 4, 5];
const [a, b] = arr11;
console.log(a, b); // 1 2

// 12- Destructure an array to get the first element and the rest into another array.
const arr12 = [1, 2, 3, 4, 5];
const [x, ...rest] = arr12;
console.log(x, rest); // 1, [2, 3, 4, 5]

// 13- Destructure an object to extract two properties into variables.
const obj13 = {
  myName: "Fares",
  job: "Frontend",
};
const { myName, job } = obj13;
console.log(myName, job); // Fares Frontend

// 14- Destructure an object and rename the extracted properties.
const obj14 = {
  myName: "Fares",
  job: "Frontend",
};
const { myName: MeinName, job: Arbeit } = obj14;
console.log(MeinName, Arbeit); // Fares Frontend

// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
function printUser({ ...rest }) {
  for (const [key, value] of Object.entries(rest)) {
    console.log(`${key}: ${value}`);
  }
}

const user = {
  name: "Fares",
  age: 22,
  job: "Frontend Dev",
};

printUser(user);

// Name: Fares
// Age: 22
// Job: Frontend Dev
