// constructor fn
const User = function (name, position, office, age, startDate) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.startDate = startDate;
};

// factory fn
// function createUser(name, position, office, age, startDate) {
//   return { name, position, office, age, startDate };
// }

const users = [
  new User("John Doe", "Software Engineer", "New York", 29, "2021-04-12"),
  new User("Jane Smith", "Project Manager", "London", 35, "2019-08-23"),
  new User("Michael Johnson", "UI/UX Designer", "Berlin", 27, "2020-11-15"),
  new User("Emily Davis", "Data Analyst", "Toronto", 31, "2018-06-01"),
  new User("David Wilson", "DevOps Engineer", "Sydney", 33, "2022-01-20"),
];

const tbody = document.querySelector("tbody");
const form = document.getElementById("userForm");
const thead = document.querySelectorAll("th");
let sortDirection = true;

function renderTable() {
  tbody.innerHTML = "";
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.position}</td>
      <td>${user.office}</td>
      <td>${user.age}</td>
      <td>${user.startDate}</td>
    `;
    tbody.appendChild(row);
  });
}
renderTable();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = new User(
    form.querySelector("input[name='name']").value,
    form.querySelector("input[name='position']").value,
    form.querySelector("input[name='office']").value,
    parseInt(form.querySelector("input[name='age']").value, 10),
    form.querySelector("input[name='startDate']").value
  );
  users.push(newUser);
  renderTable();
  form.reset();
});

thead.forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.getAttribute("data-key");
    thead.forEach((t) => t.classList.remove("active"));
    th.classList.toggle("active");
    users.sort((a, b) => {
      if (a[key] < b[key]) return sortDirection ? -1 : 1;
      if (a[key] > b[key]) return sortDirection ? 1 : -1;
      return 0;
    });
    sortDirection = !sortDirection;
    renderTable();
  });
});

///////////////////////////////////////////////////////////////////////////////////////////

// question 2
// create stack using js
// function Stack() {
//   this.arr = [];
//   this.push = function (item) {
//     this.arr.push(item);
//   };
//   this.pop = function () {
//     if (this.arr.length === 0) {
//       return "Stack is empty";
//     }
//     return this.arr.pop();
//   };
//   return this.arr;
// }

// const stack = new Stack();
// stack.push(1, 2, 3, 4);
// console.log(stack); // [1,2,3,4]
// stack.pop();
// console.log(stack); // [1,2,3]

// question 3
// create linkedlist using js
function Linkedlist() {
  this.head = null;
  this.size = 0;
  this.append = function (value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
    this.render();
  };
  this.prepend = function (value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    this.render();
  };
  this.print = function () {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  };
  this.render = function () {
    const container = document.getElementById("list");
    container.innerHTML = "";
    let current = this.head;
    while (current) {
      const nodeDiv = document.createElement("div");
      nodeDiv.classList.add("node", "arrow");
      nodeDiv.textContent = current.value;
      container.appendChild(nodeDiv);
      current = current.next;
    }
    const nullNode = document.createElement("div");
    nullNode.className = "node";
    nullNode.textContent = "null";
    container.appendChild(nullNode);
  };
  this.pop = function () {
    if (!this.head) {
      console.log("List is empty");
      return null;
    }
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      this.size--;
      this.render();
      return value;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    this.size--;
    this.render();
    return value;
  };
}

function Node(value) {
  this.value = value;
  this.next = null;
}

const list = new Linkedlist();

function appendNode() {
  const val = document.getElementById("valueInput").value;
  if (val) list.append(val);
  document.getElementById("valueInput").value = "";
}

function prependNode() {
  const val = document.getElementById("valueInput").value;
  if (val) list.prepend(val);
  document.getElementById("valueInput").value = "";
}
function popNode() {
  list.pop();
  showList();
}

// Question 4:
// Inheritance in constructor function how will it be
function Parent(name) {
  this.name = name;
}

Parent.prototype.greet = function () {
  console.log("Hello from " + this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child;

var parentInstance = new Parent("Alice");
parentInstance.greet(); // Output: Hello from Alice

var childInstance = new Child("Bob", 30);
childInstance.greet(); // Output: Hello from Bob (inherited from Parent)
