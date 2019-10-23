import React, { useContext, useState } from 'react';
import validator from 'validator';
import SubscriptionContext from '../context/subscription';
import {onChangeHandle} from '../utils'

const SubscriptionUserData = () => {
    const { lastName, firstName, email, address,stage, setSubscriptionValues } = useContext(SubscriptionContext);
    const [error, setError] = useState("");
    
    const onNextClick = ()=>{
        (!firstName || !lastName || !email || !address) ? setError('All fields are mandatory') :
        (!validator.isEmail(email) ? setError('Email is not valid') : 
        onChangeHandle('stage', stage + 1, setSubscriptionValues))
    }

    return (
        <div className="subscriptionStageContainer">
            <div>
            <span className="backArrow" onClick={()=>onChangeHandle('stage', stage - 1, setSubscriptionValues)}>&#8592;</span>
            <div className="subTitle">User Information</div>
            </div>
            
            
            <input 
                className="text-input"
                type='text' 
                onChange={(e)=>onChangeHandle('lastName', e.target.value, setSubscriptionValues)} 
                placeholder='Last Name' 
                value={lastName}
                autoFocus/>
            <input 
                className="text-input"
                type='text' 
                onChange={(e)=>onChangeHandle('firstName', e.target.value, setSubscriptionValues)} 
                placeholder='First Name' 
                value={firstName}/>
            <input 
                className="text-input"
                type='text' 
                onChange={(e)=>onChangeHandle('email', e.target.value, setSubscriptionValues)} 
                placeholder='Email' 
                value={email}/>
            <input 
                className="text-input"
                type='text' 
                onChange={(e)=>onChangeHandle('address', e.target.value, setSubscriptionValues)} 
                placeholder='Address' 
                value={address}/>
            <span className="error">{error}</span>
            <button className="button" onClick={onNextClick}>NEXT</button>
        </div>
    );
}

export default SubscriptionUserData;