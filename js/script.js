let button = document.querySelector(".navigation-left li a");
let button2 = document.querySelector(".navigation-left-dropdown>li:nth-child(3) a");

let transBlack= document.querySelector(".transBlack");

let loginForm = document.querySelector(".login-form");
let loginFormStatus = window.getComputedStyle(loginForm);

let registerForm = document.querySelector(".register-form");
let registerPopUpStatus = window.getComputedStyle(registerForm);

let menu = document.querySelector(".hamburger-menu");
let sideNav = document.querySelector(".side-navbar");
let menuStatus = window.getComputedStyle(sideNav);
let mediaQuery = window.matchMedia("(min-width: 480px)");
let mediaQuery2 = window.matchMedia("(min-width: 992px)");

let dropDown1 = document.querySelector(".navigation-left-dropdown");
let dropDownStatus = window.getComputedStyle(dropDown1);
let dropDown2 = document.querySelector(".navigation-left-dropdown2");
let dropDown2Status = window.getComputedStyle(dropDown2);

function loginToggle(){
    if (loginFormStatus.opacity == "0" && registerPopUpStatus.opacity != "1"){
        transBlack.style.display= "block";
        loginForm.style.opacity = 1;
        loginForm.style.top = "50%";
        loginForm.style.transition = "top 0.7s, opacity 0.7s ease-out";
        if (menuStatus.opacity == 1){
            sideNav.style.left = "100%";
            sideNav.style.transition = "left 0.3s, opacity 0.3s ease-in";
            sideNav.style.opacity = 0;
        }
        
    }
    else if(loginFormStatus.opacity == "0" && registerPopUpStatus.opacity == "1"){
        registerForm.style.top="-50%";
        registerForm.style.transition = "top 0.7s, opacity 0.7s ease-in";
        registerForm.style.opacity = 0;

        transBlack.style.display= "block";
        loginForm.style.opacity = 1;
        loginForm.style.top = "50%";
        loginForm.style.transition = "top 0.7s, opacity 0.7s ease-out";
    }
    else if(loginFormStatus.opacity == "1" && registerPopUpStatus.opacity == "0"){
        transBlack.style.display = "none";
        loginForm.style.top="-50%";
        loginForm.style.opacity = 0;
        loginForm.style.transition = "top 0.7s, opacity 0.7s ease-in";

    }

}

function registerToggle(){
    if (registerPopUpStatus.opacity == "0" && loginFormStatus.opacity != "1"){
        transBlack.style.display= "block";
        registerForm.style.transition = "top 0.7s, opacity 0.7s ease-out";
        loginForm.style.tranistionTimingFunction ="ease-out";
        registerForm.style.top = "50%";
        registerForm.style.opacity = 1;
        if (menuStatus.opacity == 1){
            sideNav.style.left = "100%";
            sideNav.style.transition = "left 0.3s, opacity 0.3s ease-in";
            sideNav.style.opacity = 0;
        }
        
    }
    else if(registerPopUpStatus.opacity == "0" && loginFormStatus.opacity == "1"){
        loginForm.style.top="-50%";
        loginForm.style.opacity = 0;
        loginForm.style.transition = "top 0.7s, opacity 0.7s ease-in";

        transBlack.style.display= "block";
        registerForm.style.opacity = 1;
        registerForm.style.top = "50%";
        registerForm.style.transition = "top 0.7s, opacity 0.7s ease-out";
    }
    else if(registerPopUpStatus.opacity == "1"  && loginFormStatus.opacity == "0"){
        transBlack.style.display = "none";
        registerForm.style.top="-50%";
        registerForm.style.transition = "top 0.7s, opacity 0.7s ease-in";
        registerForm.style.opacity = 0;
        
    }
}

function toggleMenu(){
    if (mediaQuery.matches){
        if (menuStatus.opacity == "0"){
            sideNav.style.left = "50%";
            sideNav.style.transition = "left 0.4s, opacity 0.4s ease-out";
            sideNav.style.opacity = 1;
            transBlack.style.display= "block";
        }
        else{
            sideNav.style.left = "100%";
            sideNav.style.transition = "left 0.3s, opacity 0.3s ease-in";
            sideNav.style.opacity = 0;
            transBlack.style.display= "none";
        }
    }
    else{
        if (menuStatus.opacity == "0"){
            sideNav.style.left = "30%";
            sideNav.style.transition = "left 0.4s, opacity 0.4s ease-out";
            sideNav.style.opacity = 1;
            transBlack.style.display= "block";
        }
        else{
            sideNav.style.left = "100%";
            sideNav.style.transition = "left 0.3s, opacity 0.3s ease-in";
            sideNav.style.opacity = 0;
            transBlack.style.display= "none";
        }
    }
    
}

if (mediaQuery2.matches){
    function toggleDropdown1(){
        if (dropDownStatus.display == "none"){
            dropDown1.style.display = "block";
            button.style.color="#f0423c";
        }
        else if (dropDownStatus.display == "block"){
            dropDown1.style.display ="none";    
            dropDown2.style.display ="none"; 
            button.style.color="#424242";   
            button2.style.backgroundColor="#424242"; 
        }
    }
    
    function toggleDropdown2(){
        if (dropDown2Status.display == "none"){
            dropDown2.style.display = "block";
            button2.style.backgroundColor="#f0423c";
        }
        else if (dropDown2Status.display == "block"){
            dropDown2.style.display ="none"; 
            button2.style.backgroundColor="#424242";   
        }
    }
}

