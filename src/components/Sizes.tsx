import { InformationCircleIcon } from '@heroicons/react/solid';
import { useState } from 'preact/hooks';

interface Props {
  moneys: Record<number, number>;
}

const Sizes = ({ moneys }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <span className='relative'>
      <button
        className={`ml-3 h-6 w-6  cursor-pointer ${
          open ? 'text-gray-50' : 'text-gray-300'
        } hover:text-gray-200`}
        id='info-button'
        onClick={() => setOpen(!open)}
      >
        <InformationCircleIcon />
      </button>
      {open && (
        <div className='absolute bg-white text-gray-900 opacity-80 p-3 w-max rounded-md top-0 left-11'>
          <h3 className='text-2xl mb-2'>👛 Money size</h3>
          <hr />
          {Object.keys(moneys)
            .reverse()
            .map(size => (
              <p className='text-xl'>
                {moneys[Number(size)]}x <span className='text-sm'>{size}</span>
              </p>
            ))}
        </div>
      )}
    </span>
  );
};

export default Sizes;
