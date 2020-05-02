import React from 'react'
import renderer from 'react-test-renderer'
import {shallow, mount} from 'enzyme'

import ProfileEdit from './components/userProfile/user-profile-edit'
import ContactForm from './components/contactForm/contactForm'
import UserProfile from './components/userProfile/user-profile'
import Startups from './components/startups/startups'
import Partners from './components/partners/partners'

it('render contact form correctly', () => {
  const tree = renderer.create(<ContactForm/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('render user profile correctly', () => {
  const tree = renderer.create(<UserProfile/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('render edit profile correctly', () => {
  const tree = renderer.create(<ProfileEdit/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it('render startups correctly', () => {
  const tree = renderer.create(<Startups/>).toJSON();
  expect(tree).toMatchSnapshot();
})

describe("Startups", () => {
  it("renders", () => {
    shallow(<Startups/>)
  })
  it("displays initial startups", () => {
    const wrapper = mount(<Startups/>);
    expect(wrapper.find("div.card"))
  })
})

describe("Partners", () => {
  it("renders", () => {
    shallow(<Startups/>)
  })
  it("displays partners", () => {
    const wrapper = mount(<Partners/>);
    expect(wrapper.find("div.each-partner")).toHaveLength(3)
  })
})
