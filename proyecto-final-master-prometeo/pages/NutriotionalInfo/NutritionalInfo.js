import './NutritionalInfo.css';
import { cleanPage } from '../../Utils/CleanPage';
import { dataNutritional } from '../../data/dataNutricion';
import { traductorKeyWords } from '../../Utils/Traductor';
import { printNutritionalInfo, printIDR_Info, printBreakdownCalories, printNutritionalSummary, printNutritionalMicronutrients } from '../../components/NutritionalCard/NutritionalCard';


export const NutritionalInfo = ()=>{
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <fieldset>
     <legend> Información Nutricional</legend>
<form id="nutrition-form">
  <label for="quantity">Cantidad:</label>
  <select id="quantity" name="quantity" required>  
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>

  
  <label for="unit">Unidad:</label>
  <select id="unit" name="unit" required> 
      <option value="ounce">Onzas</option>
      <option value="pound">Libras</option>
      <option value="gram">Gramos</option>
    </select>
  
  <label for="food">Alimento:</label>
  <input type="text" id="food" name="food" placeholder="ej: pepino" required>
  
  <button id="btnSearchFood" type="submit">Obtener Información Nutricional</button>
</form>
</fieldset>
<div class="divContainerNutritionalInfo">
<div id="results-container"></div>
<div id="resumen-container"></div>
</div>

`


const form = document.querySelector("#nutrition-form");
form.addEventListener("submit", async (event)=>{
    
    event.preventDefault();

    try {
        const infoQuantity = document.querySelector("#quantity").value;
        const infoUnit = document.querySelector("#unit").value;
        const nameUnit = document.querySelector("#unit").selectedOptions[0].textContent;
        const infoFood = document.querySelector("#food").value.trim();
        
        const englishKeyword = await traductorKeyWords(infoFood);
        
            const result = await dataNutritional(infoQuantity, infoUnit, englishKeyword);
            console.log('Resultado de la búsqueda:', result);
            

           
            printNutritionalInfo(result,infoQuantity,nameUnit,infoFood);
            
            
            
            printBreakdownCalories(result);

            printNutritionalSummary(result);

            printNutritionalMicronutrients(result);
            printIDR_Info(result);
            document.querySelector("#food").value = "";
            
    } catch (error) {
        const divResults = document.querySelector(".divContainerNutritionalInfo"); 
        divResults.innerHTML ="";
        const p = document.createElement("p");
        p.innerHTML = "No tenemos registros del alimento a consultar, por favor ingrese otro";
        divResults.appendChild(p);
        document.querySelector("#food").value = "";
    }
   
            
            
})
};






