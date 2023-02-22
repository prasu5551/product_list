import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CoffeesService } from "src/app/services/coffees.service";
import { getProductAPI, productsGetAPIFalilure, productsGetAPISuccess } from "./product.actions";


@Injectable()

export class ProductsEffect {

    constructor(private action$: Actions,
        private coffeService: CoffeesService) {}

    loadProducts$ = createEffect(() =>
        this.action$.pipe(
        ofType(getProductAPI),
        mergeMap(() => {
            return this.coffeService.getCoffees().pipe(
            map((data) => productsGetAPISuccess({ products: data })),
            catchError((error) =>
                of(productsGetAPIFalilure({ error: error.message }))
            )
            );
        })
        )
  );
}