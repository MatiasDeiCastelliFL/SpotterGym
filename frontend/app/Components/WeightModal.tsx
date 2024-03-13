"use client"
import Modal from 'react-modal';
import { useState } from 'react';
import WeightChart from './WeightChart';

export default function WeightModal({isOpen,onRequestClose,onWeightSubmit,weights,}:{isOpen:boolean, onRequestClose:()=>void,onWeightSubmit:(weight:any)=>void, weights:any}) {
  const [weight, setWeight] = useState<any>([]);

  const handleSubmit = () => {
    onWeightSubmit(weight);
    setWeight([]);
    onRequestClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='fixed bg-white rounded shadow-lg overflow-auto'
      style={{
        overlay: {
          // backgroundColor: '#ffffff',
        },
        content: {
          position: 'relative',
          width: '328px',
          height: '242.74px',
          top: '37rem',
          left: 'auto',
          right: 'auto',
          bottom: 'auto',
          margin: 'auto',
          padding: '2rem',
          border: 'none',
          borderRadius: '0.375rem',
          background: '#ffffff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          outline: 'none',
        },
      }}
    >
      <h2 className='text-xl'>Ingrese su peso</h2>
      <input
        type='number'
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className='border-2 border-gray-300 rounded-md p-2 my-4 text-black'
      />
      <button
        onClick={handleSubmit}
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
      >
        Guardar
      </button>

      <WeightChart initialWeight data={weight} />
    </Modal>
  );
}
