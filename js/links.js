let linkName = document.getElementById("linkName");
let linkUrl = document.getElementById("linkUrl");
let addBtn = document.getElementById("addBtn");
let favourites = document.getElementById("favourites");

addBtn.addEventListener("click", function () {
  var name = linkName.value;
  var url = linkUrl.value;
  addLink(name, url);
});

function addLink(name, url) {
  const liLink = document.createElement("li");
  const nameLink = document.createElement("h3");
  const urlLink = document.createElement("a");
  const deleteBtn = document.createElement("button");

  nameLink.innerHTML = name;
  urlLink.href = url;
  deleteBtn.textContent = "X";

  nameLink.addEventListener("click", function () {
    open(urlLink, (target = "_blank"));
  });

  deleteBtn.addEventListener("click", function () {
    liLink.remove();
    //add function to save links (persitence)
    saveLink();
  });


  liLink.appendChild(nameLink);
  liLink.appendChild(urlLink);
  liLink.appendChild(deleteBtn);
  favourites.appendChild(liLink);

  //add function to save links (persitence)
  saveLink();
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("favLinks")) {
    favourites.innerHTML = localStorage.getItem("favLinks");
    //add event for delete buttons
    const deleteButtons = favourites.querySelectorAll("button");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        button.parentElement.remove();
        saveLink();
      });
    });
  }
});

function saveLink() {
  localStorage.setItem("favLinks", favourites.innerHTML);
}
