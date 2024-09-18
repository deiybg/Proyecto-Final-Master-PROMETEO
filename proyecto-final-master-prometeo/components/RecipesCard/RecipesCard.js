import './RecipesCard.css';
import { cleanPage } from '../../Utils/CleanPage';


export const printRecipesCards = (recetas,divcontainerCardsDestacados)=>{
    cleanPage(divcontainerCardsDestacados)
    const ul = document.createElement("ul");
    ul.classList.add("ulRecipesCards");

    Object.values(recetas).forEach(receta => {
        const li = document.createElement("li");
        li.classList.add("liRecipesCards");
        if(receta.destacados === "si"){
            
            li.innerHTML = `
            <img class="imgRecipesDestacadas" src="${receta.urlImage}" alt="${receta.nombrePlato}">
            `
        }else{
        }
        ul.appendChild(li);
        
    });
    divcontainerCardsDestacados.appendChild(ul);
}
