// home page background color change 

const card = document.querySelector('.cards-container');

card.addEventListener('scroll', function() {

    scrollWidth = 1482 / 5;
    scrollLeft = card.scrollLeft;
    console.log(scrollWidth, scrollLeft);

    if (scrollLeft < scrollWidth) {
        document.body.style.background = "#2E65F3";
    } else if (scrollLeft >= scrollWidth * 1 && scrollLeft < scrollWidth * 2) {
        document.body.style.background = "#612EF3";
    } else if (scrollLeft >= scrollWidth * 2 && scrollLeft < scrollWidth * 3) {
        document.body.style.background = "#8e1dff";
    } else if (scrollLeft >= scrollWidth * 3 && scrollLeft < scrollWidth * 4) {
        document.body.style.background = "#E758BF";
    } else if (scrollLeft >= scrollWidth * 4 && scrollLeft < scrollWidth * 5) {
        document.body.style.background = "#F48178";
    } else if (scrollLeft >= scrollWidth * 5 && scrollLeft < scrollWidth * 6) {
        document.body.style.background = "#FF834E";
    } else {
        document.body.style.background = "#FFD656";
    }
});
