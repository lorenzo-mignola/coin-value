import { Props } from '../interfaces/Props.interface';

const Money = ({ data }: Props) => {
  return (
    <div className='bg-purple-700 w-full h-full flex flex-col justify-center p-5'>
      <div>
        <h1 className='text-white text-5xl font-bold'>💵 Current value</h1>
        <h2 className='text-white text-3xl mt-9 ml-2'>
          {Number(data?.market_data.current_price?.usd || 0).toLocaleString()}$
        </h2>
      </div>
    </div>
  );
};

export default Money;
