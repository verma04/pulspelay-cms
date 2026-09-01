import styled from 'styled-components'


export const Section = styled.section`
display:flex;
        justify-content:center;
  z-index:1000;
@media (min-width: 1035px) {
  
   position:fixed;
   bottom:0;
   width:00%;
    border-radius:0.5rem;
   right:5%;
   cursor: pointer;
   bottom:10%;
  
   .flex {

      i {
         font-size: 2rem;
         color:#ed217b;
      }
      
        height:5rem;
        display:flex;
        justify-content:center;
      align-items:center;
      flex-direction:column;
      h3 {
        color:  #1d4694;
      }
      .logo{
   display:flex;
   justify-content:center;
   h3 {
    color:  #1d4694;
   }
      }
   }
 
}
`