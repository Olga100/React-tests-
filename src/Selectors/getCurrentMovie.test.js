import {getCurrentMovie} from './getCurrentMovie';

describe('selector getCurrentMovie', () => {

    const state = {
        movies: [
            {id: 1, title: "first movie", stars: 2},
            {id: 2, title: "second test movie", stars: 3},
            {id: 3, title: "third  movie", stars: 4},
            {id: 4, title: "fourth test movie", stars: 5},
        ],
        viewState: {
            filter: "test",
            sortBy: "stars"
        }
    };

    it('should get current existing movie by id', () => {
        const currentState = Object.assign({}, state, {currentMovie: 4});

        expect(getCurrentMovie(currentState)).toEqual({id: 4, title: "fourth test movie", stars: 5});
    });

    it('should get the first movie if current id does not exist', () => {
        const currentState = Object.assign({}, state, {currentMovie: 3});     //мы взяли элемент который не попадает в список


        expect(getCurrentMovie(currentState)).toEqual({id: 4, title: "fourth test movie", stars: 5});
    });
});
