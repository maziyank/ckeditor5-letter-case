import {lowerCase, upperCase} from '../src/utils';

describe('utils', () => {
  describe('lowerCase', () => {
    it('string to lowerCase', () => {
      const result = lowerCase('I_AM_ACTUALLY_SMALL');
      expect(result).toBe('i_am_actually_small');
    });

    it('number to lowerCase', () => {
      let result;
      try {
        result = lowerCase(42);
      } catch (e) {
        expect(e.message).toEqual('text.toLowerCase is not a function');
      }
      expect(result).toBe(undefined);
    });
  });

  describe('upperCase', () => {
    it('string to upperCase', () => {
      const result = upperCase('i_am_actually_big');
      expect(result).toBe('I_AM_ACTUALLY_BIG');
    });
  });
});
