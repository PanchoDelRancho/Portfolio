import Header from '../src/components/Header';
import AboutMe from './scenes/AboutMe';
import { useEffect, useState} from 'react';




const App =()=>{
  const [size, setSize]= useState({height: window.innerHeight,
    width: window.innerWidth})
  
    
  
  useEffect(()=>{
    const handleSize =()=>{
      setSize({height: window.innerHeight - 80,width: window.innerWidth})
    }
    window.addEventListener('resize', handleSize)

    handleSize()
    

  },[setSize])


  return (
    <>
      <Header />
      <div style={size}>
      <AboutMe windowSize = {size}/>
      </div>
    </>
  )
}

export default App