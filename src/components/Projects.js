import '../styles/Projects.css';
import Project from './Project';


function Introduction() {
   return (
      <div className="Projects">
          <div className="Projects_colorBar" style={{backgroundColor: 'red'}}/>
          <div className="Projects_colorBar" style={{backgroundColor: 'blue'}}/>
          <div className="Projects_projectsBar">
            <Project link={'google.com'} picURL={'https://picsum.photos/200'} title={'Timeline Generator'} context={'derp'}/>
            <Project link={'google.com'} picURL={'https://picsum.photos/200'} title={'Checkers'} context={'derp'}/>
            <Project link={'google.com'} picURL={'https://picsum.photos/200'} title={'Color Splash'} context={'derp'}/>
          </div>
          <div className="Projects_colorBar" style={{backgroundColor: 'yellow'}}/>
          <div className="Projects_colorBar" style={{backgroundColor: 'green'}}/>         
      </div>
  );
}

export default Introduction;