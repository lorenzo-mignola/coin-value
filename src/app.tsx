import loader from '@assemblyscript/loader';
import { useEffect } from 'preact/hooks';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getCoin } from './api';
import Crypto from './components/Crypto';
import Money from './components/Money';
import { Coin } from './interfaces/Coin.interface';

const loadWASM = async () => {
  const instances = await loader.instantiate(
    fetch('../wasm/build/optimized.wasm')
  );
  console.log(instances.exports);
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
