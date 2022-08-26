const initialState = {
  movies: [],
  movieDetail: {}
}

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case 'GET_MOVIE_DETAIL': 
      return {
        ...state,
        movieDetail: action.payload
      }
    default: 
    return {
      ...state
    }
  }
}