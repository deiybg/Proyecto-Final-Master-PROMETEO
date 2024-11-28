import { NutritionalInfo } from "/pages/NutriotionalInfo/NutritionalInfo";
import { Recipes } from "/pages/Recipes/Recipes";
import { Contactame } from "/pages/ContacMe/ContacMe";
import { NotFound } from "/pages/NotFound/NotFound";

const routers = [
  {
    path: "/",
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

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);

export const navListeners = () => {
  const navLinks = document.querySelectorAll("nav a");

  for (const link of navLinks) {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      const path = ev.target.pathname;
      history.pushState(null, null, path);
      router();
    });
  }
};
