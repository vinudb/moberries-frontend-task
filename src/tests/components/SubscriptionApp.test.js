import React from 'react';
import ReactDOM from 'react-dom';
import SubscriptionApp from '../../components/SubscriptionApp';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
  
  const setUp = () => {
      configure({ adapter: new Adapter() });
      const wrapper = shallow(<SubscriptionApp />);
      return wrapper;
  };
  
  let wrapper;
  beforeEach(() => {
      wrapper = setUp();
  });


describe('renders without crashing with correct values',  () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SubscriptionApp />, div);
        ReactDOM.unmountComponentAtNode(div);
        expect(wrapper.length).toBe(1);
      });

      test('on duration change, duration state value is set correctly',  ()=>{
        const event = {target: {key: 'duration', value: 5}}
        wrapper.instance().setSubscriptionValues(event);
        expect(wrapper.state('duration')).toBe(5);
      })
});
