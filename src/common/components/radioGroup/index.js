import './styles.css'

const RadioGroup = ({title, values, onChange, initialValue}) => {

    const handleChange = (value) => {
        onChange(title, value)
    }
    return (
    <div className='app-radio-group'>
        {values.map(({label, icon}) => {
            return(
                <div className='app-radio-container' key={label}>
                <div type='text' 
                className="radio-label" 
                onClick={(e) => handleChange(label)}>
                 <div 
                 className={`${initialValue === label  
                    ? 'active ' 
                    : '' }img-container align-center`
                 }>
                <img src={icon}  alt="icon" />
                </div>
                <span>{label}</span>
                </div>
            </div>
            )
        })
    }
    </div>
    );
  };

  export default RadioGroup