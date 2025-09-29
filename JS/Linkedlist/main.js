class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    render();
  }

  prepend(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    render();
  }

  popEnd() {
    if (!this.head) return null;
    if (!this.head.next) {
      this.head = null;
      this.length--;
      render();
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.length--;
    render();
  }

  popBeginning() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.length--;
    render();
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
    render(true);
  }

  toArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}

const list = new LinkedList();
const container = document.getElementById("list");

function render(reverseAnim = false) {
  container.innerHTML = "";
  const arr = list.toArray();
  arr.forEach((val, idx) => {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node fade-in";
    nodeDiv.textContent = val;
    container.appendChild(nodeDiv);
    if (idx < arr.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.textContent = "→";
      container.appendChild(arrow);
    }
  });

  if (reverseAnim) {
    container.classList.add("reverse-anim");
    setTimeout(() => container.classList.remove("reverse-anim"), 500);
  }
}
function appendNode() {
  const val = document.getElementById("valueInput").value;
  if (val) list.append(val);
}
function prependNode() {
  const val = document.getElementById("valueInput").value;
  if (val) list.prepend(val);
}

function popEndNode() {
  list.popEnd();
}

function popBeginningNode() {
  list.popBeginning();
}

function reverseList() {
  list.reverse();
}
