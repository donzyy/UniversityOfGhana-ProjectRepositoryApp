import React, {useState} from 'react'
import { VscStarEmpty } from 'react-icons/vsc';

const StarRating = () => {
  const stars = Array(5).fill(0);
  const [selectedRating, setselectedRating] = useState(0);
    
    const handRatingSelect =(rating) => {
      setselectedRating(rating);
    }
  return (
    <div className="flex items-center mb-5">
                  {stars.map((_, index) => {
                    const starRating = index + 1;
                    return (
                      <VscStarEmpty
                        key={index}
                        size={24}
                        onClick={() => handRatingSelect(starRating)}
                        className={`cursor-pointer ${
                          starRating <= selectedRating ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                      />
                    );
                  })}
              </div>
  )
}

export default StarRating
