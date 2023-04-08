const champName = document.querySelector(".champ-name");
const champSkins = document.querySelector(".grid-template");
const champAbi = document.querySelector(".grid-area");
const champLore = document.querySelector(".lore");
const searchBar = document.querySelector("#search");
const submitButton = document.querySelector(".submitButton");

let champSearch;

submitButton.addEventListener("click", function () {
if (searchBar.value === "Wukong") {
  searchBar.value = "MonkeyKing";
} else if (searchBar.value === "Lee Sin") {
  searchBar.value = "LeeSin";
} else if (searchBar.value === "Miss Fortune") {
  searchBar.value = "MissFortune";
} else if (searchBar.value === "Aurelion Sol") {
  searchBar.value = "AurelionSol";
} else if (searchBar.value === "Dr. Mundo") {
  searchBar.value = "DrMundo";
} else if (searchBar.value === "Lee Sin") {
  searchBar.value = "LeeSin";
} else if (searchBar.value === "Jarvan IV") {
  searchBar.value = "JarvanIV";
} else if (searchBar.value === "K'sante") {
  searchBar.value = "KSante";
} else if (searchBar.value === "Kai'sa") {
  searchBar.value = "Kaisa";
} else if (searchBar.value === "Kha'zix") {
  searchBar.value = "Khazix";
} else if (searchBar.value === "Kog'maw") {
  searchBar.value = "KogMaw";
} else if (searchBar.value === "Master Yi") {
  searchBar.value = "MasterYi";
} else if (searchBar.value === "Rek'sai") {
  searchBar.value = "RekSai";
} else if (searchBar.value === "Renata Glasc") {
  searchBar.value = "Renata";
} else if (searchBar.value === "Tahm Kench") {
  searchBar.value = "TahmKench";
} else if (searchBar.value === "Twisted Fate") {
  searchBar.value = "TwistedFate";
}

  champSearch = searchBar.value;

  console.log(champSearch);

  fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion/${champSearch}.json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const gamer = data.data;
      const array = gamer[champSearch].skins;
      champName.innerHTML = `<h1>${gamer[champSearch].name}</h1><h2>${gamer[champSearch].title}</h2>`;
      let skinsHTML = "";
      array.forEach((skin) => {
        skinsHTML += `<div>
      <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${gamer[champSearch].id}_${skin.num}.jpg" alt="">
  </div>`;
      });
champSkins.innerHTML = skinsHTML;
      console.log(array);
      champAbi.innerHTML = `  <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/passive/${gamer[champSearch].passive.image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer[champSearch].spells[0].image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer[champSearch].spells[1].image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer[champSearch].spells[2].image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer[champSearch].spells[3].image.full}" alt="">`;
      champLore.innerHTML = `<p>${gamer[champSearch].lore}</p>`;
    });
});
