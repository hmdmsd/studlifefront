import {
  HOUSE_DETAILS_FAIL,
  HOUSE_DETAILS_SUCCESS,
  HOUSE_DETAILS_REQUEST,
  HOUSE_LIST_SUCCESS,
  HOUSE_LIST_REQUEST,
  HOUSE_LIST_FAIL,
  HOUSE_DELETE_REQUEST,
  HOUSE_DELETE_SUCCESS,
  HOUSE_DELETE_FAIL,
  HOUSE_CREATE_REQUEST,
  HOUSE_CREATE_SUCCESS,
  HOUSE_CREATE_FAIL,
  HOUSE_CREATE_RESET,
  HOUSE_UPDATE_REQUEST,
  HOUSE_UPDATE_SUCCESS,
  HOUSE_UPDATE_FAIL,
  HOUSE_UPDATE_RESET,
  HOUSE_CREATE_COMMENT_REQUEST,
  HOUSE_CREATE_COMMENT_SUCCESS,
  HOUSE_CREATE_COMMENT_FAIL,
  HOUSE_CREATE_COMMENT_RESET,
  HOUSE_TOP_REQUEST,
  HOUSE_TOP_SUCCESS,
  HOUSE_TOP_FAIL,
} from "../constants/house";

export const houseListReducer = (state = { houses: [] }, action) => {
  switch (action.type) {
    case HOUSE_LIST_REQUEST:
      return { loading: true, houses: [] };
    case HOUSE_LIST_SUCCESS:
      return {
        loading: false,
        houses: action.payload.houses,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case HOUSE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const houseDetailReducer = (
  state = { house: { comments: [] } },
  action
) => {
  switch (action.type) {
    case HOUSE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case HOUSE_DETAILS_SUCCESS:
      return { loading: false, house: action.payload };
    case HOUSE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const houseDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case HOUSE_DELETE_REQUEST:
      return { loading: true };
    case HOUSE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case HOUSE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const houseCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HOUSE_CREATE_REQUEST:
      return { loading: true };
    case HOUSE_CREATE_SUCCESS:
      return { loading: false, success: true, house: action.payload };
    case HOUSE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case HOUSE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const houseUpdateReducer = (state = { house: {} }, action) => {
  switch (action.type) {
    case HOUSE_UPDATE_REQUEST:
      return { loading: true };
    case HOUSE_UPDATE_SUCCESS:
      return { loading: false, success: true, house: action.payload };
    case HOUSE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case HOUSE_UPDATE_RESET:
      return { house: {} };
    default:
      return state;
  }
};

export const houseCommentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HOUSE_CREATE_COMMENT_REQUEST:
      return { loading: true };
    case HOUSE_CREATE_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case HOUSE_CREATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case HOUSE_CREATE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const houseTopRatedReducer = (state = { houses: [] }, action) => {
  switch (action.type) {
    case HOUSE_TOP_REQUEST:
      return { loading: true, houses: [] };
    case HOUSE_TOP_SUCCESS:
      return { loading: false, houses: action.payload };
    case HOUSE_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
