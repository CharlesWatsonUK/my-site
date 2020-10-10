import React, {useRef} from 'react';
import Styles from './MainContent.module.css';
import AboutMe from './AboutMe/AboutMe';
import Employment from './Employment/Employment';
import Education from './Education/Education';
import Skills from './Skills/Skills';

const MainContent = (props) => {
  
  const aboutMeRef = useRef(null);
  const employmentRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  const getScrollSettings = (sectionTop) => ({
    top: (sectionTop - aboutMeRef.current.offsetTop),
    behavior: "smooth",
    block: "nearest",
    inline: "start"})

  switch(props.currentSection){
    case "aboutMe":
      aboutMeRef.current.scrollTo({top: 0, behavior: "smooth"})
      break;
    
    case "employment":
      aboutMeRef.current.scrollTo(getScrollSettings(employmentRef.current.offsetTop))
      break;

    case "education":
      aboutMeRef.current.scrollTo(getScrollSettings(educationRef.current.offsetTop))
      break;
    
    case "skills":
      skillsRef.current.scrollIntoView(getScrollSettings(skillsRef.current.offsetTop))
      break;
    
    default:
      break;
  }

  return (
    <div className={[Styles.MainContent, props.className].join(' ')} onScroll={props.scroll} ref={aboutMeRef}>
      <AboutMe data={props.data.aboutMe}/>
      <Employment ref={employmentRef} data={props.data.employment}/>
      <Education ref={educationRef} data={props.data.education}/>
      <Skills ref={skillsRef} data={props.data.skills}/>
    </div>
  );
}

export default MainContent;