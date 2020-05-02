import React from 'react'
import renderer from 'react-test-renderer'

import ProfileEdit from './components/userProfile/user-profile-edit'
import ContactForm from './components/contactForm/contactForm'
import UserProfile from './components/userProfile/user-profile'
import Startups from './components/startups/startups'

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

