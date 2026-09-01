import React ,{useState} from 'react'
import { Pop } from '../../comman/Pop'
import Dropzone from 'react-dropzone'
import { useMutation, gql } from "@apollo/client";
import Image from 'next/image'
import ReactCrop from 'react-image-crop';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-toastify';

import { useUploadImage, useGetAllImages}  from "@apolloo/actions"

import Skeleton from 'react-loading-skeleton'




const ImageUpload =({setstate , set}) => {

  
  const defaultImg = "https://pulseplaydigital.sgp1.digitaloceanspaces.com/20230508-ofbgc-uplaodimage"

  const [active, setActive] = useState(null);
    const [img, setImg] = useState(null);
    const [image, setImage] = useState(null);
    const [send, sendImg] = useState({
      imgUrl:"https://pulseplaydigital.sgp1.digitaloceanspaces.com/20230508-ofbgc-uplaodimage"
    })
    const [imgs, setImages] = useState([]);
    const { data:data1 , loading:load} = useGetAllImages()
  
 
    const [mutate, { loading, error , data }] = useUploadImage();
     
    const onChange = (e) => {
      console.log(e.target.files[0])
        setImage(e.target.files[0])
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
       
      data.file = image
      mutate({variables:data})
  
    }
 
   
    
      if (loading) return   (
      <Pop>
  


  <div className="modal-image">
  <div className="modal-image-1">
          Loading...
          </div>
          </div>
     
          </Pop>
      )

  if(data) {
    
    set(data.singleUpload.imgUrl)

  
  }

  const senddata = () => {

    if(send.imgUrl  === defaultImg) {
      toast.error("Select Image")
    }
    else {
      set(send.imgUrl)
    }

  }

    return (
     <Pop>
 


        <div className="modal-image">

        <span onClick={() => setstate(false)} style={{fontSize:"2rem"}} className="close">&times;</span>
        <div className="modal-top">


        <div className="modal-top-right">
         
         <h2 style={{marginBottom:"1.2rem" , fontWeight:"1000"}} >Media Libaray</h2>

          </div>


        <div className="modal-top-left">
            
            <h2   onClick={() =>  setActive(!active) } id={active ? "set" : ""}  >Upload Image</h2>

            <h2   onClick={() =>  setActive(!active) } id={active ? "" : "set"} >Image Gallery</h2>

          </div>

      
      

          </div>
          {active ? 
          (
            <div className="modal-image-1">
         
  


             
                    
                
            {img ? 
            (
              <div  className="conatiner" > 
                <div  className="wrapper-img" > 

                <Image 
                  src={img}
                  layout="fill" 
                  alt="logo"
                  objectFit="contain"   >

                  </Image>
                  </div>
                  <form  className="form-upload" onSubmit={handleSubmit(onSubmit)}>
{/* register your input into the hook by invoking the "register" function */}
<div className="head" >
<h2>Add Image</h2>
</div>
<div className="input-field-upload" >
<label>Image Name</label>
{/* include validation with required or other standard HTML validation rules */}
<input placeholder=' Enter Image Name' {...register("fileName", { required: true })} />
{/* errors will return when field validation fails  */}
{errors.fileName && <span>This field is required</span>}

</div>
<div className="input-field-upload" >
<label> Image AltName</label>
{/* include validation with required or other standard HTML validation rules */}
<input  placeholder=' Enter Image AltName' {...register("altName", { required: true })} />
{/* errors will return when field validation fails  */}
{errors.altName && <span>This field is required</span>}
</div>
<div className="input-field-upload" >
<label> Image Description</label>
{/* include validation with required or other standard HTML validation rules */}
<input  placeholder=' Enter Image Description'  />
{/* errors will return when field validation fails  */}

</div>
<div className="btn" > 
<button id="submit" type='submit' >Submit</button>
</div>
</form>
               </div>

            )
            :
            (

              <>
                <input
             
                className='image'
                type="file"
                accept="image/*"
                onChange={onChange}
                id="file-input"

                style={{display:"none"}}             
            />
            <label htmlFor="file-input">
            <div style={{width:"10rem" , position:"relative" , height:"10rem" , cursor:"pointer"}}  className="wrapper-img" > 

<Image 
  src={"https://globe-trotte.fra1.digitaloceanspaces.com/20211224-90za5-asas?auto=format&fit=max&w=1920"}
  layout="fill" 
  alt="logo"
  objectFit="contain"   >

  </Image>
  </div>
              
            </label>
               </>
            )

            }
          
 
       

 



</div>
          )
          :
          (
            <div className="modal-image-1">
            <div  className="conatiner" > 
            {load ? 
            (
              <div   className="wrapper-img" > 
                  <div   className="wrapper-images" >
                  <Skeleton height={40} />
                  <Skeleton height={40} />

                  <Skeleton height={40} />
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                  <Skeleton height={40} />
                  <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />     <Skeleton height={40} />
                </div>  

                
                 </div>
            )
            :
            (
              <div  key={set.imgName} className="wrapper-img" > 
               
               

              {data1.getAllImages.map(set =>
              
              <div 
               onClick={()=> sendImg(set)}
               id={send.imgUrl === set.imgUrl ? "active" : '' }
              key={set.imgName} className="wrapper-images" > 
              <Image 
                                src={set.imgUrl}
                                layout="fill" 
                                alt="logo"
                                objectFit="contain"   >
              
                                </Image>
              
              </div>
              )
              
              }
              
              </div>
            )

            }
  
          
              
              <form  className="form-upload" onSubmit={handleSubmit(onSubmit)}>
{/* register your input into the hook by invoking the "register" function */}
<div className="head" >
<h2>Add Image</h2>
</div>
<div   style={{height:"30%"}} className="wrapper-img" > 

<Image 
                                src={send.imgUrl}
                                layout="fill" 
                                alt="logo"
                                objectFit="contain"   />


</div>

<div className="btn" > 
<button onClick={()=> senddata()}  id="submit" type='Button' >Add</button>
</div>
</form>
           </div>
           </div>
          )

          }
       
        </div>

      </Pop>
    )
}

export default ImageUpload;
