import "./NutritionalInfo.css";
import { cleanPage } from "../../Utils/CleanPage";
import { dataNutritional } from "../../data/dataNutricion";
import { traductorKeyWords } from "../../Utils/Traductor";
import {
  printNutritionalInfo,
  printIDR_Info,
  printBreakdownCalories,
  printNutritionalSummary,
  printNutritionalMicronutrients,
  printDietLabels,
} from "../../components/NutritionalCard/NutritionalCard";

export const NutritionalInfo = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.style.background = "var(--bg-color)"; //se cambia el bg-color ya que mas adelante hay una funcion que la cambia cuando se necesita pintar los todos los short videos de youtube
  main.innerHTML = `
    <div class="containerNutritionForm">
    <fieldset>
     <legend> Buscar Alimento</legend>
    <form id="nutrition-form">
    <div class="containerForm">
    <label for="quantity">Cantidad:</label>
    <select id="quantity" name="quantity" required>  
      <option value="100">100</option>
      <option value="250">250</option>
      <option value="500">500</option>
      <option value="1000">1000</option>
    </select>

  
  <label for="unit">Unidad:</label>
  <select id="unit" name="unit" required> 
    <optgroup label="Masa">
    <option value="gram">Gramos</option>
    <option value="ounce">Onzas</option>
    </optgroup>
    <optgroup label="Volumen">
    <option value="milliliter">Mililitros</option>
    </optgroup>
    </select>
    </div>
  <div class="containerButton">
  <label for="food">Alimento:</label>
  <input type="text" id="food" name="food" placeholder=" ej: pepino" required>
  
  <button id="btnSearchFood" type="submit">Obtener Información</button>
  </div>
</form>
</fieldset>
</div>
<div id="divContainerNutritionalInfo">
<div id="loading" class="loading-hidden">
  <img src="./icons/Cargando.gif" alt="Cargando..." />
</div>
<div id="results-container"></div>
<div id="resumen-container"></div>
<p id="error-message" class="error-messageHidden"></p>
</div>

`;

  const form = document.querySelector("#nutrition-form");
  const loading = document.querySelector("#loading");
  const btnSearchFood = document.querySelector("#btnSearchFood");
  const errorMessage = document.querySelector("#error-message");
  const resultsContainer = document.querySelector("#results-container");
  const resumenContainer = document.querySelector("#resumen-container");

  // FUNCION PARA MOSTRAR MIENTRAS RESPONDE EL SERVIDOR UN GIF DE CARGANDO, SE USA EL TOOGLE PARA QUITAR Y COLOCAR LA CLASE QUE LA MUESTRA O LA OCULTA
  const toggleErrorMessage = () => {
    errorMessage.classList.toggle("error-messageHidden");
    errorMessage.classList.toggle("error-message");
  };
  // FUNCION QUE PINTA POR DEFECTO UN ALIMENTO EN LA PAGES INFOR NUTRICIONAL
  const printDefaultDataNutritional = async (quantity, unit, food) => {
    const result = await dataNutritional("100", "gram", "pineapple");

    printNutritionalInfo(result, "100", "gram", "pepino");
    printBreakdownCalories(result);
    printDietLabels(result);
    printNutritionalSummary(result);
    printNutritionalMicronutrients(result);
    printIDR_Info(result);
  };
  printDefaultDataNutritional();

  // EVENTO QUE LANZA UNA FUNCION ASYNC PARA QUE CUANDO LA API RESPONDA, ME PINTE LAS CARTAS CON LA INFO
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    loading.classList.remove("loading-hidden");
    loading.classList.add("loading-visible");
    btnSearchFood.disabled = true; // Deshabilitar el botón para evitar múltiples envíos
    errorMessage.textContent = ""; // Limpiar mensajes de error
    errorMessage.classList.add("error-messageHidden");
    cleanPage(resultsContainer);
    cleanPage(resumenContainer);

    try {
      const infoQuantity = document.querySelector("#quantity").value;
      const infoUnit = document.querySelector("#unit").value;
      const nameUnit =
        document.querySelector("#unit").selectedOptions[0].textContent;
      const infoFood = document.querySelector("#food").value.trim();

      const englishKeyword = await traductorKeyWords(infoFood);

      const result = await dataNutritional(
        infoQuantity,
        infoUnit,
        englishKeyword
      );
      printNutritionalInfo(result, infoQuantity, nameUnit, infoFood);
      printBreakdownCalories(result);
      printDietLabels(result);
      printNutritionalSummary(result);
      printNutritionalMicronutrients(result);
      printIDR_Info(result);
      document.querySelector("#food").value = "";

      // EN CASO DE ERROR , DE QUE NO ENCUENTRE EL ALIMENTO A CONSULTAR ME LIMPIA EL HTML Y ME MUESTRA EN UN CONTENDER UN MESAJE
    } catch (error) {
      toggleErrorMessage();
      errorMessage.textContent =
        "No tenemos registros del alimento a consultar, por favor ingrese otro.";
      errorMessage.classList.remove("error-messageHidden");
      document.querySelector("#food").value = "";
    } finally {
      loading.classList.remove("loading-visible");
      loading.classList.add("loading-hidden");
      btnSearchFood.disabled = false;
    }
  });
};
