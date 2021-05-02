const moneySize: f32[] = [
  1000,
  200,
  100,
  50,
  20,
  10,
  5,
  2,
  1,
  0.5,
  0.2,
  0.1,
  0.05
];

export const F32ARRAY = idof<f32[]>();

export function getMoney(crypto: f32, value: f32): Array<f32> {
  let valueInCurrency = getValue(crypto, value);
  const money = new Array<f32>(0);

  for (let index = 0; index < moneySize.length; index++) {
    const size = moneySize[index];
    const timeSize = NativeMathf.trunc(valueInCurrency / size + 0.005);
    if (timeSize >= 0) {
      valueInCurrency -= timeSize * size;
      for (let index: f32 = 0; index < timeSize; index++) {
        money.push(size);
      }
    }
  }
  return money;
}

function getValue(crypto: f32, value: f32): f32 {
  return crypto * value;
}
