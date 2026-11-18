import { describe, expect, test } from 'bun:test';
import { copying } from './copying';

describe('structuredClone', () => {
  test('creates a new object with the same values', () => {
    const original = { name: 'MDN' };
    const clone = structuredClone(original);

    expect(clone).not.toBe(original);
    expect(clone).toEqual(original);
    copying();
  });

  test('preserves circular references', () => {
    const original: { name: string; itself?: typeof original } = {
      name: 'MDN',
    };
    original.itself = original;

    const clone = structuredClone(original);

    expect(clone.itself).toBe(clone);
    expect(clone.itself).not.toBe(original);
  });
});
