import heroVideo from "/public/hero_vid.mp4";
import './Hero.css';
import img1 from '../assets/heroImages/slide1.jpg';
import img2 from '../assets/heroImages/slide2.jpg';
import img3 from '../assets/heroImages/slide3.jpg';
import img4 from '../assets/heroImages/slide4.jpg';
import img5 from '../assets/heroImages/slide5.jpg';
import img6 from '../assets/heroImages/slide6.jpg';
import img7 from '../assets/heroImages/slide7.jpg';
import img8 from '../assets/heroImages/slide8.jpg';
import img9 from '../assets/heroImages/slide9.jpg';
import img10 from '../assets/heroImages/slide10.jpg';
import img11 from '../assets/heroImages/slide11.jpg';
import img12 from '../assets/heroImages/slide12.jpg';
import img13 from '../assets/heroImages/slide13.jpg';
import img14 from '../assets/heroImages/slide14.jpg';
import img15 from '../assets/heroImages/slide15.jpg';
import founders from '../assets/heroImages/founders.jpg';



function HeroSection() {
  return (<>
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-copy">
        <p>"INSPIRED BY THE FEAR OF BEING AVERAGE"</p>
        <div className="hero-gallery">
          <section className="slider_section">
            <div className="slider-track">
              <img src={img1}/>
              <img src={img2}/>
              <img src={img3}/>
              <img src={img4}/>
              <img src={img5}/>
              <img src={img6}/>
              <img src={img7}/>
              <img src={img8}/>
              <img src={img9}/>
              <img src={img10}/>
              <img src={img11}/>
              <img src={img12}/>
              <img src={img13}/>
              <img src={img14}/>
              <img src={img15}/>
            </div>
          </section>
          <img className="founders-image" src={founders} alt="The founders" />
        </div>
      </div>
    </section>
    </>
  );
}

export default HeroSection;