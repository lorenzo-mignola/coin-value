import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getCoin } from './api';
import Crypto from './components/Crypto';
import Money from './components/Money';
import { Coin } from './interfaces/Coin.interface';

const App = () => {
  const queryClient = new QueryClient();
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
