const $value = $("#value");
let expr = "";
let history = JSON.parse(localStorage.getItem("history") || "[]");
const $historyBox = $(".calculator-history");

function show(res) {
  $value.text(res ?? (expr || "0"));
}

function equal() {
  try {
    const result = String(eval(expr || "0"));
    history.push(expr + "=" + result);
    expr = result;
    show(expr);
    renderHistory();
    localStorage.setItem("history", JSON.stringify(history));
  } catch {
    expr = "";
    show("Error");
  }
}

$(".key").click(function () {
  const a = $(this).data("action");
  if (a === "clear") expr = "";
  else if (a === "back") expr = expr.slice(0, -1);
  else if (a === "=") equal();
  else expr += a;
  show();
});

$(document).on("keydown", function (e) {
  if (/\d|\+|\-|\*|\//.test(e.key)) handle(e.key);
  if (e.key === "Enter") handle("=");
  if (e.key === "Backspace") handle("back");
  if (e.key === "Escape") handle("clear");
  if (e.key === ".") handle(".");
});

function handle(action) {
  if (action === "clear") expr = "";
  else if (action === "back") expr = expr.slice(0, -1);
  else if (action === "=") equal();
  else expr += action;
  show();
}

function renderHistory() {
  $historyBox.html(
    history.map((h) => `<div class="history-item">${h}</div>`).join("")
  );
}
renderHistory();

$(document).on("click", ".history-item", function () {
  const choosenHistory = $(this).text();
  expr = choosenHistory.split("=")[1];
  show(expr);
});
$(".delete-history").click(function () {
  localStorage.removeItem("history");
  $historyBox.html("");
  history = [];
});
