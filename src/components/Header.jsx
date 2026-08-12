// ============================================================
// RJD INKS & PRINTS
// HEADER.JSX
// ============================================================

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* LOGO */}
        <a href="#home" className="brand">
          <div className="brand-mark">
            RJD
          </div>

          <div className="brand-text">
            <strong>RJD Inks & Prints</strong>
            <span>Printing • Crafts • Personalized Products</span>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav className="main-nav">

          <a href="#home">
            Home
          </a>

          <a href="#categories">
            Categories
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#order">
            New Order
          </a>

          <a href="#orders">
            Orders
          </a>

          <a href="#about">
            About
          </a>

        </nav>

        {/* HEADER BUTTON */}
        <a
          href="#order"
          className="header-order-button"
        >
          New Order
        </a>

      </div>
    </header>
  );
}

export default Header;