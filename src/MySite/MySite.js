import React, { useState, useEffect } from 'react';
import Styles from './MySite.module.css';
import Header from './containers/Header/Header';
import SideBar from './containers/SideBar/SideBar';
import MainContent from './containers/MainContent/MainContent';
import SideDrawer from './containers/SideDrawer/SideDrawer';

const MySite = () => {
  const [data, setData] = useState({employment: [], education: []})
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

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
      <SideDrawer className={Styles.SideDrawer} isOpen={isSideDrawerOpen}/>
      <Header className={Styles.Header} openCloseSideDrawer={() => setIsSideDrawerOpen(!isSideDrawerOpen)}/>
      <SideBar className={Styles.SideBar}/>
      <MainContent className={Styles.MainContent} data={data}/>
    </div>
  );
}

export default MySite;