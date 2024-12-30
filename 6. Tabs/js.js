const tabOne = document.querySelector(".react");
const tabTwo = document.querySelector(".vue");
const tabThree = document.querySelector(".angular");
const body = document.body;
const item = document.querySelectorAll(".item");
const icon = document.querySelector(".big-icon");
const active = document.querySelector(".active");

function setColors( tab, bgColor, iconClass, infoColor){
    body.style.backgroundColor = bgColor;
    icon.innerHTML = `<i class="${iconClass}"></i>`;
    for ( let i =0; i< item.length; i++){
        item[i].style.color = infoColor;
    }
}
setColors(tabOne,"#00d8ff","fab fa-react","#00d8ff");
tabOne.classList.add(tabOne);

tabOne.addEventListener("click",()=>{
    setColors(tabOne,"#00d8ff","fab fa-react","#00d8ff");
    tabOne.classList.add("tabOne");
    tabTwo.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})

tabTwo.addEventListener("click",()=>{
    setColors(tabTwo,"#42b883","fab fa-vuejs","#42b883");
    tabTwo.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabThree.classList.remove("tabOne");
})
tabThree.addEventListener("click",()=>{
    setColors(tabThree,"#b52e31","fab fa-angular","#b52e31");
    tabThree.classList.add("tabOne");
    tabOne.classList.remove("tabOne");
    tabTwo.classList.remove("tabOne");
})
// const tabOne = document.querySelector(".react");
// const tabTwo = document.querySelector(".vue");
// const tabThree = document.querySelector(".angular");
// const body = document.body;
// const items = document.querySelectorAll(".item");
// const icon = document.querySelector(".big-icon");

// function setColors(bgColor, iconClass, infoColor) {
//     body.style.backgroundColor = bgColor;
//     icon.innerHTML = `<i class="${iconClass}"></i>`;
//     for (let i = 0; i < items.length; i++) {
//         items[i].style.color = infoColor;
//     }
// }

// tabOne.addEventListener("click", () => {
//     setColors("#00d8ff", "fab fa-react", "#00d8ff");
//     tabOne.classList.add("active");
//     tabTwo.classList.remove("active");
//     tabThree.classList.remove("active");
// });

// tabTwo.addEventListener("click", () => {
//     setColors("#41b883", "fab fa-vuejs", "#41b883");
//     tabTwo.classList.add("active");
//     tabOne.classList.remove("active");
//     tabThree.classList.remove("active");
// });

// tabThree.addEventListener("click", () => {
//     setColors("#dd1b16", "fab fa-angular", "#dd1b16");
//     tabThree.classList.add("active");
//     tabOne.classList.remove("active");
//     tabTwo.classList.remove("active");
// });


// setColors("#00d8ff", "fab fa-react", "#00d8ff");
// tabOne.classList.add("active");