import { ProductActionsType } from '../actions/action.types';
const intialState = {
    products: [],
    product: [],
    loading: false
};

const productReducer = (state = intialState, action) => {

    switch (action.type) {
        case ProductActionsType.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case ProductActionsType.GET_PRODUCT:
            return {
                ...state,
                product: state.products.filter(item => item._id === action.payload)[0]
            }
        case ProductActionsType.Add_PRODUCT:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false
            }
        case ProductActionsType.PRODUCTS_LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case ProductActionsType.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}

export default productReducer