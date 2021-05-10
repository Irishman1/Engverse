import { USER, USER_LOGOUT } from "../actions/userActions";

const initialState = JSON.parse(localStorage.getItem('engverse-user')) || {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER: {
            return { ...state, ...action.payload };
        }
        case USER_LOGOUT: {
            return {};
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
