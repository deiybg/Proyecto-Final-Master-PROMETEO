import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { router } from "./Utils/router";

const init = () => {
  Header();
  Footer();
};

init();
router();
