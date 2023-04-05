let form = document.querySelector("form");
let ul = document.querySelector(".ul");
let input = document.querySelector("input");
let clear = document.getElementById("clear");
let like = document.querySelectorAll(".like");
let edit = document.querySelectorAll(".edit");

console.log(like);
let i = document.querySelectorAll("i");

function Sumbitvalue() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(input.value);

    ul.innerHTML += `
      <li>
         <p>${input.value}</p> <span><i class="like">✅</i> <i class="edit">🔚</i> <i class="delete">❌</i></span>
        </li>
         `;
    like = document.querySelectorAll("i");
    edit = document.querySelectorAll(".edit");
    console.log(like);
  });
}
Sumbitvalue();
function btnclear() {
  clear.addEventListener("click", function () {
    ul.innerHTML = "";
  });
}
ul.addEventListener("click", function () {
  like.forEach(function (item) {
    item.addEventListener("click", function () {
      console.log(item.parentElement.parentElement.children);
      item.parentElement.parentElement.children[0].classList.toggle("chizu");
    });
  });
  edit.forEach(function (item) {
    input.value = item.parentElement.parentElement.children[0].innerText;
  });
});
let del = document.querySelectorAll(".delete");
console.log(del);
del.forEach(function (item) {
  item.addEventListener("click", function (e) {
    item.parentElement.parentElement.innerText = "";
  });
});
btnclear();
