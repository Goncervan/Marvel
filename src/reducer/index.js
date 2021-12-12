const initialState = {
    allCharacters: [],
    allSeries: [],
    allComics: [],
    detail: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        default: return state;
        case 'GET_CHARACTERS':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'SEARCH_BY_NAME':
            return {
                ...state,
                allCharacters: action.payload
            }
        case 'GET_CHARACTER_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        case 'GET_COMICS':
            return {
                ...state,
                allComics: action.payload
            }
        case 'GET_COMICS_BY_NAME':
            return {
                ...state,
                allComics: action.payload
                }
        case 'GET_SERIES':
            return {
                ...state,
                allSeries: action.payload
            }
        case 'GET_SERIES_BY_NAME':
            return {
                ...state,
                allSeries: action.payload
            }
    }
}

export default rootReducer;


  // public: dcc040bad49ea9ec6c932d4c419b7902
  // private: d00f2d544a5fadf07d42d430ea007ebdcd5b6ed5
  // ts: 1 
  // 1d00f2d544a5fadf07d42d430ea007ebdcd5b6ed5dcc040bad49ea9ec6c932d4c419b7902
  // hash: 39882d128e7b707d033f508923c7d21c

// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=dcc040bad49ea9ec6c932d4c419b7902&hash=39882d128e7b707d033f508923c7d21c