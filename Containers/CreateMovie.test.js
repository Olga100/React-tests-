import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {CreateMovieForm} from './CreateMovie';



describe('<CreateMovieForm/>', () => {

    it('Renders input component for creating of the movie', () => {
        const component = renderer.create(
            <CreateMovieForm/>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });


});