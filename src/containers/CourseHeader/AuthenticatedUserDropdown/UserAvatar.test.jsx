import React from 'react';
import { shallow } from 'enzyme';

import UserAvatar from './UserAvatar';

jest.mock('@edx/frontend-platform', () => ({
  getConfig: () => ({
    LMS_BASE_URL: '<LMS_BASE_URL>',
    LOGOUT_URL: '<LOGOUT_URL>',
    SUPPORT_URL: '<SUPPORT_URL>',
  }),
}));
jest.mock('@edx/paragon', () => ({
  Dropdown: {
    Toggle: () => 'Dropdown.Toggle',
    Item: () => 'Dropdown.Item',
  },
}));
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => 'FontAwesomeIcon',
}));

describe('Header AuthenticatedUserDropdown UserAvatar component', () => {
  const props = {
    username: 'test-username',
  };
  test('snapshot', () => {
    expect(
      shallow(<UserAvatar {...props} />),
    ).toMatchSnapshot();
  });
});
