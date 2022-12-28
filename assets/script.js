//this will be 10
// console.log(4 + 6);

// this will be 46
// console.log("4" + 6);
document.getElembentById("box2").addEventListener("click", changeColor);
function changeColor() {
    document.getElementById("box2").innerHTML ="CLICK";
    document.getElementById("box2").style.backgroundColor = "orange";
    
}