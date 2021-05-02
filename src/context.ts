import { createContext } from 'preact';

interface CoinContextInterface {
  coins: number | null;
  setCoins: (coins: number) => void;
}

export const CoinsContext = createContext<CoinContextInterface>({
  coins: null,
  setCoins: () => undefined
});

export interface WASMContextInterface {
  getMoneyWASM: (crypto: number, value: number) => number[];
}

export const WASMContext = createContext<WASMContextInterface>({
  getMoneyWASM: () => []
});
