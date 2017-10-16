import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {MovieDetailsView} from './MovieDetails';

describe('<MovieDetailsView/>', () => {

    it('Renders  component with information of the movie', () => {

        const movie = {
            title: "title",
            posterUrl: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
            genres: ["horror"],
            actors: ["Vasya", "Sasha"],
            director: "Petya",
            description: "This is a very good movie!",
            stars: 3,
            likes: 11
        };

        const component = renderer.create(
            <MovieDetailsView movie={movie}/>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });


});