import { useState } from "react";
import "./styles.css"
import SideSection from './SideSection'
import CreateAccount from "../authentication/CreateAccountForm";
import About from "./AboutMyWorld";


function FrontendChallenge() {
  const [showForm, setContent] = useState(true);
  const [addAnimation, setAnimation] = useState("");


  const changeContent = () =>{
    if(showForm){
      setAnimation("open-animation")
    }else{
      setAnimation("close-animation")
    }
    // setTimeout(()=>{
      setContent(!showForm)
      setAnimation("")
    // }, 200)
  }

    return (
      <div className="frontend-challenge-container">
         <SideSection 
         changeContent = {changeContent} 
         showForm = {showForm}
         />
         <div className="main-section">
         {
          (addAnimation || !showForm) &&
          <About
          addAnimation = {addAnimation}
          />
        }
        {
          showForm &&
          <CreateAccount />
        }
         </div>
      </div>
    );
  }
  
  export default FrontendChallenge