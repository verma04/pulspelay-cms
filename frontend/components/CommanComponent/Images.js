import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ImageUpload from '@components/team/addConciegeItems/ImageBulk';
import Image from 'next/image'
import { toast } from 'react-toastify';


function Drag({id , img, setImg}) {

  

    const fin  = img.map(t => ({id:t.img,  name:t.img, thumb:t.img})) 
    const [state, setstate] = React.useState(false)
    const [finImg, setfinImg] = React.useState(img.map(t => ({id:t.img,  name:t.ids, thumb:t.imgds})))
    const coverImage = async (data) => {




        await  setstate(false)
    
         await   toast.success("Image Upload Succes")

  
         const arr = []
         const arr2 = []

      await   data.forEach(element => {
     
              const set = {
            img:element.imgUrl
        }
      
        const set2 = {
            thumb:element.imgUrl,
            id:element.imgUrl ,
            name:element.imgUrl,

        }

        console.log(set , set2)

        arr.push(set)
        arr2.push(set2)
         });

     console.log(arr , arr2)
        
         await setImg([  ...img , ...arr])
         await setfinImg([ ...finImg  ,...arr2 ])
        
    }
const removeImage = async (url) => {

     const final = img.filter(set => set.img !==url)
     await setImg(final)
     await   toast.success("Image removed")
}

  

  const [characters, updateCharacters] = useState(fin);





  function handleOnDragEnd(result) {
    if (!result.destination) return;
      
 
    const items = Array.from(img);
    console.log(items)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImg(items);
  }

   const [ready, setReady] = useState(false)

   React.useEffect(() => {
    setReady(true)
   }, [])

  return (
    <>
    {ready ? 
      (
        <div className="input-field">
            <label>{id} Images</label> 
        <header className="arr">
     
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <div className="img-arr" {...provided.droppableProps} ref={provided.innerRef}>
                  {img.map((set, index) => {
                    return (
                      <Draggable key={set.img} draggableId={set.img} index={index}>
                        {(provided) => (
                            <>
                          <div     className="wrapper" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                           
                          <Image 
 
 src={set.img}
 layout="fill" 
 alt="logo"
 objectFit="contain"   ></Image>
</div>
<i   onClick={()=> removeImage(set.img)} className="fas fa-times"></i>   
                          
                         
                          </>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}

                  <div className="wrapper" >
<i onClick={()=> setstate(true)} className="fas fa-plus-circle"></i>
  </div>
                </div>
              )}
            </Droppable>
          </DragDropContext>
      
        </header>

        {state ? (
        <ImageUpload  setstate={setstate} set={coverImage} />
                )
                :
                (
        null
                )
        
                }
       
      </div>
      )
      :
      (
        null
      )


    }
   </>
  );
}

export default Drag;