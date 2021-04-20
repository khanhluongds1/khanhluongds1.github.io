/*Toggle between adding and removing the responsievve class to topnav when the user cliks on the incon*/
function openMenu(){
    var x = document.getElementById("portfolioTopnav");
    if (x.className==="topnav"){
        x.className+="responsive";
    }
    else{
        x.className="topnav";
    }
}