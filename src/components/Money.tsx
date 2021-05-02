import { useContext, useEffect, useState } from 'preact/hooks';
import { CoinsContext, WASMContext } from '../context';
import { Props } from '../interfaces/Props.interface';

const Money = ({ data }: Props) => {
  const { coins } = useContext(CoinsContext);
  const { getMoneyWASM } = useContext(WASMContext);

  const [money, setMoney] = useState<number[]>([]);

  useEffect(() => {
    if (coins) {
      setMoney(
        getMoneyWASM(coins, Number(data?.market_data.current_price?.chf || 0))
      );
    } else {
      setMoney([]);
    }
  }, [coins]);

  console.log('clg -> Crypto -> getMoneyWASM');

  return (
    <div className='bg-purple-700 w-full h-full flex flex-col justify-center p-8'>
      <div>
        <h1 className='text-white text-5xl font-bold'>💵 Current value</h1>
        <h2 className='text-white text-3xl mt-9 ml-2'>
          {money.reduce((moneys, curr) => moneys + curr, 0).toLocaleString()}₣
        </h2>
      </div>
    </div>
  );
};

export default Money;
