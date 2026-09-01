import styled from 'styled-components'



export const Delete = styled.section`

.modal {

    position: fixed; /* Stay in place */
    z-index: 1000; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30% !important;
    position: relative;
    .close{
      position: absolute;
      right: 2%;
      top:2%;
    }
    .head {
     width:100%;
     height: 20%;
     display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
border-bottom: 1px solid #d7d7d7;
padding-bottom: 1rem;
h2 {
text-transform: uppercase;
}

}
    .btn {
margin-top: 0rem;
    border-top: 1px solid #d7d7d7;
    width:100%;
    height:4rem;
     
     display:flex;
justify-content:space-around;
align-items:center;
button {
    
}

}
.mid {

  display:flex;
  height: 7rem;
justify-content:center;
align-items:center;
p {
text-transform: capitalize;
text-align:center;
}
}
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }`