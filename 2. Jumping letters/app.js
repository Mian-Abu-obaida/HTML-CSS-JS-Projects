
const letters = document.querySelectorAll(".letters span");

letters.forEach((letter) => {
    letter.addEventListener("click", (e) => {
        e.target.classList.add("active"); // Add the class to start the animation
    });
});
letters.forEach((letter) => {
    letter.addEventListener("animationend", (e) => {
        e.target.classList.remove("active"); // Add the class to start the animation
    });
});

