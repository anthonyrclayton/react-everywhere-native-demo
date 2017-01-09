import 'react-native';
import React from 'react';
import SessionDetails from '../components/SessionDetails'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const session = {"Id":5445,"SessionTime":"0001-01-01T00:00:00","SessionStartTime":"2017-01-10T08:00:00","SessionEndTime":"2017-01-10T12:00:00","Room":null,"Rooms":["Indigo Bay"],"Title":"7 Languages in 7 Hours","Abstract":"Hands-on experience.","SessionType":"Pre-Compiler","Tags":["Ruby\/Rails","Testing","Functional Programming","Other"],"Category":"Programming Principles","Speakers":[{"Id":"df1a9b69-1b7a-4224-bf28-2796a6cbed61","FirstName":"Amber","LastName":"Conville","GravatarUrl":"\/\/www.gravatar.com\/avatar\/7c2a83b93fe0e5f2ed4c95c59367259c"}]}

it('renders correctly', () => {
  const tree = renderer.create(
    <SessionDetails {...session} />
  );
  expect(tree).toMatchSnapshot();
});
