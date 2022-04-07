import Project from './project.js';

import './css/projects.css';



function Projects(){


  return(
    <div id='projects' className='projectsContainer'>
        <h3 className='projects-title'>My Projects</h3>
        <span className='projects-subtitle'>
          These are some of the best projects I have. (There is only one finished at the moment.)   
        </span>
        <div className='projects-window'>
        
          <Project 
            title={'Baches Collector'}
            desc={'I live in Paraguay and the city where I live, like many others in Latin America, is full of potholes. I put together an application, web and mobile, that allows you to record individual data for each pothole you want to record. (In the buttons below you can see some videos of this project. Audio in Spanish. Sorry)'}
            video_urls = {[
            'https://www.youtube.com/watch?v=WHsziHansd0',
            'https://www.youtube.com/watch?v=T4O19HY3UTg',
            'https://www.youtube.com/watch?v=91KQklKO4hs'
            ]}
          />

        </div>
    </div>

  )

}

export default Projects;
