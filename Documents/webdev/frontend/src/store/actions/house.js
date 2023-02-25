import {
  HOUSE_LIST_REQUEST,
  HOUSE_LIST_SUCCESS,
  HOUSE_LIST_FAIL,
  HOUSE_DETAILS_REQUEST,
  HOUSE_DETAILS_SUCCESS,
  HOUSE_DETAILS_FAIL,
  HOUSE_DELETE_REQUEST,
  HOUSE_DELETE_SUCCESS,
  HOUSE_DELETE_FAIL,
  HOUSE_CREATE_REQUEST,
  HOUSE_CREATE_SUCCESS,
  HOUSE_CREATE_FAIL,
  HOUSE_UPDATE_REQUEST,
  HOUSE_UPDATE_SUCCESS,
  HOUSE_UPDATE_FAIL,
  HOUSE_CREATE_COMMENT_FAIL,
  HOUSE_CREATE_COMMENT_SUCCESS,
  HOUSE_CREATE_COMMENT_REQUEST,
  HOUSE_TOP_REQUEST,
  HOUSE_TOP_SUCCESS,
  HOUSE_TOP_FAIL,
} from "../constants/house";
import axios from "axios";

export const listHouses =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: HOUSE_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/houses?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: HOUSE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: HOUSE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listHouseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOUSE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/houses/${id}`);

    dispatch({
      type: HOUSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteHouse = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOUSE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/houses/${id}`, config);

    dispatch({
      type: HOUSE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createHouse = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOUSE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/houses/`, {}, config);

    dispatch({
      type: HOUSE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateHouse = (house) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOUSE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/houses/${house._id}`, house, config);

    dispatch({
      type: HOUSE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createHouseComment =
  (houseId, comment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: HOUSE_CREATE_COMMENT_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/houses/${houseId}/comments`, comment, config);

      dispatch({
        type: HOUSE_CREATE_COMMENT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: HOUSE_CREATE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopHouses = () => async (dispatch) => {
  try {
    dispatch({ type: HOUSE_TOP_REQUEST });

    const { data } = await axios.get(`/api/houses/top`);

    dispatch({
      type: HOUSE_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
