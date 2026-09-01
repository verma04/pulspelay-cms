import React from 'react'
import { toast } from 'react-toastify'

function Items({id , content , setContent}) {
 
  const [label1,setlabel1] = React.useState("")
  const [description1,setdescription1] = React.useState("")
  const [edit,setEdit] = React.useState("")
  const handleChange11 = (e) => {
    setlabel1(e.target.value)
  }
  const handleChange22 = (e) => {

      setdescription1(e.target.value)
    }
  
    const [label,setlabel] = React.useState("")
    const [description,setdescription] = React.useState("")

    const handleChange = (e) => {
      setlabel(e.target.value)
    }
    const handleChange2 = (e) => {
  
        setdescription(e.target.value)
      }
    
      const onSubmit = async () => {
          const data = {
              label:label,
              description:description
          }
      await    setContent([...content, data])
      await setlabel('')
      await setdescription('')
      toast.success("Added Success")
      }
      const onSubmit2 =  async () => { 
        let arr = content

        const objIndex = arr.findIndex(set=> set.id === edit)
        arr[objIndex].label = label1
        arr[objIndex].description = description1

        setContent(arr)
        setEdit(false)
        
      }

      const edits = (number) => {

        setEdit(number.id)
        setlabel1(number.label)
        

        setdescription1(number.description)

      }

      const trash = (number) => {
        console.log(number)
        const data = content.filter(set =>  set.id !==  number.id)
        toast.success("Removed Success")
        setContent([...data])
      }


    return (
        <>
       
     <div className="input-field-2" >
     {content.map((number , key) => 
     <>{edit === number.id  ?
     (
      <div  style={{marginBottom:"1rem"}} className="input" >
          <input    value={edit}  type='hidden'   />
      <input  onChange={handleChange11}  value={label1} placeholder="Enter Title"   />
      <input  onChange={handleChange22} value={description1}   placeholder="Enter Description"   />
      <button id="submit" type='button' onClick={()=> onSubmit2()} >Edit</button>
      </div>
     ):
     (
      <div key={key} >
      <li><span>{number.label}</span> : {number.description} <i  style={{marginLeft:"10%"}}  onClick={()=> edits(number)} className="fas fa-edit"></i>
       
       <i   onClick={()=> trash(number)}  style={{marginLeft:"10%"}}  className="fas fa-trash"></i>  </li>  
        
        </div>
     )

     }
    
            </>
        )

        }
     <div className="label" >
                <label>{id} Content</label>
            
</div>
                <div className="input" >
              <input  onChange={handleChange} value={label}  placeholder="Enter Label"   />
              <input  onChange={handleChange2} value={description}   placeholder="Enter Description"   />
              <button className='cancel' type='button' onClick={()=> onSubmit()} >Add</button>
              </div>
              </div>
        </>
    )
}

export default Items
