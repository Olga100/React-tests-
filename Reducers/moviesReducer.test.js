import * as actions from '../Actions/Actions';
import {moviesReducer} from './reducers';



describe('reducer moviesReducer', () => {

    it('should return the initial state = []', () => {
        expect(moviesReducer(undefined, {})).toEqual([])
    });

    it('should handle RECEIVE_MOVIES', () => {
        expect(
            moviesReducer([],
                actions.receiveMovies([{}, {}, {}])
                /*{
                type: types.RECEIVE_MOVIES,
                movies: [{}, {}, {}]
            }*/)
        ).toEqual([{}, {}, {}])
    });

    it('should handle RECEIVE_MOVIE', () => {
        expect(
            moviesReducer([{id: 1, title: 'A'}, {id: 2, title: 'B'}],
                actions.receiveMovie({id: 2, title: 'C'})
                /*{
                type: types.RECEIVE_MOVIE,
                movie: {id: 2, title: 'C'}
            }*/)
        ).toEqual([{id: 1, title: 'A'}, {id: 2, title: 'C'}])
    });

    it('should handle RECEIVE_ID_DELETE', () => {
        expect(
            moviesReducer([{id: 1, title: 'A'}, {id: 2, title: 'B'}],
                actions.receiveDeleteId(1)
                /*{
                type: types.RECEIVE_ID_DELETE,
                id: 1
            }*/)
        ).toEqual([{id: 2, title: 'B'}])
    });
});


