let menu=document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

window.onscroll =() => {
    navbar.classList.remove("active");
};


var feedback = document.getElementById("feedback"){
    alert("Thank you for your feedback");
}
