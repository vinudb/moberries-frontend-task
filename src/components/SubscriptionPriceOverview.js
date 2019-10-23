import React from 'react';
import SubscriptionContext,{useSubscriptionContext} from '../context/subscription';

const SubscriptionPriceOverview = ()=>{
    const {findSubscriptionPrice, upfrontPay, duration, gb} = useSubscriptionContext(SubscriptionContext);
    return(
        <div className="elementTitle">
            <div>{`Subscription price ${upfrontPay? 'with ': 'without '}upfront payment`}</div>
            <div>{`for ${duration} months and ${gb} GB is $ ${findSubscriptionPrice()}`}</div>
        </div>
    );
}

export default SubscriptionPriceOverview;