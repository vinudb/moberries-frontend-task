import React from 'react';
import SubscriptionContext, { useSubscriptionContext } from '../context/subscription';
import { onChangeHandle, gbArray } from '../utils';

const SubscriptionPlan = () => {
    const { duration, gb, stage, upfrontPay, setSubscriptionValues } = useSubscriptionContext(SubscriptionContext);

    return (
        <div className="subscriptionStageContainer">
            <div className="subTitle">Subscription Plan</div>
            <div className="elementContainer">
                <span className="elementTitle">Duration</span>
                <select
                    className="select"
                    id="durationSelect"
                    value={duration}
                    onChange={(e) => onChangeHandle('duration', e.target.value, setSubscriptionValues)}>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                </select>
            </div>

            <div className="elementContainer">
                <span className="elementTitle">Amount of gigabytes in the cloud</span>
                <select
                    className="select"
                    value={gb}
                    onChange={(e) => onChangeHandle('gb', e.target.value, setSubscriptionValues)}>
                    {
                        gbArray.map((item) => (
                            <option value={item.gbNum} key={item.gbNum}>{item.gbName}</option>
                        ))
                    }
                </select>
            </div>

            <div className="elementContainer">
                <div className="elementTitle">Upfront payment </div>
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={(e) => onChangeHandle('upfrontPay', !upfrontPay, setSubscriptionValues)} />
                    <span className="slider round"></span>
                </label>
            </div>
            <button className="button" onClick={(e) => onChangeHandle('stage', stage + 1, setSubscriptionValues)}>NEXT</button>
        </div>
    );
}

export default SubscriptionPlan;