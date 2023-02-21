import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from "rxjs";
import { CoffeesService } from "src/app/services/coffees.service";
import { getProductAPI, productsGetAPISuccess } from "./product.actions";


@Injectable()

export class ProductsEffect {

    constructor(private action$: Actions,
        private coffeService: CoffeesService,
        private store: Store) {}

    // loadProducts$ = createEffect(() =>
    //     this.action$.pipe(ofType(getProductAPI),
    //     withLatestFrom(this.store.pipe(select(selectProducts))),
    //     mergeMap(([, productfromStore]) => {
    //         if(productfromStore.length > 0) {
    //             return EMPTY;
    //         }
    //         return this.coffeService.getCoffees()
    //         .pipe(map((data) => productsGetAPISuccess({ allProducts: data })));
    //     })
    //     )
    // );

    loadProducts$ = createEffect(() => 
        this.action$.pipe(
            ofType(getProductAPI),
            mergeMap(() => {
                return this.coffeService
                .getCoffees()
                .pipe(map((data) => productsGetAPISuccess({ allProducts: data })));
            })
        )
    );
}