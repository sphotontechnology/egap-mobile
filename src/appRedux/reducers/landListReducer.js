import {AUTH, DATA} from 'appRedux/actionsType';

const initialState = {
    landList: [], id: null,
};

const landListReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA.ID_USER: {
            return {
                ...state, id: action.id,
            };
        }
        case DATA.LAND_LIST: {
            return {
                ...state, landList: action.payload,
            };
        }
        default:
            return state;
    }
};

export default landListReducer;
