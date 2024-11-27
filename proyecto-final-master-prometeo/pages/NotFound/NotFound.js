import "./NotFound.css";
import { cleanPage } from "../../Utils/CleanPage";

export const NotFound = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `Not found`;
};
