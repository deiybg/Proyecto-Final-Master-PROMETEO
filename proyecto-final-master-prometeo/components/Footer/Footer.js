import './Footer.css';



const template = ()=>{
return `
<p>2024 Heallthy. All rights Reserved</p>

`
};

const Footer = () =>{
const footer = document.createElement("footer");
footerElement.id = "#Footer-Heallthy"
footer.innerHTML = template();
document.body.appendChild(footer);
};


export default Footer;