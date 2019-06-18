import { async, fakeAsync } from '@angular/core/testing';

describe('Async unit tests', () => {
  xit('should agree that 1 is equal to 2', (done) => {
    setTimeout(() => {
      expect(1).toEqual(2);
      done();
    }, 3000);
  });

  xit('should not affect arithmetic rules (with promises)', () => {
    const promise1 = new Promise(resolve => {
      setTimeout(() => {
        expect(1).not.toEqual(2);
        resolve();
      });
    });

    const promise2 = new Promise(resolve => {
      setTimeout(() => {
        expect(1).not.toEqual(3);
        resolve();
      });
    });

    return Promise.all([promise1, promise2]);
  });

  xit('should not affect arithmetic rules (with async/await)', async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        expect(1).not.toEqual(2);
        resolve();
      });
    });

    await new Promise(resolve => {
      setTimeout(() => {
        expect(1).not.toEqual(3);
        resolve();
      });
    });
  });

  it('should not affect arithmetic rules (with async - an Angular test function)', async(() => {
    setTimeout(() => {
      expect(1).not.toEqual(2);
    }, 3000);
  }));

  xit('should fake async', fakeAsync(() => {
    throw new Error('should fakeAsync not implemented yet !');
    // @TODO review the tutorial about fakeAsync.
  }));
});
