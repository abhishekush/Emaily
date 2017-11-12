import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header/>', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Header />);
	});

	it('should render a nav element', () => {
		expect(wrapper.find('nav').exists()).toEqual(true);
	});

	it('should render a parent div with class nav-wrapper', () => {
		expect(
			wrapper
				.find('div')
				.first()
				.hasClass('nav-wrapper')
		).toEqual(true);
	});
});
