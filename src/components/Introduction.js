import '../styles/Introduction.css';
import Me from '../images/me.jpg'

function Introduction() {
   return (
      <div className="Introduction">
        <div className='Introduction_me_card'>
          <p className='Introduction_me_card_title'>
            Alexander Raia
          </p>
          <img src={Me} width="300" height="300" className='Introduction_me_card_image'/>
          <p>Web Developer</p>
          <p>&</p>
          <p>Software Engineer</p>
        </div>
        <div className='Introduction_container'>
          <div className='Introduction_links_container'>
            <a href="https://docs.google.com/document/d/1o2CK0zm48t1kXBYujEKx1a52jLxJ2-0F2iRdn_M3xkY/edit?usp=sharing" className="Introduction_text_link">Resumé</a>
            <a href="https://www.linkedin.com/in/alexander-raia/" className="Introduction_text_link">LinkedIn</a>
            <a href="https://github.com/alexraia4" className="Introduction_text_link">GitHub</a>
            
          </div>
          <p className='Introduction_text'>
            Im a Full-Stack Software Engineer with experience working on all parts of a production application. I just left my last position and am looking for my next adventure. 
          </p>
          <p className='Introduction_text'>
           Scroll Down for some more information.
          </p>
        </div>
         
      </div>
  );
}

export default Introduction;