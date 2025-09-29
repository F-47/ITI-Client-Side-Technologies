// 1. Open a new window with a specific URL and size, then close it after 3 seconds using JavaScript.
// let newWindow = window.open(
//   "https://www.example.com",
//   "_blank",
//   "width=600,height=400"
// );

// // After some time or an event, close the opened window
// setTimeout(() => {
//   if (newWindow && !newWindow.closed) {
//     newWindow.close();
//   }
// }, 3000); // Closes the window after 3 seconds

// 2. Display the browser's user agent string in an alert.
// alert(navigator.userAgent);

// 3. Use `navigator` to detect if the browser is online or offline and log the result.
// console.log(navigator.onLine ? "User is online" : "User is offline");

// 4. Write code to reload the current page after 5 seconds.
// setTimeout(() => {
//   window.location.reload();
// }, 5000);

// 5. Get the current page URL, protocol, and hostname using `location` and log them.
// console.log(location.href, location.protocol, location.hostname);

// 6. Use `history` to go back one page, then forward one page (write the code, don't actually run it).
// history.back()
// history.forward()

// 7. Show the screen width and height in a div -change the div content- on the page.
// var div = document.getElementsByClassName("resolution")[0];
// div.innerText = window.screen.availWidth + " x " + window.screen.availWidth;

// 8. Use `setTimeout` to change the content of a hyperlink -a- with a new content after 2 seconds, and provide a button to cancel it.
// var anchorTimeout = setTimeout(() => {
//   a = document.getElementsByClassName("q8")[0];
//   a.innerText = "New Content here from js";
// }, 2000);
// function stopTimeOut() {
//   clearInterval(anchorTimeout);
// }

// 9. Use `setInterval` to update the time  on the page title every second, and a button to stop it.
// var num = 0;
// var titleInterval = setInterval(() => {
//   num++;
//   document.title = num;
// }, 1000);
// function stopTitleIncrement() {
//   clearInterval(titleInterval);
// }

// 10. Show a confirm dialog asking "Do you want to continue?" and log the user's choice("user said yes", "user said no").
// var question = confirm("Do you want to continue?");
// console.log(question ? "user said yes" : "user said no");

// 11. Select the first `<ul>` in the document and log its `childNodes` and `children` properties. Explain the difference in a comment.
// var ul = document.querySelector("ul");
// console.log("childNodes:", ul.childNodes);
// console.log("children:", ul.children);
// - childNodes: NodeList of all child nodes (elements, text, comments).
// - children: HTMLCollection of only the element nodes (<li>, <div>, and anything else).

// 12. Write a function that logs the tag names of all direct child elements of `<body>`.
// function directChildsOfBody() {
//   var body = document.body;
//   console.log(body.children);
// }
// directChildsOfBody();

// 13. Given a parent element, loop through its `childNodes` and log only the nodes that are elements (not text/comments).
// function logEleChildren(parent) {
//   var nodes = parent.childNodes;

//   for (let node of nodes) {
//     if (node.nodeType === 1) {
//       console.log(node);
//     }
//   }
// }
// logEleChildren(document.body);

// 14. Use `firstChild` and `firstElementChild` on a container and explain the difference in a comment.
// var container = document.querySelector(".container");
// console.log(container.firstChild, container.firstElementChild);
// first child: returns the first element and that maybe text or comments for example
// second child: returns the first element and it must be element (not text or comments)

// 15. Write code to get all `<li>` elements inside a `<ul>` using `children`.
// var result = document.querySelector("ul").children;
// console.log(result);

// 17. Write a function that logs all sibling elements of a given element (excluding itself).
// function allSibElements(ele) {
//   var siblings = ele.parentElement.children;
//   for (var sib of siblings) {
//     if (sib !== ele) {
//       console.log(sib);
//     }
//   }
// }
// var item = document.querySelector("ul");
// allSibElements(item);

// 18. Use `nextSibling` and `nextElementSibling` to traverse from the first child to the last child of a `<ul>`, logging each node.
// var ul = document.querySelector("ul");

// console.log("nextSibling");
// var node = ul.firstChild;
// while (node) {
//   console.log(node);
//   node = node.nextSibling;
// }

// console.log("nextElementSibling");
// var elem = ul.firstElementChild;
// while (elem) {
//   console.log(elem);
//   elem = elem.nextElementSibling;
// }

// 19. Count how many element children a given node has (not using `children.length`).
// function countChildOfNode(ele) {
//   var count = 0;
//   for (var node of ele.childNodes) {
//     if (node.nodeType == 1) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// var item = document.querySelector("ul");
// countChildOfNode(item);

// 20. Write a function that takes the first form element and logs the names and values of all its input fields using the `elements` collection.
// function formElements(form) {
//   var elements = form.elements;
//   for (var ele of elements) {
//     if (ele.name) {
//       console.log("Name:", ele.name, "Value:", ele.value);
//     }
//   }
// }
// formElements(document.forms[0]);

// 21. Access all forms in the document using `document.forms` and log their names.
// for (var form of document.forms) {
//   console.log(`Form Name: ${form.getAttribute("name")}`);
// }

// 22. Access all images in the document using `document.images` and log their `src` attributes.
// for (var img of document.images) {
//   console.log(`Image Src: ${img.getAttribute("src")}`);
// }

// 23. Write a function that takes a form and disables all its input fields using the `elements` collection.
// function InputDisabler(form) {
//   for (var ele of form.elements) {
//     ele.disabled = true;
//   }
// }
// InputDisabler(document.forms[0]);

// 24. Use `Array.from` to convert `document.images` to an array and filter images with width > 100px.
// console.log(Array.from(document.images).filter((img) => img.width > 100));
