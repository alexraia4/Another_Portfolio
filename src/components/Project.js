import '../styles/Project.css'

function Project(props) {


      return (
            <div className = "Project">
                  <a href={`${props.link}`} className = "Project_link" style={{backgroundImage: `url(${props.picURL})`}}/>
                  <div className = "Project_content">
                        <p className = "Project_title">{props.title}</p>
                        <p className = "Project_context">{props.context}</p>
                  </div>
            </div>
      );
}

export default Project;