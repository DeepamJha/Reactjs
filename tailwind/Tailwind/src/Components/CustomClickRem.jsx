import React from 'react'

function CustomClickRem() {
    return (
        <div className='bg-cyan-100 p-10 flex flex-col items-center justify-center'>
          {value.map(item => <h1 key={item}>{item}</h1>)}
    
          <button 
            onClick={() => setValue(prevValue => prevValue.slice(0, -1))} 
            className='px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg'
          >
            Remove Last Item
          </button>
        </div>
      );
}

export default CustomClickRem
