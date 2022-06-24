

import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"




const NavOptions = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

   useEffect(() => {
     
    if(window.location.pathname === "/miphonesN"){
        return   setMiPhoneToggle(true)
       }
     if(window.location.pathname === "/redmiphonesN"){
        return   setRedmiPhoneToggle(true)
       }
       if(window.location.pathname === "/tvN"){
        return   setTvToggle(true)
       }
       if(window.location.pathname === "/laptopsN"){
        return   setLaptopToggle(true)
       }
       if(window.location.pathname === "/lifestyleN"){
        return  setFitnessToggle(true)
       }
       if(window.location.pathname === "/homeN"){
        return  setHomeToggle(true)
       }
       if(window.location.pathname === "/audioN"){
        return  setAudioToggle(true)
       }
       
       if(window.location.pathname === "/accessoriesN"){
        return  setAccessoriesToggle(true)
       }

       
   }, [])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?   tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOptions