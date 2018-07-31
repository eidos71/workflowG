import { EstadoTareaPipe } from './estado-tarea.pipe';

describe('EstadoTareaPipe', () => {

  let pipe: EstadoTareaPipe;
  beforeEach(() =>{
    // pipe = new EstadoTareaPipe();
     pipe = new EstadoTareaPipe();
  });
  
  it('create an instance', () => {    
    expect(pipe).toBeTruthy();
  });

  
  it('My Pipe debería retornar DES', () => {
    expect(pipe.transform("Desarrollo")).toBe("DES");
  });
  it('My Pipe debería retornar PRO', () =>{
    expect(pipe.transform("Producción")).toBe("PRO");
    
  });
  it('My Pipe debería retornar PRO si es otro valor', () =>{
    expect(pipe.transform("fdasfdsafsda")).toBe("PRO");    
  });

  afterEach(() => {
    pipe = null;
  });
  

});


  


