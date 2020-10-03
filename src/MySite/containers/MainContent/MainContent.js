import React, {useRef} from 'react';
import Styles from './MainContent.module.css';
import AboutMe from './AboutMe/AboutMe';
import Employment from './Employment/Employment';
import Education from './Education/Education';
import Interests from './Interests/Interests';

const MainContent = (props) => {
  
  const scrollSettings = {behavior: "smooth", block: "nearest", inline: "start"}

  const aboutMeRef = useRef(null);
  const employmentRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const interestsRef = useRef(null);

  switch(props.currentSection){
    case "aboutMe":
      aboutMeRef.current.scrollTo({top: 0, behavior: "smooth"})
      break;
    
    case "employment":
      aboutMeRef.current.scrollTo({top: (employmentRef.current.offsetTop - aboutMeRef.current.offsetTop), behavior: "smooth", block: "nearest"})
      break;

    case "education":
      aboutMeRef.current.scrollTo({top: (educationRef.current.offsetTop - aboutMeRef.current.offsetTop), behavior: "smooth", block: "nearest"})
      break;
    
    case "interests":
      interestsRef.current.scrollIntoView(scrollSettings)
      break;
    
    default:
      break;
  }

  return (
    <div className={[Styles.MainContent, props.className].join(' ')} onScroll={props.scroll} ref={aboutMeRef}>
      <AboutMe data={props.data.aboutMe}/>
      {/* <Employment ref={employmentRef} data={props.data.employment} />
      <Education ref={educationRef} data={props.data.education} />
      <Interests ref={interestsRef} data={props.data.interests} /> */}

      <Employment ref={employmentRef} data={props.data.employment}/>
      <Education ref={educationRef} data={props.data.education}/>
      <Interests ref={interestsRef} data={props.data.interests}/>

      <p>
        lfnjkdsngn
        fgnadsinglkn
        wdinldsakn
        ddivnlkdsvlk
        dvondsvklml;
      </p>

      

      
      {/* <div ref={skillsRef}>Skills</div>
      <div ref={interestsRef}>Interests</div>
      <div className={Styles.Footer}></div> */}
    </div>
  );
}

export default MainContent;