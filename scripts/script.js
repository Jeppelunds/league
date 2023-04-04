const champName = document.querySelector(".champ-name");
const champSkins = document.querySelector(".champ-template");
const champAbi = document.querySelector(".grid-area");
const champLore = document.querySelector(".lore");
const searchBar = document.querySelector('#search')
const submitButton = document.querySelector('.submitButton')

let champSearch;

submitButton.addEventListener("click", function () {
  
  champSearch = searchBar.value;

  
  console.log(champSearch);
});






fetch(
  `http://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion/${champSearch}.json`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const gamer = data.data;
    champName.innerHTML = `<h1>${gamer.champSearch.id}</h1><h2>${gamer.champSearch.title}</h2>`;
    //     champSkins.innerHTML = `<div>
    //     <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${gamer.Yasuo.title}_${gamer.Yasuo.skins[0].num}.jpg" alt="">
    // </div>
    // <div>
    //     <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${gamer.Yasuo.title}&#95;${gamer.Yasuo.skins[2].num}.jpg" alt="">
    // </div>`;
    champAbi.innerHTML = `  <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/passive/${gamer.champSearch.passive.image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer.champSearch.spells[0].image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer.champSearch.spells[1].image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer.champSearch.spells[2].image.full}" alt="">
        <img src="http://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/${gamer.champSearch.spells[3].image.full}" alt="">`;
    champLore.innerHTML = `<p>${gamer.Yasuo.lore}</p>`;
  });

  