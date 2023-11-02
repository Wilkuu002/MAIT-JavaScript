//zadanie 1
const getBlog = document.querySelector(".about-blog__content-title");
const imgElement = document.querySelector('img[src="./img/logo.png"]');
const kontakt = document.querySelector('a[href="#contact"]');
const linkMail = document.querySelector(
  'a[href="mailto:grzegorz@theadventurerblog.pl'
);
const Laos = document.querySelector(".first-article__text-title");

getBlog.textContent = "dzien dobry";
if (imgElement) {
  const tagName = imgElement.tagName;
  console.log("Nazwa tagu loga strony: " + tagName);
}

const nowaSciezka = "./img/kowal.png";

imgElement.src = nowaSciezka;

//const nowyMail = "kacperwilk@poczta.onet.pl";
//linkMail.href = "mailto:" + nowyMail;

//console.log(kontakt.innerHTML);

//const headerClass1 = getBlog.className;
//console.log({ headerClass1 });
//header.className = ""
//getBlog.classList.remove(".about-blog__content-title");

const newLi = document.createElement("li");

// Stwórz nowy element <a> (link)
const newLink = document.createElement("a");
newLink.setAttribute("href", "#contact");
newLink.innerText = "Kontakt";

// Dodaj link do elementu <li>
newLi.appendChild(newLink);

// Dodaj element <li> do istniejącego menu
const menu = document.querySelector(".navigation-menu ul");
menu.appendChild(newLi);

document.querySelector(".about-me-title").remove();

Laos.style.color = "red";
Laos.addEventListener("click", function () {
  console.log(this);
  console.log(this.type);
});

imgElement.addEventListener("click", function () {
  console.log(this);
  console.log(this.style);
  if (this.style.borderColor === "") {
    this.style.borderColor = "magenta";
    this.style.borderWidth = "50px ";
    this.style.borderStyle = "solid";
    this.style.transition = "border-color 0.5s";
    let rotation = 0;
    const rotateInterval = setInterval(() => {
      this.style.transform = `rotate(${rotation}deg)`;
      rotation += 10; // Zwiększ kąt obrotu o 10 stopni za każdym razem
      if (rotation >= 360) {
        clearInterval(rotateInterval); // Zatrzymaj obracanie po pełnym obrocie
      }
    }, 100);
  } else {
    this.style.borderColor = "";
    this.style.transform = "rotate(0deg)";
  }
});
