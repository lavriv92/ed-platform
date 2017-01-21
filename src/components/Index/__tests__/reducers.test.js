import { assert } from 'assert';
import index from '../reducers';


describe('<Index /> reducers: ', () => {
  it('should return default popular coaches state', () => {
    let { coaches } = index({}, {});
    assert.equal(coaches.loading, false);
    assert.equal(coaches.items, true);
  });

  it('should return loading popular coaches state', () => {
    let { coaches } = index({}, {
      
    });

  });
});
