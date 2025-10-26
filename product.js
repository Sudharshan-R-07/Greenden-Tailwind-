var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var search = document.getElementById("search")
var productcontanier = document.getElementById("product-contaniner")
var productlist=document.querySelectorAll("div")


search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()


    for (count = 0; count < productlist.length; count++) {

        var productname=productlist[count].querySelectorAll("h1").textContent
        if (productlist[count].textContent.toUpperCase().
            indexOf(enteredvalue) < 0) {

            productlist[count].classList.add("hidden")
        }
        else {
            productlist[count].classList.remove("hidden")
        }
    }


})

