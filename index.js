const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");
const image9 = document.getElementById("image9");
const originalImageSrc = image2.querySelector("img").src;
image1.addEventListener("mouseover", () => {
  image2.querySelector("img").src = "./img/left.jpeg";
  image3.querySelector("img").src = "./img/left.jpeg";
  image4.querySelector("img").src = "./img/up.jpeg";
  image7.querySelector("img").src = "./img/up.jpeg";
  image5.querySelector("img").src = "./img/left-up.jpeg";
  image6.querySelector("img").src = "./img/left-up.jpeg";
  image8.querySelector("img").src = "./img/left-up.jpeg";
  image9.querySelector("img").src = "./img/left-up.jpeg";
});

image1.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});
image2.addEventListener("mouseover", () => {
  image1.querySelector("img").src = "./img/right.jpeg";
  image3.querySelector("img").src = "./img/left.jpeg";
  image4.querySelector("img").src = "./img/right-up.jpeg";
  image7.querySelector("img").src = "./img/right-up.jpeg";
  image5.querySelector("img").src = "./img/up.jpeg";
  image6.querySelector("img").src = "./img/left-up.jpeg";
  image8.querySelector("img").src = "./img/up.jpeg";
  image9.querySelector("img").src = "./img/left-up.jpeg";
});
image2.addEventListener("mouseout", () => {
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});

image3.addEventListener("mouseover", () => {
  image1.querySelector("img").src = "./img/right.jpeg";
  image2.querySelector("img").src = "./img/right.jpeg";
  image4.querySelector("img").src = "./img/right-up.jpeg";
  image7.querySelector("img").src = "./img/right-up.jpeg";
  image5.querySelector("img").src = "./img/right-up.jpeg";
  image6.querySelector("img").src = "./img/up.jpeg";
  image8.querySelector("img").src = "./img/right-up.jpeg";
  image9.querySelector("img").src = "./img/up.jpeg";
});
image3.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});

image4.addEventListener("mouseover", () => {
  image3.querySelector("img").src = "./img/left-down.jpeg";
  image1.querySelector("img").src = "./img/down.jpeg";
  image2.querySelector("img").src = "./img/left-down.jpeg";
  image7.querySelector("img").src = "./img/up.jpeg";
  image5.querySelector("img").src = "./img/left.jpeg";
  image6.querySelector("img").src = "./img/left.jpeg";
  image8.querySelector("img").src = "./img/left-up.jpeg";
  image9.querySelector("img").src = "./img/left-up.jpeg";
});
image4.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});
image5.addEventListener("mouseover", () => {
  image3.querySelector("img").src = "./img/left-down.jpeg";
  image4.querySelector("img").src = "./img/right.jpeg";
  image1.querySelector("img").src = "./img/right-down.jpeg";
  image2.querySelector("img").src = "./img/down.jpeg";
  image7.querySelector("img").src = "./img/right-up.jpeg";
  image6.querySelector("img").src = "./img/left.jpeg";
  image8.querySelector("img").src = "./img/up.jpeg";
  image9.querySelector("img").src = "./img/left-up.jpeg";
});
image5.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});

image6.addEventListener("mouseover", () => {
  image4.querySelector("img").src = "./img/right.jpeg";
  image3.querySelector("img").src = "./img/down.jpeg";
  image1.querySelector("img").src = "./img/right-down.jpeg";
  image2.querySelector("img").src = "./img/right-down.jpeg";
  image7.querySelector("img").src = "./img/right-up.jpeg";
  image5.querySelector("img").src = "./img/right.jpeg";
  image8.querySelector("img").src = "./img/right-up.jpeg";
  image9.querySelector("img").src = "./img/up.jpeg";
});
image6.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});

image7.addEventListener("mouseover", () => {
  image4.querySelector("img").src = "./img/down.jpeg";
  image3.querySelector("img").src = "./img/left-down.jpeg";
  image1.querySelector("img").src = "./img/down.jpeg";
  image2.querySelector("img").src = "./img/left-down.jpeg";
  image5.querySelector("img").src = "./img/left-down.jpeg";
  image6.querySelector("img").src = "./img/left-down.jpeg";
  image8.querySelector("img").src = "./img/left.jpeg";
  image9.querySelector("img").src = "./img/left.jpeg";
});
image7.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});

image8.addEventListener("mouseover", () => {
  image4.querySelector("img").src = "./img/right-down.jpeg";
  image3.querySelector("img").src = "./img/left-down.jpeg";
  image1.querySelector("img").src = "./img/right-down.jpeg";
  image2.querySelector("img").src = "./img/down.jpeg";
  image5.querySelector("img").src = "./img/down.jpeg";
  image6.querySelector("img").src = "./img/left-down.jpeg";
  image9.querySelector("img").src = "./img/left.jpeg";
  image7.querySelector("img").src = "./img/right.jpeg";
});
image8.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});

image9.addEventListener("mouseover", () => {
  image5.querySelector("img").src = "./img/right-down.jpeg";
  image3.querySelector("img").src = "./img/down.jpeg";
  image1.querySelector("img").src = "./img/right-down.jpeg";
  image2.querySelector("img").src = "./img/right-down.jpeg";
  image4.querySelector("img").src = "./img/right-down.jpeg";
  image8.querySelector("img").src = "./img/right.jpeg";
  image7.querySelector("img").src = "./img/right.jpeg";
  image6.querySelector("img").src = "./img/down.jpeg";
});
image9.addEventListener("mouseout", () => {
  image2.querySelector("img").src = originalImageSrc;
  image1.querySelector("img").src = originalImageSrc;
  image3.querySelector("img").src = originalImageSrc;
  image4.querySelector("img").src = originalImageSrc;
  image7.querySelector("img").src = originalImageSrc;
  image5.querySelector("img").src = originalImageSrc;
  image6.querySelector("img").src = originalImageSrc;
  image8.querySelector("img").src = originalImageSrc;
  image9.querySelector("img").src = originalImageSrc;
});
