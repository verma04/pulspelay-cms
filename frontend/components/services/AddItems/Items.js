import React from 'react'
import { toast } from 'react-toastify'

function Items({id , content , setContent}) {





    const [capabilities,setcapabilities] = React.useState("")
    const handleChange2 = (e) => {
  
        setcapabilities(e.target.value)
      }
    
      const onSubmit = async () => {
          const data = {
            
              capabilities:capabilities
          }

        
          console.log(content)
      await    setContent([...content, data])
 
      await setcapabilities('')
    
      }
 

    return (
        <>
       
     <div className="input-field-2" >
     {content.map((number , key) => 
     <div key={key} >
          <li> {number.capabilities}</li>  
            </div>
        )

        }
     <div className="label" >
                <label>{id}</label>
            
</div>
                <div className="input" >
           
              <input  onChange={handleChange2} value={capabilities}   placeholder="Enter capabilities"   />
              <button  id="submit" type='button' onClick={()=> onSubmit()} >Add</button>
              </div>
              </div>
        </>
    )
}

export default Items
