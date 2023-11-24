
var menu=document.querySelector(".menu_container");
var hidden_menu=document.querySelector(".menubar");
menu.addEventListener("click", ()=>{
    hidden_menu.classList.toggle("active")
})


document.addEventListener('mouseover', function(event) {
    const element = event.target.className;
    var menuBtn=document.querySelectorAll("."+element)
    console.log(menuBtn)
    menuBtn.forEach(function(element) {
       element.addEventListener('click', function(event) {
           var holla = document.getElementsByTagName("section");
           for (var i = 0; i < holla.length; i++) {
               holla[i].style.display = "none";
               }
    
           const clickedTitle = event.target.getAttribute('title');
           const lowerTitle = clickedTitle.toLowerCase();
               var sec=document.getElementById(lowerTitle)
               sec.style.display="block"
           });
    });
});

