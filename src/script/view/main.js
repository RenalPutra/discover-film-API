import "../components/discover-item";
import "../components/coming-item";
import "../components/top-item";
import "../components/nav-bar";
import "../components/footer-bar";
import "../components/main-bar";
import "../components/search-bar";
import "../components/search-list";
import "../components/fail-request";
import "../components/nav-mobile";
import "../components/search-bar2";
import "../JQuery/loadingScreen";
import mainImage from "../../images/cinema2.gif";
import loadImage from "../../images/segitiga.gif";

const main = () => {
  const popularM = document.getElementById("popular");
  const comingM = document.getElementById("coming");
  const topM = document.getElementById("top");
  const cariM = document.getElementById("cariM");
  const popularM2 = document.getElementById("popular2");
  const comingM2 = document.getElementById("coming2");
  const topM2 = document.getElementById("top2");
  const cariM2 = document.getElementById("cariM2");
  const btPop = document.querySelector("#bt-pop");
  const btCom = document.querySelector("#bt-com");
  const btRat = document.querySelector("#bt-rat");
  const btPop2 = document.querySelector("#bt-pop2");
  const btCom2 = document.querySelector("#bt-com2");
  const btRat2 = document.querySelector("#bt-rat2");

  btPop.addEventListener("click", () => {
    popularM.removeAttribute("hidden");
    comingM.setAttribute("hidden", true);
    topM.setAttribute("hidden", true);
    cariM.setAttribute("hidden", true);
  });
  btCom.addEventListener("click", () => {
    popularM.setAttribute("hidden", true);
    comingM.removeAttribute("hidden");
    topM.setAttribute("hidden", true);
    cariM.setAttribute("hidden", true);
  });
  btRat.addEventListener("click", () => {
    popularM.setAttribute("hidden", true);
    comingM.setAttribute("hidden", true);
    topM.removeAttribute("hidden");
    cariM.setAttribute("hidden", true);
  });
  // duplicate for pad
  btPop2.addEventListener("click", () => {
    popularM2.removeAttribute("hidden");
    comingM2.setAttribute("hidden", true);
    topM2.setAttribute("hidden", true);
    cariM2.setAttribute("hidden", true);
  });
  btCom2.addEventListener("click", () => {
    popularM2.setAttribute("hidden", true);
    comingM2.removeAttribute("hidden");
    topM2.setAttribute("hidden", true);
    cariM2.setAttribute("hidden", true);
  });
  btRat2.addEventListener("click", () => {
    popularM2.setAttribute("hidden", true);
    comingM2.setAttribute("hidden", true);
    topM2.removeAttribute("hidden");
    cariM2.setAttribute("hidden", true);
  });

  const popularArtikel = document.querySelector("#popku");
  const comingArtikel = document.querySelector("#comku");
  const topingArtikel = document.querySelector("#topku");
  const cariku = document.querySelector("#cari");
  const popularArtikel2 = document.querySelector("#popku2");
  const comingArtikel2 = document.querySelector("#comku2");
  const topingArtikel2 = document.querySelector("#topku2");
  const cariku2 = document.querySelector("#cari2");
  const search = document.querySelector("#nav-tab");
  const searchPad = document.querySelector("#nav-pad");
  const searchbar = document.createElement("search-bar");
  const searchbar2 = document.createElement("search-bar2");
  const navMob = document.querySelector("#nav-con");
  const navMob2 = document.querySelector("#nav-cone");
  const load = document.querySelector(".loading");

  searchPad.appendChild(searchbar2);
  search.appendChild(searchbar);

  const gambarme = document.createElement("img");
  gambarme.setAttribute("src", mainImage);
  gambarme.setAttribute("class", "col logo-img");
  search.prepend(gambarme);

  const gambarMob1 = document.createElement("img");
  gambarMob1.setAttribute("src", mainImage);
  gambarMob1.setAttribute("class", "navbar-brand logo-img");
  navMob.prepend(gambarMob1);

  const gambarMob2 = document.createElement("img");
  gambarMob2.setAttribute("src", mainImage);
  gambarMob2.setAttribute("class", "col-xs-1 logo-img");
  navMob2.prepend(gambarMob2);

  const loadImg = document.createElement("img");
  loadImg.setAttribute("src", loadImage);
  load.appendChild(loadImg);

  searchbar.addEventListener("click", () => {
    popularM.setAttribute("hidden", true);
    comingM.setAttribute("hidden", true);
    topM.setAttribute("hidden", true);
    cariM.removeAttribute("hidden");
  });
  searchbar2.addEventListener("click", () => {
    popularM2.setAttribute("hidden", true);
    comingM2.setAttribute("hidden", true);
    topM2.setAttribute("hidden", true);
    cariM2.removeAttribute("hidden");
  });

  // popular
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae",
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.results.forEach((item) => {
        const discoverItem = document.createElement("discover-movies");
        discoverItem.discover = item;

        popularArtikel.appendChild(discoverItem);
      });
    });

  // coming
  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae",
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.results.forEach((item) => {
        const comItem = document.createElement("coming-movies");
        comItem.coming = item;

        comingArtikel.appendChild(comItem);
      });
    });

  // toprated
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae",
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.results.forEach((item) => {
        const topItem = document.createElement("toping-movies");
        topItem.toping = item;

        topingArtikel.appendChild(topItem);
      });
    });

  // Searching

  const onButtonSearchClicked = async () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae&query=${searchbar.value}`,
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.results.length != 0) {
          responseJSON.results.forEach((item) => {
            const cariList = document.createElement("search-list");
            cariList.searchList = item;
            cariku.appendChild(cariList);
            const searchElement = document.querySelector("#searchElement");
            searchElement.addEventListener("change", () => {
              cariku.removeChild(cariList);
            });
          });
        } else if (responseJSON.results.length == 0) {
          const fail = document.createElement("fail-request");
          cariku.appendChild(fail);
          const searchElement = document.querySelector("#searchElement");
          searchElement.addEventListener("change", () => {
            cariku.removeChild(fail);
          });
        }
      });
  };
  searchbar.clickEvent = onButtonSearchClicked;
  // 2nd for tab
  // popular2
  fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae",
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.results.forEach((item) => {
        const discoverItem = document.createElement("discover-movies");
        discoverItem.discover = item;

        popularArtikel2.appendChild(discoverItem);
      });
    });

  // coming2
  fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae",
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.results.forEach((item) => {
        const comItem = document.createElement("coming-movies");
        comItem.coming = item;

        comingArtikel2.appendChild(comItem);
      });
    });

  // toprated2
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae",
  )
    .then((response) => response.json())
    .then((responseJSON) => {
      responseJSON.results.forEach((item) => {
        const topItem = document.createElement("toping-movies");
        topItem.toping = item;

        topingArtikel2.appendChild(topItem);
      });
    });

  // Searching2
  const onButtonSearchClicked2 = async () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9fa77e745db8ea3baef75ce5c9cfc0ae&query=${searchbar2.value}`,
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.results.length != 0) {
          responseJSON.results.forEach((item) => {
            const cariList = document.createElement("search-list");
            cariList.searchList = item;
            cariku2.appendChild(cariList);
            const searchElement = document.querySelector("#searchElement2");
            searchElement.addEventListener("change", () => {
              cariku2.removeChild(cariList);
            });
          });
        } else if (responseJSON.results.length == 0) {
          const fail = document.createElement("fail-request");
          cariku2.appendChild(fail);
          const searchElement = document.querySelector("#searchElement2");
          searchElement.addEventListener("change", () => {
            cariku2.removeChild(fail);
          });
        }
      });
  };

  searchbar2.clickEvent = onButtonSearchClicked2;
};

export default main;
