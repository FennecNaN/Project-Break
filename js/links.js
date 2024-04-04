let linkName = document.getElementById("linkName");
let linkUrl = document.getElementById("linkUrl");
let addBtn = document.getElementById("addBtn");
let favourites = document.getElementById("favourites")


addBtn.addEventListener("click", function () {
    var name = linkName.value
    var url = linkUrl.value
    addLink(name,url)

})

function addLink (name, url) {
    
    const liLink = document.createElement("li");
    const nameLink = document.createElement("h3");
    const urlLink = document.createElement("a");
    const deleteBtn = document.createElement("button")

    nameLink.innerHTML = name;
    urlLink.href = url;
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", function(){
        liLink.remove();
    })

    nameLink.addEventListener("click", function(){
        open(urlLink, target="_blank")
    })
    liLink.appendChild(nameLink);
    liLink.appendChild(urlLink);
    liLink.appendChild(deleteBtn)
    favourites.appendChild(liLink)

}

