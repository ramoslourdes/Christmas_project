const navburguer = document.getElementById("nav-burguer");

burguerBar.addEventListener('click', showMenu)

function showMenu() {
    if(navburguer.style.display === "none"){
        navburguer.style.display = "flex"
    } else {
        navburguer.style.display = "none"
    }
}