import './NutritionalInfo.css';
import { cleanPage } from '../../Utils/CleanPage';
import { dataNutritional } from '../../data/dataNutricion';
import { traductorKeyWords } from '../../Utils/Traductor';




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
<div id="results-container"></div>

`


const form = document.querySelector("#nutrition-form");
form.addEventListener("submit", async (event)=>{
    
    event.preventDefault();
    const infoQuantity = document.querySelector("#quantity").value;
    const infoUnit = document.querySelector("#unit").value;
    const nameUnit = document.querySelector("#unit").selectedOptions[0].textContent;
    const infoFood = document.querySelector("#food").value.trim();
    
    const englishKeyword = await traductorKeyWords(infoFood);
    console.log(englishKeyword);
    

        const result = await dataNutritional(infoQuantity, infoUnit, englishKeyword);
       

            const printNutritionalInfo = (result)=>{
    
                const resultsContainer = document.querySelector("#results-container");
                
                resultsContainer.innerHTML = `
                <div class="divContainer">
              <h2>Info. Nutricional</h2>
              <h3>Tamaño de la Porción <span>${infoQuantity} ${nameUnit}</span></h3>
              <h4>Por ${nameUnit}</h4>
              <h4>Energía: ${result.ENERC_KCAL?.quantity?.toFixed(0) || 'N/A'} ${result.ENERC_KCAL.unit}</h4>
              <h4>Proteína: ${result.PROCNT_KCAL?.quantity?.toFixed(2) || 'N/A'} ${result.PROCNT_KCAL.unit}</h4>
              <h4>Carbohidratos: ${result.CHOCDF_KCAL?.quantity?.toFixed(2) || 'N/A'} ${result.CHOCDF_KCAL.unit}</h4>
              <h4>Fibra: ${result.FIBTG?.quantity?.toFixed(2) || 'N/A'} ${result.FIBTG.unit}</h4>
              <h4>Azúcar: ${result.SUGAR?.quantity?.toFixed(2) || 'N/A'} ${result.SUGAR.unit}</h4>
              <h4>Grasa: ${result.FAT_KCAL?.quantity?.toFixed(2) || 'N/A'} ${result.FAT_KCAL.unit}</h4>
              <h4>Grasas Saturadas: ${result.FASAT?.quantity?.toFixed(2) || 'N/A'} ${result.FASAT.unit}</h4>
              <h4>Grasas Poliinsaturadas: ${result.FAPU?.quantity?.toFixed(2) || 'N/A'} ${result.FAPU.unit}</h4>
              <h4>Grasas Monoinsaturadas: ${result.FAMS?.quantity?.toFixed(2) || 'N/A'} ${result.FAMS.unit}</h4>
              <h4>Colesterol: ${result.CHOLE?.quantity?.toFixed(2) || 'N/A'} ${result.CHOLE.unit}</h4>
              <h4>Sodio: ${result.NA?.quantity?.toFixed(2) || 'N/A'} ${result.NA.unit}</h4>
              <h4>Potasio: ${result.K?.quantity?.toFixed(2) || 'N/A'} ${result.K.unit}</h4>
              <h4>Vitamina A: ${result.VITA_RAE?.quantity?.toFixed(2) || 'N/A'} ${result.VITA_RAE.unit}</h4>
              
            </div>`;

            
            }
            document.querySelector("#food").value = "";
            printNutritionalInfo(result);
            
})
}






