import './Header.css';
function HeaderSection(){
   const signUp = "Sign up";
   const signIn = 'Sign in';


//    nav list
   const navList={navitems:['Products','Events','Gallary']};
    return(<>
          <div className="header_section">
          <section className="logo_section">
             <h1>JEWiiSH APPAREL</h1>
                    <section className="mini_nav">
            <p className="logo_item">{signUp}</p>
            <p className="logo_item">{signIn}</p>
                      </section>
             </section>
             <nav className="nav_bar">
                   <p className="nav_item"><a href="#">{navList.navitems[0].toUpperCase()}</a></p>
                   <p className="nav_item"><a href="#">{navList.navitems[1].toUpperCase()}</a></p>
                   <p className="nav_item"><a href="#">{navList.navitems[2].toUpperCase()}</a></p>
                   </nav>
          </div>
    </>);
}

export default HeaderSection;