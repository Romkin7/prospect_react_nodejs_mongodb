import {GET_GIFTS, READ_GIFT, GIFTS_LOADING} from '../actions/types';
const initialState = {
    gifts: [],
    loading: false
};
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_GIFTS:
			return {
                ...state,
                gifts: action.payload,
                loading: false
            };
        case READ_GIFT: 
            return {
                ...state,
                gift: action.payload.gift,
                laoding: false
            }
        case GIFTS_LOADING:
            return {
                ...state,
                laoding: true
            }
        default:
			 return state;
	}
}