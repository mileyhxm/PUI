// home page background color change 

const card = document.querySelector('.cards-container');
const footer = document.getElementsByClassName('footer')[0];

card.addEventListener('scroll', function() {

    scrollWidth = 1482 / 5;
    scrollLeft = card.scrollLeft;
    console.log(scrollWidth, scrollLeft);

    if (scrollLeft < scrollWidth) {
        document.body.style.background = "#2E65F3";
    } else if (scrollLeft >= scrollWidth * 1 && scrollLeft < scrollWidth * 2) {
        document.body.style.background = "#612EF3";
        footer.style.color="white"
    } else if (scrollLeft >= scrollWidth * 2 && scrollLeft < scrollWidth * 3) {
        document.body.style.background = "#8e1dff";
        footer.style.color="white"
    } else if (scrollLeft >= scrollWidth * 3 && scrollLeft < scrollWidth * 4) {
        document.body.style.background = "#E758BF";
        footer.style.color="#111111"
    } else if (scrollLeft >= scrollWidth * 4 && scrollLeft < scrollWidth * 5) {
        document.body.style.background = "#F48178";
        footer.style.color="#111111"
    } else if (scrollLeft >= scrollWidth * 5 && scrollLeft < scrollWidth * 6) {
        document.body.style.background = "#FF834E";
        footer.style.color="#111111"
    } else {
        document.body.style.background = "#ffe286";
        footer.style.color="#111111"
    }
});
