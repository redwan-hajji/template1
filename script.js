let menu_icon=document.querySelector(".menu");
let ul=document.querySelector(".header .links ul");
  ul.style.display="none";

menu_icon.addEventListener("click",function(){
 if( ul.style.display==="none")
 ul.style.display="block";
else
  ul.style.display="none";
})