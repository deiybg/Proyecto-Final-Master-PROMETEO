import './Recipes.css';
import { cleanPage } from '../../Utils/CleanPage';
import { recetas } from '../../data/dataRecipes';
import { printRecipesCards, printRecipesCardsModal } from '../../components/RecipesCard/RecipesCard';


export const Recipes =()=>{
    const main = document.querySelector("main");
    cleanPage(main); 
    main.innerHTML= `
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
    `;
  
    // funcion que me pinta las recetas destacadas
    const divcontainerCardsDestacados = document.querySelector(".containerCardsDestacados");
    printRecipesCards(recetas,divcontainerCardsDestacados);
  
 
}

