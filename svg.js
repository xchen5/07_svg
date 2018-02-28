var pic = document.getElementById("a");
var clear = document.getElementById("clear");
var prevX = -1;
var prevY = -1;


var createCircle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var c2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if(prevX === -1){
      prevX = e.offsetX;
      prevY = e.offsetY;
    }
    c2.setAttribute("x1", prevX);
    c2.setAttribute("y1", prevY);
    c2.setAttribute("x2", x);
    c2.setAttribute("y2", y);
    c2.setAttribute("style", "stroke: black;")
    prevX = e.offsetX;
    prevY = e.offsetY;
    pic.appendChild(c2);
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 10);
    pic.appendChild(c1);
}

var toClear = function(e){
  pic.innerHTML = '';
}

pic.addEventListener("click", createCircle);
clear.addEventListener("click", toClear);
