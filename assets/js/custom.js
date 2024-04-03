var bg = document.getElementById("pick-bg");
var images = [
  "assets/bg-images/3.svg",
  "assets/bg-images/8.svg",
  "assets/bg-images/11.svg",
  "assets/bg-images/16.svg",
  "assets/bg-images/20.svg",
  "assets/bg-images/23.svg",
];
var countImages = images.length,
  index = Math.floor(Math.random() * countImages);

var btn = document.getElementById("button"),
  pick = document.getElementById("pick-para"),
  con = document.getElementsByClassName("content"),
  em = document.getElementById("emo");

btn.addEventListener("click", async () => {
  try {
    em.innerText = "😸";
    var data = await fetch("https://rizzapi.vercel.app/random");
    var Json = await data.json();
    pick.classList.add("hide");
    // con[0].style.width = "auto";
    // DOM Manipulation
    setTimeout(() => {
      pick.innerText = Json.text;
      pick.classList.remove("hide");
      con[0].style.width = "auto";
      con[0].style.height = "auto";
    }, 500);
    pick.style.marginBottom = 26 + "px";
    bg.style.animationName = "Blur-beat";
    em.innerText = "😻";
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
});
window.onload = () => {
  bg.style.backgroundImage = "url(" + images[index] + ")";
};
 
