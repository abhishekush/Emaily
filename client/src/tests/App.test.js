import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.exists()).toEqual(true);
	// expect(wrapper.find(BrowserRouter)).toHaveLength(1);
	expect(wrapper.find(BrowserRouter).exists()).toEqual(true);
});
