import React, { useState } from 'react';
import starColor from "../../public/star-color.png";
import starWithoutColor from "../../public/Frame 656.png";
import Image from 'next/image';

interface StarRatingProps {
    onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange}) => {
    const [rating, setRating] = useState(0);

    const handleMouseOver = (index: number) => {
        setRating(index + 1);
    };

    const handleMouseOut = () => {
        setRating(0);
    };

    const handleClick = (index: number) => {
        onRatingChange(index + 1);
    };

    return (
        <div className='flex justify-center items-center'>
        {[...Array(5)].map((_, index) => (
            <span
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
            style={{ cursor: 'pointer', padding: '0 5px' }}
            >
            {index < rating ? 
            <Image  className="w-[24px] h-[24px] mx-2" src={starColor} alt="star-color" /> 
            : <Image className="w-[24px] h-[24px] mx-2" src={starWithoutColor} alt="star-color" />}
            </span>
        ))}
        </div>
    );
};

export default StarRating;