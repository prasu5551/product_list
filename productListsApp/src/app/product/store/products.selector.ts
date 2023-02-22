import { createFeatureSelector } from "@ngrx/store";
import { Products } from "./models/products";

export const selectProducts = createFeatureSelector<Products[]>('allProducts');
