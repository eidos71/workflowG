import { TareaModule } from './tarea.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';




describe('TareaModule', () => {
  let tareaModule: TareaModule;

  beforeEach(() => {
    tareaModule = new TareaModule();
  });

  it('should create an instance', () => {
    expect(tareaModule).toBeTruthy();
  });
});
