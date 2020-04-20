import {
  GET_TECHS,
  TECHS_ERROR,
  DELETE_TECHS,
  SET_LOADING,
  ADD_TECH,
} from './types';

export const getTechs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch('/techs');

      const data = await res.json();

      dispatch({
        type: GET_TECHS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const addTech = (tech) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch('/techs', {
        method: 'POST',
        body: JSON.stringify(tech),
        headers: {
          'Content-type': 'application/json',
        },
      });

      const data = res.json();
      dispatch({
        type: ADD_TECH,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: TECHS_ERROR,
        payload: err,
      });
    }
  };
};

export const deleteTech = (id) => {
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`/techs/${id}`, {
        method: 'DELETE',
      });

      dispatch({
        type: DELETE_TECHS,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err,
      });
    }
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
