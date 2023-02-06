import Header from '../src/components/Header';
import AboutMe from './scenes/AboutMe';
import { useEffect, useState} from 'react';



const App =()=>{
  const [size, setSize]= useState({height: window.innerHeight,
    width: window.innerWidth})
  
    
  
  useEffect(()=>{
    const handleSize =()=>{
      setSize({height: window.innerHeight,width: window.innerWidth})
    }
    window.addEventListener('resize', handleSize)

    handleSize()
    

  },[setSize])

console.log(size)

  return (
    <>
      <Header />
      <div style={size}>
      <AboutMe />
      </div>
    </>
  )
}

export default App