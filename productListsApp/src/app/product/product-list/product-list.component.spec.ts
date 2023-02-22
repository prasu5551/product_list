import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { getProductAPI } from '../store/product.actions';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        NgxPaginationModule
      ],
      declarations: [ ProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch getproductAPI action', () => {
    getProductAPI();
    expect(store.dispatch).toHaveBeenCalledWith(getProductAPI());
  });
});
