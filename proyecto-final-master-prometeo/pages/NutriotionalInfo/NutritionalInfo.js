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
      
      <option value="1">1</option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  
  <label for="unit">Unidad:</label>
  <select id="unit" name="unit" required>
      
      <option value="ounce">Onza</option>
      <option value="pound">Libra</option>
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
    const infoFood = document.querySelector("#food").value.trim();
    
    const englishKeyword = await traductorKeyWords(infoFood);
    console.log(englishKeyword);
    

        const result = await dataNutritional(infoQuantity, infoUnit, englishKeyword);
       

            const printNutritionalInfo = ()=>{
    
                const resultsContainer = document.querySelector("#results-container");
                
                resultsContainer.innerHTML = `
                <div class="divContainer">
              <h2>Tabla Nutricional</h2>
              <h3>${infoFood}</h3>
              <p>Valor nutricional en ${infoQuantity} ${infoUnit} de ${infoFood}</p>
              <h4>Energia: ${result.calories.toFixed(2)} kcal</h4>
              <h4>Proteína: ${result.protein.toFixed(2)} g</h4>
              <h4>Grasas: ${result.fat.toFixed(2)} g</h4>
              <h4>Carbohidratos: ${result.carbohydrates.toFixed(2)} g</h4>
            </div>`;
        
            }
            document.querySelector("#food").value = "";
            printNutritionalInfo(result);
            
})
}






