/* -------------------------------------------------------------------------- */
/*                                    WASM                                    */
/* -------------------------------------------------------------------------- */
type GetMoney = (crypto: number, currentValue: number) => number[];
export type WASM = {
  getMoney: GetMoney;
  __getArray: (pointer: any) => any[];
};
