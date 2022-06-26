import React, {useState} from 'react';
import './styles.css';
import maleSvg from '../../../assests/images/mars-symbol.svg'
import femaleSvg from '../../../assests/images/venus-symbol.svg'
import cardSvg from '../../../assests/images/card.svg'
import RadioGroup from '../../../common/components/radioGroup';

function CreateAccount() {
    const initialValues = {
        gender: "",
        userName: "",
        membership: "classic",
        email: "",
        mobile: "",
        dob: "",
        customerId: ""
    }
    const [formValues, setFormValue] = useState(initialValues);

    const handleInputChange = (e) =>{
        let value = e.target.value;
        setFormValue({
            ...formValues,
            [e.target.name]: value
        })
    }

    const handleRadioChange = (title, value) =>{
        setFormValue({
            ...formValues,
            [title]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formValues, e);
    }

    const handleCancel = () =>{
        setFormValue(initialValues)
    }

    return(
        <div className="create-account-section">
        <div className="create-account-container">
            <form className='create-account-form' onSubmit={handleSubmit}>
                <div className="form-item-wrapper">
                    <label className='label'> Name </label>
                    <input 
                        name='userName'
                        className='create-input' 
                        value={formValues["userName"]} 
                        type="text" 
                        placeholder='Kendal James'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-item-wrapper gender-item-wrapper">
                    <label className='label'> Gender </label>
                        <RadioGroup
                        title = {"gender"}
                        initialValue = {formValues["gender"]}
                        values = {[
                                {label: "male", icon: maleSvg}, 
                                {label: "female", icon: femaleSvg}
                            ]}
                        onChange={handleRadioChange}/>
                </div>
                <div className="form-item-wrapper">
                    <label className='label'> Date of Birth </label>
                    <input 
                        name='dob'
                        className='create-input' 
                        value={formValues["dob"]}
                        onChange={handleInputChange}
                        placeholder='01/02/1983' 
                        onFocus={(e) => (e.target.type = "date")} 
                        onBlur={(e) => (e.target.type = "text")}
                    />
                </div>
                <div className="form-item-wrapper">
                    <label className='label'> Email </label>
                    <input 
                    name='email'
                    className='create-input' 
                    type="email" 
                    value={formValues["email"]} 
                    placeholder='Kendal@jjames.com'
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-item-wrapper">
                    <label className='label'> Mobile </label>
                    <input 
                    name='mobile'
                    className='create-input' 
                    type="tel" 
                    value={formValues["mobile"]} 
                    placeholder='+243 38377-23'
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-item-wrapper">
                    <label className='label'> Customer ID </label>
                    <input
                    name='customerId'
                    className='create-input' 
                    type="text" 
                    value={formValues["customerId"]} 
                    placeholder='12SSMS-WBDGWR'
                    onChange={handleInputChange}
                    />
                </div>
                <div className="membership-item-wrapper form-item-wrapper">
                    <label className='label'> Membership </label>
                    <RadioGroup
                        title = {"membership"}
                        initialValue = {formValues["membership"]}
                        onChange={handleRadioChange}
                        values = {[
                                {label: "classic", icon: cardSvg}, 
                                {label: "silver", icon: cardSvg}, 
                                {label: "gold", icon: cardSvg}, 
                            ]}
                        />
                </div>
                <div className="form-actions">
                    <button className='cancel' onClick={handleCancel}>CANCEL</button>
                    <button type="submit" className='save'>SAVE</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default CreateAccount;