import {AUTH} from 'appRedux/actionsType';

const initialState = {
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGN_IN.SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case AUTH.GET_USER_INFO.SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case AUTH.LOG_OUT.SUCCESS: {
      return {
        userInfo: {},
      };
    }
    default:
      return state;
  }
};

export default authReducer;
