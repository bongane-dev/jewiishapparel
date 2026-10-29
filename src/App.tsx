'use strict';
//import of components and deps needed

import HeaderSection from "./components/Header";
import HeroSection from "./components/Hero";
export default function App(){
  return (<>
    <header><HeaderSection/></header>
    <main><HeroSection/></main>
    </>
  )

}