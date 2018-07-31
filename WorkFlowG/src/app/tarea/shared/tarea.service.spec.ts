import { TestBed, inject } from '@angular/core/testing';

import { TareaService } from './tarea.service';
import { HttpClient } from '@angular/common/http';

describe('TareaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareaService],
      imports: [
        HttpClient,
      ],
    });
  });

  it('should be created', inject([TareaService], (service: TareaService) => {
    expect(service).toBeTruthy();
  }));
});
