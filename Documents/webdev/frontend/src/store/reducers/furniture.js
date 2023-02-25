import {
  FURNITURE_DETAILS_FAIL,
  FURNITURE_DETAILS_SUCCESS,
  FURNITURE_DETAILS_REQUEST,
  FURNITURE_LIST_SUCCESS,
  FURNITURE_LIST_REQUEST,
  FURNITURE_LIST_FAIL,
  FURNITURE_DELETE_REQUEST,
  FURNITURE_DELETE_SUCCESS,
  FURNITURE_DELETE_FAIL,
  FURNITURE_CREATE_REQUEST,
  FURNITURE_CREATE_SUCCESS,
  FURNITURE_CREATE_FAIL,
  FURNITURE_CREATE_RESET,
  FURNITURE_UPDATE_REQUEST,
  FURNITURE_UPDATE_SUCCESS,
  FURNITURE_UPDATE_FAIL,
  FURNITURE_UPDATE_RESET,
  FURNITURE_CREATE_COMMENT_REQUEST,
  FURNITURE_CREATE_COMMENT_SUCCESS,
  FURNITURE_CREATE_COMMENT_FAIL,
  FURNITURE_CREATE_COMMENT_RESET,
  FURNITURE_TOP_REQUEST,
  FURNITURE_TOP_SUCCESS,
  FURNITURE_TOP_FAIL,
} from "../constants/furniture";

export const furnitureListReducer = (state = { furnitures: [] }, action) => {
  switch (action.type) {
    case FURNITURE_LIST_REQUEST:
      return { loading: true, furnitures: [] };
    case FURNITURE_LIST_SUCCESS:
      return {
        loading: false,
        furnitures: action.payload.furnitures,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case FURNITURE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const furnitureDetailReducer = (
  state = { furniture: { comments: [] } },
  action
) => {
  switch (action.type) {
    case FURNITURE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case FURNITURE_DETAILS_SUCCESS:
      return { loading: false, furniture: action.payload };
    case FURNITURE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const furnitureDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FURNITURE_DELETE_REQUEST:
      return { loading: true };
    case FURNITURE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FURNITURE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const furnitureCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FURNITURE_CREATE_REQUEST:
      return { loading: true };
    case FURNITURE_CREATE_SUCCESS:
      return { loading: false, success: true, furniture: action.payload };
    case FURNITURE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FURNITURE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const furnitureUpdateReducer = (state = { furniture: {} }, action) => {
  switch (action.type) {
    case FURNITURE_UPDATE_REQUEST:
      return { loading: true };
    case FURNITURE_UPDATE_SUCCESS:
      return { loading: false, success: true, furniture: action.payload };
    case FURNITURE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FURNITURE_UPDATE_RESET:
      return { furniture: {} };
    default:
      return state;
  }
};

export const furnitureCommentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FURNITURE_CREATE_COMMENT_REQUEST:
      return { loading: true };
    case FURNITURE_CREATE_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case FURNITURE_CREATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case FURNITURE_CREATE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const furnitureTopRatedReducer = (
  state = { furnitures: [] },
  action
) => {
  switch (action.type) {
    case FURNITURE_TOP_REQUEST:
      return { loading: true, furnitures: [] };
    case FURNITURE_TOP_SUCCESS:
      return { loading: false, furnitures: action.payload };
    case FURNITURE_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
