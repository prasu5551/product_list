import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListComponent } from './product-list/product-list.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './store/products.effect';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    NgxPaginationModule,
    StoreModule.forFeature('myProduct', productReducer),
    EffectsModule.forFeature([ProductsEffect]),
  ]
})
export class ProductModule { }
