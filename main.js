let userInput = document.getElementById("input-box");

let btnAdd = document.getElementById("buttonAdd");
btnAdd.addEventListener("click", handleClick);

function handleClick() {
  let userValue = userInput.value.trim();
  if (userValue == "") {
    return;
  }
  userInput.value = "";

  let li = document.createElement("li");
  li.classList.add(
    "transition",
    "duration-300",
    "ease-in-out",
    "font-light",
    "text-base",
    "rounded-full",
    "border-2",
    "border-solid",
    "border-black",
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

  li.appendChild(document.createTextNode(userValue));
  let ul = document.getElementById("list");
  ul.appendChild(li);
  li.appendChild(btnDel);
}
