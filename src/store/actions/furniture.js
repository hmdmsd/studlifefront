import {
  FURNITURE_LIST_REQUEST,
  FURNITURE_LIST_SUCCESS,
  FURNITURE_LIST_FAIL,
  FURNITURE_DETAILS_REQUEST,
  FURNITURE_DETAILS_SUCCESS,
  FURNITURE_DETAILS_FAIL,
  FURNITURE_DELETE_REQUEST,
  FURNITURE_DELETE_SUCCESS,
  FURNITURE_DELETE_FAIL,
  FURNITURE_CREATE_REQUEST,
  FURNITURE_CREATE_SUCCESS,
  FURNITURE_CREATE_FAIL,
  FURNITURE_UPDATE_REQUEST,
  FURNITURE_UPDATE_SUCCESS,
  FURNITURE_UPDATE_FAIL,
  FURNITURE_CREATE_COMMENT_FAIL,
  FURNITURE_CREATE_COMMENT_SUCCESS,
  FURNITURE_CREATE_COMMENT_REQUEST,
  FURNITURE_TOP_REQUEST,
  FURNITURE_TOP_SUCCESS,
  FURNITURE_TOP_FAIL,
} from "../constants/furniture";
import axios from "axios";

export const listFurnitures =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: FURNITURE_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/furnitures?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: FURNITURE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FURNITURE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listfurnitureDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FURNITURE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/furnitures/${id}`);

    dispatch({
      type: FURNITURE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FURNITURE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletefurniture = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FURNITURE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/furnitures/${id}`, config);

    dispatch({
      type: FURNITURE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: FURNITURE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createFURNITURE = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FURNITURE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/furnitures/`, {}, config);

    dispatch({
      type: FURNITURE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FURNITURE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatefurniture = (furniture) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FURNITURE_UPDATE_REQUEST,
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

    const { data } = await axios.put(
      `/api/furnitures/${furniture._id}`,
      furniture,
      config
    );

    dispatch({
      type: FURNITURE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FURNITURE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createfurnitureComment =
  (furnitureId, comment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FURNITURE_CREATE_COMMENT_REQUEST,
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

      await axios.post(
        `/api/furnitures/${furnitureId}/comments`,
        comment,
        config
      );

      dispatch({
        type: FURNITURE_CREATE_COMMENT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: FURNITURE_CREATE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopfurnitures = () => async (dispatch) => {
  try {
    dispatch({ type: FURNITURE_TOP_REQUEST });

    const { data } = await axios.get(`/api/furnitures/top`);

    dispatch({
      type: FURNITURE_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FURNITURE_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
