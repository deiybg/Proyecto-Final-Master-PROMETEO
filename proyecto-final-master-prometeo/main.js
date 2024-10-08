import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { linkPage } from "./Utils/LinkPage";
import { NutritionalInfo } from "./pages/NutriotionalInfo/NutritionalInfo";
import { Recipes } from "./pages/Recipes/Recipes";

const init = () => {
  Header();
  Recipes();
  linkPage("#nutritional-info", NutritionalInfo);
  linkPage("#recipes", Recipes);
  Footer();
};

init();
