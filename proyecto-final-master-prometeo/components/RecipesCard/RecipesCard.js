import './RecipesCard.css';
import { cleanPage } from '../../Utils/CleanPage';
import { recetas } from '../../data/dataRecipes';
import { recipeLabels } from '../../data/dataLabels';

// Funcion que receorre el array con un forEach la img y titulo de cada receta para luego pintarla por defecto
export const printRecipesCards = (recetas,divcontainerCardsDestacados)=>{
    cleanPage(divcontainerCardsDestacados)
    const ul = document.createElement("ul");
    ul.classList.add("ulRecipesCards");

    Object.values(recetas).forEach(receta => {
        const li = document.createElement("li");
        li.classList.add("liRecipesCards");
        li.onclick = ()=> openModal(receta);
        // condicional para verificar si la receta es destacada o no, y se pintara en caso de ser "si"
        if(receta.destacados === "si"){
            
            li.innerHTML = `
            <div class="containerImgZoom">
            <img class="imgRecipesDestacadas" src="${receta.urlImage}" alt="${receta.nombrePlato}"/>
            </div>
            <h4 class="titleDestacadosDescription">Receta destacada</h4>
            <h5 class="recipeName">${receta.nombrePlato}</h5>
            `
        }else{
        }
        ul.appendChild(li);
        
    });
    divcontainerCardsDestacados.appendChild(ul);
}
// Funcion que pinta la info de la receta en el modalcuando se consulta una receta
const openModal = (receta) => {
    
    const modal = document.querySelector('#recipeModal');
    
    modal.classList.add("show");
    printRecipesCardsModal(receta);
    printLabelsRecipes(receta,recipeLabels);
    document.body.classList.add("modal-active");
  };
//   funcion que cierra la receta quitandole la clase show y la clase modl-active para volver a activar el scroll
  document.addEventListener("click", (event) =>{
    const recipeModal = document.querySelector("#recipeModal");
    const modalContent = document.querySelector(".modalContent")
    if(recipeModal.contains(event.target) && !modalContent.contains(event.target)){
        recipeModal.classList.remove("show");
        document.body.classList.remove("modal-active");
    }
  })
 
// Funcion que pinta la receta consultada
export const printRecipesCardsModal =(receta)=>{
    const divContainerModal = document.querySelector(".modalContent");
    cleanPage(divContainerModal);
    divContainerModal.innerHTML = 
    `
    <section class="containerImgInfoRecipes">
    <div class="containerImgRecipesDestacadas">
    <img class="imgRecipesDestacadas" src="${receta.urlImage}" alt="${receta.nombrePlato}"/>
    </div>
    <div class="containerInfoRecipesModal">
    <h4 class="recipeName recipeNameModal textModal">${receta.nombrePlato}</h4>
    <div class="containerInfo">
    <p class="textModal"><span><img class="imgIcons" src="/icons/reloj.png" alt="icono reloj"/></span>${receta.tiempoCoccion} min.de cocción</p>
    <p class="textModal"><span id="imgIconIdea"></span>${receta.complejidad}</p>
    <p class="textModal"><span><img class="imgIcons" src="/icons/plato.png" alt="icono plato"/></span>${receta.cantidadRaciones} Personas</p>
    <p class="textModal"><span><img class="imgIcons" src="/icons/reloj.png" alt="icono reloj"/></span>${receta.tiempoElaboracion} min.de preparación</p>
    </div>
    <div id="containerLabelsRecipe"></div>
    </div>
    </section>
    <section class="containerIngrCreationTrickTipsinfoNutritional">
    <div class=containerIngredients>
    </div>
    <div class="containerCreationTrickTips">
    </div>
    <div class="containerInfoNutritionalRecipes">
    </div>
    </section>
    `
    // Funcion que imprime segun el tiempo de elaboracion de la receta cuantos img se imprimen, 1,2 o 3 segun sea el caso
    const printImgIconsIdea = (receta) =>{
        const imgIconIdea = document.querySelector("#imgIconIdea");
        cleanPage(imgIconIdea);
        let numIdeas = 1;
        if(receta.tiempoElaboracion > 45){
            numIdeas = 3;
        }else if(receta.tiempoElaboracion >=30 && receta.tiempoElaboracion <=45){
            numIdeas =2;
        }

        for(let i = 0; i < numIdeas; i++){
            const img = document.createElement("img");
            img.classList.add("imgIcons");
            img.src= "/icons/idea.png";
            img.alt = "icono idea"
            imgIconIdea.appendChild(img);
        }
    };
    
    printImgIconsIdea(receta);

}
// Funcion que compara dos array para saber segun sea el caso el o los alergenos de cada receta, y pinta cada uno de los alergenos con su nombre e icono o img
const printLabelsRecipes =(receta,recipeLabels) =>{
    const containerLabelsRecipe = document.querySelector("#containerLabelsRecipe");
    cleanPage(containerLabelsRecipe);
    const coincidencesLabel = recipeLabels.filter(label => receta.labels.includes(label.alergia));
    const ul = document.createElement("ul");
    ul.classList.add("ulRecipesLabels");

    coincidencesLabel.forEach(label =>{
        const li = document.createElement("li");
        li.classList.add("licontainerRecipesLabel");
        li.innerHTML = 
        `
        <img class="imgAlergeno" src="${label.imgAlergia}" alt="${label.alergia}"/>
        <span class="textAlergia">${label.alergia}</span>
        `
        ul.appendChild(li);
    })
    containerLabelsRecipe.appendChild(ul);
    
}
  