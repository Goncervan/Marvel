import axios from 'axios'


// ------------------------------------------------PERSONAJES------------------------------------------------
export default function getCharacters(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&offset=${page}`)
        return dispatch({
            type: 'GET_CHARACTERS',
            payload: result.data.data
        })
    }
}
export function searchByName(name, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=20&nameStartsWith=${name}&offset=${page}`)
        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: result.data.data
        })
    }
}
export function getCharacterDetail(id) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c`)
        return dispatch({
            type: 'GET_CHARACTER_DETAIL',
            payload: result.data.data
        })
    }
}

// ------------------------------------------------COMICS------------------------------------------------
export function getComics(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=21&offset=${page}`)
        return dispatch({
            type: 'GET_COMICS',
            payload: result.data.data
        })
    }
}
export function getComicsByName(comic, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=21&titleStartsWith=${comic}&offset=${page}`)
        return dispatch({
            type: 'GET_COMICS_BY_NAME',
            payload: result.data.data
        })
    }
}
// ------------------------------------------------SERIES------------------------------------------------
export function getSeries(page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/series?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=21&&offset=${page}`)
        return dispatch({
            type: 'GET_SERIES',
            payload: result.data.data
        })
    }
}
export function getSeriesByName(serie, page) {
    return async function (dispatch) {
        let result = await axios.get(`https://gateway.marvel.com/v1/public/series?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c&limit=21&titleStartsWith=${serie}&offset=${page}`)
        return dispatch({
            type: 'GET_SERIES_BY_NAME',
            payload: result.data.data
        })
    }
}