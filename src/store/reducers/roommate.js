import {
  ROOMMATE_DETAILS_FAIL,
  ROOMMATE_DETAILS_SUCCESS,
  ROOMMATE_DETAILS_REQUEST,
  ROOMMATE_LIST_SUCCESS,
  ROOMMATE_LIST_REQUEST,
  ROOMMATE_LIST_FAIL,
  ROOMMATE_DELETE_REQUEST,
  ROOMMATE_DELETE_SUCCESS,
  ROOMMATE_DELETE_FAIL,
  ROOMMATE_CREATE_REQUEST,
  ROOMMATE_CREATE_SUCCESS,
  ROOMMATE_CREATE_FAIL,
  ROOMMATE_CREATE_RESET,
  ROOMMATE_UPDATE_REQUEST,
  ROOMMATE_UPDATE_SUCCESS,
  ROOMMATE_UPDATE_FAIL,
  ROOMMATE_UPDATE_RESET,
  ROOMMATE_CREATE_COMMENT_REQUEST,
  ROOMMATE_CREATE_COMMENT_SUCCESS,
  ROOMMATE_CREATE_COMMENT_FAIL,
  ROOMMATE_CREATE_COMMENT_RESET,
  ROOMMATE_TOP_REQUEST,
  ROOMMATE_TOP_SUCCESS,
  ROOMMATE_TOP_FAIL,
} from "../constants/roommate";

export const roommateListReducer = (state = { roommates: [] }, action) => {
  switch (action.type) {
    case ROOMMATE_LIST_REQUEST:
      return { loading: true, roommates: [] };
    case ROOMMATE_LIST_SUCCESS:
      return {
        loading: false,
        roommates: action.payload.roommates,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ROOMMATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roommateDetailReducer = (
  state = { roommate: { comments: [] } },
  action
) => {
  switch (action.type) {
    case ROOMMATE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ROOMMATE_DETAILS_SUCCESS:
      return { loading: false, roommate: action.payload };
    case ROOMMATE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roommateDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOMMATE_DELETE_REQUEST:
      return { loading: true };
    case ROOMMATE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ROOMMATE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const roommateCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOMMATE_CREATE_REQUEST:
      return { loading: true };
    case ROOMMATE_CREATE_SUCCESS:
      return { loading: false, success: true, roommate: action.payload };
    case ROOMMATE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ROOMMATE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const roommateUpdateReducer = (state = { roommate: {} }, action) => {
  switch (action.type) {
    case ROOMMATE_UPDATE_REQUEST:
      return { loading: true };
    case ROOMMATE_UPDATE_SUCCESS:
      return { loading: false, success: true, roommate: action.payload };
    case ROOMMATE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ROOMMATE_UPDATE_RESET:
      return { roommate: {} };
    default:
      return state;
  }
};

export const roommateCommentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROOMMATE_CREATE_COMMENT_REQUEST:
      return { loading: true };
    case ROOMMATE_CREATE_COMMENT_SUCCESS:
      return { loading: false, success: true };
    case ROOMMATE_CREATE_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    case ROOMMATE_CREATE_COMMENT_RESET:
      return {};
    default:
      return state;
  }
};

export const roommateTopRatedReducer = (state = { roommates: [] }, action) => {
  switch (action.type) {
    case ROOMMATE_TOP_REQUEST:
      return { loading: true, roommates: [] };
    case ROOMMATE_TOP_SUCCESS:
      return { loading: false, roommates: action.payload };
    case ROOMMATE_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
