export const dataNutritional = async (quantity,unit,food) =>{
try {
    const data = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${import.meta.env.VITE_APPLICATION_ID}&app_key=${import.meta.env.VITE_APPLICATION_KEY}&ingr=${quantity}%20${unit}%20${food}`);
    const dataJson = await data.json();
    const totalNutrientsKcal = dataJson.totalNutrientsKCal;
    const totalNutrients = dataJson.totalNutrients;
    const totalNutrientsDaily = dataJson.totalDaily;
    
    console.log(totalNutrients);
    

    
    const getInfoTotalMacro = (totalNutrientsKcal,totalNutrients,totalNutrientsDaily) => {
        return {
          CHOCDF_KCAL: {
            label: "Carbohidratos",
            quantity: totalNutrientsKcal?.CHOCDF_KCAL?.quantity || 0,
            unit: totalNutrientsKcal.CHOCDF_KCAL.unit,
          },
          FIBTG: {
            label: "Fibra",
            quantity: totalNutrients?.FIBTG?.quantity || 0,
            unit: totalNutrients.FIBTG.unit,
          },
          SUGAR: {
            label: "Azúcar",
            quantity: totalNutrients?.SUGAR?.quantity || 0,
            unit: totalNutrients.SUGAR.unit,
          },
          PROCNT_KCAL: {
            label: "Proteínas",
            quantity: totalNutrientsKcal?.PROCNT_KCAL?.quantity || 0,
            unit: totalNutrientsKcal.PROCNT_KCAL.unit,
          },
          FAT_KCAL: {
            label: "Grasas",
            quantity: totalNutrientsKcal?.FAT_KCAL?.quantity || 0,
            unit: totalNutrientsKcal.FAT_KCAL.unit,
          },
          ENERC_KCAL: {
            label: "Energía",
            quantity: totalNutrientsKcal?.ENERC_KCAL?.quantity || 0,
            unit: totalNutrientsKcal.ENERC_KCAL.unit,
            
          },
          FASAT: {
            label: "Grasas Saturadas",
            quantity: totalNutrients?.FASAT?.quantity || 0,
            unit: totalNutrients.FASAT.unit,
          },
          FAPU: {
            label: "Grasas Poliinsaturadas",
            quantity: totalNutrients?.FAPU?.quantity || 0,
            unit: totalNutrients.FAPU.unit,
          },
          FAMS: {
            label: "Grasas Monoinsaturadas",
            quantity: totalNutrients?.FAMS?.quantity || 0,
            unit: totalNutrients.FAMS.unit,
          },
          CHOLE: {
            label: "Colesterol",
            quantity: totalNutrients?.CHOLE?.quantity || 0,
            unit: totalNutrients.CHOLE.unit,
          },
          NA: {
            label: "Sodio",
            quantity: totalNutrients?.NA?.quantity || 0,
            unit: totalNutrients.NA.unit,
          },
          K: {
            label: "Potasio",
            quantity: totalNutrients?.K?.quantity || 0,
            unit: totalNutrients.K.unit,
          },
          
          VITA_RAE: {
            label: "Vitamina A",
            quantity: totalNutrientsDaily?.VITA_RAE?.quantity || 0,
            unit: totalNutrientsDaily.VITA_RAE.unit,
          },
        };
      };
    const infoTotalMacros = getInfoTotalMacro(totalNutrientsKcal,totalNutrients,totalNutrientsDaily);
    return infoTotalMacros;

    

} catch (error) {
    console.error('Error al obtener los datos nutricionales', error);
}

}


