import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {EditMovieForm} from './EditMovie';


describe('<EditMovieForm/>', () => {

    it('Renders input component for editing of the movie', () => {
        const movie = {
            title: "title",
            posterUrl: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
            genres: "horror",
            actors: "Vasya",
            director: "Petya",
            description: "This is a very good movie!"
        };
        const component = renderer.create(
            <EditMovieForm movie={movie}/>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });


});
