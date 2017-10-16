import * as actions from '../Actions/Actions';
import {currentMovieReducer} from './reducers';

describe('reducer currentMovieReducer', () => {

    it('should return the initial state = null', () => {
        expect(currentMovieReducer(undefined, {})).toEqual(null)
    });

    it('should handle SELECT_MOVIE', () => {
        expect(
            currentMovieReducer([],
                actions.selectMovie(25)
                /*{
                type: types.SELECT_MOVIE,
                id: 25
            }*/)
        ).toEqual(25)
    })
});

