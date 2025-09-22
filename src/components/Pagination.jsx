export default function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; 

  return (
    <div className="flex items-center justify-center overflow-x-auto mt-6 ml-1">
      <div className="flex items-center justify-center gap-2 bg-gray-100 px-3 w-266 shadow">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={`pg-${i}`}
            type="button"
            onClick={() => onPageChange(i + 1)}
            className={`w-17 h-17 flex items-center justify-center text-sm font-medium transition
              ${page === i + 1 
                ? "bg-blue-600 text-white" 
                : "text-gray-700 hover:bg-gray-300"
              }`}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
