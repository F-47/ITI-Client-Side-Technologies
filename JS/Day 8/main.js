// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
// import { greetUser } from "./utils.js";
// console.log(greetUser("Fares"));

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
// const myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Task completed!");
//   }, 2000);
// });
// myPromise.then((message) => {
//   console.log(message);
// });

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
// async function waitAndGreet() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return "Welcome!";
// }
// waitAndGreet().then((message) => console.log(message));
// console.log(waitAndGreet());

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
// async function getUserData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   console.log(data.name, data.email);
// }
// getUserData();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
// async function getThreePosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   const slicedData = data.slice(0, 3).map((item) => item.title);
//   return slicedData;
// }
// getThreePosts().then((data) => console.log(data));

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
// async function promiseTimer() {
//   for (let i = 1; i <= 3; i++) {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(i);
//   }
// }
// promiseTimer();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
// function jsonParser(data) {
//   try {
//     const dataParsed = JSON.parse(data);
//     return dataParsed;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
// console.log(jsonParser('{"name": "Omar"}')); // {name: 'Omar'}
// console.log(jsonParser("{name: Omar}")); // Uncaught Error: SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
// Async function to fetch and count completed todos
// async function getCompletedTodosCount() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1/todos"
//   );
//   const data = await response.json();
//   const completedTodos = data.filter((todo) => todo.completed).length;
//   return completedTodos;
// }
// getCompletedTodosCount().then((count) => {
//   console.log("Completed todos:", count);
// });

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
// import DataFetcher from "./dataFetcher.js";
// const fetcher = new DataFetcher();
// fetcher.getUser(1).then((user) => console.log(user));
