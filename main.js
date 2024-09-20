function handleEnter(event) {
  if (event.key === "Enter") {
    handleClick();
  }
}

function handleClick() {
  let userValue = userInput.value.trim();
  if (userValue == "") {
    return;
  }
  userInput.value = "";
  let liGeileSiech = createListElement(userValue);

  let btnDel = createDeleteButton();
  btnDel.addEventListener("click", deleteElement);

  ul.appendChild(liGeileSiech);
  liGeileSiech.appendChild(btnDel);

  liGeileSiech.scrollIntoView({ behavior: "smooth" });

  setTimeout(function () {
    liGeileSiech.classList.remove("translate-y-8", "opacity-0");
  }, 200);
}

function createListElement(txtEingabe) {
  let listItem = document.createElement("li");
  listItem.classList.add(
    "transform",
    "translate-y-8",
    "transistion-transform",
    "opacity-0",
    "transition",
    "duration-300",
    "ease-in-out",
    "bg-black",
    "text-white",
    "font-light",
    "text-base",
    "rounded-3xl",
    "mx-6",
    "pl-4",
    "px-2",
    "py-2",
    "flex",
    "justify-between",
    "items-center",
    "group"
  );
  listItem.appendChild(document.createTextNode(txtEingabe));
  return listItem;
}

function createDeleteButton() {
  let btnDel = document.createElement("button");
  btnDel.classList.add(
    "hover:bg-black",
    "active:scale-75",
    "duration-150",
    "ease-out",
    "hover:ease-in",
    "bg-red-500",
    "rounded-full",
    "text-2xl",
    "text-white",
    "px-4",
    "py-2",
    "opacity-0",
    "group-hover:opacity-100",
    "transition",
    "duration-300",
    "ease-in-out"
  );
  btnDel.textContent = "X";
  return btnDel;
}

function deleteElement(event) {
  event.target.parentElement.classList.add("-translate-y-8", "opacity-0");
  setTimeout(function () {
    event.target.parentElement.remove();
  }, 200);
}

let ul = document.getElementById("list");
let userInput = document.getElementById("input-box");
let btnAdd = document.getElementById("buttonAdd");

userInput.addEventListener("keydown", handleEnter);
btnAdd.addEventListener("click", handleClick);
