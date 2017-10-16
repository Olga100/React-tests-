import {createSelector} from 'reselect'

const getMovies = state => state.movies;   //говорим какая именно часть стора нужна как параметр безымянной функции

const getFilter = state => state.viewState.filter;

const getSortBy = state => state.viewState.sortBy;

export const getFilteredSortedMovies = createSelector(             //первый параметр массив функций от к-рых будет зависеть этот селектор,
                                                                 //функция сама логика селектора
    [getMovies, getFilter, getSortBy],
    (movies, filter, sortBy) => {                                    //function (movies, filter, sortBy) {
        let items = [];

        if (!filter) {
            items = movies.slice();
        } else {
            filter = filter.toLocaleLowerCase();

            items = movies.filter(function (item) {
                return item.title.toLocaleLowerCase().indexOf(filter) >= 0;
            });
        }

        if (sortBy) {
            items.sort((a, b) => b[sortBy] - a[sortBy]);                 //сортируем по лайка или рэйтингу
        }

        return items;
    }
);