//handlers should be [onload="animateElements()" onscroll="animateElements()"]

function ifInViewport(parentElementClassName) {
    const diagonal = document.querySelector("div." + parentElementClassName + "> div.entry");
    let backgroundData = document.querySelector("div." + parentElementClassName).getAttribute("data-background");
    let content = document.querySelector("div#" + backgroundData + " div.content");
    const bounding = diagonal.getBoundingClientRect();
    

    // console.log(diagonal);
    // console.log(background);
    // console.log(bounding);

    if (
        bounding.top <= window.innerHeight / 2 + window.innerHeight * 0.25 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom >= window.innerHeight / 2 - window.innerHeight * 0.25
    ) {
        changeBackground(backgroundData);
    } else {
        content.classList.remove('visible');
        content.classList.add('hidden');
        return;
    }
}

function changeBackground(backgroundData) {
    const background = document.querySelector("div.background");
    let content = document.querySelector("div#" + backgroundData + " div.content");

    background.removeAttribute('class');
    background.classList.add('background');
    background.classList.add(backgroundData);

    content.classList.remove('hidden');
    content.classList.add('visible');
}

//get parents of the elements that will be animated
function getElements() {
    ifInViewport('entry-wrapper1');
    ifInViewport('entry-wrapper2');
}