var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.jpg";
    }else{
            icon.src = "moon.jpg";
        }
    }
var clickme = document.getElementById("cm");
clickme.onclick = function(){
    alert("search online!");
    document.getElementById("iframe").style.display="block";
    document.getElementById("h3").innerHTML="ask bing!";

}