export const recetas = {
    ensaladaMediterranea: {
        nombrePlato: "Ensalada Mediterránea de Garbanzos",
        // Importante  saber el tiempo de preparacion ya que segun sea el tiempo se pintaran 1,2 o 3 icons de idea para indicarle al cliente de manera visual la complejidad del plato
        tiempoElaboracion: 50,
        tiempoCoccion: 10, 
        cantidadRaciones: 4,
        complejidad: "Dificil",
        ingredientes: [
            "200g de garbanzos cocidos",
            "100g de queso feta",
            "1 pepino",
            "100g de tomates cherry",
            "Aceitunas negras",
            "Aceite de oliva virgen extra"
        ],
        elaboracion: [
            "Lavar y escurrir bien los garbanzos cocidos.",
            "Cortar el pepino en rodajas finas.",
            "Partir los tomates cherry por la mitad.",
            "Trocear el queso feta en cubos pequeños.",
            "Mezclar los garbanzos, pepino, tomates y aceitunas en un bol grande.",
            "Aliñar con aceite de oliva virgen extra y un toque de sal.",
            "Mezclar bien para que todos los ingredientes se impregnen del aliño.",
            "Servir la ensalada fría y disfrutar."
        ],
        alerta: [
            "No utilizar queso feta si hay intolerancia a los lácteos.",
            "Lava bien los ingredientes para evitar contaminación cruzada."
        ],
        trucoChef: "Si dejas reposar la ensalada en la nevera por 30 minutos, los sabores se intensificarán.",
        urlImage: "/assets/empanadasArgentinas.jpg",
        infoNutricional: {
            totalCalorias: 400, // por ración
            grasas: {
                gramos: 20, // en gramos
                calorias: 180, // en calorías (1g de grasa = 9 calorías)
                porcentaje: "20%" // % del total diario (aproximado)
            },
            proteinas: {
                gramos: 15, // en gramos
                calorias: 60, // en calorías (1g de proteína = 4 calorías)
                porcentaje: "30%" // % del total diario (aproximado)
            },
            hidratosDeCarbono: {
                gramos: 35, // en gramos
                calorias: 140, // en calorías (1g de carbohidratos = 4 calorías)
                porcentaje: "12%" // % del total diario (aproximado)
            },
            azucares: 5, // en gramos
            grasasSaturadas: 6, // en gramos
            grasasMonoinsaturadas: 10, // en gramos
            grasasPoliinsaturadas: 2, // en gramos
            fibra: 8, // en gramos
            sal: 1.5, // en gramos
        },
        fechaElaboracion: "12 de Septiembre de 2024",
        alergenos: ["Lácteos"],
        labels: ["Sin Gluten", "Sin Carne"],
        destacados : "si",
    },
    pastaAlfredoPollo: {
        nombrePlato: "Pasta Alfredo con Pollo",
        tiempoElaboracion: 30,
        tiempoCoccion: 15, // Número en lugar de texto
        cantidadRaciones: 4,
        complejidad: "Intermedia",
        ingredientes: [
            "200g de pasta",
            "150g de pechuga de pollo",
            "200ml de crema para cocinar",
            "100g de queso parmesano",
            "2 dientes de ajo",
            "Aceite de oliva"
        ],
        elaboracion: [
            "Cocer la pasta en agua con sal hasta que esté al dente.",
            "Cortar la pechuga de pollo en tiras y saltear con aceite y ajo picado.",
            "Añadir la crema y el queso parmesano rallado al pollo.",
            "Cocinar a fuego lento hasta que la salsa espese.",
            "Escurrir la pasta y mezclar con la salsa Alfredo.",
            "Servir con queso parmesano rallado por encima.",
            "Decorar con perejil fresco.",
            "Disfrutar caliente."
        ],
        alerta: [
            "Evitar si se tiene intolerancia a los lácteos.",
            "Cuidado al cocinar la salsa, no dejar que se queme."
        ],
        trucoChef: "Agrega un chorrito de vino blanco a la salsa Alfredo para un toque gourmet.",
        urlImage: "/assets/mugCake.jpg",
        infoNutricional: {
            totalCalorias: 700, // por ración
            grasas: {
                gramos: 35, // en gramos
                calorias: 315, // en calorías (1g de grasa = 9 calorías)
                porcentaje: "35%" // % del total diario (aproximado)
            },
            proteinas: {
                gramos: 30, // en gramos
                calorias: 120, // en calorías (1g de proteína = 4 calorías)
                porcentaje: "60%" // % del total diario (aproximado)
            },
            hidratosDeCarbono: {
                gramos: 50, // en gramos
                calorias: 200, // en calorías (1g de carbohidratos = 4 calorías)
                porcentaje: "20%" // % del total diario (aproximado)
            },
            azucares: 7, // en gramos
            grasasSaturadas: 10, // en gramos
            grasasMonoinsaturadas: 15, // en gramos
            grasasPoliinsaturadas: 3, // en gramos
            fibra: 6, // en gramos
            sal: 2, // en gramos
        },
        fechaElaboracion: "12 de Septiembre de 2024",
        alergenos: ["Lácteos (crema y queso parmesano)"],
        labels: ["Sin Crustaseos", "Sin gluten","Sin Mariscos","Sin Soja"],
        destacados : "si",
    },
    sopaTomateAlbahaca: {
        nombrePlato: "Sopa de Tomate y Albahaca",
        tiempoElaboracion: 10,
        tiempoCoccion: 20, // Número en lugar de texto
        cantidadRaciones: 4,
        complejidad: "Fácil",
        ingredientes: [
            "500g de tomates maduros",
            "1 cebolla",
            "2 dientes de ajo",
            "500ml de caldo de verduras",
            "Albahaca fresca",
            "Aceite de oliva"
        ],
        elaboracion: [
            "Pelar y picar la cebolla y los ajos.",
            "Sofreír la cebolla y el ajo en aceite de oliva.",
            "Agregar los tomates picados y cocinar durante 10 minutos.",
            "Añadir el caldo de verduras y dejar hervir.",
            "Cocinar a fuego lento durante 10 minutos más.",
            "Triturar la sopa con una batidora hasta obtener una textura suave.",
            "Agregar la albahaca fresca y mezclar.",
            "Servir caliente con un chorrito de aceite de oliva."
        ],
        alerta: [
            "No añadir sal adicional si el caldo de verduras ya contiene sal.",
            "Cuidado al triturar la sopa, dejar que enfríe ligeramente."
        ],
        trucoChef: "Si quieres una textura aún más suave, cuela la sopa después de triturarla.",
        urlImage: "/assets/galletasChocolate.jpg",
        infoNutricional: {
            totalCalorias: 150, // por ración
            grasas: {
                gramos: 8, // en gramos
                calorias: 72, // en calorías (1g de grasa = 9 calorías)
                porcentaje: "8%" // % del total diario (aproximado)
            },
            proteinas: {
                gramos: 3, // en gramos
                calorias: 12, // en calorías (1g de proteína = 4 calorías)
                porcentaje: "6%" // % del total diario (aproximado)
            },
            hidratosDeCarbono: {
                gramos: 20, // en gramos
                calorias: 80, // en calorías (1g de carbohidratos = 4 calorías)
                porcentaje: "10%" // % del total diario (aproximado)
            },
            azucares: 10, // en gramos
            grasasSaturadas: 1, // en gramos
            grasasMonoinsaturadas: 5, // en gramos
            grasasPoliinsaturadas: 1, // en gramos
            fibra: 4, // en gramos
            sal: 1, // en gramos
        },
        fechaElaboracion: "12 de Septiembre de 2024",
        alergenos: ["Ninguno"],
        labels: ["Sin gluten", "Sin carne", "Sin Azucar","Sin Sesamo","Sin Huevos"],
        destacados : "si",
    }
};
