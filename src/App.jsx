import React, { useEffect, useState } from 'react'
import Navbar from './componets/nav bar/Navbar'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
   const [theme, setTheme] = useState(current_theme? current_theme  : 'light');

   useEffect(()=>{
      localStorage.setItem('current_theme', theme);
   },[theme])
  return (
    <div class={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App