import React from 'react';

function Card() {
  const data = [
    { Title: "Bankai", Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrQ56W1ZvcgNr2qqo-6VBWMn2qBCuc8OJw&s", description: "lorem ipsum dolor sit amet, consectetur adip" },
    { Title: "Domain Expansion", Image: "https://staticg.sportskeeda.com/editor/2024/01/0c995-17048567087154-1920.jpg", description: "domain Expansion" },
    { Title: "Kamehameha", Image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/09/goku-kamehameha.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5", description: "kamehame" }
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-200 flex justify-center items-center">
      {/* Flex container for cards */}
      <div className="flex gap-5 flex-wrap justify-center">
        {data.map((value, index) => (
          <div key={index} className="bg-zinc-100 rounded-md overflow-hidden shadow-lg w-80">
            {/* Image Section */}
            <div className="w-full h-32 bg-zinc-300">
              <img 
                className="w-full h-full object-cover object-top" 
                src={value.Image} 
                alt={value.Title} 
              />
            </div>

            {/* Text Section */}
            <div className="w-full px-4 py-5">
              <h2 className="font-semibold text-center text-lg">{value.Title}</h2>
              <p className="text-xs mt-3 text-center text-gray-600">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
