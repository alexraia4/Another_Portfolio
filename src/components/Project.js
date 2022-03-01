import '../styles/Project.css'

function Project({link, picURL, title, context}) {
      return (
            <div className = "Project">
                  <a href={`${link}`} className = "Project_link" style={{backgroundImage: `url(${picURL})`}}/>
                  <div className = "Project_content">
                        <p className = "Project_title">{title}</p>
                        <p className = "Project_context">{context}</p>
                  </div>
            </div>
      );
}

export default Project;