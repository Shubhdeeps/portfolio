import './css/card.css'
import Link from './css/images/link.png'

 const Card = ({x}) => {


    return(
        <div id='contain'>
        <div className='card'>
            <div id='heading'> <h1> #{x.Num} : {x.content} </h1> </div>
            <div id='content'>
            <h2> <span>Code:</span>
                <br/>
                 {x.code} 
                 <a href={x.code}  target="_blank">  
                 <img classname='link-icon' src={Link} width="40" height="40" />
                 </a>
                 </h2> 
           
            <h2 href={x.code}> <span>Link:</span> 
            <br/>
             {x.git}
             <a href={x.git}  target="_blank">  
                 <img classname='link-icon' src={Link} width="40" height="40" />
                 </a>
             </h2>   
             </div>
        </div>
        </div>
    )
}

export default Card;