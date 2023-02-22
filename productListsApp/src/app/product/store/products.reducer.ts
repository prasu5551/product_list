import { createReducer, on } from '@ngrx/store';
import { getProductAPI, productsGetAPIFalilure, productsGetAPISuccess } from './product.actions';
import { ProductStateInterface } from './models/products';


export  const initialState: ProductStateInterface = {
    isLoading: false,
    products: [],
    error: null
}
export const productReducer = createReducer(
    initialState,
    on(getProductAPI, (state) => ({...state, isLoading: true})),
    on(productsGetAPISuccess, (state, action) => ({...state, isLoading: false, products: action.products})),
    on(productsGetAPIFalilure, (state, action) => ({...state, isLoading: false, error: action.error}))
);
