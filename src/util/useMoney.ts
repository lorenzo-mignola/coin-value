function getTotal(sizes: number[]) {
  return sizes.reduce((size, curr) => size + curr, 0).toLocaleString();
}

function getMoney(sizes: number[]) {
  return sizes.reduce(
    (moneys, curr) => ({
      ...moneys,
      [curr]: moneys[curr] ? moneys[curr] + 1 : 1
    }),
    {} as Record<number, number>
  );
}

export default function useMoney(sizes: number[]) {
  const total = getTotal(sizes);
  const moneys = getMoney(sizes);
  return {
    total,
    moneys
  };
}
