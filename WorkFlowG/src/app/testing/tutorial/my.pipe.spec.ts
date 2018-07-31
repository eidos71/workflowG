import { MyPipe } from './my.pipe';
import { DefaultPipe } from './default.pipe';

describe('MyPipe', () => {


  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe();
  });
  
  it('Providing no value return fallback', () => {
    expect(pipe.transform('', 'http://place-hold.it/300')).toBe('http://place-hold.it/300');
  });


  it('create an instance', () => {
    const pipe = new MyPipe();
    expect(pipe).toBeTruthy();
  });
});
