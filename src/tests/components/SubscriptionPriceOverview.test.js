import React from 'react';
import SubscriptionPriceOverview from '../../components/SubscriptionPriceOverview';
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
    const findSubscriptionPrice = jest.fn();
    findSubscriptionPrice.mockReturnValue("120.00")
    const contextValues = {
        findSubscriptionPrice, upfrontPay, duration: 12, gb: 5
    }
    jest.spyOn(ContextModule, "useSubscriptionContext").mockImplementation(() => (contextValues));
}


describe('renders without crashing with correct values', () => {
    it('Renders without crash', () => {
        setUpContext(false);
        const wrapper = shallow(
            <SubscriptionContext.Provider>
                <SubscriptionPriceOverview />
            </SubscriptionContext.Provider>
        ).dive();
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('span').text()).toBe("Your subscription price without upfront payment for 12 months and 5 GB is $ 120.00");
    });
});
