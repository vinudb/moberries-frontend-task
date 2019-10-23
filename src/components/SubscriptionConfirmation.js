import React, { useContext, useState } from 'react';
import SubscriptionContext from '../context/subscription';
import { onChangeHandle } from '../utils';

const SubscriptionConfirmation = () => {
    const { stage, duration, gb, upfrontPay, firstName, lastName, email, address, ccNumber, ccMonth,
        ccYear, ccCVV, findSubscriptionPrice, setSubscriptionValues, printValues } = useContext(SubscriptionContext);

    const [tncAgreed, setTncAgreed] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const onSubmit = () => {
        tncAgreed ? printValues() : setError('Please agree the terms and conditions');
        error === "" && setSuccess(true);
    }

    return (
        <div className="subscriptionStageContainer">
            {success ?
                <span>Thank you for subscribing.</span> :
                <div>
                    <div>
                        <span className="backArrow" onClick={() => onChangeHandle('stage', stage - 1, setSubscriptionValues)}>&#8592;</span>
                        <div className="subTitle">Confirmation</div>
                    </div>
                    <div className="elementKey">Duration</div>
                    <span className="elementValue">{duration} Months</span>

                    <div className="elementKey">Amount of gigabytes in the cloud</div>
                    <span className="elementValue">{gb} GB</span>

                    <div className="elementKey">Upfront Payment</div>
                    <span className="elementValue">{upfrontPay ? 'YES' : 'NO'}</span>

                    <div className="elementKey">First Name</div>
                    <span className="elementValue">{firstName}</span>

                    <div className="elementKey">Last Name</div>
                    <span className="elementValue">{lastName}</span>

                    <div className="elementKey">Email</div>
                    <span className="elementValue">{email}</span>

                    <div className="elementKey">Address</div>
                    <span className="elementValue">{address}</span>

                    <div className="elementKey">Credit Card Number</div>
                    <span className="elementValue">{ccNumber}</span>

                    <div className="elementKey">Expiry Date</div>
                    <span className="elementValue">{`${ccMonth}/${ccYear}`}</span>

                    <div className="elementKey">CVV</div>
                    <span className="elementValue">{ccCVV}</span>

                    <div className="elementKey">Your Final Subscription Amount</div>
                    <span className="elementValue">{findSubscriptionPrice()}</span>

                    <label className="container">Agree terms and conditions
            <input type="checkbox" onChange={() => {
                            setTncAgreed(!tncAgreed);
                            setError('');
                        }} />
                        <span className="checkmark"></span>
                    </label>
                    <span>{error}</span>
                    <button className="button" onClick={onSubmit} disabled={!tncAgreed}>Confirm</button>
                </div>}
        </div>
    );
}

export default SubscriptionConfirmation;