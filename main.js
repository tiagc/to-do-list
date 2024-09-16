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

  let li = document.createElement("li");
  li.classList.add(
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
    "rounded-full",
    "mx-4",
    "pl-4",
    "px-2",
    "py-2",
    "flex",
    "justify-between",
    "items-center",
    "group"
  );

  let btnDel = document.createElement("button");
  btnDel.textContent = "X";
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

  btnDel.addEventListener("click", deleteElement);

  let ul = document.getElementById("list");
  li.appendChild(document.createTextNode(userValue));
  li.appendChild(btnDel);
  ul.appendChild(li);

  li.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    li.classList.remove("translate-y-8", "opacity-0");
  }, 200);
}

function deleteElement(event) {
  event.target.parentElement.remove();
  setTimeout(() => {
    li.classList.remove("-translate-y-8", "opacity-0");
  }, 200);
}

let userInput = document.getElementById("input-box");
let btnAdd = document.getElementById("buttonAdd");

btnAdd.addEventListener("click", handleClick);
userInput.addEventListener("keydown", handleEnter);

let btnPlus = document.getElementById("plus");

btnPlus.addEventListener("click", newClass);
function newClass() {
  btnPlus.classList.add(
    "bg-white",
    "text-3xl",
    "text-black",
    "border-black",
    "border-2",
    "rounded-full",
    "px-4",
    "hover:bg-gray-200",
    "transition",
    "duration-150",
    "ease-out",
    "hover:ease-in",
    "focus:bg-black",
    "focus:text-white"
  );
}
