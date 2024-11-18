import './App.css';
import FirstScreen from './screens/FirstScreen';
import Reccomends from './components/recommends/Reccomends';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';

import When from './components/when/When';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import BasicAccordion from './components/question/Akordion';
import ByMe from './components/ByMe/ByMe';


function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return <>
  <NavBar/>
<FirstScreen scrolled={scrolled}/>
<Reccomends/>

<When/>
<SecondScreen/>
<ThirdScreen/>

<BasicAccordion/>
<ByMe/>
  </> 
}

export default App;
