

let getFigGroup= document.querySelectorAll(".gallery-fig-data");
getFigGroup.forEach((element ,index) => {
    element.addEventListener('click', handleGalleryPopup);
});


function handleGalleryPopup(e){
    e.preventDefault();
    let getTargetEle= e.target;
    let getParentEle= getTargetEle.parentElement;
    let getImgEle= getParentEle.querySelector("img");
    let getImagePath= getImgEle?.getAttribute("src");
    if(!getImagePath) {
        document.onclick();
        return
    }
    let getTitle= getTargetEle.querySelector(".title");
    let getShowBox= document.getElementById("galleryPopup");
    let getShowImgEle= getShowBox.querySelector(".image-inner-data img");
    let getShowImgTitleEle= getShowBox.querySelector(".image-inner-data .title");
    // getShowImgEle.setAttribute("src", getImagePath);
    if(getTitle) {
        getShowImgTitleEle.textContent= getTitle.textContent;
    }
    if(getShowImgEle) {
        getShowImgEle.src= getImagePath;
    }

    console.log({getTargetEle, getParentEle,  getImgEle, getImagePath})
}