import './Header.css';

function HeaderSection() {
  const signUp = 'Sign up';
  const signIn = 'Sign in';

  const navList = { navitems: ['Products', 'Events', 'Gallary'] };

  return (
    <div className="header_section">
      <section className="logo_section">
        <div className="brand_wrap">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Jewiish Apparel logo"
            className="brand_logo"
          />
          <h1 className="h1_header">JEWIISH APPAREL</h1>
        </div>

        <section className="mini_nav">
          <p className="logo_item">{signUp}</p>
          <p className="logo_item">{signIn}</p>
        </section>
      </section>

      <nav className="nav_bar" aria-label="Main navigation">
        <p className="nav_item"><a href="#">{navList.navitems[0].toUpperCase()}</a></p>
        <p className="nav_item"><a href="#">{navList.navitems[1].toUpperCase()}</a></p>
        <p className="nav_item"><a href="#">{navList.navitems[2].toUpperCase()}</a></p>
      </nav>
    </div>
  );
}

export default HeaderSection;