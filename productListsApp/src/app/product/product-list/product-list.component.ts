import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectProducts } from 'src/app/product/store/products.selector';
import * as ProductActions from '../store/product.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  /** get the data from the store selector 'selectproducts  */
products$ = this.store.pipe(select(selectProducts));

page: number = 1;
isShowMore: boolean;
moreDetailsText = 'More details..';
lessDetailsText = 'Less details..';
itemsPerPage = 10;
expandedIndex = -1;
  constructor(private store: Store) { }  

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