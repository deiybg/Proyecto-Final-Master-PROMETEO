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
      "Aceite de oliva virgen extra",
    ],
    elaboracion: [
      "Lavar y escurrir bien los garbanzos cocidos.",
      "Cortar el pepino en rodajas finas.",
      "Partir los tomates cherry por la mitad.",
      "Trocear el queso feta en cubos pequeños.",
      "Mezclar los garbanzos, pepino, tomates y aceitunas en un bol grande.",
      "Aliñar con aceite de oliva virgen extra y un toque de sal.",
      "Mezclar bien para que todos los ingredientes se impregnen del aliño.",
      "Servir la ensalada fría y disfrutar.",
    ],
    alerta: [
      "No utilizar queso feta si hay intolerancia a los lácteos.",
      "Lava bien los ingredientes para evitar contaminación cruzada.",
    ],
    trucoChef:
      "Si dejas reposar la ensalada en la nevera por 30 minutos, los sabores se intensificarán.",
    urlImage: "/assets/ensGarbanzos.jpg",
    infoNutricional: {
      totalCalorias: 400, // por ración
      grasas: {
        gramos: 20, // en gramos
        calorias: 180, // en calorías (1g de grasa = 9 calorías)
        porcentaje: 20, // % del total diario (aproximado)
      },
      proteinas: {
        gramos: 15, // en gramos
        calorias: 60, // en calorías (1g de proteína = 4 calorías)
        porcentaje: 30, // % del total diario (aproximado)
      },
      hidratosDeCarbono: {
        gramos: 35, // en gramos
        calorias: 140, // en calorías (1g de carbohidratos = 4 calorías)
        porcentaje: 50, // % del total diario (aproximado)
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
    destacados: "si",
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
      "Aceite de oliva",
    ],
    elaboracion: [
      "Cocer la pasta en agua con sal hasta que esté al dente.",
      "Cortar la pechuga de pollo en tiras y saltear con aceite y ajo picado.",
      "Añadir la crema y el queso parmesano rallado al pollo.",
      "Cocinar a fuego lento hasta que la salsa espese.",
      "Escurrir la pasta y mezclar con la salsa Alfredo.",
      "Servir con queso parmesano rallado por encima.",
      "Decorar con perejil fresco.",
      "Disfrutar caliente.",
    ],
    alerta: [
      "Evitar si se tiene intolerancia a los lácteos.",
      "Cuidado al cocinar la salsa, no dejar que se queme.",
    ],
    trucoChef:
      "Agrega un chorrito de vino blanco a la salsa Alfredo para un toque gourmet.",
    urlImage: "/assets/pastaAlfredo.jpg",
    infoNutricional: {
      totalCalorias: 700, // por ración
      grasas: {
        gramos: 35, // en gramos
        calorias: 315, // en calorías (1g de grasa = 9 calorías)
        porcentaje: 20, // % del total diario (aproximado)
      },
      proteinas: {
        gramos: 30, // en gramos
        calorias: 120, // en calorías (1g de proteína = 4 calorías)
        porcentaje: 60, // % del total diario (aproximado)
      },
      hidratosDeCarbono: {
        gramos: 50, // en gramos
        calorias: 200, // en calorías (1g de carbohidratos = 4 calorías)
        porcentaje: 20, // % del total diario (aproximado)
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
    labels: ["Sin Crustaseos", "Sin gluten", "Sin Mariscos", "Sin Soja"],
    destacados: "si",
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
      "Aceite de oliva",
    ],
    elaboracion: [
      "Pelar y picar la cebolla y los ajos.",
      "Sofreír la cebolla y el ajo en aceite de oliva.",
      "Agregar los tomates picados y cocinar durante 10 minutos.",
      "Añadir el caldo de verduras y dejar hervir.",
      "Cocinar a fuego lento durante 10 minutos más.",
      "Triturar la sopa con una batidora hasta obtener una textura suave.",
      "Agregar la albahaca fresca y mezclar.",
      "Servir caliente con un chorrito de aceite de oliva.",
    ],
    alerta: [
      "No añadir sal adicional si el caldo de verduras ya contiene sal.",
      "Cuidado al triturar la sopa, dejar que enfríe ligeramente.",
    ],
    trucoChef:
      "Si quieres una textura aún más suave, cuela la sopa después de triturarla.",
    urlImage: "/assets/tomateAlbahaca.jpg",
    infoNutricional: {
      totalCalorias: 150, // por ración
      grasas: {
        gramos: 8, // en gramos
        calorias: 72, // en calorías (1g de grasa = 9 calorías)
        porcentaje: 15, // % del total diario (aproximado)
      },
      proteinas: {
        gramos: 3, // en gramos
        calorias: 12, // en calorías (1g de proteína = 4 calorías)
        porcentaje: 35, // % del total diario (aproximado)
      },
      hidratosDeCarbono: {
        gramos: 20, // en gramos
        calorias: 80, // en calorías (1g de carbohidratos = 4 calorías)
        porcentaje: 50, // % del total diario (aproximado)
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
    labels: [
      "Sin gluten",
      "Sin carne",
      "Sin Azucar",
      "Sin Sesamo",
      "Sin Huevos",
    ],
    destacados: "si",
  },
  tartaVerduras: {
    nombrePlato: "Tarta de Verduras",
    tiempoElaboracion: 25,
    tiempoCoccion: 35,
    cantidadRaciones: 6,
    complejidad: "Intermedia",
    ingredientes: [
      "1 masa de hojaldre",
      "2 zanahorias",
      "1 calabacín",
      "1 pimiento rojo",
      "100g de espinacas",
      "3 huevos",
      "200ml de nata líquida",
      "Queso rallado",
      "Sal y pimienta",
    ],
    elaboracion: [
      "Precalentar el horno a 180°C.",
      "Cortar las zanahorias, el calabacín y el pimiento en tiras finas.",
      "Saltear las verduras en una sartén con un poco de aceite.",
      "Batir los huevos con la nata líquida, sal y pimienta.",
      "Extender la masa de hojaldre en un molde para tarta.",
      "Añadir las verduras salteadas sobre la masa y cubrir con la mezcla de huevos y nata.",
      "Espolvorear con queso rallado y hornear durante 35 minutos o hasta que esté dorada.",
      "Dejar enfriar ligeramente antes de servir.",
    ],
    alerta: [
      "Evitar si se tiene intolerancia a los lácteos (por la nata y el queso).",
      "Vigilar que la masa no se queme en el horno.",
    ],
    trucoChef:
      "Añade un toque de nuez moscada a la mezcla de huevos para realzar los sabores.",
    urlImage: "/assets/tartaVerduras.jpg",
    infoNutricional: {
      totalCalorias: 350,
      grasas: {
        gramos: 22,
        calorias: 198,
        porcentaje: 28,
      },
      proteinas: {
        gramos: 12,
        calorias: 48,
        porcentaje: 24,
      },
      hidratosDeCarbono: {
        gramos: 25,
        calorias: 100,
        porcentaje: 48,
      },
      azucares: 4,
      grasasSaturadas: 10,
      grasasMonoinsaturadas: 8,
      grasasPoliinsaturadas: 2,
      fibra: 5,
      sal: 1.2,
    },
    fechaElaboracion: "28 de Septiembre de 2024",
    alergenos: ["Lácteos", "Huevos"],
    labels: ["Vegetariana"],
    destacados: "no",
  },
  risottoDeSetas: {
    nombrePlato: "Risotto de Setas",
    tiempoElaboracion: 20,
    tiempoCoccion: 35,
    cantidadRaciones: 4,
    complejidad: "Dificil",
    ingredientes: [
      "300g de arroz arborio",
      "200g de setas variadas",
      "1 litro de caldo de verduras",
      "1 cebolla mediana",
      "2 dientes de ajo",
      "150ml de vino blanco",
      "50g de queso parmesano rallado",
      "2 cucharadas de mantequilla",
      "Aceite de oliva",
      "Sal y pimienta al gusto",
      "Perejil fresco para decorar",
    ],
    elaboracion: [
      "Calentar el caldo de verduras y mantenerlo a fuego lento.",
      "Picar finamente la cebolla y el ajo, y saltearlos en aceite de oliva hasta que estén dorados.",
      "Añadir las setas limpias y cortadas, cocinando hasta que liberen su jugo.",
      "Agregar el arroz arborio y tostar ligeramente, removiendo constantemente.",
      "Verter el vino blanco y cocinar hasta que se evapore el alcohol.",
      "Añadir el caldo caliente, una taza a la vez, esperando a que el arroz lo absorba antes de añadir más. Remover constantemente.",
      "Continuar este proceso hasta que el arroz esté cremoso y al dente, aproximadamente 18-20 minutos.",
      "Incorporar la mantequilla y el queso parmesano rallado, mezclando bien.",
      "Ajustar la sal y pimienta al gusto.",
      "Servir caliente, decorado con perejil fresco picado.",
    ],
    alerta: [
      "No sobrecocer el arroz para mantener la textura al dente.",
      "Asegurarse de que las setas estén bien limpias para evitar tierra.",
    ],
    trucoChef:
      "Usa una variedad de setas para un sabor más complejo y profundo.",
    urlImage: "/assets/risottoSetas.jpg",
    infoNutricional: {
      totalCalorias: 500, // por ración
      grasas: {
        gramos: 20,
        calorias: 180,
        porcentaje: 20,
      },
      proteinas: {
        gramos: 15,
        calorias: 60,
        porcentaje: 15,
      },
      hidratosDeCarbono: {
        gramos: 60,
        calorias: 240,
        porcentaje: 65,
      },
      azucares: 5,
      grasasSaturadas: 8,
      grasasMonoinsaturadas: 5,
      grasasPoliinsaturadas: 2,
      fibra: 4,
      sal: 2.5,
    },
    fechaElaboracion: "18 de Septiembre de 2024",
    alergenos: ["Lácteos (mantequilla y parmesano)"],
    labels: ["Vegetariano"],
    destacados: "no",
  },

  curryDeLentejas: {
    nombrePlato: "Curry de Lentejas",
    tiempoElaboracion: 15,
    tiempoCoccion: 30,
    cantidadRaciones: 6,
    complejidad: "Intermedia",
    ingredientes: [
      "300g de lentejas rojas",
      "1 cebolla grande",
      "2 dientes de ajo",
      "1 trozo de jengibre fresco (2 cm)",
      "400g de tomates triturados",
      "400ml de leche de coco",
      "2 cucharadas de curry en polvo",
      "1 cucharadita de cúrcuma",
      "1 cucharadita de comino",
      "Aceite de coco",
      "Sal y pimienta al gusto",
      "Cilantro fresco para decorar",
    ],
    elaboracion: [
      "Enjuagar bien las lentejas bajo agua fría y reservar.",
      "Picar finamente la cebolla, el ajo y el jengibre.",
      "Calentar el aceite de coco en una olla grande y sofreír la cebolla hasta que esté transparente.",
      "Agregar el ajo y el jengibre, cocinando por 2 minutos más.",
      "Incorporar las especias: curry en polvo, cúrcuma y comino. Remover bien para liberar los aromas.",
      "Añadir los tomates triturados y cocinar durante 5 minutos.",
      "Agregar las lentejas y la leche de coco, mezclando todo bien.",
      "Llevar a ebullición, luego reducir el fuego y dejar cocinar a fuego lento durante 25-30 minutos, o hasta que las lentejas estén tiernas.",
      "Sazonar con sal y pimienta al gusto.",
      "Servir caliente, decorado con cilantro fresco picado.",
    ],
    alerta: [
      "Asegurarse de que las lentejas estén bien cocidas para evitar indigestiones.",
      "Verificar la tolerancia a los frutos secos si se usa aceite de coco procesado con frutos secos.",
    ],
    trucoChef: "Añade un chorrito de limón al servir para realzar los sabores.",
    urlImage: "/assets/curryLentejas.jpg",
    infoNutricional: {
      totalCalorias: 450, // por ración
      grasas: {
        gramos: 18,
        calorias: 162,
        porcentaje: 18,
      },
      proteinas: {
        gramos: 20,
        calorias: 80,
        porcentaje: 20,
      },
      hidratosDeCarbono: {
        gramos: 55,
        calorias: 220,
        porcentaje: 62,
      },
      azucares: 6,
      grasasSaturadas: 12,
      grasasMonoinsaturadas: 3,
      grasasPoliinsaturadas: 3,
      fibra: 10,
      sal: 2,
    },
    fechaElaboracion: "19 de Septiembre de 2024",
    alergenos: ["Ninguno"],
    labels: ["Vegano", "Sin Gluten"],
    destacados: "no",
  },

  quicheDeEspinacas: {
    nombrePlato: "Quiche de Espinacas",
    tiempoElaboracion: 30,
    tiempoCoccion: 40,
    cantidadRaciones: 6,
    complejidad: "Dificil",
    ingredientes: [
      "1 masa quebrada",
      "300g de espinacas frescas",
      "200g de queso ricotta",
      "3 huevos",
      "200ml de crema de leche",
      "1 cebolla mediana",
      "2 dientes de ajo",
      "50g de queso parmesano rallado",
      "Aceite de oliva",
      "Sal y pimienta al gusto",
      "Nuez moscada (opcional)",
    ],
    elaboracion: [
      "Precalentar el horno a 180°C (350°F).",
      "Extender la masa quebrada en un molde para quiche y pinchar el fondo con un tenedor.",
      "Hornear la masa durante 10 minutos para que se precocine ligeramente.",
      "Mientras tanto, lavar y picar las espinacas.",
      "Picar finamente la cebolla y el ajo, y saltearlos en aceite de oliva hasta que estén dorados.",
      "Agregar las espinacas al sartén y cocinar hasta que se reduzcan y suelten su agua.",
      "En un bol grande, batir los huevos con la crema de leche. Añadir el queso ricotta y el parmesano, mezclando bien.",
      "Incorporar la mezcla de espinacas, cebolla y ajo al bol. Sazonar con sal, pimienta y una pizca de nuez moscada si se desea.",
      "Verter la mezcla sobre la masa precocida.",
      "Hornear durante 30-35 minutos, o hasta que el quiche esté dorado y firme al tacto.",
      "Dejar enfriar unos minutos antes de servir.",
    ],
    alerta: [
      "Asegurarse de que las espinacas estén bien escurridas para evitar un quiche aguado.",
      "Verificar la consistencia de la mezcla para que no quede demasiado líquida.",
    ],
    trucoChef:
      "Añade trozos de tocino crujiente para un sabor extra y una textura contrastante.",
    urlImage: "/assets/quicheEspinacas.jpg",
    infoNutricional: {
      totalCalorias: 500, // por ración
      grasas: {
        gramos: 30,
        calorias: 270,
        porcentaje: 30,
      },
      proteinas: {
        gramos: 20,
        calorias: 80,
        porcentaje: 20,
      },
      hidratosDeCarbono: {
        gramos: 35,
        calorias: 140,
        porcentaje: 50,
      },
      azucares: 4,
      grasasSaturadas: 15,
      grasasMonoinsaturadas: 10,
      grasasPoliinsaturadas: 5,
      fibra: 3,
      sal: 2.5,
    },
    fechaElaboracion: "21 de Septiembre de 2024",
    alergenos: ["Gluten", "Lácteos (ricotta, crema y parmesano)"],
    labels: ["Vegetariano"],
    destacados: "no",
  },

  sushiVegetariano: {
    nombrePlato: "Sushi Vegetariano",
    tiempoElaboracion: 40,
    tiempoCoccion: 20,
    cantidadRaciones: 4,
    complejidad: "Dificil",
    ingredientes: [
      "2 tazas de arroz para sushi",
      "3 tazas de agua",
      "1/4 taza de vinagre de arroz",
      "2 cucharadas de azúcar",
      "1 cucharadita de sal",
      "Nori (láminas de alga)",
      "1 aguacate",
      "1 pepino",
      "1 zanahoria",
      "1 pimiento rojo",
      "Hojas de lechuga",
      "Salsa de soja para acompañar",
      "Wasabi y jengibre encurtido (opcional)",
    ],
    elaboracion: [
      "Lavar el arroz para sushi bajo agua fría hasta que el agua salga clara. Escurrir bien.",
      "Cocinar el arroz con las 3 tazas de agua en una olla a fuego medio. Cuando empiece a hervir, reducir el fuego al mínimo, tapar y cocinar por 15 minutos.",
      "Retirar del fuego y dejar reposar, aún tapado, por otros 10 minutos.",
      "Mientras el arroz se cocina, mezclar el vinagre de arroz, el azúcar y la sal en un recipiente pequeño hasta que se disuelvan.",
      "Transferir el arroz a un recipiente amplio y esparcir la mezcla de vinagre sobre él. Remover con una espátula mientras se abanica para enfriar el arroz.",
      "Cortar el aguacate, pepino, zanahoria y pimiento en tiras finas.",
      "Colocar una lámina de nori sobre una esterilla de bambú para sushi. Extender una capa delgada de arroz sobre el nori, dejando un borde libre en la parte superior.",
      "Colocar tiras de aguacate, pepino, zanahoria, pimiento y hojas de lechuga en el centro del arroz.",
      "Enrollar el sushi firmemente utilizando la esterilla, humedeciendo el borde libre del nori para sellar.",
      "Cortar el rollo en piezas de aproximadamente 2 cm de grosor.",
      "Servir con salsa de soja, wasabi y jengibre encurtido al gusto.",
    ],
    alerta: [
      "Asegurarse de lavar bien el arroz para evitar que quede demasiado almidonado.",
      "Cortar los ingredientes en tiras uniformes para facilitar el enrollado.",
    ],
    trucoChef:
      "Utiliza una esterilla de bambú y presión firme para lograr un rollo compacto y bien sellado.",
    urlImage: "/assets/sushiVegetariano.jpg",
    infoNutricional: {
      totalCalorias: 300, // por ración (2 rollos)
      grasas: {
        gramos: 10,
        calorias: 90,
        porcentaje: 10,
      },
      proteinas: {
        gramos: 8,
        calorias: 32,
        porcentaje: 8,
      },
      hidratosDeCarbono: {
        gramos: 45,
        calorias: 180,
        porcentaje: 82,
      },
      azucares: 5,
      grasasSaturadas: 2,
      grasasMonoinsaturadas: 6,
      grasasPoliinsaturadas: 2,
      fibra: 4,
      sal: 1.8,
    },
    fechaElaboracion: "22 de Septiembre de 2024",
    alergenos: ["Gluten (salsa de soja)"],
    labels: ["Vegetariano", "Sin Carne"],
    destacados: "no",
  },
};
