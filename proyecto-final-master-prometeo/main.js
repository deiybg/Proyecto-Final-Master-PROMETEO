import './style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { linkPage } from './Utils/LinkPage';
import { NutritionalInfo } from './pages/NutriotionalInfo/NutritionalInfo';


const init = ()=>{
Header();
Footer();
linkPage("#nutritional-info",NutritionalInfo)
};



init();


