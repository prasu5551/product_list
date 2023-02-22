import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoffeesService } from './coffees.service';
import { Products } from '../product/store/models/products';
import {of} from 'rxjs';

describe('CoffeesService', () => {
  let service: CoffeesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CoffeesService]
    });
    service = TestBed.inject(CoffeesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products data', () => {
    const mockProducts: Products[] = [{
        "id": 8490,
        "uid": "8053c067-5354-4812-a618-6f1413a303c5",
        "blend_name": "Joe Utopia",
        "origin": "Nyeri, Kenya",
        "variety": "Tafari-Kela",
        "notes": "clean, big, sundried tomato, green apple, nutella",
        "intensifier": "structured"
    }, {
        "id": 1340,
        "uid": "84c11917-b8c9-4d73-9336-2adc42f01ff9",
        "blend_name": "Reg's Cup",
        "origin": "San Luis Potosi, Mexico",
        "variety": "Pacas",
        "notes": "complex, watery, medicinal, ginger, lemon",
        "intensifier": "complex"
    }];
    spyOn(service, 'getCoffees').and.returnValue(of(mockProducts));
    service.getCoffees().subscribe((products: Products[]) => {
        expect(products).toEqual(mockProducts);
    });
    
  });
});
