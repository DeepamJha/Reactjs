import React, { useState } from "react"; 

function App() {
  const [value, setValue] = useState({ name: 'deep', job: false }); // ✅ Fix: Correct useState syntax

  return (
    <div className=" h-screen w-full bg-slate-600 flex items-center">
      <div className= "h-fit w-fit p-10 m-auto bg-red-200 font-serif text-xl font-semibold">
      <h1 className="">name: {value.name}</h1>
      <h2>banned: {value.job.toString()}</h2>
      <button className={`bg-blue-600 ${value.job?"bg-green-500":"bg-red-600"} rounded-lg py-3 px-6 `}
        onClick={() => setValue(prev => ({ ...prev, job: !prev.job }))} // ✅ Fix: Correct state update syntax
      > 
        Change Job
      </button>
      </div>
    </div>
  );
}

export default App;