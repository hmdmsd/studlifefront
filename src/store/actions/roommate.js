import {
  ROOMMATE_LIST_REQUEST,
  ROOMMATE_LIST_SUCCESS,
  ROOMMATE_LIST_FAIL,
  ROOMMATE_DETAILS_REQUEST,
  ROOMMATE_DETAILS_SUCCESS,
  ROOMMATE_DETAILS_FAIL,
  ROOMMATE_DELETE_REQUEST,
  ROOMMATE_DELETE_SUCCESS,
  ROOMMATE_DELETE_FAIL,
  ROOMMATE_CREATE_REQUEST,
  ROOMMATE_CREATE_SUCCESS,
  ROOMMATE_CREATE_FAIL,
  ROOMMATE_UPDATE_REQUEST,
  ROOMMATE_UPDATE_SUCCESS,
  ROOMMATE_UPDATE_FAIL,
  ROOMMATE_CREATE_COMMENT_FAIL,
  ROOMMATE_CREATE_COMMENT_SUCCESS,
  ROOMMATE_CREATE_COMMENT_REQUEST,
  ROOMMATE_TOP_REQUEST,
  ROOMMATE_TOP_SUCCESS,
  ROOMMATE_TOP_FAIL,
} from "../constants/roommate";
import axios from "axios";

export const listRoommates =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ROOMMATE_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/roommates?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: ROOMMATE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ROOMMATE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listRoommateDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ROOMMATE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/roommates/${id}`);

    dispatch({
      type: ROOMMATE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOMMATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteRoommate = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ROOMMATE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/roommates/${id}`, config);

    dispatch({
      type: ROOMMATE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ROOMMATE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createRoommate = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ROOMMATE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/roommates/`, {}, config);

    dispatch({
      type: ROOMMATE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOMMATE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateRoommate = (roommate) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ROOMMATE_UPDATE_REQUEST,
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
      `/api/roommates/${roommate._id}`,
      roommate,
      config
    );

    dispatch({
      type: ROOMMATE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOMMATE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createRoommateComment =
  (roommateId, comment) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ROOMMATE_CREATE_COMMENT_REQUEST,
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
        `/api/roommates/${roommateId}/comments`,
        comment,
        config
      );

      dispatch({
        type: ROOMMATE_CREATE_COMMENT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ROOMMATE_CREATE_COMMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopRoommates = () => async (dispatch) => {
  try {
    dispatch({ type: ROOMMATE_TOP_REQUEST });

    const { data } = await axios.get(`/api/roommates/top`);

    dispatch({
      type: ROOMMATE_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOMMATE_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
