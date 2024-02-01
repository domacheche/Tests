import { convertPLNToUSD } from './../convertPLNToUSD';

describe('convertPLNToUSD function', () => {
    it('should correctly convert PLN to USD', () => {
      expect(convertPLNToUSD(35)).toBe('$10.00');
    });
  
    it('should return NaN when input is text', () => {
      expect(convertPLNToUSD('abc')).toBeNaN();
      expect(convertPLNToUSD('6')).toBeNaN();
      expect(convertPLNToUSD('-543')).toBeNaN();
    });
  
    it('should return NaN when input is empty', () => {
      expect(convertPLNToUSD()).toBeNaN();
    });
  
    it('should return "Error" when input is different than number and string', () => {
      expect(convertPLNToUSD({})).toBe('Error');
      expect(convertPLNToUSD([])).toBe('Error');
      expect(convertPLNToUSD(null)).toBe('Error');
      expect(convertPLNToUSD(function() {})).toBe('Error');
    });
  
    it('should return zero when input is lower than zero', () => {
      expect(convertPLNToUSD(-1)).toBe('$0.00');
      expect(convertPLNToUSD(-2)).toBe('$0.00');
      expect(convertPLNToUSD(-56)).toBe('$0.00');
    });
  });
  
  