import {getCurrentMovie} from './getCurrentMovie';

describe('selector getCurrentMovie', () => {

    const state = {
        movies: [
            { id: 1, title: "first movie", stars: 2 },
            { id: 2, title: "second test movie", stars: 3 },
            { id: 3, title: "third  movie", stars: 4 },
            { id: 4, title: "fourth test movie", stars: 5 },
        ],
        viewState: {
            filter: "test",
            sortBy: "stars"
        }
    };

    it('should get current existing movie by id', () => {
        const currentState = Object.assign({}, state, { currentMovie: 4 });              //currentMovie = movie c id=4 это весь стэйт+карретеМуви
        /*
         {
         movies: [
         { id: 1, title: "first movie", stars: 2 },
         { id: 2, title: "second test movie", stars: 3 },
         { id: 3, title: "third  movie", stars: 4 },
         { id: 4, title: "fourth test movie", stars: 5 },
         ],
         viewState: {
         filter: "test",
         sortBy: "stars"
         },
         currentMovie: 4
         };
         */

        //only two items correspond to filter
        expect(getCurrentMovie(currentState)).toEqual({ id: 4, title: "fourth test movie", stars: 5 });
    });

    it('should get the first movie if current id does not exist', () => {
        const currentState = Object.assign({}, state, { currentMovie: 3 });     //мы взяли элемент который не попадает в список

        //first items in result list has id=4 because of sorting
        expect(getCurrentMovie(currentState)).toEqual({ id: 4, title: "fourth test movie", stars: 5 });         // return m ? m : movies[0];
    });                                                                           //после фильтации и сортировки будет  id4, id2
});
