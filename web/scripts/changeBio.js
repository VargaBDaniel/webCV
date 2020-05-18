function getBioPage() {
    let clickedElement = event.target;
    let bioPageToLoad = clickedElement.getAttribute("data-bio-page");

    if(bioPageToLoad) {
        changeBioPage(bioPageToLoad);
    } else {
        let parentOfClickedElement = clickedElement.parentElement;
        let bioPageToLoad = parentOfClickedElement.getAttribute("data-bio-page");
        changeBioPage(bioPageToLoad);
    }
}

function changeBioPage(bioPageToLoad) {
    let bioFrame = document.getElementById("bio-frame");
    
    bioFrame.setAttribute("src", bioPageToLoad + ".html");
}