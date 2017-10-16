import * as actions from '../Actions/Actions';
import {viewStateReducer} from './reducers';


describe('reducer viewStateReducer', () => {

    it('should return the initial state = {}', () => {
        expect(viewStateReducer(undefined, {})).toEqual({})
    });

    it('should handle SET_ADMIN, return true(or false)', () => {
        expect(
            viewStateReducer({},
                actions.setAdmin(true)
            )
        ).toEqual(
            {
                isAdmin: true
            }
        )
    });
    it('should handle SORT_BY, return field for sortin(likes(or stars))', () => {
        expect(
            viewStateReducer({},
                actions.sortBy('likes')
            )
        ).toEqual(
            {
                sortBy: 'likes'
            }
        )
    });
    it('should handle FILTER', () => {
        expect(
            viewStateReducer({},
                actions.filter('ar')
            )
        ).toEqual(
            {
                filter: 'ar'
            }
        )
    })
});



