export const dataNutritional = async (quantity,unit,food) =>{
try {
    const data = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${import.meta.env.VITE_APPLICATION_ID}&app_key=${import.meta.env.VITE_APPLICATION_KEY}&ingr=${quantity}%20${unit}%20${food}`);
    const dataJson = await data.json(); // objeto completo
    
    
    const totalNutrientsKcal = dataJson.totalNutrientsKCal; // total de macros expresados en kcal
    const totalNutrients = dataJson.totalNutrients; // macronutrientes expresados en g y micronutrientes expresados en mg
    const totalNutrientsDaily = dataJson.totalDaily; // total de todos los nutrienes expresados en % con la relacion a los requerimientos diarios
    
    
    
    
  
    const getInfoTotalMacro = (totalNutrientsKcal,totalNutrients,totalNutrientsDaily) => {
        return {

          DietLabels : dataJson.dietLabels,
           TotalCalories: dataJson.calories,
            //ACA EMPIEZAN LOS MACRONUTRIENTES EXPRESADOS EN UNIDAD KCAL
          CHOCDF_KCAL: {
            label: "Carbohidratos",
            quantity: totalNutrientsKcal?.CHOCDF_KCAL?.quantity || 0,
            unit: totalNutrientsKcal.CHOCDF_KCAL.unit,
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
          //ACA TERMINAN LOS MACRONUTRIENTES EXPRESADOS EN UNIDAD KCAL

          //ACA EMPIEZAN LOS MACROS Y ALGUNOS NUTRIENTES EXPRESADOS EN G Y MG
          PROCNT: {
            label: "Proteína",
            quantity: totalNutrients?.PROCNT?.quantity || 0,
            unit: totalNutrients.PROCNT.unit,
          },
          CHOCDF: {
            label: "Carbohidratos",
            quantity: totalNutrients?.CHOCDF?.quantity || 0,
            unit: totalNutrients.CHOCDF.unit,
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
          FAT: {
            label: "Grasa ",
            quantity: totalNutrients?.FAT?.quantity || 0,
            unit: totalNutrients.FAT.unit,
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
          //ACA TERMINAN LOS MACROS Y ALGUNOS NUTRIENTES EXPRESADOS EN G Y MG

          //ACA EMPIEZAN LOS MICRONUTRIENTES DONDE ESTARAN EXPRESADOS EN MG/UG Y LOS DAILY EN %
          FAT_DAILY: {
            label: "Grasa %",
            quantity: totalNutrientsDaily?.FAT?.quantity || 0,
            unit: totalNutrientsDaily.FAT.unit,
          },
          CHOCDF_DAILY: {
            label: "Carbohidratos %",
            quantity: totalNutrientsDaily?.CHOCDF?.quantity || 0,
            unit: totalNutrientsDaily.CHOCDF.unit,
          },
          PROCNT_DAILY: {
            label: "Proteínas %",
            quantity: totalNutrientsDaily?.PROCNT?.quantity || 0,
            unit: totalNutrientsDaily.PROCNT.unit,
          },
          VITA_RAE_DAILY: {
            label: "Vitamina A",
            quantity: totalNutrientsDaily?.VITA_RAE?.quantity || 0,
            unit: totalNutrientsDaily.VITA_RAE.unit,
          },
          VITA_RAE: {
            label: "Vitamina A",
            quantity: totalNutrients?.VITA_RAE?.quantity || 0,
            unit: totalNutrients.VITA_RAE.unit,
          },
          VITD_DAILY: {
            label: "Vitamina D",
            quantity: totalNutrientsDaily?.VITD?.quantity || 0,
            unit: totalNutrientsDaily.VITD.unit,
          },
          VITD: {
            label: "Vitamina D",
            quantity: totalNutrients?.VITD?.quantity || 0,
            unit: totalNutrients.VITD.unit,
          },
          TOCPHA_DAILY: {
            label: "Vitamina E",
            quantity: totalNutrientsDaily?.TOCPHA?.quantity || 0,
            unit: totalNutrientsDaily.TOCPHA.unit,
          },
          TOCPHA: {
            label: "Vitamina E",
            quantity: totalNutrients?.TOCPHA?.quantity || 0,
            unit: totalNutrients.TOCPHA.unit,
          },
          RIBF_DAILY: {
            label: "Riboflavina (B2)",
            quantity: totalNutrientsDaily?.RIBF?.quantity || 0,
            unit: totalNutrientsDaily.RIBF.unit,
          },
          RIBF: {
            label: "Riboflavina (B2)",
            quantity: totalNutrients?.RIBF?.quantity || 0,
            unit: totalNutrients.RIBF.unit,
          },
          NIA_DAILY: {
            label: "Niacina (B3)",
            quantity: totalNutrientsDaily?.NIA?.quantity || 0,
            unit: totalNutrientsDaily.NIA.unit,
          },
          NIA: {
            label: "Niacina (B3)",
            quantity: totalNutrients?.NIA?.quantity || 0,
            unit: totalNutrients.NIA.unit,
          },
          FOLDFE_DAILY: {
            label: "Ácido Fólico",
            quantity: totalNutrientsDaily?.FOLDFE?.quantity || 0,
            unit: totalNutrientsDaily.FOLDFE.unit,
          },
          FOLDFE: {
            label: "Ácido Fólico",
            quantity: totalNutrients?.FOLDFE?.quantity || 0,
            unit: totalNutrients.FOLDFE.unit,
          },
          VITB12_DAILY: {
            label: "Vitamina (B12)",
            quantity: totalNutrientsDaily?.VITB12?.quantity || 0,
            unit: totalNutrientsDaily.VITB12.unit,
          },
          VITB12: {
            label: "Vitamina (B12)",
            quantity: totalNutrients?.VITB12?.quantity || 0,
            unit: totalNutrients.VITB12.unit,
          },
          P_DAILY: {
            label: "Fosforo",
            quantity: totalNutrientsDaily?.P?.quantity || 0,
            unit: totalNutrientsDaily.P.unit,
          },
          P: {
            label: "Fosforo",
            quantity: totalNutrients?.P?.quantity || 0,
            unit: totalNutrients.P.unit,
          },
          ZN_DAILY: {
            label: "Zinc",
            quantity: totalNutrientsDaily?.ZN?.quantity || 0,
            unit: totalNutrientsDaily.ZN.unit,
          },
          ZN: {
            label: "Zinc",
            quantity: totalNutrients?.ZN?.quantity || 0,
            unit: totalNutrients.ZN.unit,
          },
          MG_DAILY: {
            label: "Magnesio",
            quantity: totalNutrientsDaily?.MG?.quantity || 0,
            unit: totalNutrientsDaily.MG.unit,
          },
          MG: {
            label: "Magnesio",
            quantity: totalNutrients?.MG?.quantity || 0,
            unit: totalNutrients.MG.unit,
          },
        };
      };
    const infoTotalMacros = getInfoTotalMacro(totalNutrientsKcal,totalNutrients,totalNutrientsDaily);
    return infoTotalMacros;

    

} catch (error) {
    console.log("No se encuentra el alimento an la base de datos");
    
}

}


