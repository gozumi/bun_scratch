export function copying() {
  // Create an object with a value and a circular reference to itself.
  const original: { name: string; itself?: typeof original } = { name: 'MDN' };
  original.itself = original;

  // Clone it
  const clone = structuredClone(original);

  console.log(
    '1. Clone is a new object:',
    'clone !== original',
    clone !== original,
  );
  console.log(
    '2. Clone has the same values:',
    'clone.name === "MDN"',
    clone.name === 'MDN',
  );
  console.log(
    '3. Clone keeps the circular ref:',
    'clone.itself === clone',
    clone.itself === clone,
  );
  console.log(
    '4. Original ref is unchanged:',
    'original.itself === original',
    original.itself === original,
  );
  console.log(
    '5. Clone is not the original:',
    'clone === original',
    clone === original,
  );

  // Wrong: mutates state, so React may not re-render
  const user = { name: 'Ada', address: { city: 'London' } };
  const previous = user;
  user.address.city = 'Leeds';
  console.log(
    '6. Mutate: still the same object:',
    'user === previous',
    user === previous,
  );
  console.log(
    '7. Mutate: old state is lost:',
    'previous.address.city',
    previous.address.city,
  );

  // Right: new objects along the path you change
  const user2 = { name: 'Ada', address: { city: 'London' } };
  const updated = { ...user2, address: { ...user2.address, city: 'Leeds' } };
  console.log(
    '8. Spread: a new object:',
    'updated === user2',
    updated === user2,
  );
  console.log(
    '9. Spread: old state is kept:',
    'user2.address.city',
    user2.address.city,
  );
  console.log(
    '10. Spread: new state is updated:',
    'updated.address.city',
    updated.address.city,
  );

  // Arrays: add, remove, update without mutating (JSON.stringify keeps each result on one line)
  const items = [
    { id: 1, done: false },
    { id: 2, done: false },
  ];
  console.log(
    '11. Array add:',
    '[...items, { id: 3, done: false }]',
    JSON.stringify([...items, { id: 3, done: false }]),
  );
  console.log(
    '12. Array remove:',
    'items.filter((i) => i.id !== 1)',
    JSON.stringify(items.filter((i) => i.id !== 1)),
  );
  console.log(
    '13. Array update:',
    'items.map((i) => (i.id === 2 ? { ...i, done: !i.done } : i))',
    JSON.stringify(
      items.map((i) => (i.id === 2 ? { ...i, done: !i.done } : i)),
    ),
  );
  console.log(
    '14. Array original is unchanged:',
    'items',
    JSON.stringify(items),
  );
}
