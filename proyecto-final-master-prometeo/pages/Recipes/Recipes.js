import "./Recipes.css";
import { cleanPage } from "../../Utils/CleanPage";
import { recetas } from "../../data/dataRecipes";
import {
  printRecipesCards,
  prinDefaultAllRecipes,
  recipeContentVegetarian,
  recipeContentEasy,
  recipesContentCeliac,
  recipesContentDessert,
  printMainResultSearchRecipes,
} from "../../components/RecipesCard/RecipesCard";
import { shortVideos } from "../../data/dataShortVideosYoutube";
import { ScrollTop } from "../../Utils/ScrollTop";
import { openModal } from "../../components/RecipesCard/RecipesCard";

//Funcion principal que me pinta todo el contenido que va a tener el HTML cuando se abra por defecto la pagina o cuando se quiera acceder mediante un click en los enlaces del nav del
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
    <input type="text" id="foodRecipesInput" name="foodRecipesInput" placeholder=" ej: Tarta de verduras" required>
    <button type="button" class="btnSearchFoodRecipes" id="btnSearchFoodRecipes"><i class="bi bi-search" aria-hidden="true"></i></button>
    </form>
    </div>
    </div>
    </div>
    <section id="mainContainerRecipes"></section>
    <div class="containerDestacados">
    <h3 class="titleDestacados">Recetas destacadas del día</h3>
    <div id="CardsDestacados" class="containerCardsDestacados"></div>
    </div>

    <div id="recipeModal">
    <div class="modalContent"></div>
    </div>

    <section id="ShortsVideosYoutube" class="contentDivObserve ">
    <h3 class="titleVideosShort">Inspirate y cocina con estos vídeos</h3>
    <div id="containerShortsVideosYoutube"></div>
    <button class="btnIframes">VER TODOS LOS VÍDEOS CORTOS</button>
    </section>
    <section id="searchAllRecipes" class="contentDivObserve ">
    <div class="containerAllBtnRecipes"></div>
    <div id="containerSearchAllRecipes" class="divcontainerSearchAllRecipes"></div>
    </section>
    
    `;

  //Aca maquetare el IntersectionObserve

  const contentObserveVideos = document.querySelector("#ShortsVideosYoutube");
  const contentObserveRecipes = document.querySelector("#searchAllRecipes");
  const handlerIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };
  const observer = new IntersectionObserver(handlerIntersection, {
    threshold: 0.1,
  });
  observer.observe(contentObserveVideos);
  observer.observe(contentObserveRecipes);

  //Aca selecciono los contenedores, donde mas adelante insertare contenido
  const divcontainerCardsDestacados = document.querySelector(
    ".containerCardsDestacados"
  );
  const divcontainerSearchAllRecipes = document.querySelector(
    ".divcontainerSearchAllRecipes"
  );
  const sectionMainContainerRecipes = document.querySelector(
    "#mainContainerRecipes"
  );

  //funciones que me pointamn por defecto en el HTML en la pages Recipes  las recetas destacadas, los shortVideosYoutube y todas las recetas de mi dataLabel
  printRecipesCards(recetas, divcontainerCardsDestacados);
  prinDefaultAllRecipes(recetas, divcontainerSearchAllRecipes);
  printShortVideosYoutube(); //Funcion que me imprime los short videos de youtube

  //Resto de funciones que me pintas en el HTML contenido segun las busquedas en los input o los listener de os btn
  printAllVideosShortsYoutube(shortVideos); //-funcion que se ejecuta al darle click al btn y pinta todos los shortVideos que encuentra en la dataShortVideosYoutube
  insertBtnSearchAllRecipes(); //Funcion que inserta en la section searchAllRecipes los btn para buscar las recetas segun criterios
  printAllRecipes(recetas, divcontainerSearchAllRecipes); //Funcion que me pinta luego de drle click al btn todas las recetas, Todas las recetas de mi data
  printAllRecipesVegetarian(recetas, divcontainerSearchAllRecipes); //Funcion que me pinta luego de drle click al btn recetas vegetarianas, Todas las recetas de mi data con las coincidencias
  printAllRecipesEasy(recetas, divcontainerSearchAllRecipes); //Funcion que me pinta luego de drle click al btn faciles y rapidas Todas las recetas de mi data con las coincidencias
  printAllRecipesCeliac(recetas, divcontainerSearchAllRecipes); //Funcion que me pinta luego de drle click al btn sin gluten, Todas las recetas de mi data con las coincidencias
  printAllRecipesDessert(recetas, divcontainerSearchAllRecipes); //Funcion que me pinta luego de drle click al btn postres, Todas las recetas de mi data con las coincidencias
  printResultSearchRecipes(recetas, sectionMainContainerRecipes);
};

//Funcion principal del input que me filtra y me pinta las coincidencias de la keyword con mi dataRecipes y me lo pinta en el mainContainer
const printResultSearchRecipes = (recetas, sectionMainContainerRecipes) => {
  document
    .querySelector("#btnSearchFoodRecipes")
    .addEventListener("click", (event) => {
      event.preventDefault();
      printMainResultSearchRecipes(recetas, sectionMainContainerRecipes);
    });
  document
    .querySelector("#foodRecipesInput")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        printMainResultSearchRecipes(recetas, sectionMainContainerRecipes);
      }
    });
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
    ScrollTop(); //Función que te lleva al cargar la página al top
    cleanPage(main);
    main.style.backgroundImage = "url('/assets/bg-Recipes.jpg')";

    main.innerHTML = `
      <div class="containerInputSearchFood">
        <h1 class="title-home title-home-recipes">Healthy</h1>
        <p class="p-recipes">¿Qué cocinamos hoy?</p>
        <div class="container-input-button-recipes">
          <form class="formRecipes">
            <input type="text" id="foodRecipesInput" name="foodRecipesInput" placeholder="ej: salmon" required>
            <button type="submit" class="btnSearchFoodRecipes" id="btnSearchFoodRecipes">
              <i class="bi bi-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
      <div class="containerCantVideos"></div>
    `;

    const container = document.createElement("div");
    container.id = "containerAllShortsVideosYoutube";

    const ul = document.createElement("ul");
    ul.classList.add("ulContainerShortsVideosYoutube");

    // Renderizar todos los videos de la lista
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
  // Evento para el botón de búsqueda
  document
    .querySelector("#btnSearchFoodRecipes")
    .addEventListener("click", (event) => {
      event.preventDefault();
      searchVideos();
    });

  // Evento para el teclado, detecta cuando se presiona "Enter"
  document
    .querySelector("#foodRecipesInput")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        searchVideos();
      }
    });

  // Función que contiene la lógica de búsqueda
  const searchVideos = () => {
    const keyword = document
      .querySelector("#foodRecipesInput")
      .value.toLowerCase();

    const containerAllShortsVideosYoutube = document.querySelector(
      "#containerAllShortsVideosYoutube"
    );
    cleanPage(containerAllShortsVideosYoutube);

    // Verificar si el input está vacío
    if (keyword.trim() === "") {
      cleanPage(containerAllShortsVideosYoutube);
      document.querySelector("#containerAllShortsVideosYoutube").innerHTML = `
         <p id="error-message">"Por favor, ingrese un término de búsqueda."</p>
        `;
      document.querySelector(".containerCantVideos").innerHTML = "";
      return;
    }

    const filteredVideos = shortVideos.filter((video) =>
      video.title.toLowerCase().includes(keyword)
    );

    if (filteredVideos.length > 0) {
      const div = document.createElement("div");
      div.classList.add("containerAllShortsVideosYoutube");
      const cantVideos = filteredVideos.length;
      const divCantVideos = document.querySelector(".containerCantVideos");
      divCantVideos.innerHTML = `<p class="pcantVideos">Esta${
        cantVideos === 1 ? "" : "s"
      } receta${cantVideos === 1 ? "" : "s"} coincide${
        cantVideos === 1 ? "" : "n"
      } con tu búsqueda "${keyword}". <span class="spanCantVideos">${cantVideos} receta${
        cantVideos === 1 ? "" : "s"
      } encontrada${cantVideos === 1 ? "" : "s"}</span></p>`;

      filteredVideos.forEach((video) => {
        // Crear el ul contenedor para el video
        const videoContainer = document.createElement("ul");
        videoContainer.classList.add("ulContainerShortsVideosYoutube");

        // Agregar el iframe al ul
        videoContainer.innerHTML = `
            <iframe class="iframeShortFilter" width="320" height="640" 
              src="${video.linkShortVideo}" 
              sandbox="allow-same-origin allow-scripts allow-popups" 
              title="${video.title}" 
              frameborder="0" 
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          `;

        // Añadir el ul (contenedor del video) al div contenedor
        div.appendChild(videoContainer);
        containerAllShortsVideosYoutube.appendChild(div);

        document.querySelector("#foodRecipesInput").value = "";
      });
    } else {
      containerAllShortsVideosYoutube.innerHTML = `
        <p id="error-message">No se encontraron videos para la consulta <span class="messageErrorVideo">" ${keyword} ".</span>Por favor inicie una nueva consulta.</p>
      `;
      document.querySelector("#foodRecipesInput").value = "";
      document.querySelector(".containerCantVideos").innerHTML = "";
    }
  };
};

//Funcion que insertara en el searchAllRecipes los btn opara las busquedas de recetas

const insertBtnSearchAllRecipes = () => {
  const sectionSearchAllRecipes = document.querySelector(
    ".containerAllBtnRecipes"
  );
  sectionSearchAllRecipes.innerHTML = `
<ul class="containeBtnSearchAllRecipes">
<li class="liSearchAllRecipes" id="btnSearchAllRecipes">
<img src="/icons/allFood.png" alt="logo todas las recetas" class="logoBtnSearchRecipes"/>
<button class="btnAllRecipes" type="button">Todas las Recetas</button>
</li>
<li class="liSearchAllRecipes" id="btnSearchVegetarianRecipes">
<img src="/icons/vegetarian.png" alt="logo receta vegetariana" class="logoBtnSearchRecipes"/>
<button class="btnAllRecipes" type="button">Recetas  Vegetarianas</button>
</li>
<li class="liSearchAllRecipes" id="btnSearchEasyRecipes" >
<img src="/icons/fastFood.png" alt="logo recetas faciles y rapidas" class="logoBtnSearchRecipes"/>
<button class="btnAllRecipes" type="button">Fáciles y Rápidas</button>
</li>
<li class="liSearchAllRecipes" id="btnSearchCeliacRecipes">
<img src="/icons/Celiac.png" alt="logo recetas sin gluten" class="logoBtnSearchRecipes"/>
<button class="btnAllRecipes" type="button">Sin gluten</button>
</li>
<li class="liSearchAllRecipes" id="btnSearchDessertRecipes" >
<img src="/icons/dessert.png" alt="logo postres" class="logoBtnSearchRecipes"/>
<button class="btnAllRecipes" type="button">Postres</button>
</li>
</ul>
`;
  const listItems = document.querySelectorAll(".liSearchAllRecipes");

  listItems.forEach((li) => {
    li.addEventListener("mouseover", () => {
      const button = li.querySelector("button");
      button.classList.add("hide-text");
    });

    li.addEventListener("mouseout", () => {
      const button = li.querySelector("button");
      button.classList.remove("hide-text");
    });
  });
};
//Funcion que me pinta todas las recetas de mi base de datos
const printAllRecipes = (recetas, divcontainerSearchAllRecipes) => {
  document
    .querySelector("#btnSearchAllRecipes")
    .addEventListener("click", () => {
      prinDefaultAllRecipes(recetas, divcontainerSearchAllRecipes);
    });
};

//Funcion que me pinta todas las recetas con la categoria Vegetarian de mi base de datos

const printAllRecipesVegetarian = (recetas, divcontainerSearchAllRecipes) => {
  document
    .querySelector("#btnSearchVegetarianRecipes")
    .addEventListener("click", () => {
      recipeContentVegetarian(recetas, divcontainerSearchAllRecipes);
    });
};

//Funcion que me pinta todas las recetas con la categoria facil y rapido de mi base de datos

const printAllRecipesEasy = (recetas, divcontainerSearchAllRecipes) => {
  document
    .querySelector("#btnSearchEasyRecipes")
    .addEventListener("click", () => {
      recipeContentEasy(recetas, divcontainerSearchAllRecipes);
    });
};

//Funcion que me pinta todas las recetas con la categoria sin glutende mi base de datos

const printAllRecipesCeliac = (recetas, divcontainerSearchAllRecipes) => {
  document
    .querySelector("#btnSearchCeliacRecipes")
    .addEventListener("click", () => {
      recipesContentCeliac(recetas, divcontainerSearchAllRecipes);
    });
};

//Funcion que me pinta todas las recetas con la categoria dessert mi base de datos

const printAllRecipesDessert = (recetas, divcontainerSearchAllRecipes) => {
  document
    .querySelector("#btnSearchDessertRecipes")
    .addEventListener("click", () => {
      recipesContentDessert(recetas, divcontainerSearchAllRecipes);
    });
};
