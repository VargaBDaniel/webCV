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
    //load bio page
    let bioFrame = document.getElementById("bio-frame");
    bioFrame.setAttribute("src", bioPageToLoad + ".html");

    //activate any previously deactivated cards
    let cards = document.getElementsByClassName("card");
    let cardsArray = Object.values(cards);
    cardsArray.forEach(card => {
        card.classList.remove("deactivated");
        if (card.hasAttribute("onclick")) {
            
        } else {
            card.setAttribute("onclick", "getBioPage()");
        }
    });

    //deactivate clicked card
    let clickedElement = document.getElementById(bioPageToLoad);
    clickedElement.classList.add("deactivated");

    clickedElement.removeAttribute("onclick");
}