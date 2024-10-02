import "./Footer.css";

const template = () => {
  return `
<p>&copy; 2024 Heallthy. All Rights Reserved.</p>

`;
};

const Footer = () => {
  const footer = document.createElement("footer");
  footer.id = "Footer-Heallthy";
  footer.innerHTML = template();
  document.body.appendChild(footer);
};

export default Footer;
