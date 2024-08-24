const dataNutritional = async (quantity,unit,food) =>{
try {
    const data = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${import.meta.env.VITE_APPLICATION_ID}&app_key=${import.meta.env.VITE_APPLICATION_KEY}&ingr=${quantity}%20${unit}%20${food}`);
    const dataJson = await data.json();
    console.log(dataJson);
    
} catch (error) {
    console.error('Error al obtener los datos nutricionales', error);
}

}

dataNutritional("1","once","pineapple");