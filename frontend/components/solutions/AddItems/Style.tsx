import styled from 'styled-components'




export const Section = styled.div`
@media (min-width: 1025px) {
  width: 100%;
  .solutions {
    width:100%;
     
    height:20rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    .list {
      box-shadow: 1px 3px 24px 18px rgba(240,226,240,1);
      height: 80%;
      width: 17%;
      display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    position: relative;
  
    
    p {
      width: 90%;
   text-align: center;
    }
 h3 {

   width: 90%;
   text-align: center;
 }
    span {
      cursor: pointer;
      position: absolute;
      top: 5%;
      right: 5%;
    }
    .wrapper {
      width: 90%;
  height: 30%;
  position: relative;
  label {
    position: absolute;
  }

    }
    
    input {

      width: 90%;
  height: 10%;
    }
    textarea {
      width: 90%;
      height: 30%;
      padding: 0.5rem;
    }
    button {
      background-color: #000;
      color:white;
      border: none;
      font-size: 0.7rem;
      padding: 0.5rem;

    }
    }
}

 


/* The Close Button */


}
@media (min-width: 768px) and (max-width: 1034px) {
  .modal {
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 10%; /* Location of the box */
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
  width: 60%;
  height: 65%;
  border-radius:10px;
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
}
.modal-content{
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
.delete {
    position:absolute;
    cursor: pointer;
    top:2%;
    right:2%;
    font-size:1.5rem;
    color: ${props => props.theme.colors.text1};
  }
.head {
     width:100%;
     height: 20%;
     display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
h2 {
  color: ${props => props.theme.colors.text1};
  font-size:4rem;
}
}
.img {
    width:100%;
     height:30%;
     display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
img {
    height:60%;
}
input{
    display:none;
  
}
label {
background-color:#303030;
padding:0.5rem;
color:white;
border-radius:5px;
    }
}
form {
      width:100%;
     height:80%;
     display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
.input-field{
    
    width:80%;
    height:22%;
    display:flex;
justify-content:space-around;
flex-direction:column;
.message {
  height:3rem;
}
label {
    height:10%;
    font-size:0.9rem;
    font-weight:1000;
    
}
input {
    height:40%;
    padding-left:1rem;
}
select {
  height:40%;
  padding-left:1rem;
}
span {
  font-size:0.7rem;
  color: red;
  height:10%;
}
}
.btn {
    width:60%;
    height:10%;
     
     display:flex;
justify-content:space-around;
align-items:center;
button {
  
    height:100%;
    font-size:1.2rem;
    
}
}
}
} 
}
`