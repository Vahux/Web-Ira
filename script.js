function showMessage() {
  alert("Ты самая классная, Ира ❤ От Вани :)");
}

function createFloatingText() {
  const text = document.createElement("div");
  text.classList.add("floating-text");
  text.textContent = "Ира ❤";
  text.style.left = Math.random() * 100 + "vw";
  text.style.top = "-50px";
  const duration = 6 + Math.random() * 5;
  text.style.animationDuration = duration + "s";
  text.style.fontSize = (24 + Math.random() * 20) + "px";
  document.body.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, duration * 1000);
}

for (let i = 0; i < 15; i++) {
  setTimeout(() => {
    createFloatingText();
  }, i * 400);
}

setInterval(() => {
  createFloatingText();
}, 1200);

document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});

for (let i = 0; i < 100; i++) {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = Math.random() * 100 + "vw";
  spark.style.top = Math.random() * 100 + "vh";
  spark.style.animationDuration = (5 + Math.random() * 5) + "s";
  spark.style.opacity = Math.random();
  document.body.appendChild(spark);
}
