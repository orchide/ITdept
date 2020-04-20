import {
  GET_TECHS,
  ADD_TECH,
  TECHS_ERROR,
  DELETE_TECHS,
  SET_LOADING,
} from '../Actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };

    case DELETE_TECHS:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };

    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
