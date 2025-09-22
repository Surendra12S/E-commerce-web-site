export default function ProductCard({ product, selectedColor }) {
  const { 
    name, 
    discountPrice, 
    price, 
    discountPercent, 
    imageUrl, 
    rating = 4, 
    isHot = false,
    colors = [] 
  } = product;

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="relative bg-white rounded shadow flex flex-col w-full sm:w-[250px] md:w-[280px] lg:w-[328px]">
      
    
      {isHot && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
          HOT
        </div>
      )}

      <img
        src={imageUrl}
        alt={name}
        className="w-full h-200 sm:h-56 md:h-64 lg:h-72 xl:h-72 object-cover mb-3"
      />

      <h3 className="text-blue-600 font-bold text-base text-center mb-2">{name}</h3>

      <div className="text-yellow-500 text-sm text-center mb-2">
        {renderStars(rating)}
      </div>

 
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="text-gray-500 line-through text-sm">${price}</span>
        <span className="text-lg font-bold text-black">${discountPrice}</span>
        <span className="text-red-500 text-sm">{discountPercent}% OFF</span>
      </div>

    
      {colors.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {colors.map((c) => {
            const isSelected = selectedColor === c;
            return (
              <div
                key={c}
                className={`w-5 h-5 rounded-full border cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-blue-500 border-transparent"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: c.toLowerCase() }}
                title={c}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
