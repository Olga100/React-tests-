import {getFilteredSortedMovies} from './getFilteredSortedMovies';

describe('selector getFilteredSortedMovies', () => {

    it('should sort and filter according to criteria', () => {
        const state = {
            movies: [
                { id: 1, title: "first movie", stars: 2 },
                { id: 2, title: "second test movie", stars: 3 },
                { id: 3, title: "thrid  movie", stars: 4 },
                { id: 4, title: "fourth test movie", stars: 5 },
            ],
            viewState: {
                filter: "test",
                sortBy: "stars"
            }
        };

        expect(getFilteredSortedMovies(state)).toEqual([
              { id: 4, title: "fourth test movie", stars: 5 },
              { id: 2, title: "second test movie", stars: 3 }
        ]);
    })
});
