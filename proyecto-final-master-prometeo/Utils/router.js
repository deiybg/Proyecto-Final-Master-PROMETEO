import { NutritionalInfo } from "/pages/NutriotionalInfo/NutritionalInfo";
import { Recipes } from "/pages/Recipes/Recipes";
import { Contactame } from "/pages/ContacMe/ContacMe";
import { NotFound } from "/pages/NotFound/NotFound";

const routers = [
  {
    path: "/Recetas",
    page: Recipes,
  },
  {
    path: "/Informacion_Nutricional",
    page: NutritionalInfo,
  },
  {
    path: "/Contactame",
    page: Contactame,
  },
];

export const router = () => {
  const path = window.location.pathname;
  const { page } = routers.find((router) => router.path === path) || {};
  if (page) {
    page();
  } else {
    NotFound();
  }
};
