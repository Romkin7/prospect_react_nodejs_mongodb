import axios from "axios";
import {GET_PORTFOLIOITEMS, GET_PORTFOLIOITEM, PORTFOLIOITEMS_LOADING, ADD_PORTFOLIOITEM, EDIT_PORTFOLIOITEM, DELETE_PORTFOLIOITEM, GIFTS_LOADING} from "./types";
export const getPortfolioItems = () => async(dispatch) =>{
    dispatch(portfolioItemsLoading());
    const response = await axios.get("/api/portfolioitems");
    return dispatch({
        type: GET_PORTFOLIOITEMS,
		payload: response.data
    });
}
export const getPortfolioItem = (id) => async(dispatch) => {
    dispatch(portfolioItemsLoading());
    const response = await axios.get("/api/portfolioitems/"+id);
    return dispatch({
        type: GET_PORTFOLIOITEMS,
		payload: response.data
    });
}
export const portfolioItemsLoading = () => {
	return {
		type: PORTFOLIOITEMS_LOADING
	}
}