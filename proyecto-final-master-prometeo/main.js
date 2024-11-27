import "./style.css";
import Header from "./components/Header/Header";
import { Recipes } from "/pages/Recipes/Recipes";

import Footer from "./components/Footer/Footer";
import { router } from "./Utils/router";

const init = () => {
  Header();
  Recipes();
  Footer();
};

init();
router();
