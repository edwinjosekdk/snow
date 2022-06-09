






var minScrollHeight = 1;
window.addEventListener('scroll', handleWindowScroll);



function handleWindowScroll() {
    let getWindowheight= window.scrollY;
    let getHeaderTag= document.getElementsByTagName("body")[0];
    // let check= getHeaderTag.classList.contains("nav-view");
    // console.log("check")
    if(getWindowheight > minScrollHeight) {
        getHeaderTag.classList.add("nav-fixed");
    }else {
        getHeaderTag.classList.remove("nav-fixed");
    }
}

let getToggleMenuBar= document.getElementById("toggle");

getToggleMenuBar.addEventListener("click", handleNavbar);

function handleNavbar() {
    this.classList.toggle("on");
    toggleNav();
}


function toggleNav() {
    // open-nav
    let getNav= document.getElementsByClassName("nav-bar-mob-view");
    getNav[0].classList.toggle("open-nav");
    let getBodyTag= document.getElementsByTagName("body")[0];
    getBodyTag.classList.toggle("nav-view");
    getBodyTag.classList.add("nav-fixed");
}