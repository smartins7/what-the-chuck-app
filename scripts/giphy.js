const giphyContainer = document.querySelector(".chuck-img");

const generateGiphy = (giphy) => {
  giphyContainer.style.background = `url(${giphy}) center/cover`;
};

const loadGiphy = () => {
  axios
    .get(
      "https://api.giphy.com/v1/gifs/search?api_key=aX1OcXMyZnLHN7hym4JPZUBglwsYIrNH&q=chuck%20norris&limit=50&offset=0&rating=PG-13&lang=en"
    )
    .then((response) => {
      const giphyArray = response.data;
      const randomGiphy = giphyArray.data[Math.floor(Math.random() * 31)];
      generateGiphy(randomGiphy.images.downsized_large.url);
    })
    .catch((err) => console.log(err));
};

loadGiphy();
