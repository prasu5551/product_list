import { createAction, props } from "@ngrx/store";
import { Products } from "./models/products";

export const getProductAPI = createAction(
    '[Products API] Get Products'
);

export const productsGetAPISuccess = createAction(
    '[Products API] Get Products API Success',
    props<{ allProducts: Products[]}>()
)
