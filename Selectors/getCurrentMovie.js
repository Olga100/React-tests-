import {createSelector} from 'reselect';
import {getFilteredSortedMovies} from './getFilteredSortedMovies';

const currentMovie = state => state.currentMovie;

export const getCurrentMovie = createSelector(
    [currentMovie, getFilteredSortedMovies],
    (currentMovie, movies) => {                                //function (currentMovie, movies) {
        const m = movies.filter(item => item.id === currentMovie)[0];        //нужен один(первый) элемент

        return m ? m : movies[0];        //проверка существует ли этот фильм(не удален ли он, попадает ли в отфильтрованный список
    }
);