
// BURGER

const zmiana = document.querySelector(".burger")
        const ico = document.querySelector('.ico')



        zmiana.addEventListener("click", function () {
            zmiana.classList.toggle("active")
            ico.classList.toggle("active")

        })
//  NAV MENU 


const menu = document.querySelector(".menu ul")
const burgerButton = document.querySelector(".burger")

function showMenu() {
 menu.classList.toggle("activeBurger")
}

burgerButton.addEventListener("click", showMenu)
