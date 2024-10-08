import "./RecipesCard.css";
import { cleanPage } from "../../Utils/CleanPage";
import { recetas } from "../../data/dataRecipes";
import { recipeLabels } from "../../data/dataLabels";

// Funcion que receorre el array con un forEach la img y titulo de cada receta para luego pintarla por defecto
export const printRecipesCards = (recetas, divcontainerCardsDestacados) => {
  cleanPage(divcontainerCardsDestacados);
  const ul = document.createElement("ul");
  ul.classList.add("ulRecipesCards");

  // Filtrar las recetas destacadas y mapearlas
  const recetasDestacadas = Object.values(recetas).filter(
    (receta) => receta.destacados === "si"
  );

  recetasDestacadas.map((receta) => {
    const li = document.createElement("li");
    li.classList.add("liRecipesCards");
    li.onclick = () => openModal(receta);

    li.innerHTML = `
            <div>
            <img class="imgRecipesDestacadas" src="${receta.urlImage}" alt="${receta.nombrePlato}"/>
            <h4 class="titleDestacadosDescription">Receta destacada</h4>
            <h5 class="recipeName">${receta.nombrePlato}</h5>
            </div>
            
        `;
    ul.appendChild(li);
  });

  divcontainerCardsDestacados.appendChild(ul);
};

// Funcion que pinta la info de la receta en el modalcuando se consulta una receta
const openModal = (receta) => {
  const modal = document.querySelector("#recipeModal");

  modal.classList.add("show");
  document.body.classList.add("modalActive");
  printRecipesCardsModal(receta);
  printLabelsRecipes(receta, recipeLabels); //funcion que pinta las etiquetas
  printIngredients(receta); //Funcion que pinta los ingredientes
  printCreationTrickTips(receta); //función que pinta la elaboración y los tips de cada receta
  printBtnCreation(receta); //funcion que al darle click a btn Elaboracion, este insertara el contenido de la elaboracion de cada receta
  printInfoNutritionRecipe(receta); //funcion que pinta la info nutricional de la receta consultad, con un grafico mostrando los macro nutrientes y en otro contendor otros datos como azucar ,sal,fibra y grasas
  const btnCreation = document.querySelector("#btnCreation");
  const btnTrick = document.querySelector("#btnTrick");
  btnCreation.addEventListener("click", () => {
    printBtnCreation(receta);
  });

  btnTrick.addEventListener("click", () => {
    printBtnTrick(receta);
  });
};
//   funcion que cierra la receta quitandole la clase show y la clase modal-active para volver a activar el scroll
document.addEventListener("click", (event) => {
  const recipeModal = document.querySelector("#recipeModal");
  const modalContent = document.querySelector(".modalContent");
  if (
    recipeModal.contains(event.target) &&
    !modalContent.contains(event.target)
  ) {
    recipeModal.classList.remove("show");
    document.body.classList.remove("modalActive");
  }
});

// Funcion que pinta la receta consultada
export const printRecipesCardsModal = (receta) => {
  const divContainerModal = document.querySelector(".modalContent");
  cleanPage(divContainerModal);
  divContainerModal.innerHTML = `
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
    <div class="containerIngredients"></div>
    <div class="containerCreationTrick"></div>
    <div class="containerInfoNutritionalRecipes"></div>
    </section>
    `;
  // Funcion que imprime segun el tiempo de elaboracion de la receta cuantos img se imprimen, 1,2 o 3 segun sea el caso
  const printImgIconsIdea = (receta) => {
    const imgIconIdea = document.querySelector("#imgIconIdea");
    cleanPage(imgIconIdea);
    let numIdeas =
      receta.tiempoElaboracion > 45
        ? 3
        : receta.tiempoElaboracion >= 30
        ? 2
        : 1;
    for (let i = 0; i < numIdeas; i++) {
      const img = document.createElement("img");
      img.classList.add("imgIcons");
      img.src = "/icons/idea.png";
      img.alt = "icono idea";
      imgIconIdea.appendChild(img);
    }
  };

  printImgIconsIdea(receta);
};
// Funcion que compara dos array para saber segun sea el caso el o los alergenos de cada receta, y pinta cada uno de los alergenos con su nombre e icono o img
const printLabelsRecipes = (receta, recipeLabels) => {
  const containerLabelsRecipe = document.querySelector(
    "#containerLabelsRecipe"
  );
  cleanPage(containerLabelsRecipe);
  const coincidencesLabel = recipeLabels.filter((label) =>
    receta.labels.includes(label.alergia)
  );
  const ul = document.createElement("ul");
  ul.classList.add("ulRecipesLabels");

  coincidencesLabel.forEach((label) => {
    const li = document.createElement("li");
    li.classList.add("licontainerRecipesLabel");
    li.innerHTML = `
        <img class="imgAlergeno" src="${label.imgAlergia}" alt="${label.alergia}"/>
        <span class="textAlergia">${label.alergia}</span>
        `;
    ul.appendChild(li);
  });
  containerLabelsRecipe.appendChild(ul);
};

//   Función que imprimirá los ingredientes de la receta  lo mostrara en las card de cada receta
const printIngredients = (receta) => {
  const containerIngredients = document.querySelector(".containerIngredients");
  containerIngredients.innerHTML = `
    <h3 class="titleIngredients">Ingredientes</h3>
    `;
  const ul = document.createElement("ul");
  ul.id = "ulContainerIngredients";
  for (const ingredient of receta.ingredientes) {
    const li = document.createElement("li");
    li.classList.add("liIngredients");
    li.textContent = ingredient;
    ul.appendChild(li);
  }
  containerIngredients.appendChild(ul);
};
//Esta funcion creaa todo el contenido que tendra el containerCreationTrick, donde se encuentras los dos btn y un contenedor adicional donde se mostrara el contenido segun el btn que se presione
const printCreationTrickTips = (receta) => {
  const containerCreationTrickTips = document.querySelector(
    ".containerCreationTrick"
  );
  containerCreationTrickTips.innerHTML = `
<div class="containerBtnCreationTrick">
<button id="btnCreation">Elaboración</button>
<button id="btnTrick">Truco del chef</button>
</div>
<div id="contentBtn">
</div>

`;
};
//Esta funcion imprime cuando le doy click al btnCreation los pasos para le eleboracion de la receta
const printBtnCreation = (receta) => {
  cleanPage(contentBtn);
  document.querySelector("#contentBtn").classList.remove("bgWhite");
  document.querySelector("#contentBtn").classList.add("bgGreen");

  const ol = document.createElement("ol");
  ol.id = "olBtnContent";
  for (const elaboracion of receta.elaboracion) {
    const li = document.createElement("li");
    li.classList.add("liContentBtn");
    li.textContent = elaboracion;
    ol.appendChild(li);
  }
  contentBtn.appendChild(ol);
};
//funcion que me imprimira cuando presione el btnTrick, los trucos o recomendacion para la elaboracion de lka receta
const printBtnTrick = (receta) => {
  document.querySelector("#contentBtn").classList.remove("bgGreen");
  document.querySelector("#contentBtn").classList.add("bgWhite");
  cleanPage(contentBtn);
  contentBtn.innerHTML = `
    <div class="divContainerTrickToChef">
    <span id="exclamation" class="animate__animated animate__flash"><i class="bi bi-patch-exclamation"></i></span>
    <h4 class="titleTricktoChef">
    " ${receta.trucoChef} "</h4>
    </div>
    `;
};
//Esta funcion creara todo el contendido que tendra el containerInfoNutritionalRecipes, que será la info nutricional mediante un grafico de torta
const printInfoNutritionRecipe = (receta) => {
  const container = document.querySelector(".containerInfoNutritionalRecipes");
  cleanPage(container);
  container.innerHTML = `
        <h3 class="titleIngredientsReceta">Esta Receta nos Aporta: </h3>
        
        <div class="containerCanvasRecipes">
            <canvas id="nutritionRecipesChart"></canvas>
            </div>
            <div class="containerCanvasNutritionRecipes">
            <table class="tableChartRecipes">
            <tbody>
                <tr class="fat">
                    <th class="bgLabelFat">Grasas</th>
                    <td class="bgLabelFat">${receta.infoNutricional.grasas.calorias} kcal.</td>
                    <td class="bgLabelFat">${receta.infoNutricional.grasas.gramos} gr.</td>
                    <td class="bgLabelFat">${receta.infoNutricional.grasas.porcentaje} %kcal</td>
                </tr>
                <tr class="hydrates">
                    <th class="bgLabelHydrates">Hidratos de Carbono</th>
                    <td class="bgLabelHydrates">${receta.infoNutricional.hidratosDeCarbono.calorias} kcal.</td>
                    <td class="bgLabelHydrates">${receta.infoNutricional.hidratosDeCarbono.gramos} gr.</td>
                    <td class="bgLabelHydrates">${receta.infoNutricional.hidratosDeCarbono.porcentaje} %kcal</td>
                </tr>
                <tr class="proteins">
                    <th class="bgLabelProteins">Proteinas</th>
                    <td class="bgLabelProteins">${receta.infoNutricional.proteinas.calorias} kcal.</td>
                    <td class="bgLabelProteins">${receta.infoNutricional.proteinas.gramos} gr.</td>
                    <td class="bgLabelProteins">${receta.infoNutricional.proteinas.porcentaje} %kcal</td>
                </tr>
            </tbody>
        </table>
        </div>
        
        <div class="containerContentNutritionRecipes">
            <h4 class="titleIngredientsInfoAdic">Información adicional por ración: </h4>
            <ul class="ulContentInfoRecipes">
                <li>Azúcares: ${receta.infoNutricional.azucares} gr.</li>
                <li>Grasas Saturadas: ${receta.infoNutricional.grasasSaturadas} gr.</li>
                <li>Fibra: ${receta.infoNutricional.fibra} gr.</li>
                <li>Sal: ${receta.infoNutricional.sal} gr.</li>
            </ul>
        </div>
    
    `;

  const chartNutritionRecipesChart = document.querySelector(
    "#nutritionRecipesChart"
  );

  new Chart(chartNutritionRecipesChart, {
    type: "doughnut",
    data: {
      labels: ["Grasas %", "Carbohidratos %", "Proteinas %"],
      datasets: [
        {
          data: [
            receta.infoNutricional.grasas.porcentaje,
            receta.infoNutricional.hidratosDeCarbono.porcentaje,
            receta.infoNutricional.proteinas.porcentaje,
          ],
          backgroundColor: [
            "rgb(10, 85, 47)",
            "rgb(231, 76, 60)",
            "rgb(255, 165, 0)",
          ],
          hoverOffset: 4,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 30, // Ajusta el tamaño del cuadro de leyenda
            padding: 20, // Añade espacio entre la leyenda y el gráfico
          },
        },
      },
    },
  });
};
