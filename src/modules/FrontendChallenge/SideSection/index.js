import face from "../../../assests/images/face.svg"
import arrow from "../../../assests/images/arrow.svg"
import "./styles.css"

function FrontendChallenge({changeContent, showForm}) {
    return (
         <div className="side-bar align-center">
         <div className="side-bar-inner">
         <div>
            <img 
            src={face}
            alt="face illustration of a lady" />
          </div>
        <div className='description'>
            <h1>Front-end Challenge!</h1>
            <p>
                This is a design that you will need to code up 
                and impress us. 
            </p>
        </div>
        <button className={`${!showForm ? "turn-left " : ""}turn-right align-center` } onClick={changeContent}>
        <img src={arrow} alt="arrow icon" />
        </button>
         </div>
         </div>
    );
  }
  
  export default FrontendChallenge