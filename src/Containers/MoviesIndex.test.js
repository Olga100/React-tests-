import React from 'react';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {MoviesIndexView} from './MoviesIndex';


describe('<MoviesIndexView/>', () => {

    it('Renders  main components for movies page', () => {

        const loadMovies = jest.fn();

        const mockStore = configureMockStore();
        const store = mockStore({
            viewState: {
                isAdmin: true,
                filter: "",
                sortBy: "rating"
            },
            movies: []
        });

        const component = renderer.create(
            <Provider store={store}>
                <MoviesIndexView isAdmin="true" loadMovies={loadMovies}/>
            </Provider>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });


});

