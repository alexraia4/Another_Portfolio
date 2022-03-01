import { useState } from 'react';
import '../styles/Projects.css';
import Project from './Project';


function Introduction() {

  const [background, setbackground] = useState('rgb(59, 59, 59)');

  const projectResources = [
    {
      link: "http://134.209.72.40:3001/",
      picURL: "https://picsum.photos/200",
      title: "Timeline Generator",
      context: "I created an app that lets users store historical data into timelines. Users pick a length of time and it automatically generates the years into a timeline format. Users then add events to each year to track anything from important dates in history to a log of one's personel life moments. Have fun creating multiple timelines!",
    },
    {
      link: "http://134.209.72.40:3002/",
      picURL: "https://picsum.photos/200",
      title: "Checkers",
      context: "For this application, I worked with a team of 4 using github teams and trello to build a fully functional in-browser checkers game. Using this site, a single checkers game can be played by two users on separate computers. We acomplished this using socketIO which allows users to interact with each other in 'rooms' built automatically on the backend of the aplication.",
    },
    {
      link: "http://134.209.72.40:3105/",
      picURL: "https://picsum.photos/200",
      title: "Color Splash",
      context: "This is a simple React Application I made in order to randomly color your screen based on mouse movement. I was inspired by early days painting software and wanted to make something graphical myself.",
    }
  ]

   return (
      <div className="Projects" style={{backgroundColor: `${background}`}}>
          <div className="Projects_colorBar" style={{backgroundColor: 'red'}} onClick={() => {setbackground('red')}}/>
          <div className="Projects_colorBar" style={{backgroundColor: 'blue'}} onClick={() => {setbackground('blue')}}/>
          <div className="Projects_projectsBar">
            {projectResources.map(project => <Project link={project.link} picURL={project.picURL} title={project.title} context={project.context}/>)}
            <div className="Projects_colorBar_original" style={{backgroundColor: 'rgb(59, 59, 59)'}} onClick={() => {setbackground('rgb(59, 59, 59)')}}/>
          </div>
          <div className="Projects_colorBar" style={{backgroundColor: 'yellow'}} onClick={() => {setbackground('yellow')}}/>
          <div className="Projects_colorBar" style={{backgroundColor: 'green'}} onClick={() => {setbackground('green')}}/>         
      </div>
  );
}

export default Introduction;