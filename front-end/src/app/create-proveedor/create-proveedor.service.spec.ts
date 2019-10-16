import { TestBed } from '@angular/core/testing';

import { CreateProveedorService } from './create-proveedor.service';

describe('CreateProveedorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateProveedorService = TestBed.get(CreateProveedorService);
    expect(service).toBeTruthy();
  });
});
