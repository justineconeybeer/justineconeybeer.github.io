/*Toggle between adding and removing the "repsonsive" class 
to topnav when the user click on the icon*/
function openMenu() {
    var x =document.getElementById("portfoliotopnav");
    if (x.className === "topnav"){
        x.className += "responsive";
        }
        else {
            x.className="topnav";
        }
}