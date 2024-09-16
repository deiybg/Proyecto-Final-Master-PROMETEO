import './Recipes.css';
import { cleanPage } from '../../Utils/CleanPage';
import { recetas } from '../../data/dataRecipes';


export const Recipes =()=>{
    const main = document.querySelector("main");
    cleanPage(main); 
    const divBackgroundImage = document.createElement("div");
    divBackgroundImage.id = "divBackgroundImage";
    
    const divContainerForm = document.createElement("div");
    divContainerForm.classList.add("containerInputSearchFood");
    divContainerForm.innerHTML =`
    <h1 class="title-home title-home-recipes">Heallthy</h1>
    <p class="p-recipes">¿Qué cocinamos hoy?</p>
    <div class="container-input-button-recipes">
    <form class="formRecipes">
    <input type="text" id="foodRecipesInput" name="foodRecipesInput" placeholder=" ej: Tarta de frambuesa" required>
    <button type="submit" class="btnSearchFoodRecipes" id="btnSearchFoodRecipes"><i class="bi bi-search" aria-hidden="true"></i></button>
    </form>
    </div>
    
    `;
    divBackgroundImage.appendChild(divContainerForm);
    
    main.append(divBackgroundImage);
    
    
}