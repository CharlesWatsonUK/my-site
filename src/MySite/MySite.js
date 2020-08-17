import React, { useState, useEffect } from 'react';
import Styles from './MySite.module.css';
import Header from './containers/Header/Header';
import SideBar from './containers/SideBar/SideBar';
import MainContent from './containers/MainContent/MainContent';
import SideDrawer from './containers/SideDrawer/SideDrawer';

const MySite = () => {
  const [data, setData] = useState({aboutMe: {}, employment: [], education: []})
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("")

  async function fetchData() {
    const res = await fetch("./data.json")
    res.json()
      .then(data => setData(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={Styles.MySite}>
      <SideDrawer className={Styles.SideDrawer} isOpen={isSideDrawerOpen} 
      sectionSelected={section => {
          setCurrentSection(section)
          setIsSideDrawerOpen(false)
      }}/>
      
      <Header className={Styles.Header} 
      openCloseSideDrawer={() => {
        setIsSideDrawerOpen(!isSideDrawerOpen)
        setCurrentSection("")
      }}/>
      
      <SideBar className={Styles.SideBar} 
      sectionSelected={section => {
        setCurrentSection(" ")
        setCurrentSection(section)}}/>
      
      <MainContent className={Styles.MainContent} data={data} currentSection={currentSection} scroll={() => {
        setCurrentSection("")
        console.log('scrolling')
      }}/>
    </div>
  );
}

export default MySite;