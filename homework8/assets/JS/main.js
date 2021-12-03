// Splitting();

const [red, green, blue] = [46, 101, 243]
// const section1 = document.querySelector('.section1')
const card = document.querySelector('.cards-container');

// card.addEventListener('scroll', function() {
//   let x = 1 + (card.scrollLeft || window.pageXOffset) / 150;
//   x = x < 1 ? 1 : x; // ensure x is always >= 1 (due to Safari's elastic scroll)
//   const [r, g, b] = [red/x, green/x, blue/x].map(Math.round);
//   const color = `rgb(${r}, ${g}, ${b})`
//   document.body.style.backgroundColor = color;

//   console.log(color);
//   console.log(card.scrollLeft);
  
// })

// card.addEventListener('scroll', function() {
//     let x = card.scrollLeft;
//     let w = window.innerWidth / 4;
//     if (x < w) {
//         document.body.style.backgroundColor = "#000000";
//     } else {
//         document.body.style.backgroundColor = "#ffffff";
//     }
//     console.log(x, w);
// })

card.addEventListener('scroll', function() {

    scrollWidth = 1482 / 6;
    scrollLeft = card.scrollLeft;
    console.log(scrollWidth, scrollLeft);

    if (scrollLeft < scrollWidth) {
        document.body.style.background = "#2E65F3";
    } else if (scrollLeft >= scrollWidth * 1 && scrollLeft < scrollWidth * 2) {
        document.body.style.background = "#612EF3";
    } else if (scrollLeft >= scrollWidth * 2 && scrollLeft < scrollWidth * 3) {
        document.body.style.background = "#A852FF";
    } else if (scrollLeft >= scrollWidth * 3 && scrollLeft < scrollWidth * 4) {
        document.body.style.background = "#D64DAF";
    } else {
        document.body.style.background = "#D64D4D";
    }

    // allCards = document.getElementsByClassName('card');

    // for(i=0; i< allCards.length; i++ )
    // {
    //     curCard = allCards[i];
        
    //     // console.log(card.clientWidth, scrollLeft);
        
    //     // The code below makes the background color change when the 						scroll top passes the 2/3 of the previous div.
    //     // console.log(curCard.offsetLeft, card.scrollLeft);
    //     console.log(i);
    //     widthBefore = 0;    
    //     if (i > 0){
    //         widthBefore = allCards[i-1].offsetWidth;
    //     }

    //     console.log(curCard.offsetLeft - widthBefore, scrollLeft);

    //     if (scrollLeft > curCard.offsetLeft - widthBefore){
    //         color = curCard.getAttribute("data-color");
    //         document.body.style.background = color;
    //         console.log(color);

    //     }
                
    // }
});
