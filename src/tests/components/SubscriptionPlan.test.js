import React from 'react';
import SubscriptionPlan from '../../components/SubscriptionPlan';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SubscriptionContext, { useSubscriptionContext } from '../../context/subscription';
import * as ContextModule from "../../context/subscription";

const setUp = () => {
    configure({ adapter: new Adapter() });
};

let wrapper;
beforeEach(() => {
    wrapper = setUp();
});

const setUpContext = (upfrontPay) => {
    const setSubscriptionValues = jest.fn();
    const contextValues = {
        duration: 12, gb:5, stage:1, upfrontPay:false, setSubscriptionValues
    }
    jest.spyOn(ContextModule, "useSubscriptionContext").mockImplementation(() => (contextValues));
}


describe('renders without crashing with correct values',  () => {
    it('Renders without crash', () => {
        setUpContext(false);
        const wrapper = shallow(
            <SubscriptionContext.Provider>
                <SubscriptionPlan />
            </SubscriptionContext.Provider>
        ).dive();
        expect(wrapper.length).toBe(1);
        console.log(wrapper.debug())
        // wrapper.find('#durationSelect').simulate('change', { target: { value: 5 } });
        // const setSubscriptionValues = jest.fn();
        // expect(setSubscriptionValues).toHaveBeenCalled();
    });
});
