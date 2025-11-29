// src/components/Header.js
import "../styles/Header.css";

function Header() {
  return (
    <header className="header-wrapper">

      {/* TOP ROW */}
      <div className="header-toprow">
        <nav className="header-left">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>

        <div className="header-center">
          <h1 className="header-title">Artful Bytes</h1>
        </div>

        <div className="header-right">
          <a href="#">IG</a>
          <a href="#">Pin</a>
          <a href="#">FB</a>
        </div>
      </div>

      {/* SUBHEADING */}
      <p className="header-subheading">GREEN TEA & CODE</p>

      {/* TAGLINE */}
      <p className="header-tagline">
        Brewing creativity. One line at a time. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  
      </p>

      {/* DIVIDER */}
      <div className="header-divider"></div>

      {/* CATEGORIES */}
      <nav className="header-categories">
        <a href="#" className="cat-item">Life</a>
        <a href="#" className="cat-item">Tech</a>
        <a href="#" className="cat-item">Books</a>
        <a href="#" className="cat-item">Kitchen</a>
      </nav>

    </header>
  );
}

export default Header;
