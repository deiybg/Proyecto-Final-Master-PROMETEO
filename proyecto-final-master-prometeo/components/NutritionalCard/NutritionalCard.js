import './NutritionalCard.css';


//Esta función imrprime los datos nutricionales principales del alimento a consultar
export const printNutritionalInfo = (result,infoQuantity,nameUnit,infoFood)=>{
    const resultsContainer = document.querySelector("#results-container");
    resultsContainer.innerHTML = '';
    

    resultsContainer.innerHTML = 
    `
    <div class="divContainer_InfoNutritional">
    <div class="titleInfoNutritional">
  <h2 class="border-bottom">Info. Nutricional</h2><p class="spanH2InfoNutritional">${infoFood}</p>
  </div>
  <div class="nutrientContainer porcionContainer">
<h5>Tamaño de la Porción </h5><span class="spanInfoNutritional">${infoQuantity || 'N/A'} ${nameUnit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Energía:</h5><span class="spanInfoNutritional"> ${result.ENERC_KCAL?.quantity?.toFixed(0) || 'N/A'} ${result.ENERC_KCAL?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Proteína:</h5><span class="spanInfoNutritional"> ${result.PROCNT?.quantity?.toFixed(2) || 'N/A'} ${result.PROCNT?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer">
<h5 class="h4-green">Carbohidratos:</h5><span class="spanInfoNutritional"> ${result.CHOCDF?.quantity?.toFixed(2) || 'N/A'} ${result.CHOCDF?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer">
<h5 class="h4-green">Fibra:</h5><span class="spanInfoNutritional"> ${result.FIBTG?.quantity?.toFixed(2) || 'N/A'} ${result.FIBTG?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Azúcar:</h5><span class="spanInfoNutritional"> ${result.SUGAR?.quantity?.toFixed(2) || 'N/A'} ${result.SUGAR?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer">
<h5 class="h4-green">Grasa:</h5><span class="spanInfoNutritional"> ${result.FAT?.quantity?.toFixed(2) || 'N/A'} ${result.FAT?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer">
<h5 class="h4-green">Grasas Saturadas:</h5><span class="spanInfoNutritional"> ${result.FASAT?.quantity?.toFixed(2) || 'N/A'} ${result.FASAT?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer">
<h5 class="h4-green">Grasas Poliinsaturadas:</h5><span class="spanInfoNutritional"> ${result.FAPU?.quantity?.toFixed(2) || 'N/A'} ${result.FAPU?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Grasas Monoinsaturadas:</h5><span class="spanInfoNutritional"> ${result.FAMS?.quantity?.toFixed(2) || 'N/A'} ${result.FAMS?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Colesterol:</h5><span class="spanInfoNutritional"> ${result.CHOLE?.quantity?.toFixed(2) || 'N/A'} ${result.CHOLE?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Sodio:</h5><span class="spanInfoNutritional"> ${result.NA?.quantity?.toFixed(2) || 'N/A'} ${result.NA?.unit || 'N/A'}</span>
</div>
<div class="nutrientContainer border-bottom">
<h5 class="h4-green">Potasio:</h5><span class="spanInfoNutritional"> ${result.K?.quantity?.toFixed(2) || 'N/A'} ${result.K?.unit || 'N/A'}</span>
</div>

</div>`;

}
//Esta función imprime en valor porcentuales , la ingesta diaria recomendada, en base a una dieta de 2000calorias
export const printIDR_Info = (result)=>{
    const resultsContainer = document.querySelector("#resumen-container");
    const divContainerIDR = document.createElement("div");
    divContainerIDR.classList.add("divContainer_IDR");
    const calculatedCalories = (result.TotalCalories * 100) / 2000;
    const restCalories = 100 - calculatedCalories;
    divContainerIDR.innerHTML = `
    <div class="containerIDR">
    <p class="pCalculatedCalories"> ${calculatedCalories} %</p>
    <p class="pIDR">de IDR * <span class="span-totalCalories"> (${result.TotalCalories} cal)</span></p>
    <div class="containerCanvas">
    <canvas id="IDRchart"></canvas>
    </div>
    </div>
    `
    resultsContainer.appendChild(divContainerIDR);

    let backgroundColor,data, labels;
    // Si sobrepasa el 100%, todo el gráfico se pinta de rojo
    if(calculatedCalories >100){
        backgroundColor = ['rgb(255, 0, 0)']; // Rojo para todo el gráfico
        data = [100];// Pinta todo como 100%
        labels = ['Sobrepasa el IDR'];
    }else if(calculatedCalories == 0){
        backgroundColor = ['rgb(32, 172, 32)']; // Verde para todo el gráfico
        data = [100];
        labels = ['Alimento sin cal'];
    }
    else{ // Si no sobrepasa el 100%, usar verde y gris
        backgroundColor = ['rgb(75, 192, 192)', 'rgb(211, 211, 211)'];  // Verde y gris
        data = [calculatedCalories.toFixed(2), restCalories.toFixed(2)]; // Mostrar consumido y restante
        labels = ['Consumido %', 'Restante %'];
    }


    const ctx = document.querySelector('#IDRchart');
    
    new Chart(ctx,{
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: backgroundColor,
              borderWidth: 1
            }]
          },
          options: {
            cutout: '1%',
            plugins: {
                legend: {
                    display: false, 
                    position: 'bottom'
                }
            }
        }

    });
    ;
}


//Esta función imprime en valores porcentuales del total de cada macronutrientes repartido en un total del 100%
export const printBreakdownCalories = (result)=>{
    const resultsContainer = document.querySelector("#results-container");
    const divContainerBreaksown = document.createElement("div");
    divContainerBreaksown.classList.add("divContainer_Breakdown");
    const percentageValueCHOCDF = (result.CHOCDF_KCAL.quantity *100) / result.TotalCalories; //% que representa ente macro
    const percentageValueFAT = (result.FAT_KCAL.quantity *100) / result.TotalCalories; //% que representa ente macro
    const percentageValuePROCNT = (result.PROCNT_KCAL.quantity *100) / result.TotalCalories; //% que representa ente macro
    divContainerBreaksown.innerHTML = `
    <h4 class="h4-green border-bottom">Desglose de Calorías</h4>
    <div class="containerBreakdownMacronutrients">
    <ul>
    <li class="h4-green">Carbohidratos (${percentageValueCHOCDF?.toFixed(2) || 0}%)<span class="square square-carbohydrates"></span></li>
    <li class="h4-green">Grasa (${percentageValueFAT?.toFixed(2) || 0}%)<span class="square square-fat"></span></li>
    <li class="h4-green">Proteínas (${percentageValuePROCNT?.toFixed(2) || 0}%)<span class="square square-protein"></span></li>
</ul>
    <div class="containerCanvas">
    <canvas id="breakdownchart"></canvas>
    </div>
    </div>
    `
    resultsContainer.appendChild(divContainerBreaksown);

    const chartBreakdown = document.querySelector('#breakdownchart');

    new Chart(chartBreakdown,{
        type: 'pie',
        data:{
            labels: ['Carbohidratos','Grasa','Proteina'],
            datasets:[{
                data:[percentageValueCHOCDF,percentageValueFAT,percentageValuePROCNT],
                backgroundColor: ['rgb(10, 85, 47)','rgb(231, 76, 60)','rgb(255, 165, 0)'],
                hoverOffset: 4,
                borderWidth: 3,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false, 
                    position: 'bottom'
                }
            }
        }
    }

    )
};
//Esta función imprime en valores el total de las calorias en kcal y del resto de macros en g, de una manera mas visible
export const printNutritionalSummary = (result) =>{
const resultsContainer = document.querySelector("#resumen-container");
resultsContainer.innerHTML = "";
const divContainerSummary = document.createElement("div");
divContainerSummary.classList.add("divContainer_Summary");
divContainerSummary.innerHTML = `

<h4 class="h4-green border-bottom">Resumen Nutricional</h4>
<ul class="nutritionalSummaryUl">
<li class="nutritionalSummaryLi">${result.TotalCalories} Kcal<span >🔥</span><span > calorias</span></li>
<li class="nutritionalSummaryLi">${result.FAT?.quantity?.toFixed(2) || 'N/A'} g<span >🥑</span><span > grasas</span></li>
<li class="nutritionalSummaryLi">${result.CHOCDF?.quantity?.toFixed(2) || 'N/A'} g<span >🥔</span><span > carbohidratos</span></li>
<li class="nutritionalSummaryLi">${result.PROCNT?.quantity?.toFixed(2) || 'N/A'} g<span >🍗</span><span > proteinas</span></li>
</ul>
`
resultsContainer.appendChild(divContainerSummary);
}

//Esta función imprime en valores porcentuales los micronuitrientes
export const printNutritionalMicronutrients =(result) =>{
    const resultsContainer = document.querySelector("#resumen-container");
    const divContainerMicronutrients = document.createElement("div");
    divContainerMicronutrients.classList.add("divContainer_Micronutrients");
    divContainerMicronutrients.innerHTML = `
    <h4 class="h4-green border-bottom">Micronutrientes ---> % IR</h4>
    <div class="containerCanvasMicronutrients">
    <canvas id="micronutrientsChart"></canvas>
    </div>
    
    `
    resultsContainer.appendChild(divContainerMicronutrients);

    const chartMicrinutrients = document.querySelector('#micronutrientsChart');
    const data = [
    result.VITA_RAE_DAILY?.quantity?.toFixed(2) || '0',
    result.VITD_DAILY?.quantity?.toFixed(2) || '0',
    result.TOCPHA_DAILY?.quantity?.toFixed(2) || '0',
    result.RIBF_DAILY?.quantity?.toFixed(2) || '0',
    result.NIA_DAILY?.quantity?.toFixed(2) || '0',
    result.FOLDFE_DAILY?.quantity?.toFixed(2) || '0',
    result.VITB12_DAILY?.quantity?.toFixed(2) || '0',
    result.P_DAILY?.quantity?.toFixed(2) || '0',
    result.ZN_DAILY?.quantity?.toFixed(2) || '0',
    result.MG_DAILY?.quantity?.toFixed(2) || '0',
    ]

    new Chart(chartMicrinutrients,{
        type: 'bar',
        data:{
            labels: ['Vitamina A','Vitamina D','Vitamina E','Riboflavina','Niacina','Ácido Fólico','Vitamina B12','Fósforo','Zinc','Magnesio'],
            datasets:[{
                data: data,
                backgroundColor: [
                    'rgb(10, 85, 47)'
                  ],
                borderWidth: 1,
            }]
        },
        options: {
            
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    display: false, // Ocultar la leyenda si no se necesita
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.raw + '% IR'; // Mostrar el porcentaje en la etiqueta
                        }
                    }
                },
                subtitle: {
                display: true,
                    text: 'Basado en una Ingesta Diaria Recomendada de 2000 cal',
                    padding: {
                        bottom: 10
                    },
                    font: {
                        size: 10,
                        weight: 'bold'
                    },
                    color: 'rgb(10, 85, 47)',
                    align: 'center'
                },
                max: 100,
            },
            scales: {
                x: {
                    grid: {
                        display: false // Ocultar la cuadrícula en el eje X
                        
                    },
                    ticks: {
                        stepSize: 10 ,
                        display: false,
                        
                        
                    },
                },
                y: {
                    grid: {
                        display: false // Ocultar la cuadrícula en el eje X
                    },
                    ticks: {
                        ticks: {
                            font: {
                                size: 25 // Tamaño de fuente para el eje Y
                            }
                            
                            
                        },
                        
                        
                    },
                    
                }
            
        },
    }
       
        
    }

    );
}

export const printDietLabels = (result) =>{

    const container = document.querySelector("#results-container");
    const divContainer = document.createElement("div");
    divContainer.classList.add("divContainerDietLabels");
    const h4 = document.createElement("h4");
    h4.textContent = 'Etiquetas Dietéticas';
    h4.classList.add("h4-green", "border-bottom");
    divContainer.appendChild(h4);
    const ul = document.createElement("ul");
    ul.classList.add("ulDietLabels");
    const labels = result.DietLabels.filter(label => label.trim() !== "");
    
    if (labels.length === 0) {
        const p = document.createElement("p");
        p.classList.add("pDietLabels");
        p.textContent = 'No se encontraron etiquetas para este alimento';
        divContainer.append(p);
    } else {
        labels.forEach(label => {
            const li = document.createElement("li");
            li.textContent = '#' + label;
            ul.appendChild(li);
        });
        divContainer.appendChild(ul);
    }
    ;
    
    
    container.appendChild(divContainer)
    
}