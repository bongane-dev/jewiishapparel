'use strict';
//import of components and deps needed

import HeaderSection from "./components/Header";
import HeroSection from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Events from "./components/Events";

export default function App(){
  return (<>
    <header><HeaderSection/></header>
    <main><HeroSection/>
    <ProductSection/>
    <Events/>
    </main>
    </>
  )

}