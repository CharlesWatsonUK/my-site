import React, {useRef} from 'react';
import Styles from './MainContent.module.css';
import AboutMe from './AboutMe/AboutMe';
import Employment from './Employment/Employment';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

const MainContent = (props) => {
  
  const aboutMeRef = useRef(null);
  const employmentRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  const defaultScrollSettings = {behavior: "smooth", block: "nearest"}
  
  const getScrollSettings = (sectionTop) => {
    console.log(sectionTop +" "+ aboutMeRef.current.offsetTop)
    return {
    top: (sectionTop - aboutMeRef.current.offsetTop),
    ...defaultScrollSettings}
  }

  switch(props.currentSection){
    case "aboutMe":
      aboutMeRef.current.scrollTo(getScrollSettings(aboutMeRef.current.offsetTop))
      break;
    
    case "employment":
      aboutMeRef.current.scrollTo(getScrollSettings(employmentRef.current.offsetTop))
      break;

    case "education":
      aboutMeRef.current.scrollTo(getScrollSettings(educationRef.current.offsetTop))
      break;
    
    case "skills":
      aboutMeRef.current.scrollTo(getScrollSettings(skillsRef.current.offsetTop))
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
      <Footer/>
    </div>
  );
}

export default MainContent;