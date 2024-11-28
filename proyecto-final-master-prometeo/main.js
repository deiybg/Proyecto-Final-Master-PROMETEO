import "./style.css";
import Header from "./components/Header/Header";
import { Recipes } from "/pages/Recipes/Recipes";

import Footer from "./components/Footer/Footer";
import { router, navListeners } from "./Utils/router";

const init = () => {
  Header();
  Recipes();
  Footer();
};

init();
router();
navListeners();
