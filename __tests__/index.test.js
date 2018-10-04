import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Index from '../pages/index'

describe('Shallow render', () => {
  it('App shows text', () => {
    const app = shallow(<Index />).dive()

    expect(app.find('p').text()).toEqual('Triam Udom Open House 2019')
  })
})

describe('Snapshot', () => {
  it('App match snapshot', () => {
    const component = renderer.create(<Index />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
