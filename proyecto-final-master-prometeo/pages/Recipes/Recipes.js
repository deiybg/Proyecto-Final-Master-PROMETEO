import "./Recipes.css";
import { cleanPage } from "../../Utils/CleanPage";
import { recetas } from "../../data/dataRecipes";
import { printRecipesCards } from "../../components/RecipesCard/RecipesCard";
import { shortVideos } from "../../data/dataShortVideosYoutube";

export const Recipes = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.style.background = "var(--bg-color)"; //se cambia el bg-color ya que mas adelante hay una funcion que la cambia cuando se necesita pintar los todos los short videos de youtube
  main.innerHTML = `
    <div id="divBackgroundImage">
    <div class="containerInputSearchFood">
    <h1 class="title-home title-home-recipes">Heallthy</h1>
    <p class="p-recipes">¿Qué cocinamos hoy?</p>
    <div class="container-input-button-recipes">
    <form class="formRecipes">
    <input type="text" id="foodRecipesInput" name="foodRecipesInput" placeholder=" ej: Tarta de frambuesa" required>
    <button type="submit" class="btnSearchFoodRecipes" id="btnSearchFoodRecipes"><i class="bi bi-search" aria-hidden="true"></i></button>
    </form>
    </div>
    </div>
    </div>
    <div class="containerDestacados">
    <h3 class="titleDestacados">Recetas destacadas del día</h3>
    <div id="CardsDestacados" class="containerCardsDestacados"></div>
    </div>

    <div id="recipeModal">
    <div class="modalContent"></div>
    </div>

    <section id="ShortsVideosYoutube">
    <h3 class="titleVideosShort">Inspirate y cocina con estos vídeos</h3>
    <div id="containerShortsVideosYoutube"></div>
    <button class="btnIframes">VER TODOS LOS VÍDEOS CORTOS</button>
    </section>
    
    `;
  const divcontainerCardsDestacados = document.querySelector(
    ".containerCardsDestacados"
  );
  printRecipesCards(recetas, divcontainerCardsDestacados); // funcion que me pinta las recetas destacadas

  printShortVideosYoutube(); //Funcion que me imprime los short videos de youtube
  printAllVideosShortsYoutube(shortVideos); //-funcion que se ejecuta al darle click al btn y pinta todos los shortVideos que encuentra en la dataShortVideosYoutube
};

//funcion que pinta 3 short videos y  que se insertara en el #containerShortsVideosYoutube y se veran por defecto
const printShortVideosYoutube = () => {
  const containerShortsVideosYoutube = document.querySelector(
    "#containerShortsVideosYoutube"
  );
  containerShortsVideosYoutube.innerHTML = `
    <div class="containerIframe">
    <iframe class="iframeShort" width="320" height="640" 
  src="https://www.youtube.com/embed/9S8sNnAU_G0?controls=1" 
  title="YouTube video player" 
  frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
</iframe>
</div>
 <div class="containerIframe">
    <iframe class="iframeShort" width="320" height="640" 
  src="https://www.youtube.com/embed/bCBzXxH93rw?controls=1" 
  title="YouTube video player" 
  frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
</iframe>
</div>
 <div class="containerIframe">
    <iframe class="iframeShort" width="320" height="640" 
  src="https://www.youtube.com/embed/dMYHQpQWEUo?controls=1" 
  title="YouTube video player" 
  frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
</iframe>
</div>
    `;
};
//Funcion que me pinta todos los short videos de youtube cuando se le da click al btnIframes,y  donde toma de dataShortVideosYoutube y mediante un bucle toma los link y los title
const printAllVideosShortsYoutube = (shortVideos) => {
  document.querySelector(".btnIframes").addEventListener("click", () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.style.backgroundImage = "url('/assets/bg-Recipes.jpg')";
    main.innerHTML = `
    <div class="containerInputSearchFood">
    <h1 class="title-home title-home-recipes">Heallthy</h1>
    <p class="p-recipes">¿Qué cocinamos hoy?</p>
    <div class="container-input-button-recipes">
    <form class="formRecipes">
    <input type="text" id="foodRecipesInput" name="foodRecipesInput" placeholder=" ej: Tarta de frambuesa" required>
    <button type="submit" class="btnSearchFoodRecipes" id="btnSearchFoodRecipes"><i class="bi bi-search" aria-hidden="true"></i></button>
    </form>
    </div>
    </div>
    `;

    const container = document.createElement("div");
    container.id = "containerAllShortsVideosYoutube";
    container.classList.add("containerMobile");

    const ul = document.createElement("ul");
    ul.classList.add("ulContainerShortsVideosYoutube");

    shortVideos.forEach((video) => {
      const div = document.createElement("div");
      div.innerHTML = `
          <iframe class="iframeShort" width="320" height="640" 
        src="${video.linkShortVideo}" 
        sandbox="allow-same-origin allow-scripts allow-popups" 
        title="${video.title}" 
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
</iframe>

        `;
      ul.appendChild(div);
    });

    container.appendChild(ul);
    main.appendChild(container);
    filterShortVideosYoutube(shortVideos);
  });
};
const filterShortVideosYoutube = (shortVideos) => {
  document
    .querySelector("#btnSearchFoodRecipes")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const keyword = document
        .querySelector("#foodRecipesInput")
        .value.toLowerCase();

      const filteredVideos = shortVideos.filter((video) =>
        video.title.toLowerCase().includes(keyword)
      );
      if (filteredVideos.length > 0) {
        console.log("Encontrado");
      } else {
        console.log("No encontrado");
      }
    });
};
