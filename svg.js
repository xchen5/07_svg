var pic = document.getElementById("a");
var createCircle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 10);
    pic.appendChild(c1);
}

pic.addEventListener("click", createCircle);
