import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p> © {new Date().getFullYear()} Все права защищены </p>
      {/* <h3>Разработал</h3> */}
    </footer>
  );
};

export default Footer;
