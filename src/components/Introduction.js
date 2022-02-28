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
            <p className='Introduction_text_link'>Resume</p>
            <p className='Introduction_text_link'>LinkedIn</p>
            <p className='Introduction_text_link'>Github</p>
          </div>
          <p className='Introduction_text'>
            Lobsters have long bodies with muscular tails, and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others. Highly prized as seafood, lobsters are economically important, and are often one of the most profitable commodities in coastal areas they populate.
          </p>
          <p className='Introduction_text'>
           Scroll Down for some more information.
          </p>
        </div>
         
      </div>
  );
}

export default Introduction;