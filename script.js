const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

playerLivesCount.textContent = playerLives;

// generate data
const getData = () => [
  {
    imgSrc: "./images/pexels-aleksandar-pasaric-2872755.jpg",
    name: "aleksandar-pasaric"
  },
  {
    imgSrc: "./images/pexels-free-creative-stuff-1193743.jpg",
    name: "free-creative-stuff"
  },
  {
    imgSrc: "./images/pexels-nubia-navarro-(nubikini)-386009.jpg",
    name: "nubia-navarro-(nubikini)"
  },
  { imgSrc: "./images/pexels-pixabay-161154.jpg", name: "pixabay-161154" },
  { imgSrc: "./images/pexels-pixabay-163822.jpg", name: "pixabay-163822" },
  { imgSrc: "./images/pexels-pixabay-35016.jpg", name: "pixabay-35016" },
  { imgSrc: "./images/pexels-pixabay-54101.jpg", name: "pixabay-54101" },
  { imgSrc: "./images/pexels-pixabay-68507.jpg", name: "pixabay-68507" },
  {
    imgSrc: "./images/pexels-aleksandar-pasaric-2872755.jpg",
    name: "aleksandar-pasaric"
  },
  {
    imgSrc: "./images/pexels-free-creative-stuff-1193743.jpg",
    name: "free-creative-stuff"
  },
  {
    imgSrc: "./images/pexels-nubia-navarro-(nubikini)-386009.jpg",
    name: "nubia-navarro-(nubikini)"
  },
  { imgSrc: "./images/pexels-pixabay-161154.jpg", name: "pixabay-161154" },
  { imgSrc: "./images/pexels-pixabay-163822.jpg", name: "pixabay-163822" },
  { imgSrc: "./images/pexels-pixabay-35016.jpg", name: "pixabay-35016" },
  { imgSrc: "./images/pexels-pixabay-54101.jpg", name: "pixabay-54101" },
  { imgSrc: "./images/pexels-pixabay-68507.jpg", name: "pixabay-68507" }
];

// random array
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    face.src = item.imgSrc;
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
    });
  });
};
cardGenerator();
