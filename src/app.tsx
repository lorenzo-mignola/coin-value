import loader from '@assemblyscript/loader';
import { useEffect } from 'preact/hooks';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getCoin } from './api';
import Crypto from './components/Crypto';
import Money from './components/Money';
import { Coin } from './interfaces/Coin.interface';
import { WASM } from './wasm';

const loadWASM = async () => {
  const instances = await loader.instantiate<WASM>(
    fetch('../wasm/build/optimized.wasm')
  );
  const { getMoney, __getArray } = instances.exports;
  const arrayPointer = getMoney(1, 1250.2);
  const values = __getArray(arrayPointer);

  console.log('clg', values);
};

const App = () => {
  const queryClient = new QueryClient();
  useEffect(() => {
    loadWASM();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />
    </QueryClientProvider>
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
