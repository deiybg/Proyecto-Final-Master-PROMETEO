import './Header.css'


const template = ()=>{
    return`
 <div id="container-home">
 <img class="img-logo" src="./public/assets/Heallthy-Logo.jpg" alt="Logo Principal">
 <p class="title-home">Heallthy</p>
 </div>
 <nav class="nav">
 <ul class="nav-ul">
 <li>
 <a href="#" id="homelink">Inicio</a>
 </li>
 <li>
 <a href="#" id="recipes">Recetas</a>
 <li>
 <a href="#" id="nutritional-info">Información Nutricional</a>
 </li>
 <li>
 <a href="#" id="adviceAndTips">Tips</a>
 </li>
 <li>
 <a href="#" id="contactMe">Contactame</a>
 </li>
 </ul>
 </nav>
 `
};

const Header = ()=>{
    const header = document.createElement("header");
    header.innerHTML = template();
   document.body.appendChild(header)
}


export default Header;