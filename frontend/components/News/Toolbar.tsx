import React from 'react'
import Image from "next/image";
function Toolbar({setpublish , load}) {
  return (
    <div className="toolbar">

    <div className="toolbar-main">
    
    <div className="toolbar-left">
      
      <div className="img-wrapper">
      <Image
                    alt="Picture of the author"
                    objectFit="contain"
                    layout="fill"
                    src="https://pulseplaydigital.com/wp-content/uploads/2021/06/PULSEPLAY-LOGO.png"
                  />
                
      </div>
    
      <h4>Draft in PulsePlay Admin</h4>
      {
        load ? (
          <div style={{color: "rgba(0,0,0,.54)", marginLeft:"1rem"}}  >
       Saving....
            </div>
        )
        :
        (
          <div style={{color: "rgba(0,0,0,.54)", marginLeft:"1rem"}}  >
  Saved
            </div>
        )
      }
    </div>
    

    <div className="toolbar-right">
      
     <button  onClick={()=> setpublish(true)} >Publish</button>
    
  
    </div>
    </div>
    
    </div>
    
  )
}

export default Toolbar