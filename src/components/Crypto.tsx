import { useContext } from 'preact/hooks';
import { CoinsContext } from '../context';
import { Props } from '../interfaces/Props.interface';

const Crypto = ({ data, isSuccess }: Props) => {
  const { setCoins } = useContext(CoinsContext);

  return (
    <div className='bg-purple-900 w-full h-full flex flex-col justify-center p-8'>
      {isSuccess && data && (
        <div>
          <h1 className='text-white text-5xl font-bold'>
            💰 {data.name}
            <span className='ml-1 text-sm text-gray-400'>{data.symbol}</span>
          </h1>
          <div className='mt-5 flex flex-col'>
            <label for='coins' class='leading-7 text-sm text-gray-200'>
              Coins
            </label>
            <input
              type='number'
              id='coins'
              className='bg-purple-100 rounded-md p-2 focus:border-purple-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none'
              placeholder='Insert coins'
              onChange={e =>
                setCoins(Number((event?.target as HTMLInputElement).value) || 0)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Crypto;
