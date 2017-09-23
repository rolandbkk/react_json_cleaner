import React from 'react'
import App from '../../app'
import {mount} from 'enzyme'

test('welcomes the user to React', function () {
  const wrapper = mount(<App />)

  expect(wrapper.text()).toContain('Parse Json here')
})
