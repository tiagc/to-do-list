let btnAdd = document.getElementById("buttonAdd");

btnAdd.addEventListener("click", handleClick);

function handleClick() {
  let li = document.createElement("li");
  li.classList.add(
    "font-light",
    "text-base",
    "rounded-full",
    "border-2",
    "border-solid",
    "border-black",
    "px-4",
    "py-2"
  );
  li.appendChild(document.createTextNode("Task"));
  ul.appendChild(li);
}

let ul = document.getElementById("list");
