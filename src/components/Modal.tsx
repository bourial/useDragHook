import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import useOnClickOutside from '../hooks/useClickOutside';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className='min-h-screen overflow-hidden bg-purple-600 p-5 relative'>
      <button
        className='bg-black text-white font-semibold px-6 py-2 block mx-auto rounded-lg'
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <div className='h-screen w-screen absolute left-0 bottom-0 bg-gray-600 bg-opacity-50'>
          <motion.section
            ref={ref}
            className={`w-full h-3/5 bg-white rounded-t-xl absolute bottom-0 left-0`}
            transition={{ duration: 0.2 }}
            initial={{ y: '100%' }}
            animate={isOpen ? { y: '0%' } : { y: '100%' }}
            drag='y'
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.5}
            onDragEnd={(e, info) => {
              if (info.offset.y > 80) {
                setIsOpen(false);
              }
            }}
          >
            <div className='h-1.5 w-20 bg-gray-200 rounded-lg mx-auto mt-2' />
          </motion.section>
        </div>
      )}
    </div>
  );
};

export default Modal;
