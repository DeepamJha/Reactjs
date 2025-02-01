import React, { useState } from 'react';

function ArrayAddition() {
    const [value, setValue] = useState([
        { name: 'deep', age: 222 },
        { name: 'zeep', age: 111 },
        { name: 'peep', age: 44 }
    ]);

    return (
        <div className="p-10 bg-blue-200">
            {value.map((item) => (
                <div key={item.name}>
                    <h1>{item.name}</h1>
                    <h2>{item.age}</h2>
                </div>
            ))}

            <button
                onClick={() =>
                    setValue((prevValue) =>
                        prevValue.map((item) =>
                            item.name === 'deep' ? { name: 'deep', age: 69 } : item
                        )
                    )
                }
                className="p-10 bg-green-300 text-white rounded-full"
            >
                Update Deep
            </button>
        </div>
    );
}

export default ArrayAddition;
