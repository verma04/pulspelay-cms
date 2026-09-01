import styled from 'styled-components'




export const Section = styled.div`
@media (min-width: 1025px) {
    width: 100%;

 
    .modal {

  width: 100%; /* Full width */
  height: 100%; /* Full height */

}
label {
  text-transform: capitalize;
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;

  width: 80%;

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
position: relative;
  .delete {
    position:absolute;
    cursor: pointer;
    top:2%;
    right:2%;
    font-size:1.5rem;
    color: ${props => props.theme.colors.text1};
  }
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
.head {
     width:100%;
     border-bottom: 1px solid #d7d7d7;
     height: 4rem;
     display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
h2 {
  color: ${props => props.theme.colors.text1};

  text-transform: uppercase;
}
}
.img {
    width:100%;
    height:25rem;
     display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
position: relative;
label {
    position: absolute;
    z-index: 1000;
    bottom: 5%;
    right: 5%;
  }
.img-wrapper {
  height:60%;
  position: relative;
  width: 30%;

}
.wrapper {
margin-top: 1rem;
  height: 100%;
  width: 100%;
  position: relative;

  .dp {
    position: absolute;
    height: 15rem;
    width: 15rem;
    left: 10%;
    bottom: 5%;
  }
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
      width:80%;
   
      margin-top: 2%;
     display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
.input-field{
    margin-top: 1rem;
    width:100%;
margin-bottom: 2rem;
    display:flex;
justify-content:space-around;
flex-direction:column;

.arr {
  border: 1px solid #d7d7d7;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .img-arr {
      width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .wrapper{
      position: relative;
      padding-left: 0.5rem;;
      padding-right: 0.5rem;
      width: 30%;
      height: 5rem;;
      margin-top: 1rem;
      margin-bottom: 2rem;
      position: relative;
      display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 2rem;
    }
 
    }
    .fa-times {
      font-size: 1.5rem;
    }
  }
  }
.message {
  height:3rem;
}
label {
  padding-bottom: 0.5rem;
    height:10%;
    font-size:0.9rem;
    font-weight:1000;

  text-transform: capitalize;

    
}
select {
 height:2rem;
}
input {
    height:40%;
    padding-left:1rem;
}
#active {
  border: 1px solid red;
}

textarea {
  padding: 1rem;
    height:10rem;
    padding-left:1rem;
}
span {
  font-size:0.7rem;
 
  height:10%;
}
}


.input-field-3{
    margin-top: 1rem;
    width:80%;
margin-bottom: 2rem;
    display:flex;
justify-content:space-around;
flex-direction:column;

.arr {
  border: 1px solid #d7d7d7;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .img-arr {
      width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .wrapper{
      position: relative;
      padding-left: 0.5rem;;
      padding-right: 0.5rem;
      width: 30%;
      height: 5rem;;
      margin-top: 1rem;
      margin-bottom: 2rem;
      position: relative;
      display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 2rem;
    }
 
    }
    .fa-times {
      font-size: 1.5rem;
    }
  }
  }
.message {
  height:3rem;
}
label {
  padding-bottom: 0.5rem;
    height:10%;
    font-size:0.9rem;
    font-weight:1000;

  text-transform: capitalize;

    
}
select {
 height:2rem;
}
input {
    height:40%;
    padding-left:1rem;
}
#active {
  border: 1px solid red;
}

textarea {
  padding: 1rem;
    height:10rem;
    padding-left:1rem;
}
span {
  font-size:0.7rem;


}
}
.input-field-2{
    
    width:80%;
margin-bottom: 2rem;
    display:flex;
justify-content:space-around;
flex-direction:column;
li {
  font-size: 1rem;
span {
  font-size: 1rem;
 font-weight: 900;
  color: black !important;

}
}
.label {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.input {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  justify-content: space-between !important;
  input {
    width: 40%;
  }
}

label {
  padding-bottom: 0.5rem;
    height:10%;
    font-size:0.9rem;
    font-weight:1000;

  text-transform: capitalize;

    
}
select {
 height:2rem;
}
input {
    height:40%;
    padding-left:1rem;
}
#active {
  border: 1px solid red;
}

textarea {
  padding: 1rem;
    height:10rem;
    padding-left:1rem;
}
span {
  font-size:0.7rem;
  color: red;
  height:10%;
}
}
.btn {
margin-top: 3rem;
    border-top: 1px solid #d7d7d7;
    width:100%;
    height:4rem;
     
     display:flex;
justify-content:space-around;
align-items:center;


}
}
} 
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