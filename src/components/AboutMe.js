import '../styles/AboutMe.css'
import Me from '../images/me.jpg';

function AboutMe() {
  return (
    <div className="AboutMe">
      <img src={Me} alt="This is me" className="AboutMe_image"/>
      <p className="AboutMe_title">About Me</p>
      <div className="AboutMe_text_paper">
        <p className="AboutMe_text_paper_life">Professional Life</p>
        <p className="AboutMe_text_paper_desc">I'm a Full-Stack Software Engineer with a passion for technolgy. I graduated from Brigham Young University-Idaho with my Bachelors degree in Computer Information Technology and I completed the DevMountain web developemtn boot-camp. These experiences gave me a solid foundation in software development principles and gave me experience building real life applications. After I graduated, I accepted a role as a Full-Stack Software Engineer at Solo here in Lehi, Utah. </p>
      </div>
      <div className="AboutMe_text_paper">
        <p className="AboutMe_text_paper_life">Home Life</p>
        <p className="AboutMe_text_paper_desc">I'm originally from Long Island, New York where I grew up playing hacky sack and skateboarding around NYC. I've since moved to Utah and love it. The mountains are amazing and I've been getting into snowboarding. In my spare time, I like to keep on top of technologies that I haven't had the opportunity to use yet. I believe it's important to stay updated on the tech world and see how I can implement what I learned for my next project.</p>
      </div>
    </div>
  );
}

export default AboutMe;