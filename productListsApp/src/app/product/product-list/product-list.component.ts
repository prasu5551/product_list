import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as ProductActions from '../store/product.actions';
import { errorSelector, isLoadingSelector, productsSelector } from '../store/products.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  /** 
   *  @isLoadingSelector
   *  @productsSelector
   *  @errorSelector
   * get the data from the store selectors */

isLoading$ = this.store.pipe(select(isLoadingSelector));
products$ = this.store.pipe(select(productsSelector));
error$ = this.store.pipe(select(errorSelector));

page: number = 1;
isShowMore: boolean;
moreDetailsText = 'More details..';
lessDetailsText = 'Less details..';
listTitle = 'Products List';
itemsPerPage = 10;
expandedIndex = -1;
  constructor(private store: Store<AppStateInterface>) { }  

  ngOnInit(): void { 
    /** Update the store with retrieved data */
    this.store.dispatch(ProductActions.getProductAPI()); 
    
  }
  /** 
   * @param index
   * Toggling to display more/less details  */
  toggleDetails(index:number) {
    this.expandedIndex === index ? this.expandedIndex = -1 : this.expandedIndex = index;
  }
}