import React, { useContext, useState } from 'react';
import validator from 'validator';
import SubscriptionContext from '../context/subscription';
import { yearArray, monthArray, onChangeHandle } from '../utils';

const PaymentDetails = () => {
    const { ccNumber, ccMonth, ccYear, ccCVV, stage, setSubscriptionValues } = useContext(SubscriptionContext);
    const [error, setError] = useState("");

    const onMonthChange = (e) => onChangeHandle('ccMonth', e.target.value, setSubscriptionValues);

    const onYearChange = (e) => onChangeHandle('ccYear', e.target.value, setSubscriptionValues);

    const onCVVChange = (e) => {
        const cvv = e.target.value;
        if (!cvv || (cvv.match(/^\d{1,9}?$/) && parseInt(cvv) <= 999)) {
            onChangeHandle('ccCVV', cvv, setSubscriptionValues)
        }
    }

    const onNextClick = () => {
        if (!ccNumber || !ccMonth || !ccYear || !ccCVV) {
            setError('All fields are mandatory');
        } else if (!validator.isCreditCard(ccNumber)) {
            setError('Please enter valid credit card number');
        } else if (ccCVV.length < 3) {
            setError('Please enter valid CVV');
        }
        else {
            onChangeHandle('stage', stage + 1, setSubscriptionValues);
        }
    }

    return (
        <div className="subscriptionStageContainer">
            <div>
                <span className="backArrow" onClick={() => onChangeHandle('stage', stage - 1, setSubscriptionValues)}>&#8592;</span>
                <div className="subTitle">Payment Information</div>
            </div>
            <input
                className="text-input"
                type='text'
                onChange={(e) => onChangeHandle('ccNumber', e.target.value, setSubscriptionValues)}
                placeholder='Credit Card Number'
                value={ccNumber}
                autoFocus />

            <input
                className="text-input"
                type='text'
                onChange={onCVVChange}
                placeholder='CVV'
                value={ccCVV} />

            <div className="creditCardExpiryContainer">    
                <select className="select" value={ccMonth} title="select a month" onChange={onMonthChange}>
                <option value="">Expiry month</option>
                {
                    monthArray.map((item) => (
                        <option value={item.monthNum} key={item.monthNum}>{item.monthName}</option>
                    ))
                }
            </select>

            <select className="select" value={ccYear} onChange={onYearChange} title="select a year">
                <option value="">Expiry year</option>
                {
                    yearArray.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </select>   
            </div> 
            

            <span className="error">{error}</span>

            <button className="button" onClick={onNextClick}>NEXT</button>
        </div>
    );
}

export default PaymentDetails;