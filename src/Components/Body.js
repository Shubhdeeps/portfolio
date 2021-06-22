import './css/Body.css'
import React, { useEffect } from 'react';
import SvgBody from './Svgbody'
import NavBar from './navbar'
import Boy from './Skills/Boy';
import { Skills } from './Skills/Skills';
import Service from '../Connection/Service'
import Projects from './Projects';
import Contact  from './Contact';
import  { useOnScreen } from './Intersection';
import { motion, useAnimation } from "framer-motion";


const Body = ( { projects, setProjects } ) => {


  
  useEffect(() => {
    Service.getData(setProjects)

  }, [])
 

  let active = ''

  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const [ref00, visible0] = useOnScreen({ threshold: 0.9 })
  const [ref01, visible] = useOnScreen({ threshold: 0.9 })
  const [ref02, visible1] = useOnScreen({ threshold: 0.9 })
  const [ref03, visible2] = useOnScreen({ threshold: 0.9 })
  

  
 //section 1
  if(visible0){
    active = 'about'
    animation.start({
  
      x: 0,
      transition:{
       type: 'spring', duration: 2, bounce: 0.4
      }
    })
  }
  else{
    animation.start({
      x: '200vw'
    })
  }

  // section 2
  if(visible){
    active = 'skills'
    animation1.start({
      opacity: 1,
      y: 0,
      transition:{
       type: 'spring', duration: 1.5, bounce: 0.3
      }
    })
  }
  
  else{
    animation1.start({
      opacity: 0,
      y: '250vh'
    })
  }

  // section 3
  if(visible1){
    active = 'project'
    animation2.start({
  
      x: 0,
      transition:{
       type: 'spring', duration: 1.5, bounce: 0.3
      }
    })
  }
  else{
    animation2.start({
      x: '200vh'
    })
  }

  // section 4
  if(visible2){
    active = 'contact'
    animation3.start({
  
      x: 0,
      transition:{
       type: 'spring', duration: 2, bounce: 0.4
      }
    })
  }
  else{
    animation3.start({
      x: '200vh'
    })
  }

    return(
    <div className='section-container' >
    <NavBar active={active}/>
    <section 
      ref={ref00}
        id='section-1'> 
          <motion.div
          animate={animation}
          >
             <SvgBody visible={visible0}/>
          </motion.div> 
   </section>
   <section 
      ref={ref01}
        id='section-2'>
         <motion.div className="skills-container"
         animate={animation1}
         >
                 <div className="skill1"> <Skills /> </div>
         </motion.div>
         <motion.div className='boy-container'
         animate={animation1}>
            <Boy/>
         </motion.div>
   </section>
   <section   id='section-3'
   ref={ref02}
     >
       <motion.div
       animate={animation2}>
      {projects ? <Projects  projects={projects} /> : 'Error getting data'}
       </motion.div>
      
   </section>
   <section id='section-4'
   ref={ref03}
   >
     <motion.div
     animate={animation3}
     >
         <Contact />
         </motion.div>
   </section>
</div>
    )
}


export default Body;