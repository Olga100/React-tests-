import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import {MovieThumbnailView} from './MovieThumbnail';


describe('<MovieThumbnailView/>', () => {

    const movie = {
        title: "title",
        posterUrl: "http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg",
        genres: ["horror"],
        actors: ["Vasya"],
        director: "Petya",
        description: "This is a very good movie!",
        stars: 4,
        likes: 42
    };

    it('Renders   component  for the movie list', () => {

        const component = renderer.create(
            <MovieThumbnailView movie={movie}/>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Calls callback on click', () => {
        const selectMovieSpy = jest.fn();
        const content = mount(<MovieThumbnailView movie={movie} selectMovie={selectMovieSpy}/>);

        content.find('.movie-thumbnail-title').simulate('click');

        expect(selectMovieSpy).toHaveBeenCalled();
    });

    it('Check on click for Likes', () => {
        const incrementLikesSpy = jest.fn();
        const decrementLikesSpy = jest.fn();
        const content = shallow(<MovieThumbnailView movie={movie} incrementLikes={incrementLikesSpy}
                                                    decrementLikes={decrementLikesSpy}/>);

        content.find('.thumb').at(0).simulate('click');
        content.find('.thumb').at(1).simulate('click');

        expect(incrementLikesSpy).toHaveBeenCalled();
        expect(decrementLikesSpy).toHaveBeenCalled();
    });

});
