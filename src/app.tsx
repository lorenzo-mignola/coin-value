import loader from '@assemblyscript/loader';
import { useEffect, useState } from 'preact/hooks';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getCoin } from './api';
import Crypto from './components/Crypto';
import Money from './components/Money';
import { CoinsContext, WASMContext, WASMContextInterface } from './context';
import { Coin } from './interfaces/Coin.interface';
import { WASM } from './wasm';

const loadWASM = async (setter: (f: any) => void) => {
  const instances = await loader.instantiate<WASM>(
    fetch('../wasm/build/optimized.wasm')
  );
  const { getMoney, __getArray } = instances.exports;
  setter({
    getMoneyWASM: (crypto: number, value: number) =>
      __getArray(getMoney(crypto, value)).map(value => Number(value.toFixed(2)))
  });
};

const App = () => {
  const queryClient = new QueryClient();

  const [wasmFunctions, setWasmFunctions] = useState<WASMContextInterface>({
    getMoneyWASM: () => []
  });

  useEffect(() => {
    loadWASM(setWasmFunctions);
  }, []);

  const [coins, setCoins] = useState(0);

  return (
    <WASMContext.Provider value={wasmFunctions}>
      <CoinsContext.Provider value={{ coins, setCoins }}>
        <QueryClientProvider client={queryClient}>
          <AppContainer />
        </QueryClientProvider>
      </CoinsContext.Provider>
    </WASMContext.Provider>
  );
};

const AppContainer = () => {
  const { data, isSuccess } = useQuery<Coin, unknown>('coin', getCoin);
  return (
    <div className='grid w-screen h-screen grid-rows-2 md:grid-cols-2 md:grid-rows-none'>
      <Crypto data={data} isSuccess={isSuccess} />
      <Money data={data} />
    </div>
  );
};

export default App;
