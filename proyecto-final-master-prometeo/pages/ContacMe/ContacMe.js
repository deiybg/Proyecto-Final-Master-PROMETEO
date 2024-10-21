import "./ContacMe.css";
import { cleanPage } from "../../Utils/CleanPage";

export const Contactame = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
<section class="containerInfoContacMe">
<h1 class="titleContacMe">Contacto</h1>
<h2 class="titleContactUs">Contacta con nosotros:</h2>
<div class="infocontact">
<p>Rellena tus datos personales e indicanos tu comentario, reclamación o pregunta y te contestaremos con la máxima brevedad posible.</p>
<p class="pImportant">Recuerda revisar tu bandeja de spam o correo no deseado.</p>
</div>
</section>

<section class="containerButtonOption">
<ul class="ulcontentOptionContact">
<li id="elogio" class="liContentOptionContact"><span><i class="bi bi-lightbulb"></i></span><p class="textLi">ELOGIO</p></li>
<li id="reclamacion" class="liContentOptionContact"><span><i class="bi bi-chat-square-text"></i></span><p class="textLi">tengo una RECLAMACIÓN</p></li>
<li id="sugerencia" class="liContentOptionContact"><span><i class="bi bi-question-lg"></i></span><p class="textLi">Tengo una PREGUNTA/SUGERENCIA</p></li>
</ul>
<div id="containerResultOption"></div>
</section>

<section class="containerTlf">
<div class="containterInfoTlf">
<h3>Teléfono de Heallthy de atención al consumidor:</h3>
<span>900 11 21 31</span>
<h4>de lunes a viernes de 9h a 20h.</h4>
</div>
</section>

  
    `;
  //Aca realizao una pequeña nimacion a los li, para que cuando se hago mouseover, oculta el texto  y scale la img un poco
  const listItems = document.querySelectorAll(".liContentOptionContact");
  listItems.forEach((li) => {
    li.addEventListener("mouseover", () => {
      const text = li.querySelector(".textLi");
      text.classList.add("hide-text");
    });
    li.addEventListener("mouseout", () => {
      const text = li.querySelector(".textLi");
      text.classList.remove("hide-text");
    });
  });

  //Funciones que me muestran el cointenido de cada li, que es un formulario especifico de cada uno
  showFormElogio();
  showFormReclamacion();
  showFormSugerencia();
};

//Funcion que me abre un formulario cuando selecciono la opcion elogios

const showFormElogio = () => {
  document.querySelector("#elogio").addEventListener("click", () => {
    const div = document.querySelector("#containerResultOption");
    cleanPage(div);
    div.innerHTML = `
    <form action="#" method="POST" class="formElogio">
    

        <label class="titleLabel" for="tipo-consulta">Elogio:</label>
        <select id="tipo-consulta" name="tipo-consulta" required>
        <option disabled selected>Escoge un tipo de elogio</option>
            <option value="contenido">Contenido</option>
            <option value="recetas">Recetas</option>
            <option value="info-nutricional">Información Nutricional</option>
        </select>

       
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required />

        
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required pattern="[0-9]{9}" placeholder="ej:674123456" />

        
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4"></textarea>

        
        <button type="submit">Enviar</button>
        <button type="reset">Resetear</button>


    </form>
    `;
  });
};

//Funcion que me abre un formulario cuando selecciono la opcion reclamacion
const showFormReclamacion = () => {
  document.querySelector("#reclamacion").addEventListener("click", () => {
    const div = document.querySelector("#containerResultOption");
    cleanPage(div);
    div.innerHTML = `
      <form action="#" method="POST" class="formElogio">
      
  
          <label class="titleLabel" for="tipo-consulta">Reclamación:</label>
          <select id="tipo-consulta" name="tipo-consulta" required>
            <option disabled selected>Escoge un tipo de consulta</option>
              <option value="ingrediente">No se encuentra mi ingrediente</option>
              <option value="videos">No se encuentran videos</option>
              <option value="info-nutricional">La información nutricional no corresponde</option>
              <option value="info-nutricional">No puedo acceder a mi cuenta</option>
          </select>
  
         
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
  
          
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />
  
          
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
  
          
          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" required pattern="[0-9]{9}" placeholder="ej:674123456" />
  
          
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="4"></textarea>
  
          
          <button type="submit">Enviar</button>
          <button type="reset">Resetear</button>
  
  
      </form>
      `;
  });
};

const showFormSugerencia = () => {
  document.querySelector("#sugerencia").addEventListener("click", () => {
    const div = document.querySelector("#containerResultOption");
    cleanPage(div);
    div.innerHTML = `
        <form action="#" method="POST" class="formElogio">
        
    
            <label class="titleLabel" for="tipo-consulta">Pregunta/Sugerencia:</label>
            <select id="tipo-consulta" name="tipo-consulta" required>
              <option disabled selected>Escoge un tipo de consulta</option>
                <option value="ingrediente">Recetas</option>
                <option value="videos">Videos</option>
                <option value="info-nutricional">Información Nutricional/option>
                <option value="info-nutricional">Otras Sugerencias</option>
            </select>
    
           
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
    
            
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />
    
            
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
    
            
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required pattern="[0-9]{9}" placeholder="ej:674123456" />
    
            
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4"></textarea>
    
            
            <button type="submit">Enviar</button>
            <button type="reset">Resetear</button>
    
    
        </form>
        `;
  });
};
