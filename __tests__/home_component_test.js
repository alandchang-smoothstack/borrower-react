import React from 'react';
import {shallow} from 'enzyme';
import HomeRender from '../src/components/Home/HomeRender';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    loggedIn: true,
    borrower: {
        _id: '5e66949385ed682e1800f4a2',
        name: 'Test Name'
    }
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<HomeRender {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Home Component', () => {
    it('Should render home page with jumbotron and two options', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();
      // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
      expect(enzymeWrapper.find('div').length).toBe(11);
      expect(enzymeWrapper.find('h1').text()).toBe(`Welcome, ${props.borrower.name}!`);
      expect(enzymeWrapper.find('.card.bg-primary').length).toBe(2);
      expect(enzymeWrapper.find('.btn.btn-lg.btn-primary').at(0).text()).toBe('Checkout Book');
      expect(enzymeWrapper.find('.btn.btn-lg.btn-primary').at(1).text()).toBe('Return Book');
    });
});
