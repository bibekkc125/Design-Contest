let button = document.querySelector(".browse");
let dropdown = document.querySelector(".dropdown");
let button2 = document.querySelector(".browse2");
let dropdown2 = document.querySelector(".dropdown2");
button.addEventListener('click',function(){
    if(dropdown.style.display != "block"){
        dropdown.style.display = "block";
        console.log("hi");
    }
    else{
        dropdown.style.display = "none";
        dropdown2.style.display ="none";
    }
})
button2.addEventListener('click',function(){
    if(dropdown2.style.display != "block"){
        dropdown2.style.display = "block";

    }
    else{
        dropdown2.style.display = "none";

    }
});
let down = document.querySelector(".elements");
let menu = document.querySelector(".menu>button");
let downstyle = down.style;
function myfunction(){
    if (downstyle.display !="block"){
        downstyle.display ="block";
        menu.style.backgroundColor =  "#F0423C";
        menu.style.color = "white";
    }
    else{
    downstyle.display ="none";
    menu.style.backgroundColor= "#EDEDED";
    menu.style.color = "#424242";
    }
}
