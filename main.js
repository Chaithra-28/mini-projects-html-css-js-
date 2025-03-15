const container = document.getElementById('container');
const imageOne = document.querySelector('.image-1');
const imageTwo = document.querySelector('.image-2');
const btnYes = document.querySelector('.yes-btn');
const btnNo = document.querySelector('.no-btn');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

btnNo.addEventListener("mouseover", () => {
   const containerHeight = container.getBoundingClientRect().height;
   const containerWidth = container.getBoundingClientRect().width;
   const btnHeight = btnNo.getBoundingClientRect().height;
   const btnWidth = btnNo.getBoundingClientRect().width;

   let newTop = getRandomNumber(0, containerHeight - btnHeight);
   let newLeft = getRandomNumber(0, containerWidth - btnWidth);

   btnNo.style.position = "absolute"; // Make sure it can move
   btnNo.style.top = `${newTop}px`;
   btnNo.style.left = `${newLeft}px`;
});

function yesClicked() {
    document.querySelector("h1").innerText = "Yayy! I knew you would say yes. ❤️";
    document.querySelector(".image-1").classList.add("hide");
    document.querySelector(".image-2").classList.remove("hide");
    document.querySelector(".no-btn").classList.add("hide");
}
