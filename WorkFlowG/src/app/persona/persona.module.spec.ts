import { PersonaModule } from './persona.module';
import { Persona } from './shared/persona';





describe('PersonaModule', () => {
  let personaModule: PersonaModule;

  beforeEach(() => {
    personaModule = new PersonaModule();
  });

  it('should create an instance', () => {
    expect(personaModule).toBeTruthy();
  });
});
