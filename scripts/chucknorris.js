const createFact = (input) => {
  const factText = document.createElement("span");
  factText.textContent = input;
  factText.className = "chuck-fact";
  return factText;
};

const factBox = document.querySelector(".fact-box");
const generateJoke = (input) => {
  factBox.appendChild(createFact(input));
};

const loadNewFact = () => {
  axios
    .get("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "text/plain",
      },
    })
    .then((response) => {
      const randomFact = response.data;
      generateJoke(`"${randomFact}"`);
    });
};

loadNewFact();
