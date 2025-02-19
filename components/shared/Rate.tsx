const Rating = ({ rating }: { rating: number }) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);
  
    return (
      <div className="flex text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStar && <span className="text-gray-400">★</span>}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };
 
 export default Rating; 