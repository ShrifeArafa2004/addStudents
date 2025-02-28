let email = document.getElementById("email");
let name = document.getElementById("name");
let create = document.getElementById("create");
let add = document.getElementById("add");
let tbody = document.querySelector("tbody");
let cr = document.querySelector(".create");
let data = [],
  temp;
let mood = "create";
data = JSON.parse(localStorage.getItem("product") || "[]");

create.onclick = () => {
  let obj = {
    name: name.value,
    email: email.value,
  };
  if (name.value != "" && email.value != "") {
    if (mood == "create") {
      data.push(obj);
      mood = "create";
    } else {
      data[temp] = obj;
      create.innerHTML = `create`;
    }
    localStorage.product = JSON.stringify(data);
    cr.style.display = "none";
    add.style.display = "block";
  }

  clear();
  show();
};
function clear() {
  name.value = "";
  email.value = "";
}
function show() {
  let div = "";
  for (let i = 0; i < data.length; i++) {
    div += `
        <tr>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>
                    <button id="edit" onclick="edit(${i})" ><span class="material-symbols-outlined">edit</span></button>
                    <button id="delete" onclick="delete_data(${i})">Delete</button>
                </td>
        </tr>
       `;
  }
  tbody.innerHTML = div;
}
show();
function delete_data(i) {
  data.splice(i, 1);
  localStorage.product = JSON.stringify(data);
  show();
}
function edit(i) {
  name.value = data[i].name;
  email.value = data[i].email;
  mood = "update";
  temp = i;
  create.innerHTML = '<span class="material-symbols-outlined">edit</span>';
  cr.style.display = "flex";
}
add.onclick = () => {
  cr.style.display = "flex";
  add.style.display = "none";
};
