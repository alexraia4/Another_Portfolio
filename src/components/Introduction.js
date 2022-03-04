import '../styles/Introduction.css';
import Me from '../images/me.jpg';
import LinkedInLogo from '../images/linkedIn.png';
import gitHubLogo from '../images/gitHub.png'
import envelope from '../images/envelope.png'

function Introduction() {
  return (
    <div className="Introduction">
      <img src={Me} alt="This is me" className="Introduction_image"/>
      <div className="Introduction_bar">
        <div className="Introduction_bar_text">
          <h1 className='Introduction_bar_text_name'>Alexander Raia</h1>
          <div className='Introduction_bar_text_title'>
            <h2 >Web Developer</h2>
            <h2 className='Introduction_bar_text_title_amp'>&amp;</h2>
            <h2>Software Engineer</h2> 
          </div>
          <a href="https://docs.google.com/document/d/1o2CK0zm48t1kXBYujEKx1a52jLxJ2-0F2iRdn_M3xkY/edit?usp=sharing" className="Introduction_bar_text_resume">Resumé</a>
        </div>
        <div className='Introduction_bar_logos'>
          <a href="https://www.linkedin.com/in/alexander-raia/"><img src={LinkedInLogo} alt="LinkedIn" className='Introduction_bar_logos_logo' /></a>
          <a href="https://github.com/alexraia4" ><img src={gitHubLogo} alt="GitHub" className='Introduction_bar_logos_logo' /></a>
          <a href="https://gmail.com" ><img src={envelope} alt="Email" className='Introduction_bar_logos_logo' /></a>
        </div>
      </div>
    </div>
  );
}

export default Introduction;