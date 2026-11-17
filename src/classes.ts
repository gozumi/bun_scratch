export function classExamples() {
  const base = new Base();
  base.value = 3;

  console.log('base', base);
  console.log('base value', base.value);

  const temperature = new Temperature();

  temperature.fahrenheit = 95;

  console.log(`the temperature is ${temperature.celsius} celsius`);
  console.log(`the temperature is ${temperature.fahrenheit} fahrenheit`);
}

class Base {
  #value = 0;

  get value() {
    return this.#value;
  }

  set value(v: number) {
    this.#value = v;
    console.log(`base setter ran with ${v}`);
  }
}

class Temperature {
  #celsius = 0;

  get celsius() {
    return this.#celsius;
  }

  set celsius(value: number) {
    // runs on: t.celsius = 25
    if (value < -273.15) throw new Error('Below absolute zero');
    this.#celsius = value;
  }

  get fahrenheit() {
    // a calculated value, with no stored field
    return (this.#celsius * 9) / 5 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = ((value - 32) * 5) / 9; // reuses the celsius setter's validation
  }
}
