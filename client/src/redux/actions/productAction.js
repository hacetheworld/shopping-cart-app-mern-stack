import axios from 'axios';
import { ProductActionsType } from './action.types';

export const getItems = () => dispatch => {
    dispatch(setItemLoading());
    axios.get('http://localhost:5000/api/products/')
        .then(products => dispatch({
            type: ProductActionsType.GET_PRODUCTS,
            payload: products.data.products
        }));
}

export const getItem = (id) => ({
    type: ProductActionsType.GET_PRODUCT,
    payload: id
});

export const addItem = (item) => dispatch => {
    dispatch(setItemLoading());
    axios.post('/api/items/', item)
        .then(res => dispatch({
            type: ProductActionsType.Add_PRODUCT,
            payload: res.data.resCreatedItem
        }));
}
export const setItemLoading = () => {
    return {
        type: ProductActionsType.PRODUCTS_LOADING,
    }
}
export const deleteItem = (id) => dispatch => {
    dispatch(setItemLoading());
    axios.delete(`/api/items/${id}`)
        .then(res => dispatch({
            type: ProductActionsType.DELETE_PRODUCT,
            payload: id
        }));
}