import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FilterSort from './FilterSort'

describe('<FilterSort  />', () => {
    it('Renders stars component', () => {
        const component = renderer.create(
            <FilterSort />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Calls sortByRating callback on click', () => {
        const sortByRatingSpy = jest.fn();
        const content = shallow(<FilterSort sortByRating={sortByRatingSpy} />);

        content.find('.sortByRating').simulate('click');

        expect(sortByRatingSpy).toHaveBeenCalled();
    });

    it('Calls sortByLikes callback on click', () => {
        const sortByLikesSpy = jest.fn();
        const content = shallow(<FilterSort sortByLikes={sortByLikesSpy} />);

        content.find('.sortByLikies').simulate('click');

        expect(sortByLikesSpy).toHaveBeenCalled();
    });
});
