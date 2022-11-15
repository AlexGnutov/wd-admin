import { minutesToTimeString } from './time-utils';

describe('Test time-utils', () => {
  test.each([
    [66, '01:06'],
    [627, '10:27'],
    [0, '00:00'],
  ])(
    ('Test minutes to TimeString conversion '),
    (number, expected) => {
      const result = minutesToTimeString(number);
      expect(result).toBe(expected);
    },
  );
});
