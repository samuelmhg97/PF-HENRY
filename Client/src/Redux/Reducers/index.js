const initialState = {
  movies: [],
  movieDetail: {}
}

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case 'GET_MOVIES': 
      return {
        ...state,
        movies: action.payload
      }
    case 'GET_MOVIE_DETAIL': 
      return {
        ...state,
        movieDetail: action.payload
      }
    case 'DEL_MOVIE_DETAIL': 
      return {
        ...state,
        movieDetail: {}
      }
    default: 
    return {
      ...state
    }
  }
}