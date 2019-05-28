import axios from 'axios';
import {GET_GIFTS, READ_GIFT, GIFTS_LOADING} from './types';
export const getGifts = () => async(dispatch) => {
	dispatch(giftsLoading());
	const response = await axios.get("/api/gifts");
	return dispatch({
		type: GET_GIFTS,
		payload: response.data
	  });
		
}
export const readGift = (id) => async(dispatch) => {
	dispatch(giftsLoading());
	const response = await axios.get("/api/gifts/"+id);
	return dispatch({
		type: READ_GIFT,
		payload: res.data
	});
}
export const giftsLoading = () => {
	return {
		type: GIFTS_LOADING
	}
}