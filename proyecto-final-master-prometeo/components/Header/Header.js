import './Header.css'


const template = ()=>{
    return`
 <div id="container-home">
 <img class="img-logo" src="./public/assets/Heallthy-Logo.jpg" alt="Logo Principal">
 <p class="title-home">Heallthy</p>
 </div>
 <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
 <nav id="nav" class="nav">
 <button id="cerrar" class="cerrar-menu"><i class="bi bi-x-lg"></i></button>
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
   document.body.appendChild(header);



   const abrir = header.querySelector("#abrir");
   const cerrar = header.querySelector("#cerrar");
   const nav = header.querySelector("#nav");

   abrir.addEventListener("click", () => {
       nav.classList.add("visible");
   });

   cerrar.addEventListener("click", () => {
       nav.classList.remove("visible");
   });
}









export default Header;