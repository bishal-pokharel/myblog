import { useState, useEffect } from 'react'
import FirstView from './components/firstView'
import SecondView from './components/secondView'
import ThirdView from './components/thirdView'
import FourthView from './components/fourthView'
import FifthView from './components/fifthView'
import SixthView from './components/sixthView'
import SeventhView from './components/seventhView'
import './App.css'

function App() {

  const [activeView, setActiveView] = useState(0);
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

        const scrollY = window.scrollY;
        const viewHeight = window.innerHeight;

        // Check if the user has scrolled past the height of the first view (100vh)
        if (scrollY >= viewHeight && activeView === 0) {
            setActiveView(1); // Activate the second view
        } 
        // else if (scrollY < viewHeight && activeView === 1) {
        //     setActiveView(0); // Activate the first view if scrolled back
        // }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [activeView, isManualScroll]);

    const handleButtonClick = (viewIndex) => {
      setIsManualScroll(true);
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      setActiveView(viewIndex);

      setTimeout(() => setIsManualScroll(false), 500);
    };

  return (
    <div className='main-container'>
      <FirstView onButtonClick={() => handleButtonClick(1)}  />
      <SecondView isActive={activeView === 1} onButtonClick={() => handleButtonClick(2)} />
      <ThirdView isActive={activeView === 1} onButtonClick={() => handleButtonClick(3)} />
      <FourthView isActive={activeView === 1} onButtonClick={() => handleButtonClick(4)} />
      <FifthView isActive={activeView === 1} onButtonClick={() => handleButtonClick(5)} />
      <SixthView isActive={activeView === 1} onButtonClick={() => handleButtonClick(6)} />
      <SeventhView isActive={activeView === 1} onButtonClick={() => handleButtonClick(7)} />
    </div>
  )
}

export default App
