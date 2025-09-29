// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
// var firstDiv = document.getElementsByTagName("div")[0];
// console.log(firstDiv.innerHTML);

// 2. Using getElementById change the text of #my-p to "Hello DOM".
// var ele = document.getElementById("my-p");
// ele.innerText = "Hello DOM";

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
// var ele = document.querySelector(".target-div");
// console.log(ele.nodeName);

// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
// var eles = document.querySelectorAll("div");
// console.log(eles.length);

// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
// var ele = document.getElementsByName("user-email")[0];
// ele.value = "user@test.com";

// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
// var ele = document.querySelector("[type='text']");
// if (ele.hasAttribute("name") == false) {
//   ele.setAttribute("name", "user-name");
// }

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
// var ele = document.getElementById("my-p");
// ele.innerText += " - UPDATED";

// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
// var images = [
//   "./assets/banner-1.webp",
//   "./assets/banner-2.webp",
//   "./assets/banner-3.webp",
// ];
// var imagesContainer = document.querySelector(".images");
// var leftArrow = document.querySelector(".arrow.left");
// var rightArrow = document.querySelector(".arrow.right");
// var stopBtn = document.querySelector(".stop");
// var startBtn = document.querySelector(".start");

// var currentIndex = 0;
// function showImage(index) {
//   imagesContainer.innerHTML = "";

//   var img = document.createElement("img");
//   img.setAttribute("src", images[index]);
//   imagesContainer.appendChild(img);
// }
// showImage(currentIndex);

// var sliderInterval = setInterval(() => {
//   currentIndex = (currentIndex + 1) % images.length;
//   showImage(currentIndex);
// }, 2000);

// leftArrow.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   showImage(currentIndex);
// });

// rightArrow.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   showImage(currentIndex);
// });

// function stopInterval() {
//   clearInterval(sliderInterval);
//   stopBtn.style.backgroundColor = "red";
//   startBtn.style.backgroundColor = "#afaaaa";
// }
// function continueInterval() {
//   stopInterval();
//   startBtn.style.backgroundColor = "green";
//   stopBtn.style.backgroundColor = "#afaaaa";
//   setTimeout(() => {
//     startBtn.style.backgroundColor = "#afaaaa";
//   }, 2000);
//   sliderInterval = setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
//   }, 2000);
// }

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
// var ele = document.querySelector("input[type='text']");
// ele.setAttribute("placeholder", "Type your full name");

// 10. Log whether the email input has attribute "required"; if missing add it.
// var ele = document.querySelector("input[type='email']");
// ele.toggleAttribute("required", "true");

// 11. Write function getSelectedValue(selectId) returning the current selected option value.
// function getSelectedValue(selectId) {
//   const select = document.getElementById(selectId);
//   if (!select) return null;

//   const selectedOption = select.options[select.selectedIndex];
//   return selectedOption ? selectedOption.value : null;
// }

// 12. Loop through all options of the select and log each option's text and value.
// var options = document.querySelector("select").options;
// for (var i = 0; i < options.length; i++) {
//   console.log(
//     `Option${i + 1}, Text: ${options[i].innerText} ,Value: ${options[i].value}`
//   );
// }

// 13. Programmatically select the option with value "EG".
// var options = document.querySelector("select").options;
// var selected;
// for (var i = 0; i < options.length; i++) {
//   if (options[i].value == "EG") {
//     selected = options[i];
//   }
// }
// console.log(selected);

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
// function selectByText(selectId, text) {
//   var select = document.getElementById(selectId);

//   var options = select.options;
//   for (var i = 0; i < options.length; i++) {
//     if (options[i].text == text) {
//       options[i].setAttribute("selected", true);
//     }
//   }
// }
// selectByText("my-country", "United Kingdom");

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
// var ele = document.getElementById("div-2");
// ele.innerHTML = "<p><b>Bold Text</b></p>";

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
// var ele = document.getElementById("div-2");
// ele.classList.add("class-a", "class-b");
// ele.classList.remove("class-b");

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
// var ele = document.getElementById("div-2");
// ele.classList.toggle("hidden");
// ele.classList.toggle("hidden");
// the ele is showing

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
// function insertAfter(refNode, newNode) {
//   if (refNode.parentNode) {
//     refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
//   }
// }

// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
// const newDiv = document.createElement("div");
// newDiv.innerText = "Dynamic Box";
// newDiv.style.backgroundColor = "yellow";
// newDiv.style.padding = "10px";
// newDiv.style.margin = "5px";

// document.getElementById("div-2").appendChild(newDiv);

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
// const newP = document.createElement("p");
// newP.innerText = "I'm inserted before the first child";
// const div2 = document.getElementById("div-2");
// div2.insertBefore(newP, div2.firstChild);

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
// div2.insertAdjacentHTML("afterend", "<span>AFTER END</span>");

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
// document.getElementById("myForm").addEventListener("submit",  (e)=> {
//   e.preventDefault();

//   const textValue = this.querySelector("input[type='text']").value;
//   const emailValue = this.querySelector("input[type='email']").value;
//   const selectValue = this.querySelector("select").value;

//   console.log("Text:", textValue);
//   console.log("Email:", emailValue);
//   console.log("Select:", selectValue);
// });

// 23. Add input event on the text input that logs its length whenever it changes.
// var inp = document.querySelector("input[type='text']");

// inp.addEventListener("input", function () {
//   console.log(inp.value.length);
// });

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).

// function validateEmailSimple(value) {
//   return value.includes("@") && value.includes(".");
// }

// // Passing examples:
// console.log(validateEmailSimple("user@example.com")); // true
// console.log(validateEmailSimple("hello.world@mail.org")); // true
// // Failing examples:
// console.log(validateEmailSimple("usernameexample.com")); // false because no @
// console.log(validateEmailSimple("user@examplecom")); // false the . is missing

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
// const div2 = document.getElementById("div-2");
// const tempEl = document.createElement("span");
// div2.appendChild(tempEl);
// div2.removeChild(tempEl);

// 25. Create an element, append it to
// <div id="wrapper">
//   <p id="first">First</p>
// add element here
//   <p id="second">Second</p>
// </div>

// const wrapper = document.getElementById("wrapper");
// const newEl = document.createElement("p");
// newEl.textContent = "I'm in the middle!";
// const second = document.getElementById("second");
// wrapper.insertBefore(newEl, second);

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
// function insertAfter(refNode, newNode) {
//   refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
// }
// var div2 = document.getElementById("div-2");
// var clonedDiv = div2.cloneNode(true);
// clonedDiv.id = "div-2-clone";
// insertAfter(div2, clonedDiv);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
// var inputs = document.querySelectorAll(
//   "input[type='text'], input[type='email']"
// );
// inputs.forEach((inp) => {
//   inp.style.border = "2px solid green";
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");
//   if (form) highlightInputs(form);
// });

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.
// function buildCard(title, content) {
//   const card = document.createElement("div");
//   card.className = "card";

//   const h3 = document.createElement("h3");
//   h3.textContent = title;

//   const p = document.createElement("p");
//   p.textContent = content;

//   card.appendChild(h3);
//   card.appendChild(p);

//   return card;
// }

// document.body.appendChild(buildCard("Card 1", "This is the first card."));
// document.body.appendChild(buildCard("Card 2", "This is the second card."));

// 29. Add delegated click listener on body logging when a .card is clicked.
// document.body.addEventListener("click", (e) => {
//   const card = e.target.closest(".card");
//   if (card) {
//     console.log("Card clicked:", card);
//   }
// });

// 30. Reflection (comment): Which two tasks were most challenging and why?
// 1. slider as it needs time for the best customization
// 2. question 14 was not clear enough but once it was explained I solved it

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
// const ul = document.createElement("ul");

// for (let i = 1; i <= 10; i++) {
//   const li = document.createElement("li");
//   li.textContent = `Item ${i}`;
//   li.className = i % 2 === 0 ? "even" : "odd";
//   ul.appendChild(li);
// }
// document.body.appendChild(ul);

// 32. u have form with 3 inputs, when we type in the input show the output under it in another div
// const form = document.getElementById("q32Form");
// const inputs = form.querySelectorAll("input");
// const output = document.querySelector(".output");

// function updateOutput() {
//   output.innerHTML = `
//       name: ${inputs[0].value}<br>
//       email: ${inputs[1].value}<br>
//       number: ${inputs[2].value}
//     `;
// }

// inputs.forEach((input) => {
//   input.addEventListener("input", updateOutput);
// });
