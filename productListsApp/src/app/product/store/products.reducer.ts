import { createReducer, on } from '@ngrx/store';
import { productsGetAPISuccess } from './product.actions';
import { Products } from './models/products';


export const initialState: ReadonlyArray<Products> = [];
export const productReducer = createReducer(
    initialState,
    on(productsGetAPISuccess, (state, {allProducts}) => {
        return allProducts;
    })
);
