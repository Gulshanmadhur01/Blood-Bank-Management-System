import React from 'react'

const InputType = ({labelText,lableForm, inputType, value, onChange, name}) => {
  return (
    <>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor={lableForm}>{labelText}</label><input 
                type={inputType} 
                name={name}
                value={value}
                onChange={onChange}
                className="form-control form-control-lg" />
            
        </div>
    </>
  )
}

export default InputType
