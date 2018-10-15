import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../src/components/Card';

test('card renders', () => {
  const card = shallow(<Card url="http://example.com" />);
  const image = card.find('img');
  expect(image.props().src).toBe('http://example.com');
});
