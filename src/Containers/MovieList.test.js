import React from 'react';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import {MovieListView} from './MovieList';


describe('<MovieListView/>', () => {

    it('Renders  component with list of the movie', () => {

        const movies =
            [
                {
                    id: 1,
                    title: "title",
                    posterUrl: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["horror"],
                    actors: ["Vasya", "Sasha"],
                    director: "Petya",
                    description: "This is a very good movie!",
                    stars: 4,
                    likes: 42
                },
                {
                    id: 2,
                    title: "title11",
                    posterUrl: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
                    genres: ["romcom"],
                    actors: ["Vasya", "Sasha"],
                    director: "Petya",
                    description: "This is a very good movie too!",
                    stars: 5,
                    likes: 43
                }
            ];

        const mockStore = configureMockStore();
        const store = mockStore({});

        const component = renderer.create(
            <Provider store={store}>
                <MovieListView movies={movies}/>
            </Provider>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});
