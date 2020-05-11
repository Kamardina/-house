var overlayLink = document.createElement("link");

overlayLink.setAttribute("rel", "stylesheet");
overlayLink.setAttribute("href", "overlay.css");

document.head.append(overlayLink);
console.log(overlayLink);

var overlayMarkup =
  '<div class="overlay"><div class="section"><div class="section__img"><img src="" alt=""></div><div class="section__text"><span><img class="close__btn" src="images/close.svg" alt=""></span><h2></h2><p></p></div></div></div></div>';

var d = document.querySelector("script");
d.insertAdjacentHTML("beforebegin", overlayMarkup);

var overlayElement = document.querySelector(".overlay");

overlayElement.classList.add("hidden");

var picture = document.querySelectorAll(".gallery__image");
console.log(picture);
for (let i = 0; i < picture.length; i++) {
  picture[i].addEventListener("click", oneClick);
}

function oneClick() {
  var currentImg = this.querySelector("img");

  var currentImgUrl = currentImg.getAttribute("src");
  var currentImgHead = currentImg.getAttribute("data-header");
  var currentImgDescription = currentImg.getAttribute("data-description");

  var overlayImg = overlayElement.querySelector("img");
  var overlayHead = overlayElement.querySelector("h2");
  var overlayDescription = overlayElement.querySelector("p");

  overlayImg.setAttribute("src", currentImgUrl);
  overlayHead.innerHTML = currentImgHead;
  overlayDescription.innerHTML = currentImgDescription;

  console.log(overlayImg);

  overlayElement.classList.remove("hidden");
  var a = overlayElement.querySelector(".section");
  a.classList.add("animation");

  var closeImg = document.querySelector(".close__btn");
  closeImg.addEventListener("click", closeClick);

  function closeClick() {
    overlayElement.classList.add("hidden");
  }
}
