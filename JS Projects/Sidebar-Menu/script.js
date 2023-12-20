let menuToggle = document.querySelector(".menuToggle");
let sidebar = document.querySelector(".sidebar");
let menuLists = document.querySelectorAll(".menuList li");

menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
    sidebar.classList.toggle("active");
};

function activeLink() {
    menuLists.forEach((list) => {
        list.classList.remove("active");
        this.classList.add("active");
    });
}

menuLists.forEach((list) => list.addEventListener("click", activeLink));
