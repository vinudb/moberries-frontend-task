import React from 'react';
import SubscriptionContext from '../context/subscription';
import SubscriptionPlan from './SubscriptionPlan';
import SubscriptionPriceOverview from './SubscriptionPriceOverview';
import SubscriptionUserData from './SubscriptionUserData';
import PaymentDetails from './PaymentDetails';
import SubscriptionConfirmation from './SubscriptionConfirmation';

class SubscriptionApp extends React.Component {
    state = {
        stage: 1,
        duration: 12,
        gb: 5,
        upfrontPay: false,
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        ccNumber: "",
        ccMonth: "",
        ccYear: "",
        ccCVV: ""
    }

    setSubscriptionValues = (event) => this.setState({ [event.target.key]: event.target.value });

    findSubscriptionPrice = () => {
        const beforeDiscount = this.state.gb * this.state.duration * 2;
        const discountPercent = 10;
        const finalAmount = this.state.upfrontPay ?
            beforeDiscount - ((discountPercent / 100) * beforeDiscount) :
            (this.state.gb * this.state.duration * 2);
        return finalAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    printValues = () => console.log(this.state)

    render() {
        const { stage, duration, gb, upfrontPay, firstName, lastName, email, address, ccNumber,
            ccMonth, ccYear, ccCVV, finalAmount } = this.state;

        const contextValues = {
            stage,
            duration,
            gb,
            upfrontPay,
            firstName,
            lastName,
            email,
            address,
            ccNumber,
            ccMonth,
            ccYear,
            ccCVV,
            finalAmount,
            setSubscriptionValues: this.setSubscriptionValues,
            findSubscriptionPrice: this.findSubscriptionPrice,
            printValues: this.printValues
        }
        return (
            <div data-test="subscriptionAppComponent" className="subscriptionParentContainer">
                <SubscriptionContext.Provider value={contextValues}>
                    {stage === 1 && <SubscriptionPlan />}
                    {stage === 2 && <SubscriptionUserData />}
                    {stage === 3 && <PaymentDetails />}
                    {stage === 4 && <SubscriptionConfirmation />}
                    {stage !== 4 && <SubscriptionPriceOverview />}
                </SubscriptionContext.Provider>
            </div>
        );
    }
}

export default SubscriptionApp;