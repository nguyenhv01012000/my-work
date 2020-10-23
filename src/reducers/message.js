import * as types from '../constants/ActionType';
import * as message from '../constants/Message';

var initialState = message.MSG_WELCOME;

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return [...state];
    }
};

export default cart;