import * as actions from './Actions';
import * as types from './Actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import * as router from 'react-router'

router.browserHistory = { push: () => {} };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {

    it('should create an action to select a movie', () => {
        const id = 25;
        const expectedAction = {
            type: types.SELECT_MOVIE,
            id
        };
        expect(actions.selectMovie(id)).toEqual(expectedAction)
    });

    it('should create an action to set a true(or false)', () => {
        const isAdmin = true;
        const expectedAction = {
            type: types.SET_ADMIN,
            isAdmin
        };
        expect(actions.setAdmin(isAdmin)).toEqual(expectedAction)
    });

    it('should create an action to select a field "likes" (or stars) for sorting', () => {
        const field = 'likes';
        const expectedAction = {
            type: types.SORT_BY,
            field
        };
        expect(actions.sortBy(field)).toEqual(expectedAction)
    });

    it('should create an action to filter a movieList by value ("ar") ', () => {
        const value = 'ar';
        const expectedAction = {
            type: types.FILTER,
            value
        };
        expect(actions.filter(value)).toEqual(expectedAction)
    });

    it('should create an action to receive json file ', () => {
        const movies = 'smth.json';
        const expectedAction = {
            type: types.RECEIVE_MOVIES,
           movies
        };
        expect(actions.receiveMovies(movies)).toEqual(expectedAction)
    });

    afterEach(() => {
        nock.cleanAll()
    });

    it('creates RECEIVE_MOVIES when fetching movies has been done', () => {

        nock('http://localhost:3001')
            .get('/movies')
            .reply(200, [ { id: 1 }, { id: 2 } ]);

        const expectedActions = [
            { type: types.RECEIVE_MOVIES, movies: [ { id: 1 }, { id: 2 } ] }
        ];

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.fetchMovies()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates RECEIVE_MOVIE when creating a new movie has been done', () => {

        const movie = { id: 1, title: 'A' };

        nock('http://localhost:3001')
            .post('/movies', movie)
            .reply(200, movie);

        const expectedActions = [
            { type: types.RECEIVE_MOVIE, movie: movie }
        ];

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.createMovie(movie)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates RECEIVE_MOVIE when editing of a movie has been done', () => {

        const movie = { id: 1, title: 'A' };

        nock('http://localhost:3001')
            .put('/movies/1', movie)
            .reply(200, movie);

        const expectedActions = [
            { type: types.RECEIVE_MOVIE, movie: movie }
        ];

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.updateMovie(movie)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates RECEIVE_MOVIE after updating movie rating', () => {

        const movie = { id: 1, title: 'A', stars: 4 };

        nock('http://localhost:3001')
            .get('/movies/1')
            .reply(200, movie);

        const rating = 2;
        const resultMovie = { id: 1, title: 'A', stars: rating };

        nock('http://localhost:3001')
            .put('/movies/1', resultMovie)
            .reply(200, resultMovie);

        const expectedActions = [
            { type: types.RECEIVE_MOVIE, movie: resultMovie }
        ];

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.setRating(movie.id, rating)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });

    it('creates RECEIVE_MOVIE after updating movie likes', () => {

        const movie = { id: 1, title: 'A', likes: 4 };

        nock('http://localhost:3001')
            .get('/movies/1')
            .reply(200, movie);

        const likes = 1;
        const resultMovie = { id: 1, title: 'A', likes: movie.likes + likes };

        nock('http://localhost:3001')
            .put('/movies/1', resultMovie)
            .reply(200, resultMovie);

        const expectedActions = [
            { type: types.RECEIVE_MOVIE, movie: resultMovie }
        ];

        const store = mockStore({ movies: [] });

        return store.dispatch(actions.updateMovieLikes(movie.id, likes)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
});
