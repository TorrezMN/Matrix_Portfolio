import './css/contact.css';



import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch_contact from '../comp/sketch_contact.js';



 


function Contact(){


    return(
      <div className='contact-container'>
          <h1>CONTACT</h1>
          <p className='contact-subtitle'>
            Well... 
            If you want to talk... 
            or need help saving the world...
            You can find me here:
          </p>
          <div className='contact-buttons'>
            <a href='https://github.com/TorrezMN' className='contact-link'>
              <img src='https://github.githubassets.com/images/modules/logos_page/Octocat.png' width='50' height='50'></img>
            </a>

            <a href = 'https://dev.to/torrezmn' className='contact-link'>
              <img src="https://prepr.org/wp-content/uploads/2013/06/DevTO_logo.png"  width="100" height="50" ></img>
            </a>
            <a href = 'https://www.youtube.com/channel/UCuNWWspn9X2zdLWHvriduOA' className='contact-link'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"  width="100" height="50"></img>
            </a>
            <a href = 'https://twitter.com/mntorrez' className='contact-link'>
              <img src="https://socialgeek.co/wp-content/uploads/2017/11/logo-twitter.png"  width="100" height="50"></img>
            </a>


          </div>
          <p className='contact-guide'>
            Remember The Matrix has you. 
            Follow the white rabbit. He can be trusted.
          </p>

      
        <ReactP5Wrapper sketch={sketch_contact}/> 
      </div>

    )



}

export default Contact;
