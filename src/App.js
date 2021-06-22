import './App.css';
import React, { useState } from 'react'
import Body from './Components/Body'
import FadeIn from 'react-fade-in';



function App() {
  

  const [projects, setProjects] = useState('');

  return (
    <FadeIn>
    <div className="App">
      <Body  projects={projects} setProjects={setProjects} />
    </div>
    </FadeIn>
  );
}

export default App;
